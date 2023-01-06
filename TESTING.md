# Project Testing

## Jest Testing
- [Jest](https://jestjs.io/) is a delightful JavaScript Testing Framework with a focus on simplicity. 
- Jest aims to work out of the box, config free, on most JavaScript projects.

To run tests in the terminal, type (without the `.test.js` extension):

`npm test -- filename`

## Manual Testing

**The site was built, tested and validated on the [Chrome browser](docs/pictures/chrome.jpg) only.**

### Supported Screen Sizes and Browsers

No framework was used for building the site, only HTML5, CSS3 and JavaScript - see the [supported browsers for HTML](https://www.w3schools.com/tags/ref_html_browsersupport.asp).
    - Chrome
    - Firefox
    - Safari
    - Opera
    - Edge

* Devices supported:
    - Mac
    - Windows
    - Android
    - iOS

* See the [default breakpoints](https://www.w3schools.com/howto/howto_css_media_query_breakpoints.asp) provided by W3 Schools for responsive building. Breakpoints are a representative of a subset of common device sizes and viewport dimensions—they don’t specifically target every use case or device. Instead, the ranges provide a strong and consistent foundation to build on for nearly any device. 

    | Breakpoint               | Dimensions |
    | ------------------------ | ---------- |
    | Extra small              | <600px     |
    | Small                    | ≥600px     |
    | Medium                   | ≥768px     |
    | Large                    | ≥992px     |
    | Extra large              | ≥1200px    |

### Code Validation
* HTML - No errors or warnings were detected by W3C Validation for pages:
    - [index.html PDF report](docs/testing/w3c-validation/w3c-html-index.pdf)
    - [courses.html PDF report](docs/testing/w3c-validation/w3c-html-courses.pdf)
    - [about.html PDF report](docs/testing/w3c-validation/w3c-html-about.pdf)
    - [confirmation.html PDF report](docs/testing/w3c-validation/w3c-html-confirm.pdf)

* CSS - No errors or warnings were detected by W3C Jigsaw Validation for:
    - [style.css PDF report](docs/testing/w3c-validation/w3c-css.pdf)

### Lighthouse
Lighthouse is an automated tool for improving the quality of web page. It checks the current webpage for performance, accessibility, best practices and SEO. 

The desktop audit scored 100 across the four features for all pages. Here is a typical summary:
<h2 align="left"><img src="docs/pictures/courses-summary-desktop.jpg"></h2>

The mobile audit scored >90 across the four features for all pages. Here is the lowest-scored summary:
<h2 align="left"><img src="docs/pictures/courses-summary-mobile.jpg"></h2>

index.html

- [Desktop PDF report](docs/testing/lighthouse-reports/lighthouse-index-desktop-2.pdf)
- [Mobile PDF report](docs/testing/lighthouse-reports/lighthouse-index-mobile-2.pdf)



## Credits

A huge thank you to the following people and organisations, because without you, the project would not have been produced in it's present form.

### From the Course

Jest Testing Walkthrough Tutorials from [Code Institute](https://github.com/Code-Institute-Solutions/Jest_Testing_Part2/blob/main/09_Final_Codealong_2/scripts/tests/game.test.js)

Markdown Cheatsheet from [Adam Pritchard](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#html)

### Code
Although the code is the work of the author, some of the code has been sourced from or inspired by others.

[Jest Docs](https://jestjs.io/docs/getting-started)

[How to ignore lines for code coverage in Jest](https://stackoverflow.com/questions/38740165/how-to-ignore-lines-for-code-coverage-in-jest) on Stack Overflow

[Jest](https://www.w3resource.com/jest/introduction.php) from w3resource

