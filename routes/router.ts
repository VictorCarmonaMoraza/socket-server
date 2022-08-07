

import {Router, Request, Response} from 'express';

export const router = Router();

//Metodo GET
router.get('/mensajes', (req: Request, res: Response)=>{
    res.json({
        ok:true,
        mensaje: 'Todo esta bien!!'
    });
});

//Metodo POST
router.post('/mensajes', (req: Request, res: Response)=>{

    //leer la informacion pasada por parametros
    const cuerpo = req.body.cuerpo;
    const de  = req.body.de;
    const para = req.body.para;

    res.json({
        ok:true,
        cuerpo,
        de
        //mensaje: 'POST - Listo'
    });
});

//Metodo POST
router.post('/mensajes/:id', (req: Request, res: Response)=>{

    //leer la informacion pasada por parametros
    const cuerpo = req.body.cuerpo;
    const de  = req.body.de;
    const id = req.params.id;

    res.json({
        ok:true,
        cuerpo,
        de,
        id
        //mensaje: 'POST - Listo'
    });
});