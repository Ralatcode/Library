# Library Project
This is the first phase of the Library Project on [The Odin Project](theodinproject.com) fullstack node path course, which involves building a small Library app.

## Live GitHub Page
Check out the live github page - [Click here](https://ralatcode.github.io/Library/)

## Overview

### Tools:
- Visual Studio Code
- LInux Terminal
- Git & GitHub
- 

### Built and practised:
- Semantic HTML5 markup
- CSS grid and Flexbox for layout
- Modal and modal animation
- DOM manipulation
- Object Constructors
- Prototypes
- Modifying prototype instance

#### Working principle
- Used form to collect user input and pass form values as parameters in a function containing the object constructor to create a prototype for the user input.
-  The created prototype is then pushed into an already created empty array, which acts as a storage for all the protypes to be created.
- The book prototype properties details are then displayed on the DOM as a book card with appropriate classlist used for styling in the stylesheet.
- To modify the book read status, the status button has a click event listener to toggle the status of the book, which toggles between read and unread status, on click, the parent element of the event target is gotten and dataset value of the book card is used to determine the index of the book clicked. This is used to update the Book instance to the appropriate toggled status and also update the DOM.

