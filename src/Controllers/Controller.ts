import { GetFrasesServices } from './../Services/GetFrasesService';
import { Request , Response } from "express";

type date = {
    day:number,
    month:number,
    year:number
}

interface IResponse{
    date:date,
    frase:string
}

export class Controller{
    constructor(private GetFrasesServices:GetFrasesServices){}

     handle(req:Request , res:Response):Response<IResponse>{

        const newDate = new Date();

        const date = {
            day:newDate.getDate(),
            month:newDate.getUTCMonth() + 1,
            year:newDate.getFullYear(),
        }

        const frase = this.GetFrasesServices.execute(date.day);

        const response = {
            date:{
                day:date.day,
                month:date.month,
                year:date.year
            },
            frase:frase
        } as IResponse

        return res.status(200).json(response)
    }
}