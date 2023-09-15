import { Router, Request, Response } from "express";

//Instanciando o Router
const router = Router();

export default router.get("/test", (request: Request, response: Response) => {
  response.status(200).send("API Working!")
} )
