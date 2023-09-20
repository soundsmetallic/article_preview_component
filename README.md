# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

[Screenshot](./screenshot.png)

### Links

- [Solution URL](https://github.com/soundsmetallic/article_preview_component)
- [Live Site URL](https://soundsmetallic.github.io/article_preview_component/)

## My process

- Set up my work environment.
- Format the html file.
- Add the fonts.
- Style the document to match the design.
- Add media queries to make the page responsive.
- Write the JavaScript code to make the page dynamic.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- Flexbox

### What I learned

I learned how to manipulate objects on a webpage page in cases where the user dynamically changes the size of the window.

JavaScript

    window.addEventListener('resize', () => {
        w = window.innerWidth;
        if(condition) {
            do this;
        } else {
            do some other task;
        }
    });

### Useful resources

- [JavaScript window resize event](https://linuxhint.com/javascript-window-resize-event/) - This helped me to understand how I can control elements on a page when the window's size changes.

## Author

- Matej Hrovat
- Frontend Mentor - [@soundsmetallic](https://www.frontendmentor.io/profile/soundsmetallic)
