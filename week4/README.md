Calculator Microservice

This is a simple microservice built using Node.js and Express that provides basic calculator functionality. It supports addition, subtraction, multiplication, and division through a REST API.

1. Prerequisites

*Node.js installed on your system

*npm (comes with Node.js)


2. Installation

Clone the repository or create a new project folder.

Navigate to the project folder and install dependencies:

          npm install


3. Running the Microservice

Start the server by running:

         node server.js

By default, the service runs on port 3000. You can access it at http://localhost:3000.

4. API Endpoints

The microservice provides the following endpoints:

* Addition

Request:   GET /add?num1=10&num2=5
Response:
{
"result": 15
}

* Subtraction

Request:   GET /subtract?num1=10&num2=5
Response:
{
"result": 5
}

* Multiplication

Request:   GET /multiply?num1=10&num2=5
Response:  
{
"result": 50
}

* Division

Request:  GET /divide?num1=10&num2=5
Response:  
{
"result": 2
}

5. Error Handling

The microservice provides meaningful error messages:

* Missing parameters: { "error": "Both num1 and num2 are required." }
* Invalid numbers: { "error": "Invalid numbers." }
* Division by zero: { "error": "Cannot divide by zero." }

