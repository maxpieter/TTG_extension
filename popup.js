document.getElementById("getUrl").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    document.getElementById("url").textContent = tab.url;
  });