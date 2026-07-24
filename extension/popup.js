document.getElementById("editPage").addEventListener("click", function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ["inject.js"]
    }, function() {
      chrome.tabs.sendMessage(tabs[0].id, { action: "get-page-source" });
      window.close();
    });
  });
});

document.getElementById("openBlank").addEventListener("click", function() {
  chrome.tabs.create({ url: "https://deoit.js.org/pages/editor" });
  window.close();
});

document.getElementById("openLessons").addEventListener("click", function() {
  chrome.tabs.create({ url: "https://deoit.js.org/learn" });
  window.close();
});
