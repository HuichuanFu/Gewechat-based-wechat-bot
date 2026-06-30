## WeChat Clawbot (weixin-ilink) Architecture Constraints
When developing or modifying features related to WeChat in this project, strictly adhere to the following architectural facts:
1. **QR Code Scanning**: Scanning the QR code does **NOT** log the Python script into the user's personal WeChat account. Instead, it authorizes the user's personal WeChat account to communicate with an official AI bot account (Clawbot).
2. **Account Control**: The Python backend controls the Clawbot, not the user's personal account.
3. **Contact Scope**: The bot cannot access the user's personal WeChat contacts. The bot's "users" or "contacts" are exclusively those who have explicitly bound/authorized themselves to the bot by scanning its QR code.
4. **Proactive Messaging**: When sending proactive messages, the targets are the user IDs stored in our local database (people who have bound to the Clawbot), NOT the friends of the person who scanned the QR code.
