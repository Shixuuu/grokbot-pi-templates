# Memory seeds for Meraki Health

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log**: The Meraki Health scripts (mclient.py, setup.py, check.py) are published at https://github.com/Presidio-Federal/Meraki-health-bot and install from raw.githubusercontent.com/Presidio-Federal/Meraki-health-bot/main/bin/. They use only the Python 3 standard library and make GET requests only.
- **log**: The Meraki Dashboard API key is stored as the secret MERAKI_API_KEY, requested through a secure secret card and never pasted in chat or printed.
