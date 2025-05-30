# Time To Go — Chrome Extension

**TTG** is a lightweight Chrome extension that automatically removes job listings labeled as **"Promoted"** on LinkedIn, giving you a cleaner and more honest job search experience.

## Features

- Automatically detects and removes "Promoted" job cards.
- Works dynamically — supports infinite scrolling.
- Simple, fast, and private — no tracking or data collection.

## Installation

1. Clone or download this repo.
2. Go to `chrome://extensions/` in your Chrome browser.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select the folder containing this extension.

## How It Works

The content script scans the LinkedIn job listing page. If a job card contains a `<span>` element with the text "Promoted" (case-insensitive), it removes the entire job card `<li>` element from the DOM.
