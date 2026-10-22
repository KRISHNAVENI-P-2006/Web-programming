# Web Programming Lab & Practice Repository

A collection of web programming lab experiments, practical exercises, and mini-projects exploring frontend development, server-side programming, database connectivity, and backend APIs.

This repository documents my learning and implementation of web technologies, from basic HTML pages and JavaScript programs to PHP–MySQL applications and Node.js–MongoDB experiments.

The projects are maintained in separate folders so that each experiment can be explored and executed independently.

## 📌 Table of Contents

- [About the Repository](#-about-the-repository)
- [Technologies Used](#-technologies-used)
- [Repository Structure](#-repository-structure)
- [Projects and Experiments](#-projects-and-experiments)
  - [Basic HTML](#1-basic-html)
  - [Student_CRUD](#2-student_crud)
  - [basic_express](#3-basic_express)
  - [expenses_mogodb](#4-expenses_mogodb)
  - [form validation](#5-form-validation)
  - [javascripts](#6-javascripts)
  - [node_basic](#7-node_basic)
  - [php](#8-php)
  - [students_crud](#9-students_crud)
  - [library.js](#10-libraryjs)
- [Prerequisites](#-prerequisites)
- [Installation and Setup](#-installation-and-setup)
- [How to Run the Experiments](#-how-to-run-the-experiments)
- [Troubleshooting](#-troubleshooting)
- [Learning Outcomes](#-learning-outcomes)

## 📖 About the Repository

Web development involves several technologies working together:

- **HTML** structures the content of web pages.
- **CSS** controls the presentation and layout of web pages.
- **JavaScript** adds interactivity and client-side functionality.
- **PHP** handles server-side web application logic.
- **MySQL** provides relational database storage.
- **Node.js** allows JavaScript to run outside the browser.
- **Express.js** simplifies the development of web servers and APIs.
- **MongoDB** provides document-oriented database storage.

This repository brings together experiments involving these technologies. Each folder represents a separate area of practice and should be explored individually.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML | Web page structure |
| CSS | Styling and layout |
| JavaScript | Client-side programming and interactivity |
| PHP | Server-side scripting |
| MySQL | Relational database management |
| Node.js | JavaScript runtime for backend development |
| Express.js | Backend routing and API development |
| MongoDB | NoSQL database |
| Git and GitHub | Version control and source code management |
| XAMPP | Local PHP and MySQL development environment |
| Postman | Testing HTTP APIs, where applicable |

*The technologies required vary by experiment. Not every project uses the entire stack.*

## 📁 Repository Structure

The repository is organized into the following top-level folders and files:

```text
Web-programming/
│
├── Basic HTML/
├── Student_CRUD/
├── basic_express/
├── expenses_mogodb/
├── form validation/
├── javascripts/
├── node_basic/
├── php/
├── students_crud/
├── library.js
└── README.md
```

Folder names are preserved as they appear in the repository. In particular, `Student_CRUD` and `students_crud` are separate paths and should not be assumed to contain the same implementation.

## 🧪 Projects and Experiments

### 1. Basic HTML

**Focus:** Fundamentals of HTML and web page creation.

This folder is intended for exploring the building blocks of web pages.

Concepts to explore include:

- HTML document structure and commonly used tags.
- Headings, paragraphs, links, and images.
- Lists and tables.
- Forms and input elements.
- Embedding and organizing page content.

**How to run**

1. Open the `Basic HTML` folder.
2. Locate the HTML file you want to execute.
3. Open the file in a web browser, or use the Live Server extension in VS Code.

No backend server or database is required for ordinary static HTML pages.

### 2. Student_CRUD

**Focus:** Student record management and CRUD operations.

CRUD stands for Create, Read, Update, and Delete. A student management application commonly uses these operations to maintain student information.

The purpose of this folder is to explore the implementation of student records through a web application. The precise implementation, database requirements, and supported operations should be checked against the source files in this folder.

**How to run**

1. Open the folder and inspect its files.
2. Identify the application entry point and the technologies it uses.
3. If it contains PHP files, place the project under your XAMPP `htdocs` directory.
4. Start Apache and, if required, MySQL through the XAMPP Control Panel.
5. If the project includes an SQL script, import it into the appropriate database through phpMyAdmin.
6. Open the relevant PHP entry point through `http://localhost/`.

For example, if you place the folder at `C:\xampp\htdocs\wp\Student_CRUD`, the local URL would begin with `http://localhost/wp/Student_CRUD/`.

The database name, table schema, and exact entry-point filename must match the implementation.

### 3. basic_express

**Focus:** Backend development with Node.js and Express.js.

Express.js is a Node.js framework used to build web servers and REST APIs. An Express experiment can demonstrate request handling, URL routing, middleware, and HTTP responses.

Topics to investigate in this folder include:

- Creating an Express application.
- Handling incoming HTTP requests.
- Defining routes for different endpoints.
- Returning responses to clients.
- Using middleware where implemented.

**Prerequisites**

- Node.js and npm.
- A terminal such as PowerShell or the VS Code terminal.

**How to run**

Open a terminal in the project directory:

```powershell
cd basic_express
```

If the folder contains a `package.json`, install its dependencies:

```powershell
npm install
```

Then check `package.json` for a start script or identify the server's actual entry-point file. For example, if the entry point is `app.js`:

```powershell
node app.js
```

If the entry point has a different name, use that filename instead. Check the terminal output for the port and URL, then open the local server in your browser or test its endpoints using Postman.

### 4. expenses_mogodb

**Focus:** Expense management and MongoDB-based backend practice.

This folder is named `expenses_mogodb` in the repository. It is intended to group expense-related practice involving MongoDB and web application development.

The repository also contains separate Node.js and MongoDB practice work, so inspect this folder's source files to determine the exact implementation and how it differs from the other experiments.

Potential concepts to examine include:

- Representing expense records as documents.
- Connecting a backend application to MongoDB.
- Performing database operations.
- Handling HTTP requests if an API is implemented.
- Testing application behavior with sample expense data.

**Prerequisites**

- Node.js and npm, if the project is Node.js-based.
- MongoDB Community Server or another MongoDB deployment accessible to the application.
- Postman, if the application exposes HTTP endpoints.

**How to run**

```powershell
cd expenses_mogodb
```

If `package.json` exists:

```powershell
npm install
```

Ensure MongoDB is running and that the connection string in the project's configuration points to the correct database. Check for `.env.example`, configuration files, or documented environment variables before starting the application.

Start the project using its configured npm script or actual entry-point file. For example, if the entry point is `app.js`:

```powershell
node app.js
```

If the application uses environment variables, configure them before launching it. Test the available routes only after confirming their definitions in the source code.

### 5. form validation

**Focus:** Validating user input in web forms.

Form validation helps ensure that the information entered by a user satisfies specified rules before it is processed.

Common concepts in this area include:

- Required fields.
- Input format validation.
- Email and other field validation.
- Minimum and maximum input lengths.
- Displaying error messages.
- Preventing invalid submissions.

Client-side validation may be implemented with HTML attributes or JavaScript. Server-side validation, if present, must be examined separately.

**How to run**

1. Open the `form validation` folder.
2. Locate the main HTML file.
3. Open it in a browser or use Live Server.
4. Submit valid and invalid sample inputs to observe the validation behavior.

If the experiment contains PHP or another backend component, use the corresponding local server rather than opening the HTML file directly.

### 6. javascripts

**Focus:** JavaScript programming and browser-side functionality.

This folder is intended for practicing JavaScript independently of a full-stack framework.

Depending on the individual files, useful concepts to explore include:

- Variables and data types.
- Operators and conditional statements.
- Loops and functions.
- Arrays and objects.
- Event handling.
- DOM manipulation.
- Form interactions and dynamic page updates.

**How to run**

For JavaScript files that are standalone scripts, open the associated HTML file in a browser and use the browser's developer console to inspect output and errors.

If a file is intended to run with Node.js instead, open a terminal in the relevant directory and execute:

```powershell
node filename.js
```

Replace `filename.js` with the actual script name. Browser-specific code that accesses the DOM must be executed in a browser.

### 7. node_basic

**Focus:** Core Node.js concepts.

Node.js enables JavaScript execution outside the browser. This folder provides a place to explore basic server-side JavaScript and runtime functionality.

Concepts worth examining include:

- Running JavaScript files with Node.js.
- Modules and imports.
- Reading and writing files.
- Built-in Node.js modules.
- Basic request or server handling, where implemented.
- Package management with npm.

**Prerequisites**

Install Node.js, which includes npm.

**How to run**

```powershell
cd node_basic
```

Identify the JavaScript file you want to execute and run:

```powershell
node filename.js
```

Replace `filename.js` with the actual filename.

If a `package.json` is present, read its scripts and dependencies first. Some examples may run directly with Node.js, while others may require installed packages or environment configuration.

### 8. php

**Focus:** Server-side web programming with PHP.

PHP executes on the server and can generate dynamic HTML, process form submissions, and interact with databases.

Topics to explore include:

- PHP syntax and variables.
- Conditional statements and loops.
- Functions and arrays.
- Handling form input.
- Processing HTTP requests.
- Database interaction, if implemented.
- Generating dynamic web page content.

**Prerequisites**

- PHP installed locally, or XAMPP.
- MySQL if the particular experiment requires a database.

**How to run with XAMPP**

1. Copy the `php` folder into the XAMPP `htdocs` directory.
2. Start Apache through the XAMPP Control Panel.
3. Start MySQL if the application requires it.
4. Open the relevant PHP file through your browser.

For example, if the folder is located at `C:\xampp\htdocs\php`, visit:

```text
http://localhost/php/
```

If the project contains multiple PHP files, open the appropriate entry point. Database-backed examples may require importing an SQL file and updating connection settings before they work.

PHP files should be executed through a PHP server; opening a PHP file directly from the filesystem will not execute the server-side code.

### 9. students_crud

**Focus:** Student CRUD application practice.

This is a second, separately named directory related to student CRUD work. Its exact relationship to `Student_CRUD` should be determined by comparing their source files rather than assuming they are duplicates.

When exploring this folder, look for:

- The frontend form or page used to enter student information.
- The backend or server-side files handling student records.
- The database connection configuration.
- SQL statements or schema definitions.
- Separate pages or routes for listing, editing, and deleting records.

These are inspection points, not a claim that every feature is implemented in this directory.

**How to run**

First inspect the directory to determine whether it uses PHP, Node.js, or another technology.

If it contains PHP files:

1. Copy the folder into XAMPP's `htdocs` directory.
2. Start Apache and any required database service.
3. Import the SQL schema if one is provided.
4. Configure the database connection.
5. Open the folder through `http://localhost/`.

If it contains a Node.js application, use the Node.js setup instructions from the `basic_express` section and follow the scripts and dependencies declared by that project.

### 10. library.js

**Focus:** JavaScript file containing library-related functionality.

`library.js` is a JavaScript file located at the repository root rather than a directory. Its exact purpose and dependencies should be determined by reading its implementation.

To explore it:

1. Open `library.js` in VS Code.
2. Check whether it exports functions or classes, manipulates browser elements, or uses Node.js APIs.
3. Identify the HTML page or JavaScript module that imports or references it.
4. Run it in the appropriate environment.

If it is a standalone Node.js script, execute:

```powershell
node library.js
```

If it depends on browser objects such as `document`, include it in the corresponding HTML page or run that page in a browser. If it exports functions, it may need to be imported by another script rather than executed independently.

## 💻 Prerequisites

Install only the tools required for the experiment you want to run.

| Tool | Required for |
|---|---|
| A modern web browser | HTML, CSS, and browser-side JavaScript |
| Visual Studio Code | Editing and navigating the source code |
| Node.js and npm | Node.js and Express experiments |
| XAMPP | PHP projects and local MySQL development |
| MySQL | Relational database experiments |
| MongoDB | MongoDB-backed experiments |
| Postman | Manual testing of HTTP APIs, when applicable |
| Git | Cloning the repository and tracking changes |

Official installation resources:

- [Node.js](https://nodejs.org/)
- [XAMPP](https://www.apachefriends.org/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- [MySQL](https://dev.mysql.com/downloads/)
- [Postman](https://www.postman.com/downloads/)
- [Visual Studio Code](https://code.visualstudio.com/)

## 🚀 Installation and Setup

### 1. Clone the repository

Ensure Git is installed, then run:

```bash
git clone https://github.com/KRISHNAVENI-P-2006/Web-programming.git
```

Navigate into the repository:

```bash
cd Web-programming
```

Alternatively, download the repository as a ZIP file from GitHub and extract it locally.

### 2. Choose an experiment

Navigate to the directory you want to explore.

For example:

```powershell
cd "Basic HTML"
```

Or return to the repository root and choose a different folder:

```powershell
cd ..
cd node_basic
```

Each experiment may have different requirements. Installing every tool is unnecessary when you only want to run a simple HTML page.

### 3. Check the project files

Before running an experiment, look for:

- `index.html` or another HTML entry point.
- `.js` files containing JavaScript logic.
- `.php` files for PHP applications.
- `package.json` for Node.js dependencies and scripts.
- `.env.example` or configuration files for required environment variables.
- `.sql` files for database schemas or sample data.
- Any project-specific instructions.

Use the actual filenames and configuration present in the selected directory.

## ▶️ How to Run the Experiments

| Project type | Recommended execution method |
|---|---|
| Static HTML | Open the HTML file in a browser |
| HTML with CSS and JavaScript | Open the main HTML page or use VS Code Live Server |
| Standalone Node.js script | Run `node filename.js` |
| Node.js / Express application | Install dependencies and run the configured start command |
| PHP application | Start Apache in XAMPP and visit the local URL |
| PHP + MySQL application | Start Apache and MySQL, configure the database, and visit the local URL |
| MongoDB-backed application | Start the backend, configure MongoDB, and test the application or API |

**Important:** The repository is a collection of independent experiments, not necessarily a single application. There is no reason to expect one command to run every folder.

## 🐛 Troubleshooting

### HTML page does not display correctly

- Check that the correct HTML file is open.
- Verify relative paths to CSS, JavaScript, and image files.
- Inspect the browser developer console for errors.

### `node` or `npm` is not recognized

- Install Node.js.
- Restart the terminal after installation.
- Run `node -v` and `npm -v` to verify that both commands are available.

### Node.js application cannot find a module

- Check whether the project has a `package.json`.
- Run `npm install` in the directory containing that file.
- Verify that the required package is listed as a dependency.

### PHP code is displayed instead of executed

- Ensure the project is accessed through Apache or another PHP server.
- Place the project under the appropriate document root.
- Verify that the URL starts with `http://localhost/`.

### Database connection fails

- Ensure the database server is running.
- Verify the hostname, port, username, password, and database name.
- Check whether the required database and tables have been created.
- Confirm that the application's connection settings match your local environment.

### Port is already in use

- Check whether another process is using the configured port.
- Stop the conflicting process or configure a different port.
- Restart the server after making the change.

### API returns an error

- Confirm that the backend server is running.
- Verify the HTTP method and endpoint.
- Check the server terminal for errors.
- Ensure that the request body and headers match the API's implementation.

## 🎯 Learning Outcomes

Working through these experiments provides practice with:

- Building and structuring web pages.
- Writing JavaScript for browser and server environments.
- Processing and validating user input.
- Understanding the role of backend servers.
- Creating and testing HTTP routes.
- Connecting web applications to databases.
- Performing CRUD operations.
- Debugging application and configuration errors.
- Using Git and GitHub to organize and maintain code.

## 📚 How to Explore This Repository

If you are new to web programming, a useful order is:

1. Start with `Basic HTML` to understand page structure.
2. Explore `form validation` and `javascripts` for client-side behavior.
3. Move to `php` to understand server-side scripting.
4. Explore `Student_CRUD` and `students_crud` to investigate database-backed record management.
5. Study `node_basic` before moving to `basic_express`.
6. Explore `expenses_mogodb` to investigate the MongoDB-based expense application.
7. Read `library.js` in the context of the files that use it.

This is a suggested learning sequence, not a statement about the order in which the experiments were originally developed.

## 🤝 Contributions and Feedback

This repository is maintained as a learning resource for web programming experiments.

If you find an issue, have a suggestion, or want to improve an experiment, feel free to open an issue or submit a pull request.

When extending an experiment, consider documenting its prerequisites, entry point, database setup, and execution instructions so that others can reproduce the results.

---

**Author:** [Krishnaveni P](https://github.com/KRISHNAVENI-P-2006)

**Repository:** [Web-programming](https://github.com/KRISHNAVENI-P-2006/Web-programming)

*Learning web technologies through practical implementation.*
