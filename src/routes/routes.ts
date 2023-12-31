import express, { Express, Request, Response } from "express";

import {
  addNewUser,
  deleteUser,
  getUserById,
  updateUserById,
} from "../controllers/userController";

import {
  addNewUsers,
  deleteManyUsers,
  getAllUsers,
} from "../controllers/usersController";


const handlerFunction = (req: Request, res: Response) => {
  return res.send("Not Implemented");
};
const handlerTestFunction = (req: Request, res: Response) => {
  return res.send("Test Not Implemented");
};

export const routes = (app: Express) => {
  app.route("/").get(handlerFunction);
  app.route("/test").get(handlerTestFunction);

  app
    .route("/user")
    .get(getUserById)
    .post(addNewUser)
    .put(updateUserById)
    .delete(deleteUser);

  app
    .route("/users")
    .get(getAllUsers)
    .post(addNewUsers)
    .delete(deleteManyUsers);
};
