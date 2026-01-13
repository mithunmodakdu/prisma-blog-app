import type { Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser = async(req: Request, res: Response) => {
  try{
    const result = await UserServices.createUser(req.body)
    res.send(result)
  }catch(error){
    console.log(error)
  }
}

export const UserControllers = {
  createUser
}