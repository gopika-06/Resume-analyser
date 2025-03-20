chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "analyzeResume") {
        analyzeResume(message.text).then((reply) => sendResponse({ reply }));
        return true;
    }
});
