[CHECK OUT THIS DEPLOYED LINK TO HEROKU!](https://immense-oasis-00715.herokuapp.com/)
___
# SLURP DA SOUPS
___
>Created by **Christopher Gottshalk**
---
**SLURP DA SOUPS** is a restaurant app that lets users input the names of soups they'd like to eat.
Whenever a user submits a soups's name, the app will display the soup on the left side of the page -- waiting to be SLUPRED!
Each soup in the waiting area also has a `SLURP!` button. When the user clicks it, the soup will move to the right side of the page.
Each soup on the right will have an option to `DELETE!` or `RE-ORDER!` 
The app will store every soup in a database, whether slurped or not.

### INSTRUCTIONS 
---
Navigate your way to the home page. Enter in any soup. AND ONLY SOUP! Get to slurping! Delete them soups. or Re-order. But keep my tables clean!

---

### Pictures of App in Action!
---
![alt text](app/public/imgs/pagescreenshot.png "Home page")
**View of Homepage**
---
---

### TECHNOLOGIES USED
---
* Javascript
* MySQL
* Handlebars
* Nodejs
* jQuery
* Express
* Bootstrap
* CSS
* HTML
* Git
* GitHub


---
---


### Requirements
---
Deploy to Heroku
Back up to MySQL Database
create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.
---

Folder structures

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
 ├── index.handlebars
    └── layouts
        └── main.handlebars
```
