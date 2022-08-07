import { SERVER_PORT } from './../global/environment';
import express from 'express';


export default class Server{

    //Propiedades
    public app:express.Application;
    public port:number;

    constructor(){
        this.app=express();
        this.port = SERVER_PORT;
    }

    //Metodo para levantar servidor express
    start(callback:any){
        this.app.listen(this.port, callback);
    }

}