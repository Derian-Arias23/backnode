import {getConecction} from "../database/database"

const getRankings = async(req, res) => {
    try {
        const connection= await getConecction();
        const result = await connection.query("SELECT ranking_usuarios.id, persons.Nombre, ranking_general.fecha_inicio, persons.Correo, persons.Telefono, ranking_general.fecha_fin, ranking_usuarios.premio FROM persons INNER JOIN ranking_usuarios ON persons.id = ranking_usuarios.id_persona INNER JOIN ranking_general ON ranking_usuarios.id_ranking_general = ranking_general.id");
        res.json(result);   
    } catch (error) {
        res.status(500);
        res.send(error.message);  
    }
};

const getRanking = async(req, res) => {
    try {
        const {id} = req.params;
        const connection= await getConecction();
        const result = await connection.query("SELECT ranking_usuarios.id, persons.Nombre, ranking_general.fecha_inicio, persons.Correo, persons.Telefono, ranking_general.fecha_fin, ranking_usuarios.premio FROM persons INNER JOIN ranking_usuarios ON persons.id = ranking_usuarios.id_persona INNER JOIN ranking_general ON ranking_usuarios.id_ranking_general = ranking_general.id WHERE ranking_usuarios.id =?", id);
        res.json(result);   
    } catch (error) {
        res.status(500);
        res.send(error.message);  
    }
};

/* const postRanking = async (req, res) => {
    try {
        const {Nombre, fecha_inicio, cantidad, fecha_fin} = req.body;
        
        if(Nombre === undefined || fecha_inicio === undefined || cantidad === undefined || fecha_fin === undefined){
            res.status(400).json({ message: "Por favor llenar todos los campos"});
        }
        const ranking = {Nombre, fecha_inicio, cantidad, fecha_fin};
        const connection= await getConecction();
        await connection.query("INSERT INTO ranking SET ?", ranking);
        res.json({message: "Ranking ingresado"});
    } catch (error) {
        res.status(500);
        res.send(error.message);  
    }
};

const updateRanking = async(req, res) => {
    try {
        const {id} = req.params;
        const {Nombre, fecha_inicio, cantidad, fecha_fin} = req.body;
        
        if(id === undefined || Nombre === undefined || fecha_inicio === undefined || cantidad === undefined || fecha_fin === undefined){
            res.status(400).json({ message: "Por favor llenar todos los campos"});
        }

        const ranking = {Nombre, fecha_inicio, cantidad, fecha_fin};
        const connection= await getConecction();
        const result = await connection.query("UPDATE ranking SET ? WHERE id = ?", [ranking, id]);
        res.json(result);   
    } catch (error) {
        res.status(500);
        res.send(error.message);  
    }
}; */

//EL ADMINISTRADOR ES EL UNICO QUE PODRA BORRAR USUARIOS
const deleteRanking = async(req, res) => {
    try {
        const {id} = req.params;
        const connection= await getConecction();
        const result = await connection.query("DELETE FROM ranking_usuarios WHERE ranking_usuarios.id =?", id);
        res.json(result);   
    } catch (error) {
        res.status(500);
        res.send(error.message);  
    }
};

export const methods = {
    getRankings,
    getRanking,
    deleteRanking
};