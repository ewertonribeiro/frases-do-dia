import { GetFrasesServices } from './../Services/GetFrasesService';
import {Controller as C} from './Controller';


const GetFrasesService = new GetFrasesServices()
const Controller = new C(GetFrasesService)


export {Controller}