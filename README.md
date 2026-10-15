1. Project Description

This project is a REST API developed using TypeScript, Node.js, Express.js, MySQL, and TypeORM. It manages user information stored in a MySQL database and supports Create, Read, Update, and Delete (CRUD) operations.

The API includes input validation, duplicate email checking, error handling, and a health-check endpoint. It also prevents passwords from appearing in normal API responses.

2. Setup Instructions

Requirements:
Node.js v20 or v22 LTS
MySQL Server
MySQL Workbench
Visual Studio Code
Postman or EchoAPI for VS Code

Step 1: Create the Database
Open MySQL Workbench and execute:
CREATE DATABASE midterm_api;
Make sure MySQL Server is running before proceeding.

Step 2: Install Dependencies
Open your project folder in VS Code and run:
npm install
If you are setting up the project from scratch, install the required packages:
npm install express typeorm mysql2 reflect-metadata dotenv cors
npm install -D typescript tsx @types/node @types/express @types/cors

Step 3: Configure Environment Variables
Create a .env file in the project root:
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_mysql_password
DB_DATABASE=midterm_api
Replace your_mysql_password with your actual MySQL password. Ensure the variable names match your DataSource configuration.

Step 4: Configure TypeScript
In tsconfig.json, enable the following options:
{
  "experimentalDecorators": true,
  "emitDecoratorMetadata": true
}
Keep the other required TypeScript configuration options in your existing file.
Step 5: Check the Project Structure
midterm-crud-api/
├── src/
│   ├── config/
│   │   └── data-source.ts
│   ├── controllers/
│   │   └── userController.ts
│   ├── entities/
│   │   └── User.ts
│   ├── routes/
│   │   └── userRoutes.ts
│   └── index.ts
├── .env
├── .gitignore
├── package.json
└── tsconfig.json
Make sure .gitignore contains:
node_modules/
dist/
.env

3. How to Run the Application
Start MySQL Server.
Open the project folder in VS Code.
Install dependencies using npm install.
Make sure the dev script in package.json is configured to use tsx watch:
"scripts": {
  "dev": "tsx watch src/index.ts"
}
Start the application:
npm run dev
Once the server starts successfully, access the API at:
http://localhost:3000

4. API Endpoints Documentation

Base URL: http://localhost:3000
Method      Endpoint        Description
GET          /health        Checks whether the API is running.
GET          /api/users     Retrieves all users.
GET       /api/users/:id    Retrieves a user by ID.
POST        /api/users      Creates a new user.
PUT       /api/users/:id    Updates a user's information.
DELETE    /api/users/:id    Deletes a user by ID.

Create a User
Method: POST
Endpoint: /api/users

Example JSON body:

{
  "name": "Kriszyle Hugo",
  "email": "kriszylehugo@example.com",
  "password": "1234567"
}
Expected status: 201 Created

Update a User
Method: PUT
Endpoint: /api/users/1


HTTP Status Codes
200 OK – Request completed successfully.
201 Created – User created successfully.
400 Bad Request – Required fields are missing or input is invalid.
404 Not Found – User or route does not exist.
409 Conflict – Email address already exists.
500 Internal Server Error – Unexpected server error.

5. API Testing
The following tests should be performed using Postman or EchoAPI:
Check the server using GET /health.
Retrieve users when the table is empty.
Create the first user.
Create a second user.
Retrieve all users.
Retrieve a user by ID.
Request a non-existent user.
Create a user with a duplicate email.
Create a user with missing required fields.
Update a user.
Delete a user.
Verify that the deleted user is no longer listed.
Request a non-existent API route.

6. Reflection Questions
1. What was the most challenging part of building this API?
The hardest part of building this API was connecting MySQL with TypeORM and making sure everything was set up properly. I encountered a few errors with database credentials, TypeScript decorators, and entity configuration. Although fixing these issues was challenging.

2. How does TypeORM make database operations easier compared to raw SQL?
TypeORM provides methods like find(), save(), and delete(), making database operations easier without writing SQL queries every time.

3. Why is it important to exclude the password field from API responses? How did you implement this?
Passwords are sensitive information and should stay private. I would exclude the password field from API responses to protect user data.

4. Describe a scenario where you would need to use database transactions instead of individual 
operations.
I would use transactions when multiple operations must succeed together, such as saving an order and updating product stock.

5. What is the difference between `synchronize: true` and migrations? When should you use each?
synchronize: true updates the database structure automatically and is useful during development. Migrations manage changes safely and are better for production.

6. If you had to add a `Product` entity with a relationship to `User` (a user can have many products), how would you modify the code?
I would create a Product entity and use @OneToMany() in User and @ManyToOne() in Product to establish the relationship.

7. What security improvements would you make before deploying this API to production? (Hint: password hashing, rate limiting, authentication, etc.)
I would add password hashing, authentication, authorization, rate limiting, and input validation to protect the API and user data.