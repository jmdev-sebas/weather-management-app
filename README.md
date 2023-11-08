# WeatherProfileManager

## Project repository structure
```
weather-management-app/           # root of the project
│
├── src/                          # Source files
│   └── weather data              # Weather Data files
│      └── weatherData.js         # Module for fetching weather data
│   ├── userData.js               # Module for user data handling
|   └── index.js                  # Initial project
|   └── .env                      # Keep secret info e.g.: API key
│
├── test/                         # Test files
│   └── testCreatingUserData.js   # Tests for creating user data operations
│   └── testUpdatingUserData.js   # Tests for updating user data operations
│
├── data/                         # Data files
│   └── data                      # Stored Data files
│       └── userData.json         # User data stored in JSON format
│   └── handling                  # I/O handling files
│       └── userInput.js          # Module for handling user input (if applicable)
│
├── package.json                  # Project metadata and dependencies
├── package-lock.json             # Auto-generated lock file for dependencies
└── node_modules/                 # Node modules (usually not checked into version control)
```

## Create .env file in src/
1. Go inside src and create a file .env
2. Add the following inside you .env file ```API_KEY=<get-you-api-key-from-weatherapi.com>```
3. After you've gotten your API, paste it after the ```=``` without quotations ```' '``` or ```" "```