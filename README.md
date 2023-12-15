# WeatherProfileManager

## Project directory structure
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

## Instructions on how to use this project

### Step 1: Clone the repo to your local computer
1. In your desired directory, run the command ```git clone https://github.com/jmdev-sebas/weather-management-app.git weather-management-app```
(Anyone with access problem, please find me.)

### Step 2: Install the necessary dependencies and packages
1. Inside your project root directory, run the ```npm install``` in the terminal to install any necessary dependencies this project needs.

### Step 3: Create an environment file
1. Go inside src and create a file .env
```
weather-management-app/           # root of the project
│
├── src/                          # Source files
|   ...                           # Other directories & files
|   └── index.js                  # Initial project
|   └── .env                      # Create your .env file here
...                               # Other directories & files
```
2. Go to weatherapi.com to sign up and after that obtain your API key
3. Inside your .env file, add the API key like so:
e.g. if your API key is 12345678910
```
    API_KEY=12345678910          # this is correct
    API_KEY="12345678910"        # this is WRONG
```

### Step 4: Try the app
1. ```cd``` to src and type ```node index.js```
e.g. If you have cd to src
```
    user@Asus:~/weather-management-app/src$ node index.js
```
e.g. If you still in the root of your project then do like this
```
    user@Asus:~/weather-management-app$ node src/index.js
```
