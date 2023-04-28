# Password Generator

A React-based web application that generates secure, random passwords based on user-selected options. The app features a responsive design and provides an intuitive interface for users to generate strong passwords and copy them to the clipboard.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)

## Features

- Generate random passwords based on selected options
- Copy generated passwords to the clipboard
- Display a password strength rating
- Responsive design for optimal layout on various screen sizes
- Hover and focus states for all interactive elements

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js (>= 14.x.x)
- npm (>= 6.x.x)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/password-generator.git
```

2. Navigate to the project folder:

```bash
cd password-generator
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

Now, open your browser and navigate to http://localhost:3000. You should see the app running.

## Usage 

1. Use the checkboxes to select which character types you want to include in your password (uppercase, lowercase, numbers, and symbols).
2. Click the "Generate Password" button to create a random password based on your selected options.
3. The generated password will be displayed in the input field. You can copy the password to your clipboard by clicking the "Copy" button.
4. The password strength rating will be shown below the generated password, indicating how secure the password is based on its length and character types.

## Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- lodash - JavaScript utility library

## Contributing

1. Fork the project
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a pull request