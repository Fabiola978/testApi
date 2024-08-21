import { Request, Response, NextFunction } from "express";

class UserController{
    static getAll(req:Request, res:Response, next:NextFunction){
        try {
            //const users = UserService.getAll()
            //res.status(200).json({data: users})
        } catch (error) {
            next(error)
        }
    }

    static getById(req:Request, res:Response, next:NextFunction){
try {
    //conts { id } = req.params
} catch (error) {
    
}
    }
}