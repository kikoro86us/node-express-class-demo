# Topics to Cover

This is a list of topics that we'll be covering in today's lecture. Feel free to write notes as needed.

---

# HTTP Review and CRUD
- Create, read, update, delete >>> post, get, put, delete

---

# What is Node.js?
- Allows us to write javascript server side
- V8 javascript engine

## What is NPM?
- node package manager
- allows us to maintain dependencies
### NPM init -y
- creates package.json
### NPM install
- installing packages
### Node Modules
- where all the packages are with all the things
- DO NOT PUSH TO GITHUB
### .gitignore
- Any listed file is ignored by git
### package.json
- Lists dependencies
- main property matches the main file name
### package-lock.json
- keeps track of versions in the dependency tree

## Yarn
- yarn docs: https://yarnpkg.com/lang/en/docs/
- sudo npm install -g yarn
- yarn add <package name>
- yarn install

---

# What is Express.js?
- framework for node.js

# Setting up a basic server with Express.js

## Endpoints
- app.METHOD(URL, HANDLER)

## Top-Level Middleware
- BodyParser. DO NOT FORGET THIS
- At the top under the variables (Top-level)
- Order matters

## req.body
- We used this with post today
- postman body-raw-json

## req.params
- URL Parameters
- /:<name> >>> property name
- req.params.<name> >>> property value

## Using a controller
- keeps code clean
- require any needed files at top