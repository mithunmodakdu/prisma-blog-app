import type { Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser = async(req: Request, res: Response) => {
  try{
    const result = await UserServices.createUser(req.body)
    res.status(201).json(result)
  }catch(error){
    res.status(500).send(error)
  }
}

const getAllUsers = async(req: Request, res: Response) => {
  try{
    const result = await UserServices.getAllUsers();
    res.status(200).json(result)
  }catch(error){
    res.status(500).send(error)
  }
}

export const UserControllers = {
  createUser,
  getAllUsers
}