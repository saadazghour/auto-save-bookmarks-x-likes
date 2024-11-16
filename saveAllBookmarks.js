function saveAllBookmarks() {
  console.log("Starting to save all bookmarks on this page...");

  const bookmarkSelector = "button[data-testid='bookmark']";

  function saveVisibleBookmarks() {
    const bookmarkButtons = document.querySelectorAll(bookmarkSelector);

    if (bookmarkButtons.length > 0) {
      console.log(`Found ${bookmarkButtons.length} bookmarks to save...`);

      bookmarkButtons.forEach((button, idx) => {
        setTimeout(() => {
          button.click();
          console.log(`Bookmark ${idx + 1} saved.`);
        }, idx * 1000); //delay between clicks, adjust as needed user behavior
      });
    } else {
      console.log("No bookmarks found on this page.");
    }
  }

  saveVisibleBookmarks();

  // Scroll & repeat to handle infinite loading
  const interval = setInterval(() => {
    // Scroll to load more posts
    window.scrollBy(0, window.innerHeight);

    console.log("Scrolled to load more posts...");

    // Check for new bookmarks after scrolling
    setTimeout(() => {
      const bookmarkButtons = document.querySelectorAll(bookmarkSelector);

      if (bookmarkButtons.length > 0) {
        saveVisibleBookmarks();
      } else {
        console.log("No more bookmarks found. Stopping the process.");
        clearInterval(interval);
      }
    }, 2000); // Allow time for content to load
  }, 5000); // Scroll every 5 seconds
}

saveAllBookmarks();
