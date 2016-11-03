//Sabith Pocker
//sabithpocker@gmail.com

// The onClicked callback function.
function onClickHandler(info, tab) {
  if (info.menuItemId == "lsns") {
    chrome.tabs.executeScript({
        code: "(function(el, string){var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);while(n=walk.nextNode()) n.nodeValue = n.nodeValue.trim()?string:'';})(document.body,'Thequickbrownfoxjumpsoverthelazydog')"
    });
  } else if (info.menuItemId == "lsws") {
    chrome.tabs.executeScript({
      code: "(function(el, string){var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);while(n=walk.nextNode()) n.nodeValue = n.nodeValue.trim()?string:'';})(document.body,'The quick brown fox jumps over the lazy dog')"
    });
  } else {
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
  }
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({"title": "Long String No Space", "id": "lsns", contexts: ["all"]});
  chrome.contextMenus.create({"title": "Long String With Space", "id": "lsws", contexts: ["all"]});

});
