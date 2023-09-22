{
    "name": "Elsa adrelle",
    "description": "Advanced Auto & Manual Filter Bot With Lots Of Features",
    "stack": "container",
    "keywords": [
      "telegram",
      "auto-filter",
      "Bot",
      "by",
      "Private-Botz",
      "pyrogram",
      "media",
      "search",
      "channel",
      "index",
      "inline"
    ],
    "website": "https://github.com/Private-Botz/Elsa-Bot",
    "repository": "https://github.com/Private-Botz/Elsa-Bot",
    "env": {
        "BOT_TOKEN": {
            "description": "Your bot token.",
            "required": true
        },
        "API_ID": {
            "description": "Get this value from https://my.telegram.org",
            "required": true
        },
        "API_HASH": {
            "description": "Get this value from https://my.telegram.org",
            "required": true
        },
        "CHANNELS": {
            "description": "Username or ID of channel or group. Separate multiple IDs by space.",
            "required": false
        },
        "ADMINS": {
            "description": "Username or ID of Admin. Separate multiple Admins by space.",
            "required": true
        },
        "PICS": {
            "description": "Add some telegraph link of pictures .",
            "required": false
        },
        "LOG_CHANNEL": {
            "description": "Bot Logs,Give a channel id with -100xxxxxxx",
            "required": true
        },
        "AUTH_USERS": {
            "description": "Username or ID of users to give access of inline search. Separate multiple users by space.\nLeave it empty if you don't want to restrict bot usage.",
            "required": false
        },
        "AUTH_CHANNEL": {
            "description": "ID of channel.Make sure bot is admin in this channel. Without subscribing this channel users cannot use bot.",
            "required": false
        },
        "DATABASE_URI": {
            "description": "mongoDB URI. Get this value from https://www.mongodb.com.",
            "required": true
        },
        "DATABASE_NAME": {
            "description": "Name of the database in mongoDB.",
            "required": false
        },
        "COLLECTION_NAME": {
            "description": "Name of the collections. Defaults to Telegram_files. If you are using the same database, then use different collection name for each bot",
            "value": "Telegram_files",
            "required": false
        }
    },
    "addons": [],
    "buildpacks": [{
        "url": "heroku/python"
    }],
    "formation": {
        "worker": {
            "quantity": 1,
            "size": "free"
        }
    }
}
