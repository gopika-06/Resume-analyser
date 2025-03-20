document.getElementById("scanResume").addEventListener("click", async function () {
    const fileInput = document.getElementById("resumeInput").files[0];

    if (!fileInput) {
        alert("Please upload a resume!");
        return;
    }

    const reader = new FileReader();
    reader.onload = async function (event) {
        const resumeText = event.target.result;

        // Send text to AI for analysis
        const improvementSuggestions = await analyzeResume(resumeText);
        document.getElementById("analysisResult").innerHTML = formatAnalysis(improvementSuggestions);

    };

    reader.readAsText(fileInput); // Works for TXT, PDF needs extra processing
});
function formatAnalysis(text) {
    let formattedText = text
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold important points
        .replace(/\n/g, "<br>") // Convert new lines into line breaks
        .replace(/- /g, "• "); // Replace hyphens with bullet points

    return `<div style="text-align: left; padding: 10px;">${formattedText}</div>`;
}

async function analyzeResume(text) {
    const API_KEY = "your_api_key";  // Replace with your actual API key
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

    const requestBody = {
        contents: [{ parts: [{ text: `Analyze this resume and suggest improvements:\n${text}` }] }]
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        console.log("Full API Response:", data); // ✅ Log full response for debugging

        if (data.candidates && data.candidates.length > 0) {
            return data.candidates[0].content.parts[0].text;
        } else {
            return "⚠️ No valid response from Gemini. Check your API key and request format.";
        }
    } catch (error) {
        console.error("Error fetching AI response:", error);
        return "Error analyzing resume. Check the console for details.";
    }
}
