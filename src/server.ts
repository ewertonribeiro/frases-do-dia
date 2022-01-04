import express from 'express';
import {config} from 'dotenv';
import { routes } from './Routes/routes';
import path from 'path';
import cors from 'cors'
config();

const port = process.env.PORT

const server = express();

server.use(cors())

server.set('view engine', 'ejs');

server.use(express.static('public'));

server.set('views' , path.join(__dirname , 'views'));

server.use(express.urlencoded({extended:true}))

server.use(routes)

server.listen(port ,()=> console.log(`Server is Running at ${port}`))