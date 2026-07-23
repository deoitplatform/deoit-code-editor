(function() {
  if (window.__deoitInjected) return;
  window.__deoitInjected = true;

  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "get-page-source") {
      var html = "";
      var css = "";
      var js = "";

      // Get page HTML
      html = "<!DOCTYPE html>\n<html lang=\"en\">\n" + document.documentElement.outerHTML + "\n</html>";

      // Try to extract inline styles
      var styleTags = document.querySelectorAll("style");
      styleTags.forEach(function(tag) {
        css += tag.textContent + "\n";
      });

      // Try to extract linked stylesheets content (only same-origin)
      var links = document.querySelectorAll('link[rel="stylesheet"]');
      links.forEach(function(link) {
        if (link.href && link.href.indexOf(window.location.origin) === 0) {
          css += "/* External: " + link.href + " */\n";
        }
      });

      // Try to extract inline scripts
      var scripts = document.querySelectorAll("script:not([src])");
      scripts.forEach(function(tag) {
        if (tag.textContent && !tag.textContent.includes("chrome.runtime")) {
          js += tag.textContent + "\n";
        }
      });

      chrome.runtime.sendMessage({
        action: "page-source",
        data: {
          html: html.substring(0, 50000),
          css: css.substring(0, 20000),
          js: js.substring(0, 20000)
        }
      });
    }
  });
})();
