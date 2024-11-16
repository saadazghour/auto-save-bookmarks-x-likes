# Auto Save Bookmarks on X Likes Page

This script automates the process of saving all bookmarks on the "Likes" page of your X (formerly Twitter) account. It clicks on the "Bookmark" button for all liked posts & handles infinite scrolling to process all posts dynamically.

## Features

- Automatically saves all liked posts by clicking the "Bookmark" button.
- Handles infinite scrolling to load & save new posts dynamically.
- Stops execution once all posts are processed.

## Prerequisites

- A modern browser with developer tools (Google Chrome, Firefox, Edge, etc.).
- Access to your X "Likes" page: `https://x.com/<your-username>/likes`.

## Steps to Use

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/saadazghour/auto-save-bookmarks-x-likes.git

   cd auto-save-bookmarks-x-likes

   ```

1. **Access Your X Likes Page**:

   Open your browser & log in to your X account.
   Navigate to your "Likes" page: https://x.com/<your-username>/likes.

1. **Open Developer Tools**:

   Right-click on the page & select Inspect or press Ctrl+Shift+I (Windows/Linux) or Cmd+Option+I (Mac).
   Switch to the Console tab.

1. **Copy & Paste the Script**:

   Open the saveAllBookmarks.js file in this repository & copy its contents.
   Paste the script into the browser console & press Enter.

1. **Watch the Automation**:

   The script will click the "Bookmark" button on each visible liked post.
   It will scroll down to load more posts & repeat the process until all posts are bookmarked.

1. **Confirm Completion**:

   The console will log each bookmark saved & notify you when the process is complete.

## Instructions for Users

- Users should copy & paste the script from saveAllBookmarks.js into their browser console while on the https://x.com/<username>/likes page.

- The script will automatically save all liked posts by clicking the "Bookmark" button & handling infinite scroll.

### Notes

- This script is designed to work specifically on the "Likes" page of X.
  Ensure you scroll the page if posts are loaded dynamically & re-run the script if necessary.

- Use this script responsibly & adhere to X's terms of service. Unauthorized automation might result in account restrictions.

### Disclaimer

- This script is provided for personal use & educational purposes only. The repository owner is not responsible for any misuse or account issues resulting from its use.
