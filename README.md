

## Project Purpose
This is a Code Institute student project for Milestone 2, built to satisfy the requirements for the EKC DigitalLearn Diploma (Level 5) in [Web Application Development](https://www.ekcgroup.ac.uk/ekc-digitallearn/computing/web-application-development-diploma). 

This project has been created in order to provide 2D gaming entertainment on a deployed interactive website. The project was built using **Gitpod**. 

The information has been presented in a way that ensures the users achieve their goals of:
* understanding what the site's function is
* understanding how to play the game
* being able to email suggestions to us

The site also enhances the owner's goals by:
* showcasing their gaming creativity
* showcasing their JavaScript programming skills
* showcasing their testing skills


## Project Requirements
* The technologies used were HTML, CSS and **JavaScript**.
* This interactive front end project contains one page with a JavaScript game and an email form for contacting us
* This README.md file explains what the project does and the value it provides for the users
* Version control is provided by Git and GitHub
* External code, libraries, templates, images, information, etc. will be listed in the **Credits**, at the bottom of this README.
* This project is deployed via GitHub Pages and the code in a GitHub repository.


<h1 align="center">2D Retro Game: Box Hunt</h1>

[View the live project here.](https://janet-dev.github.io/ci-milestone-project-2/)

The aim of the project is provide an easy to play game for most ages and to provide a non-taxing escape from daily stress. This game is based on the popular arcade and 2D retro versions of Whac-A-Mole.

The site is designed to be responsive and accessible on a range of devices, making it easy to use for potential users.

<h2 align="center"><img src="docs/pictures/whacamole.jpg"></h2>

## User Experience (UX)

### User stories
As this is a brand new site with limited features, so the user stories were taken from the perspective of the visiting or anonymous user. We don't have any traffic data yet and we don't really know who are users are at this point.
* As a visiting user, I would like to connect with the company via email.
* As a visiting user, I would like to easily understand how to play the game.
* As a visiting user, I would like to play at increasingly advanced levels.
* As a visiting user, I would like to see my score and my current level.

### Owner goals
* I would like to build a retro 2D game.
* I wouild like to build a family game which is easy for both children and adults to use.
* I would like the game to be visually attractive and fun to play.
* I would like the game to be created for most modern devices.
* I would like to create code that is easy for others to follow.
* I would like to create clean code that follows best practices.

### Design
* Colour Scheme
    - Colours white (#ffffff) and black (#000000) are used for the game grid.
    - Bright colours for the moving tile.

	This colour scheme was chosen for simplicity, readability and to give a retro feel. Too much colour can make the site to busy or distracting.

* Typography
    - For the home and about pages, [Raleway font](https://fonts.google.com/specimen/Raleway) is used for good readability and contrast when required. It is considered to be number eight in the [The 10 Best Google Fonts in 2023](https://kinsta.com/blog/best-google-fonts/), so should suit most sites. If this font is unavailable, san serif is used as a fallback.


### Wireframes
See the site design as a [wireframe PDF](docs/ux/wireframe.pdf). It includes both desktop and mobile versions.

## Features
This website will initially consist of three visible pages (Home, Courses, About) and one hidden (Confirmation for subscription)

## Future Features
After asking the advice of other gamers, further features are required:
* feature 1

## Technology Used
* [HTML5](https://en.wikipedia.org/wiki/HTML5) and [CSS3](https://en.wikipedia.org/wiki/CSS) for building and custom styling the site.
* Wireframes from [Balsamiq](https://balsamiq.com/).
* Developer platform from [Gitpod](https://www.gitpod.io/).
* IDE integrated into Gitpod from [Visual Studio Code](https://code.visualstudio.com/).
* Debugging assisted by [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/).
* Version control integrated into Gitpod from [Git](https://git-scm.com/).
* Project deployment provided by [GitHub Pages](https://pages.github.com/).
* Automated testing provided by [Jest](https://jestjs.io/).
* HTML validation from [W3C](https://validator.w3.org/#validate_by_input).
* CSS validation from [Jigsaw (W3C)](https://jigsaw.w3.org/css-validator/#validate_by_input).
* JavaScript validation from [JSHint](https://jshint.com/)
* Web page quality improvements assisted by [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/).
* Raleway font from [Google Fonts](https://fonts.google.com/?query=raleway).
* Favicon created on [favicon.cc](https://www.favicon.cc/).
* Online photo editor from [Pixlr](https://pixlr.com/x/).
* Stock photos from [Unsplash](https://unsplash.com).
* Paint from [Microsoft](https://apps.microsoft.com/store/detail/paint/9PCFS5B6T72H?hl=en-us&gl=us)
* Snip and Sketch from [Microsoft](https://apps.microsoft.com/store/detail/snipping-tool/9MZ95KL8MR0L?hl=en-gb&gl=gb)
* PDF Reader from [Adobe Acrobat Reader](https://www.adobe.com/uk/)

## Testing

See the document [TESTING.md](TESTING.md) for the automated amd manual tests.

## Deployment

### Gitpod LocalHost Deployment

1. To run a frontend (HTML, CSS, Javascript only) application in Gitpod, [in the terminal](docs/pictures/deploy-python.jpg), type:
	```python
	python3 -m http.server
	```
2. A blue button should appear to click: [_Make Public_](docs/pictures/deploy-port-8000.jpg),
3. Another similar blue button should appear to click: _Open Browser_. If this is not seen, click on the:
	* [_Ports icon_](docs/pictures/deploy-port-browser.jpg) **1** then the port address or globe icon **2** to run the project in a new browser tab.

The ports can also be accessed via the bottom blue banner, where it shows [_Ports: 8000_](docs/pictures/deploy-open-port.jpg)

In Gitpod you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal.

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
	- [See the screenshot](docs/pictures/github1.jpg)
2. At the top of the Repository (not top of page), locate the ["Settings" Button](docs/pictures/github2.jpg) on the menu.
3. Scroll down the Settings page until you locate the ["Pages" Section](docs/pictures/github3.jpg) on the left hand side.
4. Under "Branch", click the dropdown called "None" and [select "main"](docs/pictures/github4.jpg).
5. Branch section should look like [this screenshot](docs/pictures/github5.jpg). Wait a few minutes for the page to automatically refresh.
6. Scroll back to top of the page to locate the now published site in the ["GitHub Pages" section](docs/pictures/github6.jpg). Copy this link.
7. Go back to your repository and select the [Setting gear icon](docs/pictures/github7.jpg) to the right of "About".
8. Paste your url into the [box under "Website"](docs/pictures/github8.jpg) and click the "Save Changes" button.
9. You now have a [link for everyone](docs/pictures/github9.jpg) to use from your repository.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

A huge thank you to the following people and organisations, because without you, the website would not have been produced in it's present form.

### From the Course

Sample README and GitHub deployment instructions from [Code Institute](https://github.com/Code-Institute-Solutions/SampleREADME)

Markdown Cheatsheet from [Adam Pritchard](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#html)

### Media

[Whac-A-Mole](https://en.wikipedia.org/wiki/Whac-A-Mole) by Wikipedia

Girl playing Whac-A-Mole by [sa_ku_ra / sakura](https://www.flickr.com/photos/sa_ku_ra/18984918/) on Flickr
- Attribution 2.0 Generic [(CC BY 2.0)](https://creativecommons.org/licenses/by/2.0/)

Wallpaper for 404 page from [Maxim Berg](https://unsplash.com/@maxberg) on Unsplash

Colour palette [Minty Leaves](https://blog.depositphotos.com/neon-color-palettes.html) by Maria Sibirtseva 

### Code
Although the code is the work of the author, some of the code has been sourced from or inspired by others.

Many of the references have been embedded as links throughout this document and indicated by the active blue text links.

[Learn JavaScript by building 7 games](https://www.freecodecamp.org/news/learn-javascript-by-building-7-games-video-course/) by Ania Kubow on freeCodeCamp

[Build your own CANDY CRUSH using JavaScript, HTML and CSS](https://www.youtube.com/watch?v=XD5sZWxwJUk) by Ania Kubow on YouTube

[Convert px to rem - An effective workflow](https://dev.to/swastikyadav/convert-px-to-rem-an-effective-workflow-4m4j) by Swastik Yadav on DEV Community

[Typical Device Breakpoints](https://www.w3schools.com/howto/howto_css_media_query_breakpoints.asp) from W3 Schools

[Creating a custom 404 page for your GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site) by GitHub Docs

[Custom redirects are not supported](https://til.simonwillison.net/github/github-pages) by Simon Willison

## Acknowledgements

Rohit Sharma - [Code Institute](https://codeinstitute.net/) Mentor, for the continuous feedback and guidance in industry standards.

Rachel Furlong - [EKC DigitalLearn](https://ekcgroup.ac.uk/business-units/ekc-digitallearn) Course Facilitator, for generous support and advice.
 