# Gewechat-based WeChat Bot

这是一个基于 **Gewechat (iPad 协议)** 的个人微信 AI 机器人框架。它通过模拟 iPad 登录，从根本上绕过了 PC 端微信版本过低或频繁封控的问题，为你提供最稳定的个人微信智能化接管方案。

## 🌟 核心功能

*   **iPad 协议稳定连接**：基于 [Gewechat](https://github.com/Devo919/Gewechat) 开源网关，纯本地/私有服务器部署，免除第三方代挂服务的数据隐私风险。
*   **支持多重 LLM 引擎**：兼容所有 OpenAI 格式的 API（原生支持 DeepSeek, OpenAI, 通义千问, 月之暗面等）。
*   **超长复杂人设支持**：内置极简配置系统，支持直接读取 Markdown 格式的 System Prompt（例如：内置的 12000 字 Elon Musk 思维框架）。
*   **FastAPI 可视化面板**：内置了美观的 Web 管理端，可在浏览器中查看 AI 运行日志、工作流状态并调整参数。
*   **持久化记忆系统**：支持用户维度的 SQLite 会话记忆上下文。

---

## 🚀 快速启动

### 1. 启动 Gewechat 服务端 (Docker)

本机器人依赖 Gewechat API 服务。请首先在安装了 Docker 的机器上执行：

```bash
docker pull registry.cn-hangzhou.aliyuncs.com/gewe/gewe:latest

# 创建本地数据映射目录
mkdir -p c:\temp

# 启动容器
docker run -itd -v c:\temp:/root/temp -p 2531:2531 -p 2532:2532 --privileged=true --name=gewe registry.cn-hangzhou.aliyuncs.com/gewe/gewe:latest /usr/sbin/init
```

### 2. 配置机器人

在项目根目录找到 `config.yaml` 文件，并填写你的大模型 API 密钥：

```yaml
ai:
  api_base: "https://api.deepseek.com/v1"
  api_key: "your-api-key-here"  # 填入你的真实 Key
  model: "deepseek-chat"
```

### 3. 安装依赖并启动

安装 Python 依赖（推荐使用虚拟环境）：

```bash
pip install -r requirements.txt
pip install gewechat-client
```

启动机器人服务：

```bash
python main.py
```

终端将打印出登录二维码。请使用你的**微信小号**扫码登录（设备将显示为 iPad）。登录成功后，机器人即刻开始接管聊天！

---

## 🛠️ 架构设计

*   **bot/**: 机器人核心逻辑，包含 AI 对接层、记忆层、微信 Webhook 监听层。
*   **web/**: FastAPI 构成的网页管理端及前端静态资源。
*   **data/**: 运行时动态生成的数据目录（包含本地 SQLite 数据库、图片、语音等）。
*   `persona.md`: 机器人的“灵魂”设定文件（Markdown 格式，自动作为 System Prompt 注入）。

## ⚠️ 免责声明

本项目仅供技术研究和学习交流使用。使用本框架造成的任何微信账号封禁风险、数据泄露及其他损失，由使用者自行承担。请勿用于发送垃圾广告或从事任何违反法律法规的行为。
