"""
Skills module defining tools available to the AI via OpenAI Function Calling.
"""

from datetime import datetime
import json
import urllib.request
import urllib.parse
from typing import Any

from loguru import logger

# Define the JSON schemas for the tools
TOOLS_SCHEMA = [
    {
        "type": "function",
        "function": {
            "name": "get_current_time",
            "description": "获取当前的准确日期和时间。当你需要知道现在几点、今天几号，或者判断应该是发早安还是晚安时使用此工具。",
            "parameters": {
                "type": "object",
                "properties": {},
                "required": []
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "search_web",
            "description": "在互联网上搜索最新资讯、新闻或百科知识。当你需要回答关于当前事件、实时数据或你不知道的事实问题时使用此工具。",
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {
                        "type": "string",
                        "description": "要搜索的关键词或查询语句"
                    }
                },
                "required": ["query"]
            }
        }
    }
]

def get_current_time(**kwargs) -> str:
    """Return the current local time."""
    now = datetime.now()
    return f"当前时间是: {now.strftime('%Y-%m-%d %H:%M:%S %A')}"

def search_web(query: str, **kwargs) -> str:
    """Perform a simple web search using DuckDuckGo HTML or similar simple endpoint."""
    logger.info(f"Executing search_web for query: {query}")
    try:
        # A simple request to duckduckgo html, parsing out some text
        url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote(query)}"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'})
        with urllib.request.urlopen(req, timeout=10) as response:
            html = response.read().decode('utf-8', errors='ignore')
            
        # Very rudimentary extraction of snippets from DDG HTML
        snippets = []
        parts = html.split('class="result__snippet')
        for part in parts[1:4]: # get top 3 results
            try:
                snippet = part.split('>', 1)[1].split('</a>', 1)[0]
                import re
                clean = re.sub('<[^<]+>', '', snippet).strip()
                snippets.append(clean)
            except Exception:
                pass
        
        if not snippets:
            return "未找到相关搜索结果，可能是爬虫被拦截，请自行推理。"
            
        return "网络搜索结果:\n" + "\n".join(f"- {s}" for s in snippets)
    except Exception as e:
        logger.error(f"search_web failed: {e}")
        return f"搜索失败: {e}"

# Map function names to their python implementations
AVAILABLE_TOOLS = {
    "get_current_time": get_current_time,
    "search_web": search_web
}

def execute_tool(tool_name: str, arguments: str) -> str:
    """Parse arguments and execute the corresponding tool."""
    func = AVAILABLE_TOOLS.get(tool_name)
    if not func:
        return f"Error: Tool '{tool_name}' not found."
    
    try:
        args_dict = json.loads(arguments) if arguments else {}
        result = func(**args_dict)
        return str(result)
    except json.JSONDecodeError:
        return f"Error: Invalid JSON arguments for tool '{tool_name}'"
    except Exception as e:
        return f"Error executing tool '{tool_name}': {e}"
