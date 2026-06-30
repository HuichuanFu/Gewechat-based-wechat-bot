/**
 * ChatBot 管理面板 - 前端逻辑
 */

// ==========================================
// State
// ==========================================
let currentPage = 'dashboard';
let currentUserId = null;
let allUsers = [];
let refreshTimer = null;

// ==========================================
// Navigation
// ==========================================
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        const page = item.dataset.page;
        switchPage(page);
    });
});

function switchPage(page) {
    // Update nav
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelector(`[data-page="${page}"]`).classList.add('active');

    // Update page visibility
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page-${page}`).classList.add('active');

    currentPage = page;

    // Load page-specific data
    if (page === 'dashboard') refreshDashboard();
    else if (page === 'conversations') loadUsers();
    else if (page === 'persona') loadPersona();
    else if (page === 'config') loadConfig();
}

// ==========================================
// API Helpers
// ==========================================
async function api(path, options = {}) {
    try {
        const res = await fetch(`/api${path}`, {
            headers: { 'Content-Type': 'application/json', ...options.headers },
            ...options,
        });
        if (!res.ok) {
            const err = await res.json().catch(() => ({ detail: res.statusText }));
            throw new Error(err.detail || `HTTP ${res.status}`);
        }
        return await res.json();
    } catch (e) {
        if (e.message !== 'Failed to fetch') {
            showToast(e.message, 'error');
        }
        throw e;
    }
}

// ==========================================
// Toast Notifications
// ==========================================
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ==========================================
// Dashboard
// ==========================================
async function refreshDashboard() {
    try {
        const data = await api('/status');

        // Status
        const statusEl = document.getElementById('stat-bot-status');
        const dotEl = document.querySelector('.status-dot');
        const statusTextEl = document.querySelector('.status-text');

        if (data.running) {
            statusEl.textContent = '运行中';
            dotEl.classList.add('online');
            statusTextEl.textContent = '已连接';
        } else {
            statusEl.textContent = '已停止';
            dotEl.classList.remove('online');
            statusTextEl.textContent = '已断开';
        }

        // Stats
        document.getElementById('stat-total-messages').textContent = 
            (data.memory_stats?.total_messages ?? 0).toLocaleString();
        document.getElementById('stat-total-users').textContent = 
            (data.memory_stats?.total_users ?? 0).toLocaleString();
        
        const totalTokens = (data.ai_stats?.total_prompt_tokens ?? 0) + 
                           (data.ai_stats?.total_completion_tokens ?? 0);
        document.getElementById('stat-total-tokens').textContent = totalTokens.toLocaleString();

        // Bot info
        document.getElementById('info-persona-name').textContent = data.persona_name || '--';
        document.getElementById('info-model').textContent = data.model || '--';
        document.getElementById('info-api-base').textContent = data.api_base || '--';
        document.getElementById('info-uptime').textContent = data.uptime || '--';
    } catch (e) {
        // silently fail on dashboard refresh
    }
}

// ==========================================
// Conversations
// ==========================================
async function loadUsers() {
    try {
        const data = await api('/conversations');
        allUsers = data.users || [];
        renderUserList(allUsers);
    } catch (e) {
        // handled by api()
    }
}

function renderUserList(users) {
    const list = document.getElementById('user-list');
    if (users.length === 0) {
        list.innerHTML = '<li class="user-list-empty">暂无聊天记录</li>';
        return;
    }
    list.innerHTML = users.map(u => `
        <li class="user-list-item ${u === currentUserId ? 'active' : ''}" 
            onclick="selectUser('${u}')">
            <span class="user-avatar">👤</span>
            <span class="user-name" title="${u}">${u}</span>
        </li>
    `).join('');
}

function filterUsers() {
    const query = document.getElementById('user-search').value.toLowerCase();
    const filtered = allUsers.filter(u => u.toLowerCase().includes(query));
    renderUserList(filtered);
}

async function selectUser(userId) {
    currentUserId = userId;
    
    // Update active state
    document.querySelectorAll('.user-list-item').forEach(el => el.classList.remove('active'));
    const activeEl = document.querySelector(`.user-list-item[onclick="selectUser('${userId}')"]`);
    if (activeEl) activeEl.classList.add('active');

    // Update header
    document.getElementById('chat-header').querySelector('.chat-title').textContent = userId;
    document.getElementById('btn-clear-history').style.display = 'inline-flex';

    // Load messages
    try {
        const data = await api(`/conversations/${encodeURIComponent(userId)}`);
        renderMessages(data.messages || []);
    } catch (e) {
        // handled by api()
    }
}

function renderMessages(messages) {
    const container = document.getElementById('chat-messages');
    if (messages.length === 0) {
        container.innerHTML = `
            <div class="chat-empty">
                <span class="chat-empty-icon">📭</span>
                <p>暂无聊天记录</p>
            </div>`;
        return;
    }
    container.innerHTML = messages.map(m => `
        <div class="message-bubble ${m.role}">
            ${escapeHtml(m.content)}
            <span class="message-time">${formatTime(m.timestamp)}</span>
        </div>
    `).join('');
    
    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

async function clearHistory() {
    if (!currentUserId) return;
    if (!confirm(`确定要清空 ${currentUserId} 的所有聊天记录吗？`)) return;
    
    try {
        await api(`/conversations/${encodeURIComponent(currentUserId)}`, { method: 'DELETE' });
        showToast('聊天记录已清空', 'success');
        renderMessages([]);
        loadUsers();
    } catch (e) {
        // handled by api()
    }
}

// ==========================================
// Persona
// ==========================================
async function loadPersona() {
    try {
        const data = await api('/persona');
        document.getElementById('persona-editor').value = data.content || '';
    } catch (e) {
        // handled by api()
    }
}

async function savePersona() {
    const content = document.getElementById('persona-editor').value;
    try {
        await api('/persona', {
            method: 'PUT',
            body: JSON.stringify({ content }),
        });
        showToast('性格设定已保存', 'success');
    } catch (e) {
        // handled by api()
    }
}

async function reloadPersona() {
    try {
        await api('/persona/reload', { method: 'POST' });
        showToast('性格设定已重新加载', 'success');
        loadPersona();
    } catch (e) {
        // handled by api()
    }
}

// ==========================================
// Config
// ==========================================
async function loadConfig() {
    try {
        const data = await api('/config');
        document.getElementById('config-api-base').value = data.ai?.api_base || '';
        document.getElementById('config-api-key').value = '';  // Don't show key
        document.getElementById('config-api-key').placeholder = data.ai?.api_key_masked || 'sk-...';
        document.getElementById('config-model').value = data.ai?.model || '';
        document.getElementById('config-temperature').value = data.ai?.temperature ?? '';
        document.getElementById('config-max-tokens').value = data.ai?.max_tokens ?? '';
        document.getElementById('config-whitelist').value = (data.whitelist || []).join('\n');
        document.getElementById('config-max-history').value = data.memory?.max_history ?? '';
    } catch (e) {
        // handled by api()
    }
}

async function saveConfig() {
    const apiKey = document.getElementById('config-api-key').value;
    const config = {
        ai: {
            api_base: document.getElementById('config-api-base').value,
            model: document.getElementById('config-model').value,
            temperature: parseFloat(document.getElementById('config-temperature').value) || 0.7,
            max_tokens: parseInt(document.getElementById('config-max-tokens').value) || 2048,
        },
        whitelist: document.getElementById('config-whitelist').value
            .split('\n')
            .map(s => s.trim())
            .filter(Boolean),
        memory: {
            max_history: parseInt(document.getElementById('config-max-history').value) || 50,
        },
    };
    // Only include API key if user typed a new one
    if (apiKey) config.ai.api_key = apiKey;
    
    try {
        await api('/config', {
            method: 'PUT',
            body: JSON.stringify(config),
        });
        showToast('配置已保存', 'success');
    } catch (e) {
        // handled by api()
    }
}

// ==========================================
// Utility
// ==========================================
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatTime(timestamp) {
    if (!timestamp) return '';
    const d = new Date(timestamp);
    const now = new Date();
    const isToday = d.toDateString() === now.toDateString();
    const time = d.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
    if (isToday) return time;
    return d.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' }) + ' ' + time;
}

// ==========================================
// Init
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    refreshDashboard();
    // Auto-refresh dashboard every 30s
    refreshTimer = setInterval(() => {
        if (currentPage === 'dashboard') refreshDashboard();
    }, 30000);
});
