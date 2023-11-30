import { Database } from "./final_database2.js";

const dbFunction = new Database("mydb4.db");

dbFunction.createTable()
    .then(() =>  {
        const newUser = { username: "dukov", email: "dukov@sesac.com" };

        dbFunction.insertUser(newUser);
    })
    .then(() =>  {
        const newUser = {
            id: 2,
            username: "sesac",
            email: "sesac@sesac.com"
        };

        dbFunction.updateUser(newUser);
    })
    .then(() => {
        const delUser = {
            id: 3
        };

        dbFunction.deleteUser(delUser);
    })
    .then(() => dbFunction.selectUser())
    .then(() => dbFunction.db.close())
    .catch((err) => console.error(err))