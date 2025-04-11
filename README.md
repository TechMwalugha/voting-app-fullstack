🗳️ Full-Stack Polling App
A full-stack web application built using Spring Boot, Angular, and Bootstrap that allows users to create, vote on, and view polls in real-time.

🚀 Features
Create and manage polls with multiple options

Cast votes and view live poll results

Responsive UI built with Bootstrap

RESTful API backend with Spring Boot

🛠️ Tech Stack
Layer	Technology
Frontend	Angular, Bootstrap
Backend	Spring Boot, Spring Web
Database	MYSQL Server / H2 (configurable)
Build Tools	Maven (Backend), Angular CLI (Frontend)
📂 Project Structure
bash
Copy
Edit
polling-app/
├── backend/                # Spring Boot Application
│   └── src/main/java/...   # Java source files
├── frontend/               # Angular Application
│   └── src/app/            # Angular components/services
⚙️ Getting Started
Backend (Spring Boot)
Open the project in your preferred IDE.

Set up the DB credentials in application.properties:
yaml
Copy
Edit
spring:
  datasource:
    url: jdbc:sqlserver://localhost:1433;databaseName=voting-app
    username: your-username
    password: your-password
Run the application:

./mvnw spring-boot:run
Frontend (Angular)
Navigate to the frontend folder:

cd frontend
Install dependencies:

npm install
Run the Angular dev server:

ng serve
Visit http://localhost:4200 in your browser.

🧪 API Endpoints
GET /api/polls - Get all polls

GET /api/polls/{id} - Get a specific poll

POST /api/polls - Create a new poll

POST /api/polls/vote - Vote on a poll

🤝 Contributions
Contributions, issues, and feature requests are welcome!
Feel free to fork this repo and open a PR.

📃 License
This project is licensed under the MIT License.
