chrome.runtime.onInstalled.addListener(() => {
  console.log('MoodFlow extension installed ✅');
});

// Listener to receive mood from popup and log it
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'SAVE_MOOD') {
    console.log('Received mood:', request.payload);
    // You can store it or trigger something here
    sendResponse({ status: 'Mood received' });
  }
});
