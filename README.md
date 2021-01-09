## All You Can Eat Recipe Website
All You Can Eat Recipe Website is my Milestone 3 project. It is a website where users can search for, upload and store recipes that they would like to use in the future. It covers all the main meals of the day (breakfast, lunch, dessert & dinner) as well as a catch all category of snacks.

Users are also able to search through the website for keywords in the text in order for them to discover new recipes that they might like. It also has a display box to show if it contains gluten and if it is vegan or not.

## UX
This website was designed with a few types of users in mind. You can find the user stories below. The users must be able to search the recipe website, add recipes, edit & delete (their own) recipes as well as if they have admin rights to add a new category. Otherwise if the user does not have admin access, they can only add their own recipes to a category of choice. The website is also responsive to mobile with a side bar menu that opens up to view the menu items.


* As a serious fitness user, I want to use this website as a base to store my favourite healthy recipes
* As a professional (nutritional therapist) I want to create & display an example eating plan for my clients
* As a user who enjoys cooking, I want to explore other peoples recipes and get inspiration
* As a professional chef, I want to be able to store my recipes, display them and allow other people to make them

# (wireframes to be uploaded here)


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
* HTML
    * Used for the website structure
* CSS 
    * Used to style specific components of the website
* Materialize
    * Used for styling of the components such as nav bars, cards, forms and headings
* JQuery 
    * Used to manipulate the DOM and add functionality to Materialize components 
* Python
    Used for the back end and to manipulate & store data
* Flask & Jinja Templating Language
    Used as a framework for Python & to dymanically add hmtl pages, for loops & if statements into html pages
* MongoDB
    Used to store data 

Where you left off

## Testing 
In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

Contact form:
Go to the "Contact Us" page
Try to submit the empty form and verify that an error message about the required fields appears
Try to submit the form with an invalid email address and verify that a relevant error message appears
Try to submit the form with all inputs valid and verify that a success message appears.
In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

Deployment
This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:

Different values for environment variables (Heroku Config Vars)?
Different configuration files?
Separate git branch?
In addition, if it is not obvious, you should also describe how to run your code locally.

Credits
Content
The text for section Y was copied from the Wikipedia article Z
Media
The photos used in this site were obtained from ...
Acknowledgements
I received inspiration for this project from X