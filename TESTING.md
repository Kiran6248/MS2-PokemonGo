# Pokemon Go...
## A memory game website by Kiran Satyarthy- Testing details

[Main README.md file](README.md)

[View live site here](https://kiran6248.github.io/MS2-PokemonGo/index.html)

## Testing

[W3C Markup Validation Service](https://validator.w3.org/)

* W3C markup validation service is used for the testing of the **HTML** of all 3 HTML pages and **no error** was found.

    The results can be seen here.

* [index.html](assets/docs/index-test.JPG)
* [pokemon.html](assets/docs/pokemonhtml-test.JPG)
* [contact.html](assets/docs/contacthtml-test.JPG) 
this file was showing error that "type" in not required for javascript, So I removed the type from javascript cdn in the head element and now the page is error free.

[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)

* W3c CSS validation service is used for the testing of the **CSS** of the project and no error was found.

    The result can be seen here.

* [style.css](assets/docs/css-test.JPG)

[JSHint](https://jshint.com/)

* JSHint, a JavaScript code quality tool was used to test the **JavaScript** codes of all 3 js pages from the project.

    The result can be seen here.

* [main.js]() After running main.js file through jsHint, some warnings were appearing,that "let" and "const" is available in ES6 or use mozilla extension. I replaced all let and const variables by "var" and that warning is gone. Still some warnings about Arrow function syntax is appearing, which can be ignored.

* [pokemon.js]() This file is mainly made by jQuery, so when testing it through jsHint, It was showing $ as undefined variable, ths can be ignored.

* [contact.js]() This file was showing no error.

 The Project was tested for Browser compatibility. It was found that the game was not working in mobile devices, the cards were not flipping. Which was fixed by checking codes in **AutoPrefixer.github.io** and updating the CSS. That issue is resolved now.
 ***

 ### **Client Stories Testing**

Testing client stories from UX part of README.md 

1. As a kid, I want to play easily and also see my score.
    * The game is a simple memory game with no complicated instructions. A kid will easily understand what he/she has to do. 
    * The score comes in the side with every move and match. If they are plaing in mobile then the score will be seen on the top. At the end of the game the popup also shows the score.

2. As a kid, I want to see pictures of my favourite pokemon and recognize them.
    * The second page of the game is information page about the pokemon. Kids can easily see the vital statistics of each pokemon.
    * Different pokemon can be selected by using dropdown box selector.

3. As a kid, I want to know how much time I took to finish the game.
    * A timer is given with the game, which starts as the first card clicked and stops with the last match of cards.
    * The pop up message also shows the time taken to complete the game.

4. As a kid, I want to restart the game if i make a mistake.
    * One restart button is given which resets the board, when clicked.
    * The restart button also restarts the music.

5. As an adult, I want to catch my favourite pokemon once again.
    * Pokemons are favourite game characters from many years, many grown up people would love to watch the images after long time.

6. As an adult, sometimes i dont want any background sound and want to mute everything.
    * One Music Off button is given to stop the music at any point of game. 
    * the music will be restarted with the restart button or by restarting the game.

7. As an adult, I want to learn about vital statistics of pokemon.
    * The pokemon page shows vital statistics of different pokemons in the form of progress bar. 
    * It is easy to read and compare between two pokemons.

8. As an adult, I want to contact the maker of the game, and give my feedback.
    * One contact form is provided at the contact page with space to write the feedback about the game.
    * Social network links are also provided in the footer at the bottom of every page.

9.  As an adult, I want to easily navigate through pages.
    * Navigation bar is fixed at the top of the site. the navbar has links to all 3 pages of the site and they can be navigated easily.
***

### **Manual Testing of all elements and functionality of every page.**
#### **Home Page**
* **Navigation Bar**

1. Check if the **navigation bar** is fixed always on top.
2. Click the Brand name, check if **Home** page opens.
3. click the **Home** link, check if page stays on home page.
4. click the **Pokemon** link, check if the pokemon page opens.
5. Click the **Contact** link, check if Contact page opens.
6. Check for **Responsiveness** in mobile view, the navigation bar collapsed in hamburger icon.
7. Check in mobile view if all links are opening to respective pages. 

* **Instruction And Moves division**

1. Check for the spelling and content in the instruction and Heading.
2. Click on the card and start the game, check if the **move counter** is increasing with every click.
3. Click on the card and start the game , check if **match counter** in increasing with every match.
4. Click and play the game and check after how many clicks the **stars** started to collapsed. It was observed that the stars collapsed from 3 to 2 after 14 clicks, from 2 to 1 after 23 clicks.
5. Start playong the game and check if the **Timer** start working with the first click, and stops with the last match of the cards.
6. click the **Restart** button, check if it resets the board at any point in the middle of the game.
7. Click the **Music Off** button, check if it stops the music in the when clicked at any point of the game.
8. Go in mobile view and repeat steps 1 to 7, check everything is working.

* **Game Board**

1. Check the game board to be in 4X4 grid view.
2. click the first card and start playing, check if the card turns and stays.
3. click the second card and check if it is not a match then both first and second card will turn back and if it is a match both will stay on pokeman image and match counter increases.
4. click the third card, check if move counter increase.
5. Repeat for every card.
6. Click the first card, check the music starts.
7. repeat steps 1 to 6  for every card.
8. click and finish the game, check if music stops.
9. Finish the game , check if counters and timer stops.
10. finish the game, check one popup modal appears with congratulation message, moves and stars details and time taken information.
11. Click the X button on the top right of the popup, check if the closes and the game board resets.
12. Go to the mobile view,check if the board fits in the viewport.
13. repeat steps 1 to 11 in mobile view and check for responsiveness.

* **Footer**

1. check the Footer is always fixed in the bottom of the page.
2. click the Github link, check if it opens my github page in a different page.
3. click the facebook link, ckeck if it opens facebook login page.
4. click the twitter link, check if it opens twitter login page.
5. click the linkedin link, check if it opens the linkedin login page.
6. go to mobile view and check for reponsiveness.
7. repeat steps 1 to 5 in mobile view.

#### **Pokemon Page**

* **Navigation Bar**

1. click the brand name , check if it opens the home page.
2. click the home link, check if it opens the home page.
3. click the pokemon link, check if it stays on the page.
4. click the contact link, ckeck if it opens the contact page.
5. repeat steps 1 to 4 in mobile view, it was observed that the page is not still, this can be considered as a bug in the page.

* **Pokemon Selector**

1. click the dropdown button, ckeck name of 8 pokemon appears.
2. click on each link and check if respactive pokemon's progress bar and image appears.
3. Check for responsiveness, if it stays in the viewport.

* **Progress Bar**

1. Check the spelling of the heading and content.
2. check the progress bar, they are 6 in numbers.
3. select different pokemon from the pokemon selector and check if the progress bar changes accordingly.
4. check for responsiveness, if it fits in the mobile view.

* **Image section**

1. check if the images matches with the particular pokemon.
2. check the responsiveness of the image in tablet and mobile view.
3. check if the image doesn't stretch or squash in different views.

* **Footer**

    Testing of footer is same as in home section.

#### **Contact Page**

* **Navigation Bar**

1. click the brand name , check if it opens the home page.
2. click the home link, check if it opens the home page.
3. click the pokemon link, check if it opens the pokemon page.
4. click the contact link, ckeck if it stays on the page.
5. repeat steps 1 to 4 in mobile view.

* **Contact form**

1. check spelling and content in the form.
2. Check the name section and the form, check if it allows to write.
3. check in the Email section, check if it gives a message when email format is not correct.
4. write some text in the feedback area, check if it allows to write more than 3 lines.
5. click submit button, check if the email is received in the recipient email address.
6. click the submit button, check it turns green colour after submitting and its text changes to "Feedback Sent".
7. check if the page refreshes after form submitting, this doesn't happen and can be considered as a bug.

* **Footer**

    Testing of footer is same as in home section. 
***  
### **Responsiveness**

* DevTools- Devices tested across a range of widths: iPhone5(320px)| Samsung S5(360px)| iPhone6/7/8/X(375px)| iPhone6/7/8 Plus(414px)| iPad(768px)| iPad Pro(1020px)| Laptop(1200px)| Large Desktop Screen(1920px)
* Viewed site on above range on various browsers: Google Chrome, Firefox, Opera, Safari.
* Viewed on physical devices: small phone(320px)| Large phone(414px)| large tablet(768px)| mediu, laptop(1366px)| Large Desktop Screen(1920px)
***

### **Project Barrier**

* The cdn for emailjs is updated and because of that there should be a change in the javascript code for that. which i was unaware. Later on I got help from a fellow student through slack and that issue was resolved.

* The background image which i was planned to use was not becoming responsive after many attempts and help , so i decided to remove it and changed the theme to the pokeball colour theme.

### **Bug report**

* The pokemon page is not fixed in mobile view.

* The contact form does not get cleared after submitting the form.
***







































