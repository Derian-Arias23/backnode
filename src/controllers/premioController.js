import {getConecction} from "../database/database"

const getPremios = async(req, res) => {
    try {
        const connection= await getConecction();
        const result = await connection.query("SELECT id, premio, descripcion FROM premios");
        res.json(result);   
    } catch (error) {
        res.status(500);
        res.send(error.message);  
    }
};

const postPremio = async (req, res) => {
    try {
        const {premio, descripcion} = req.body;
        
        if(premio === undefined || descripcion === undefined){
            res.status(400).json({ message: "Por favor llenar todos los campos"});
        }
        const pre = {premio, descripcion};
        const connection= await getConecction();
        await connection.query("INSERT INTO premios SET ?", pre);
        res.json({message: "Premio ingresado"});
    } catch (error) {
        res.status(500);
        res.send(error.message);  
    }
};

const updatePremio = async(req, res) => {
    try {
        const {id} = req.params;
        const {premio, descripcion} = req.body;
        
        if(premio === undefined || descripcion === undefined ){
            res.status(400).json({ message: "Por favor llenar todos los campos"});
        }

        const pre = {premio, descripcion};
        const connection= await getConecction();
        const result = await connection.query("UPDATE premios SET ? WHERE id = ?", [pre, id]);
        res.json(result);   
    } catch (error) {
        res.status(500);
        res.send(error.message);  
    }
};

export const methods = {
    getPremios,
    postPremio,
    updatePremio
};