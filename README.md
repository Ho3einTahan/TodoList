#### 📌 Todo Application with Admin Panel
#### A simple and efficient Todo List application with a backend API and control panel.

#### 🖼️ Screenshots

![todo-1](https://raw.githubusercontent.com/Ho3einTahan/TodoList/main/images/todo-list-1.png)
![todo-2](https://raw.githubusercontent.com/Ho3einTahan/TodoList/main/images/todo-list-2.png)
![todo-3](https://raw.githubusercontent.com/Ho3einTahan/TodoList/main/images/todo-list-3.png)


#### 🧭 API Roadmap

| Method | Endpoint                     | Description                                          |
| ------ | ------------------------ | ------------------------------------------------ |
| GET    | /todo/all                |  Get All Todos                                   |
| GET    | /todo/:id                |  Get Todo By Id                                  |
| POST   | /create                  |  Create New Todo                                 |
| PUT    | /update/:id              |  Update Todo By Id                               |
| DELETE | /delete/:id              |  DELETE Todo By Id                               |

#### 🚀 Getting Started

1. Clone the Repository:
``` git 
git clone https://github.com/Ho3einTahan/TodoList
cd TodoList
```

2. Make sure MongoDB is installed and running locally.

3. Configure Database

#### Update the `MongooseModule` connection in app.module.ts:
``` javascript
    MongooseModule.forRoot('mongodb://localhost:27017/todo-app'),
```

3. Install Dependencies and Start the Server
``` javascript
npm install
npm run start
```

🙏 Thanks for using this tool!
<br>
© 2025 — All rights reserved. Developed with ❤️ by Ho3ein Tahan