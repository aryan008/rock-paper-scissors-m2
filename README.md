<h1 align = "center">Rock Paper Scissors</h1>

View the live project at the following [link](https://aryan008.github.io/gameshow-m1/).

![See how the site looks across the devices](assets/rm_files/responsive.PNG)

As per [Wikipedia](https://en.wikipedia.org/wiki/Rock_paper_scissors), “Rock paper scissors is a hand game usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are "rock" (a closed fist), "paper" (a flat hand), and "scissors". It is one of the first games we learn to play growing up, and I have fond memories playing in it in the Schoolyard and with my Family. Hence, the creation of this game using HTML, CSS & JavaScript will allow me to develop my skills.

The aim of this site is to allow the user of the site to participate in this game online. Users will experience:
*	a welcome/rules page where the user can pick the “best of X” games to play
*	a loading page
*	a playing page where they can participate in the Rock, Paper, Scissors (“RPS” hereafter) game against the “computer”
*	instant feedback whether they won, lost or drew the hand played
*	to see if they are winning/losing/drawing by following their score against the “computer”
*	an overall winner/loser of the game

The site is designed to be responsive and accessible across all device sizes, as defined in the testing section of this ReadMe file.
The site is also designed on a “single” webpage. However, the user interaction by virtue of “clicks” on buttons will allow the site user to experience different elements of the same page through the use of JavaScript.

## Table of Contents
* [Site Owner and Product/Business Goals](#site-owner-and-productbusiness-goals)
* [Developer goals](#developer-goals)
* [First Time Visitor Goals](#first-time-visitor-goals)
* [Returning and Frequent Visitor Goals](#returning-and-frequent-visitor-goals)
* [Basic Rules of Game](#basic-rules)
* [User Experience (UX)](#user-experience-ux)
  * *The 5 planes of User Experience – Decisions and Reasons*
   1.	[Strategy plane](#strategy-plane)
   2.	[Scope plane](#scope-plane)
   3.	[Structure plane](#structure-plane)
   4.	[Skeleton plane](#skeleton-plane)
   5.	[Surface plane](#surface-plane)
   
  *	[Who/ What/ How](#who-what-how)
  *	[User stories](#user-stories)

* [Design Features](#design-features)
  1.  [Wireframes](#wireframes)
  2.	[Typography](#typography)
  3.	[Colour scheme](#colour-scheme)
  4.	[Imagery](#imagery)
  5.	[Visual Hierarchy](#visual-hierarchy)
  6.	[Features implemented](#features-implemented)
  7.	[Features left to implement](#features-left-to-implement)

* [Design & UX – How do they come together?](#design--ux--how-do-they-come-together)
  * [User goals](#user-goals)
  * [Site owner goals](#site-owner-goals)
  * [Designer goals](#designer-goals)

* [Information Architecture?](#information-architecture)
  * [Sections](#sections)
  * [How CSS created an experience](#css-experience)
  * [How JS created an experience](#js-experience)
  * [Game Logic and Game Logic diagram](#game-logic-diagram)


* [Technology and Languages used](#technology-and-languages-used)
  *	[Languages](#languages)
  *	[Frameworks, Libraries and Programmes](#frameworks-libraries-and-programmes)

* [Testing](#testing)
  * [Code validation](#code-validation)
  * [Accessibility testing](#accessibility-testing)
  * [Responsive testing](#responsive-testing)
  * [Manual testing](#manual-testing)
  * [Further testing](#further-testing)
  * [Testing user stories from User Experience (UX) section](#testing-user-stories-from-user-experience-ux-section)
  * [Known bugs](#known-bugs)

* [Deployment](#deployment)
  * [Process of deployment](#process-of-deployment)
  * [How to run this project locally](#how-to-run-this-project-locally)

* [Credits](#credits)
  * [Content](#content)
  * [Media](#media)
  * [Code](#code)
  * [Acknowledgements](#acknowledgements)

## Site Owner and Product/Business Goals
As the site owner, the website is to act as the site for all users to play RPS, allowing them to:
* See the details of the history of the game
*	Start/Reset a game of RPS easily with no backward navigation for the user
*	Play RPS as a game
*	Understand the winning hand combinations
*	Visually see if they are beating the computer via a scoreboard
*	Get instant feedback if they won/lost/drew a hand
*	Have an overall winner/loser

The site is to achieve the following goals:
1.	The site is presented in an efficient and authentic way so that the users can quickly start a new game of RPS
2.	The information on the site is displayed clearly and contain all the information necessary for the user to understand the rules of the game and its history
3.	Provide feedback to the players on the result of each hand but also on an overall score basis
4.	Is responsive on all device sizes
5.	Utilize JavaScript to create a user-friendly experience
6.	Creates a positive experience for the user using colour, imagery and layout
7.	To display the content in a culturally appropriate attested to the audience it is aimed at

## Developer goals
As the developer, the site is to achieve the following goals:
1.	Mar the goals of the site owner and user together
2.	Create a positive experience for both parties using the specifications required by both parties
3.	Achieve responsive design across all devices
4.	Utilize the combination of HTML, CSS & JavaScript to enhance the experience of the user and site owner


## First-Time Visitor Goals
As a first-time visitor of the site, I want:

1.	My impression of the site to be a positive experience
2.	To understand the main purpose of the site
3.	To provide relevant content related to RPS – how to play, the history of the game, etc.
4.	A clear and unambiguous layout
5.	An instant feedback loop of the result of each hand against the computer
6.	Easy navigation of the site
7.	The ability to reset my score and start a new game
8.	To understand the score on the site clearly to see if I am winning
9.	The colours, layout and feel of the site to be of a gaming nature as part of cultural appropriation
10.	To pick a “best of X” games to play and there be an overall winner


## Returning and Frequent Visitor Goals
1.	A user-friendly format of playing RPS
2.	To explore the history of this game


## Basic Rules of The Game
The following are the simple rules of RPS:

1.	Rock beats Scissors
2.	Scissors beats Paper
3.	Paper beats Rock


## User Experience (UX)
### _The 5 planes of User Experience – Decisions and Reasons_
#### Strategy Plane

Question |	Response for site design
-------- | ---------
Is the content culturally appropriate? |	Design will be simplistic in terms of UX – Simple game simple design
Is the content relevant? |	Acting as a game, only relevant RPS content will be displayed
Can we provide content in an intuitive way? |	The site will have a series of buttons and, using JavaScript, will feel interactive to the site user
Is the technology appropriate? |	Since RPS is a rules-based game, a combination of CSS and JavaScript will be used for applicable user experience
Who is my target audience? |	People who are interested in learning about RPS and/or want to play the game
Product considerations |	No overload of content/imagery on the site - as per appropriation, RPS is a simple rules-based game and hence the content should reflect that. Allow clear feedback loops on the result of each hand played and an overall winner. Navigation/layout must be easy across all devices for the users.

##### Strategy feasibility scoping
Opportunity |	Importance |	Feasibility
-------- | --------- | -----------
Have a scoreboard for the Player vs CPU score |	5 |	5
Display the images of what the RPS hands look like in real life |	4 |	5
Seamlessly move the page when the user “clicks” the button |	5 |	5
Feedback loops on win/lose/draw – colour/text |	5 |	5
Instructions on how to play |	4 |	5
History of the game |	3 |	4
Setting a score that you “Win” the overall game |	3 |	3
Highest score achieved playing this game |	2 |	3
Have movable images for each hand - similar to a hand movement |	3 |	1
Insert audio for each hand played |	3 |	4
Two independent people playing against each other |	2 |	1

#### Scope Plane
What's in? |	What's out?
-------- | ---------
Player vs Computer scoreboard incrementation |	Two independent players to play against each other
Images as buttons that the user can select to choose their hand |	Highest score achieved whilst playing
Use of JavaScript to move between site stages i.e. from landing on the page to playing a game |	Moveable images on each hand similar to real life
Feedback loops on results	
Instructions on how to play/ winning hand combinations	
History of the game	
“First to X” – overall game winning score	
Audio for each hand played	
Allow the user to specify how many hands counts as a “Win” – i.e. who wins the game overall?	
Moveable images for each hand – using button animation	

#### Structure Plane
Question |	Response for site design
-------- | ---------
How do I navigate easily? |	Pre-game: Clicking on the allocated buttons (game number choice & Lets Play). During game: New game/reset button and back to main menu button 
How is the information presented? |	Using gaming style colours/features and minimal text content that allow the user to achieve their goals. Dark background to light interface for a clear separation of colours to the users. Clear feedback on the result of each hand played. The buttons on the landing page have glow affects, enticing the users to click on them.
State changes |	When the user clicks the number of games they want to play, JavaScript is used to display the “Let’s Play” button (this is often used in gaming as a 2nd state change). When the user clicks “Let’s Play”, JavaScript is used to start the game via a loading screen. There is a clear state change at the end of each hand through various JavaScript functions – colour change, scoreboard incrementing, etc. An overall winner/loser section takes over the entire screen once the user/computer reaches the specified number of wins.
Is the site consistent? |	Correct styling and fonts are applied throughout the site. Colour flashing on the scoreboard and buttons on the end of each round of hands is kept consistent.
Is the site predictable? |	After each “page” change from the use of JavaScript, the resulting “page” is familiar to the user in terms of font/styling consistency.
Is the site appropriately visible? |	See the testing/visual hierarchy section of this ReadMe file for visibility testing.
How does the user know to scroll/what to do? |	The buttons used to both progress through the site and play the game are adequately displayed and clear for the user to complete the necessary steps.
How does the user know if they are winning? |	The scoreboard will increment to either the user or the computer at the completion of each hand. Additionally, both the button hand chosen and the scoreboard will flash according to the result of the hand (Green is win, yellow is draw, red is lose). Further, text is displayed below the scoreboard on each hand showing both what the user clicked and what the computer chose. After the “first to X games won”, a state change will be made to the user detailing Congratulations/Commiserations on an overall game basis along with a trophy.
User error – what if it happens? |	Providing information to the user if this happens, and how to safely navigate back to the home page.
Information architecture |	Using the tree structure with no more than 3 clicks for the user to reach a destination.

#### Skeleton Plane
Question |	Response for site design
-------- | ---------
How will the users get around? |	Easy navigation for the user using call to action buttons pre-game and buttoned links during the game. The users can reset the game from the game page itself, as well as navigating back to the main menu by clicking on a button.
How will I present the content? |	Following industry norms of the header -> content -> footer approach across all pages.
How do I show relevant content? |	By making the content audience appropriate as defined by the site user goals. By using representational icons which the user is familiar with from playing RPS.
How do I make the experience a positive one? |	As defined in the strategy plane, following the simple game simple design approach. Through listening to the user goals, the content on the webpage is simplistic to avoid over-information. Use of JavaScript will allow seamless transitions from the landing page to playing the game. The cursor pointer and various text transition effects will be involved in producing a further positive response from the user. The state changes noted in the structure plane also discuss key colour effects on the result of each hand played.
How do I structure the features and usability? |	Pre-game: Simple text in a block followed by a call to action for the user to click how many games they’d like to play, followed by a CTA Let’s play button. During game: 1.	Scoreboard feature 2.	Navigation/reset buttons 3.	Clear buttons to click for the user to play the game 4.	Feedback using text/colouring on the result of each hand 5.	Overall feedback on the winner/loser on a total basis 6.	Sounds associated with RPS

#### Surface Plane
Question |	Response for site design
-------- | ---------
What is the visual language? |	Colouring as per testing norms, layout is sparse but informative, Fonts as per media display standard, images are clear and pop to the user, JavaScript for call to action for the user to progress from landing page to the game
What is the economy? |	The most important user/owner elements are easily recognised
Readability and consistency |	After each “page” change from the use of JavaScript, the resulting “page” is familiar to the user in terms of font/styling consistency

### _Who/ What/ How_
**Who is it for?** Users who want to understand RPS and its rules, its history and play a game

**What is it for?** Users who wish to play a game against the computer online

**How will it achieve this?** Through creating a RPS site, and through JavaScript, allow the user to compete against a computer opponent for a “best of X” series

### _User Stories_
RPS is one of the earliest games I ever played as a child. A simple, rules based logical game that can be both incredibly fun and lead to bragging rights for a brief time. Often, RPS is a “toss a coin” moment, something two people do to decide on an action.

Hence, I want a site where I can:
1.	Play RPS against a computer
2.	Learn about the history of RPS
3.	Navigate easily
4.	See if I’m winning or not
5.	Not become overburdened by information – this is a simple game


#### Wireframes
* Desktop wireframe - [attached](assets/rm_files/wireframe-desktop.pdf)
* Tablet wireframe - [attached](assets/rm_files/wireframe-tablet.pdf)
* Mobile wireframe - [attached](assets/rm_files/wireframe-mobile.pdf)

#### Typography
Lato is used as the main font on the site, as imported through Google Fonts. Sans-serif is used as the fallback font. According to an article on [perpetual media group](http://www.perpetualmediagroup.ca/tenbestfontsforprintandweb/):
“The semi-rounded details of the letters give Lato a feeling of warmth, while the strong structure provides stability and seriousness.”

Further, in this [blog post](https://www.justinmind.com/blog/best-google-web-fonts-website/), Lato is ranked as #1 on the “30 best Google Fonts for your website”. It is known that the designer of this font, Lukasz Dziedzic, “created Lato to work transparently in body text and also to stand out individually when used in larger-sized titles”.
With these descriptions in mind, Lato is used for the game design/accompanying text.

#### Colour Scheme
The main colours used on the site are a shade of black and white:
* Background: rgb(32, 32, 32) (black)
* Text colour: rgb(255,255,255) (white)
The reason for this is to achieve a “pop” effect on the icons and text presented, making them appeal more to the screen reader. 

According to [designwebkit](https://designwebkit.com/design/gaming-website-templates-professional-tips-build-game-website/#:~:text=As%20you%20may%20notice%2C%20most,brown%2C%20grey%2C%20and%20khaki.):

_“Most popular gaming websites use dark colour scheme for their websites to create a mystic and engaging ambiance. The most popular colours for such websites are black, brown, grey, and khaki”._

Further colourings used on the site:
* Href links on the hover: rgb(43, 107, 226) (slate blue as per norms)
* Box-shadow opacity on both the hero image and vector spinning image of 0.877 (dark purple for gaming feel)
* Box-shadow opacity on both the game choice buttons and Let’s Play button of 0.877 (contrast white for user CTA)

Flash colourings added on a win/draw/loss to the scoreboard:
* Win - rgb(49, 245, 31) (Green)
* Loss - rgb(226, 77, 77) (Red)
* Draw - rgb(255, 255, 0) (Yellow)
* 
Flash colourings added on a win/draw/loss to the game buttons of rock/paper/scissors:
* Win - rgb(49, 245, 31) (Green)
* Loss - rgb(226, 77, 77) (Red)
* Draw - rgb(255, 255, 0) (Yellow)

Keyframes were applied to all colourings here to add a scale animation to the button the class affected by it. The keyframes had a 1.5s ease-in-out timing function and went from scale 1.05->0.95->1.
Documentation on the help with the implementation of these keyframe features are sourced [here](https://css-tricks.com/almanac/properties/a/animation/---*/).

#### Imagery
On the landing page, a hero image is displayed as a vector icon of the RPS game. CSS is used to add a coin-flip effect to this picture, as RPS is a game of chance.
On the loading page, a similar vector image is displayed and rotates in a circular 360degree manner. The help for creation of this flip is sourced at [this Stack Overflow post](https://stackoverflow.com/questions/10123700/how-to-make-a-picture-rotate-continuously).
A loading gif is also created during the loading page, which was created from scratch on spinner.io to match the background colour perfectly.
The site uses three separate images during the playing of the game in the button hand choices. These images correspond to the Rock/Paper/Scissor icons that are associated with the game; hence they will be familiar to the user. 
The use of emoji’s – either smiley faces or trophy – are displayed throughout the site as a form of feedback loop to the user on each hand.
Font Awesome is used to display emoticons on the landing page.
See the credits section of this ReadMe file for all appropriate accreditation of the imagery used.

#### Visual Hierarchy
According to the following article on [Visual Hierarchy](https://www.interaction-design.org/literature/topics/visual-hierarchy):

“Visual hierarchy controls the delivery of the experience. If you have a hard time figuring out where to look on a page, it’s more than likely that its layout is missing a clear visual hierarchy.”

The following characteristics per the article are manipulated (__article narrative in bold__, _developer response in italic_):
* __Size – Users notice larger elements more easily.__ _The three images of Rock/Paper/Scissors will be large and act as buttons to play the game with, allowing instant notice by the user. The 4 game number choices available to the user will be slightly smaller than the CTA of “Let’s Play” to start the game, highlighting that the click of the “Let’s Play” button is the final step before the game starts._
* __Colour – Bright colours typically attract more attention than muted ones.__ _The contrast between the dark background and bright text attracts the user the read the text more visibly. Colour classes are added at the end of each hand to visibly display to the user whether they won, lost or drew the hand. See the testing section of this file for contrast testing._
* __Contrast – Dramatically contrasted colours are more eye-catching.__ _As noted above._
* __Repetition – Repeating styles can suggest content is related.__ _The style is repetitive – information for the user follows the same pattern after each “click” by the user._
*	__Proximity – Closely placed elements seem related.__ _Content is grouped based on spacing for user readability sectioning. The grouping of the game number choice buttons are placed beside each other as these are the options, before making way to the singular “Let’s play” button. The grouping of the three images draws the users into the fact that these are the suggested icons to click on to play the game. The scoreboard is noted below the buttons – this is a design choice seen in most gaming circles._
*	__Whitespace – More space around elements draws the eye towards them.__ _Spacing is used effectively according to the hub needs of the product goals._
*	__Texture and Style – Richer textures stand out over flat ones.__ _As noted in the typography section._





