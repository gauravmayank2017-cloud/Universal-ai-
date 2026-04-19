#!/bin/bash

echo "------------------------------------------------"
echo "   GHOST AI - SYSTEM INITIALIZATION [v2.0.26]   "
echo "------------------------------------------------"

# 1. फोल्डर स्ट्रक्चर बनाना
echo ">> Creating neural directory structure..."
mkdir -p src/components src/hooks src/assets src/utils public

# 2. डिपेंडेंसी चेक और इंस्टॉल करना
if ! command -v npm &> /dev/null
then
    echo ">> ERROR: Node.js/npm not found. Please install it first."
    exit
fi

echo ">> Installing Ghost dependencies (React, Firebase, Gemini)..."
npm install firebase @google-generative-ai/generative-ai react-scripts

# 3. .env फ़ाइल का टेम्पलेट बनाना (सुरक्षा के लिए)
echo ">> Setting up environmental shield..."
cat <<EOT >> .env.example
REACT_APP_FIREBASE_KEY=your_key_here
REACT_APP_GEMINI_KEY=your_key_here
EOT

# 4. परमिशन सेट करना
chmod +x setup.sh

echo "------------------------------------------------"
echo "      SUCCESS: GHOST AI IS READY TO RUN         "
echo "   Command: npm start                          "
echo "------------------------------------------------"
