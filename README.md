# Study-Habit-Coach

![Image](https://github.com/user-attachments/assets/324afa27-14a1-43b9-ba5e-f58a80dcb508)


## Overview

Study Habit Coach is a simple, user-friendly web app designed to help students improve their study habits by tracking their mood and hours studied daily. It provides personalized study suggestions and motivational quotes to keep users encouraged.

This project was built as part of the HawkHacks @ Harper mini hackathon with the theme "Everyday Innovation."

## Features

- Select your current mood from predefined options.
- Enter hours studied for the day.
- Get tailored suggestions based on your mood and study hours.
- Receive motivational quotes randomly to boost your morale.
- Save and view your study history in the browser (localStorage).
- Responsive and polished UI with clean design.

## Technologies Used

- HTML5, CSS3 for structure and styling
- Vanilla JavaScript for logic and DOM manipulation
- LocalStorage API for saving study history
- JSON file (`data/quotes.json`) for motivational quotes

##  Repository file structure

study-habit-coach/
├── data/
│   └── quotes.json
├── index.html
├── style.css
├── script.js
└── README.md



## How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Praneetb2929/study-habit-coach.git
2. Navigate into the project folder:
 
   ```bash
   cd study-habit-coach
3. Start a local HTTP server to serve the files (required for fetching JSON):
   Using Python 3:
   
   ```bash
   python -m http.server 8000
 Or using VSCode Live Server extension.
  
4.  Open your browser and visit:

    ```bash
    http://localhost:8000
    
5.  Use the app by selecting your mood, entering hours studied, and clicking Get Suggestion.



## Screenshots

![Image](https://github.com/user-attachments/assets/17537a5c-7fc1-4aaf-967d-731edb0cd6ad)

 ## GIVES SUGGESTION 
![Image](https://github.com/user-attachments/assets/7d5db71e-8a8e-41a9-b82d-49053f2e269f)

## GIVES STUDY HISTORY 
![Image](https://github.com/user-attachments/assets/5af5d45e-588f-43b0-b65f-c850eed01ac8)


## Future Improvements

Add user authentication to save history remotely.

Add more moods and suggestions.

Integrate with calendar/reminder APIs.

Mobile app version for notifications and reminders

## License
This project is open source and available under the MIT License.

Thank you for checking out Study Habit Coach! Feel free to open issues or submit pull requests.




  



   
