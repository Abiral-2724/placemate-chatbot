# Placemate

## Tech Stack

- **Frontend**: React.js with Tailwind CSS
- **Backend**: python


## Installation

1. Clone the repository
```bash
git clone https://github.com/ishita2704/placemate-chatbot.git
cd placemate-chatbot
```

2. For Backend
```bash
cd Backend
// create a virtual environment 
python3 -m venv venv
// Activate the virtual environment
source venv/bin/activate
// Install Dependencies
pip install -r requirements.txt
// set up .env and service_account_googlesheet.json
// run the backend
python app.py

```

3. Set up environment variables in Backend
```bash
GEMINI_API_KEY=
GROQ_API_KEY = 
GOOGLE_API_KEY = 
GOOGLE_SERVICE_ACCOUNT_JSON=
```

4. For frontend
```bash
cd frontend
npm install
npm run dev
```
