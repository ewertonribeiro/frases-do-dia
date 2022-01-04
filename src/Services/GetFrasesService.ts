import { frases } from "../db/frases";


export class GetFrasesServices{
    constructor(){}

     execute(day:number):string{

        const frase = frases[day - 1]


        return frase
    }
}