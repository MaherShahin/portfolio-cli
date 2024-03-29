

# Interactive CLI Portfolio
This project is an interactive command-line portfolio that showcases the skills, experience, and projects of myself, a self-proclaimed digital alchemist and master of the arcane arts. 

Highly exaggerated, pretty funny, and epic!

# Live Version (Currently Offline) - need to pay Heroku their money
https://mahers-portfolio.herokuapp.com/


## Getting Started
To use this CLI portfolio, simply download the directory and use VSCode Live Server - or similair to launch index.html. You will be presented with a terminal-like interface where you can enter commands and explore Maher's skills, experience, and projects. (Deployed version planned)

## Features
### Command Structure
The CLI portfolio uses a UNIX-like command structure for navigation. You can use the following commands to explore the directory structure:

- cd [directory] - Change the current directory
- ls - List files and directories in the current directory
- pwd - Print the current directory
- download [file] - Download a specific file (e.g., CV, cover letter)
- CV Module
In addition to the standard commands, there is a cv module that allows you to access Maher's CV information. You can use the following flags with the cv command:

- --help or -h - Show help message
- --about or -a - Display a brief bio or introduction
- --experience or -e - Show professional experience
- --education or -d - List academic background
- --skills or -s - Present technical skills
- --projects or -p - Showcase projects with descriptions and links
- --contact or -c - Display contact information
## Keyboard Interrupt (to be implemented - buggy right now and doesn't work :(!)
The CLI portfolio also features a keyboard interrupt that allows you to stop the output and input a new command at any time. Simply press Ctrl-C to trigger the interrupt and input a new command.

## To-do
- Add more projects to the displayProjects() function -> should look a little nicer
- Implement a search functionality to easily find relevant information
- Create an API that serves CV information dynamically if new information in the local CV has been updated
- Add more interactivity to the terminal, such as animations and sound effects
- Allow users to customize the appearance of the terminal, including color scheme and font size.


## Built With
- HTML
- CSS
- JavaScript
- Typed.js

## Author
Maher Shahin
