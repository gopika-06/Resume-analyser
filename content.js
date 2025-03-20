// Function to extract text from a webpage (simulating resume extraction)
function extractResumeText() {
    let text = "";
    const paragraphs = document.querySelectorAll("p, li"); // Get all text elements

    paragraphs.forEach((p) => {
        text += p.innerText + "\n";
    });

    return text || "No text found.";
}

// Send extracted text to background.js for analysis
chrome.runtime.sendMessage({ type: "analyzeResume", text: extractResumeText() }, (response) => {
    if (response && response.reply) {
        displayAnalysis(response.reply);
    }
});

// Function to display AI suggestions directly on the webpage
function displayAnalysis(responseText) {
    let div = document.getElementById("resumeAnalysis");

    if (!div) {
        div = document.createElement("div");
        div.id = "resumeAnalysis";
        div.style.position = "fixed";
        div.style.bottom = "10px";
        div.style.right = "10px";
        div.style.backgroundColor = "white";
        div.style.color = "black";
        div.style.padding = "15px";
        div.style.border = "1px solid black";
        div.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.2)";
        div.style.zIndex = "1000";
        document.body.appendChild(div);
    }

   div.innerHTML = `<strong>Resume Analysis:</strong><br>${formatAnalysis(responseText)}`;

}
