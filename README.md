# Resume Analyzer Chrome Extension

## Overview
The **Resume Analyzer** is a Chrome Extension that helps users analyze their resumes using AI. It scans resumes, identifies mistakes, and provides improvement suggestions to enhance job application success rates.

## Features
- **Resume Scanning**: Automatically detects and extracts text from uploaded resumes.
- **AI-Powered Analysis**: Uses an AI API to evaluate resumes based on best practices.
- **Error Detection**: Identifies grammar mistakes, formatting issues, and missing key sections.
- **Improvement Suggestions**: Provides personalized recommendations to enhance resume quality.
- **User-Friendly Interface**: Simple and intuitive UI for easy navigation.

## Installation
1. Download or clone the repository:
   ```sh
   git clone https://github.com/yourusername/resume-analyzer-extension.git
   ```
2. Open **Google Chrome** and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the extension folder.
5. The Resume Analyzer extension should now appear in your Chrome toolbar.

## Usage
1. Click on the **Resume Analyzer** extension icon in the Chrome toolbar.
2. Upload a resume in PDF or DOCX format.
3. Click the **Analyze** button to send the resume data to the AI API.
4. View the results, including error detection and improvement suggestions.

## API Integration
This extension relies on an external AI API for resume analysis. To configure the API:
1. Obtain an API key from the AI service provider.
2. Open `background.js` or `popup.js` (where API requests are handled).
3. Replace `YOUR_API_KEY_HERE` with your actual API key:
   ```javascript
   const API_KEY = "YOUR_API_KEY_HERE";
   ```
4. Save the changes and reload the extension.

## Technologies Used
- **HTML, CSS, JavaScript**: Frontend for Chrome extension UI
- **Manifest v3**: Chrome extension configuration
- **AI API**: For resume analysis and suggestions
- **PDF/DOCX Parser**: Extract text from resumes

## Future Enhancements
- **Real-time Resume Scoring**
- **Job-Specific Resume Suggestions**
- **AI Chatbot for Resume Guidance**
- **Export Resume with Suggested Changes**

## Contributing
Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch (`feature-branch-name`).
3. Make your changes and commit them.
4. Push to your fork and create a pull request.

## License
This project is licensed under the MIT License. See `LICENSE` for details.

## Contact
For any queries or feedback, reach out to **gopikapalanikumar692005@gmail.com** or visit [GitHub Repository](https://github.com/gopika-06/resume-analyzer-extension).

