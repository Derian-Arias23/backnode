import {getConecction} from "../database/database"

const getCentroA= async(req, res) => {
    try {
        const connection= await getConecction();
        const result = await connection.query("SELECT * FROM centro_acopio");
        res.json(result);   
    } catch (error) {
        res.status(500);
        res.send(error.message);  
    }
};

const postCentroA = async (req, res) => {
    try {
        const {nombreCA, direccion, correo, contraseña, telefono} = req.body;
        
        if(nombreCA === undefined || direccion === undefined || correo === undefined || contraseña === undefined || telefono === undefined){
            res.status(400).json({ message: "Por favor llenar todos los campos"});
        }
        const centroA = {nombreCA, direccion, correo, contraseña, telefono};
        const connection= await getConecction();
        await connection.query("INSERT INTO centro_acopio SET ?", centroA);
        res.json({message: "Centro de acopio ingresado"});
    } catch (error) {
        res.status(500);
        res.send(error.message);  
    }
};

const updateCentroA = async(req, res) => {
    try {
        const {id} = req.params;
        const {nombreCA, direccion, correo, contraseña, telefono} = req.body;
        
        if(nombreCA === undefined || direccion === undefined || correo === undefined || contraseña === undefined || telefono === undefined){
            res.status(400).json({ message: "Por favor llenar todos los campos"});
        }

        const centroA = {nombreCA, direccion, correo, contraseña, telefono};
        const connection= await getConecction();
        const result = await connection.query("UPDATE centro_acopio SET ? WHERE id = ?", [centroA, id]);
        res.json(result);   
    } catch (error) {
        res.status(500);
        res.send(error.message);  
    }
};

export const methods = {
    getCentroA,
    postCentroA,
    updateCentroA
};