## All You Can Eat Recipe Website
All You Can Eat Recipe Website is my Milestone 3 project for my course with Code Institute.
_**Please note that this website is for educational purposes only.**_
 It is a website where users can search for, upload and store recipes that they would like to use in the future. It covers all the main meals of the day (breakfast, lunch, dessert & dinner) as well as a catch all category of snacks.

Users are also able to search through the website for keywords in the text in order for them to discover new recipes that they might like. It also has a display box to show if it contains gluten and if it is vegan or not.

## UX
This website was designed with a few types of users in mind. You can find the user stories below. The users must be able to search the recipe website, add recipes, edit & delete (their own) recipes as well as if they have admin rights to add a new category. Otherwise if the user does not have admin access, they can only add their own recipes to a category of choice. The website is also responsive to mobile with a side bar menu that opens up to view the menu items.


* As a serious fitness user, I want to use this website as a base to store my favourite healthy recipes
* As a professional (nutritional therapist) I want to create & display an example eating plan for my clients
* As a user who enjoys cooking, I want to explore other peoples recipes and get inspiration
* As a professional chef, I want to be able to store my recipes, display them and allow other people to make them

### Wireframes
![Add recipe](/imgs/addrecipe.png)
![Home](/imgs/home.png)
![Login](/imgs/login.png)
![Register](/imgs/register.png)



## Features
### Existing Features
1. Users can register by filling out a username & password on the registeration form
2. Before registeration, users can only see a limited menu. After registeration, they are able to see the entire menu and go on to add/edit/delete the recipes
3. On mobile view, users can open the menu by clicking on the hamburger menu. While the menu is open, scrolling is disabled to prevent users from losing their place on the website.
4. Users can search the website for keywords within the recipes and find their desired result. If no result is found, a message is displayed saying that their are no results found for their search.
5. Users can explore full CRUD functionality when creating websites. They are able to create, read, update & delete websites that they created. With websites from other users, they are only able to read.
6. Users are able to store their own recipes within the database for later retrieval
In this section, you should go over the different parts of your project, and describe each in a sentence or so.
7. Users can add up to 13 ingredients & up to 6 instructions



### Features Left to Implement
1. Display users created recipes onto their profile page
2. Add a save button so users can save the recipes of others and display it on their profile page
3. Add a feature where users can select admin rights and add a admin password to get granted admin usage rights
4. Add a button that allows users to click a button to generate more ingredient & instructions fields
5. Allow users to search by meal preferences ie "vegan", "paleo" etc#
6. Allow users to add their email address, name & surname to their profile

# Technologies Used
* [HTML](https://html.com/)
    * Used for the website structure
* [CSS](https://purecss.io/)
    * Used to style specific components of the website
* [Materialize](https://materializecss.com/)
    * Used for styling of the components such as nav bars, cards, forms and headings
* [JQuery](https://jquery.com/)
    * Used to manipulate the DOM and add functionality to Materialize components 
* [Python](https://www.python.org/doc/)
    Used for the back end and to manipulate & store data
* [Flask](https://flask.palletsprojects.com/en/1.1.x/) & Jinja Templating Language
    Used as a framework for Python & to dymanically add hmtl pages, for loops & if statements into html pages
* [MongoDB](https://www.mongodb.com)
    Used to store data 



## Testing 

* HTML Validator
    * Passed all HTML Validator tests. The only errors that occured were due to the Jinga Templating language being used within the HTML document
* CSS Validator
    * No errors were found in the style.css file
* JSHint
    * No errors were found in the script.js file however, there were warnings due to the use of JQuery
* PEP8 online check
    * No errors found in the Python code

* Contact form:
    * Navigated to the contact form & tried to submit without required data and it showed errors for missing data
* Add Recipe Form:
    * Navigated to the add recipe form & tried to submit without required data and it showed errors for missing data
* Registeration Page:
    * Tried to create a username twice and it gave me an error. 
    * Tried to create a password that was blank or short and it gave me an error
    * Tried to submit the form without data and it gave me an error
* Login Page:
    * Tried to submit the form blank and it gave me an error
    * Tried to submit without password/ username and it gave me an error
* I also created the website with Materialize which allows users to have responsiveness on a variety of different browswers and devices. I tested this with chrome developer tools by changing the screen size as well as selected the targeted screen size.

## Deployment

For deployment on Heroku:
* Create a requir.txt file using the command "python3 -m pip freeze --local > requirements.txt" in the terminal
* Create a Procfile using entering the command "echo web: python app.py > Procfile"
* Add, commit & push changes to the GitHub repository.
* On the Heroku website, create a new app, set the name and select the region that is closest to you. I selected Germany
* Set the deployment method to GitHub and link the repository to the Heroku Application
* Go to the settings and navigate to reveal config in and set the values as follows
    * IP: 0.0.0.0
    * MONGO_URI: mongodb+srv://:@<cluster_name>-ocous.mongodb.net/<database_name>?retryWrites=true&w=majority
    * PORT: 5000
    * SECRET: <your_secret_key>

## Credits
### Content
The recipes were mostly copied from [It doesn't taste like chicken](https://itdoesnttastelikechicken.com/)
For color scheme [Color pallette](https://coolors.co/)
For design & layout [Materialize](https://materializecss.com/)
Wireframes [Balsamiq](https://balsamiq.com/wireframes/desktop/#)

### Acknowledgements
Code Institute mini project
Materialize for style ideas
Brad Traversy's [Flask Crash Course](https://www.youtube.com/watch?v=zRwy8gtgJ1A)
Free Code Camp's [Flask Crash Course](https://www.youtube.com/watch?v=Z1RJmh_OqeA)