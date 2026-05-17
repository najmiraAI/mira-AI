# MiraBrowser ♞
**Native Android Automated Browser with AI Agent Control**

MiraBrowser is a high-performance automation engine for Android that allows LLMs and automation scripts to control a real mobile browser via WebSocket and REST API.

## Features
- 🚀 **AI Browser Controller**: JSON-based command interface (click, type, scroll, extract, etc.)
- 🤖 **Smart DOM Engine**: Reliable Javascript injection for element detection and manipulation.
- 📱 **Mobile Automation Layer**: Accessibility Service integration for native gestures.
- 🌐 **Local API Server**: Built-in Ktor server for remote control (Host: `localhost:8080`).
- 🌓 **Cyber Dashboard**: Modern Jetpack Compose UI with live logs and browser preview.
- ⚙️ **Background Mode**: Foreground service support for persistent automation.

## Project Structure
- `app/src/main/java/com/mirabrowser/`
  - `api/`: Ktor API Server logic.
  - `automation/`: Browser & DOM controllers.
  - `model/`: Data structures for commands/responses.
  - `services/`: Accessibility & Background services.
  - `MainActivity.kt`: Cyber Dashboard UI.

## API Documentation

### REST Endpoint: `POST /execute`
**Request Body:**
```json
{
  "action": "click",
  "selector": "#login-button",
  "timeout": 5000
}
```

### WebSocket: `ws://localhost:8080/ws`
Send JSON actions and receive JSON responses in realtime.

## Supported Actions
| Action | Parameters | Description |
|---|---|---|
| `goto` | `url` | Navigate to a URL |
| `click` | `selector` | Click an element |
| `type` | `selector`, `value` | Input text into a field |
| `extract_html` | - | Get full page HTML |
| `screenshot` | - | Get base64 PNG screenshot |
| `execute_js` | `script` | Run custom Javascript |

## Termux Integration Example (Python)
```python
import requests
import json

base_url = "http://localhost:8080"

def click_element(selector):
    data = {
        "action": "click",
        "selector": selector
    }
    response = requests.post(f"{base_url}/execute", json=data)
    print(response.json())

# Open google
requests.post(f"{base_url}/execute", json={"action": "goto", "url": "https://google.com"})
```

## Build Instructions
1. Install Android Studio.
2. Clone this project.
3. Sync Gradle.
4. Run on Device/Emulator (Android 10+).
5. Enable **Accessibility Service** for MiraBrowser in Android Settings.

## Termux Setup
1. Install Termux on Android.
2. Ensure MiraBrowser is running and "Background Mode" is enabled.
3. Access MiraBrowser API via `localhost:8080` from Termux.
