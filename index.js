const express = require("express");
const { syncDatabase } = require("./configs/db.configs");
const { userRouter } = require("./routes/users.routes");

const app = express();

app.use(express.json());

syncDatabase();

app.use(userRouter);

app.listen(3000, ()=> {
    console.log(`Server is running on port 3000...`);
}); 