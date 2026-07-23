chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: "edit-in-deoit-html",
    title: "Edit HTML in Deoit",
    contexts: ["page"]
  });
  chrome.contextMenus.create({
    id: "edit-in-deoit-selected",
    title: "Open selection in Deoit",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "edit-in-deoit-html") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["inject.js"]
    }, function() {
      chrome.tabs.sendMessage(tab.id, { action: "get-page-source" });
    });
  }
  else if (info.menuItemId === "edit-in-deoit-selected") {
    var selectedText = info.selectionText || "";
    openInDeoit({
      html: "<!-- Selection from: " + tab.url + " -->\n" + selectedText,
      css: "",
      js: ""
    });
  }
});

function openInDeoit(code) {
  var encodedHtml = encodeURIComponent(code.html || "");
  var encodedCss = encodeURIComponent(code.css || "");
  var encodedJs = encodeURIComponent(code.js || "");
  var url = "https://deoit.vercel.app/pages/editor?html=" + encodedHtml + "&css=" + encodedCss + "&js=" + encodedJs;
  chrome.tabs.create({ url: url });
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "page-source") {
    openInDeoit(message.data);
  }
});
