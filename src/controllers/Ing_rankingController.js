import {getConecction} from "../database/database"

const getNew_Rankings = async(req, res) => {
    try {
        const connection= await getConecction();
        const result = await connection.query("SELECT * FROM ranking_general");
        res.json(result);   
    } catch (error) {
        res.status(500);
        res.send(error.message);  
    }
};

const postNew_Ranking = async (req, res) => {
    try {
        const {fecha_inicio, tipo_premio ,fecha_fin, estado} = req.body;
        
        if(fecha_inicio === undefined || tipo_premio === undefined || fecha_fin === undefined ||  estado === undefined){
            res.status(400).json({ message: "Por favor llenar todos los campos"});
        }
        const ranking = {fecha_inicio, tipo_premio ,fecha_fin, estado};
        const connection= await getConecction();
        await connection.query("INSERT INTO ranking_general SET ?", ranking);
        res.json({message: "Ranking ingresado"});
    } catch (error) {
        res.status(500);
        res.send(error.message);  
    }
};

const updateNew_Ranking = async(req, res) => {
    try {
        const {id} = req.params;
        const {fecha_inicio, tipo_premio ,fecha_fin, estado} = req.body;
        
        if(id === undefined || fecha_inicio === undefined || tipo_premio === undefined || fecha_fin === undefined ||  estado === undefined){
            res.status(400).json({ message: "Por favor llenar todos los campos"});
        }

        const ranking = {fecha_inicio, tipo_premio ,fecha_fin, estado};
        const connection= await getConecction();
        const result = await connection.query("UPDATE ranking_general SET ? WHERE id = ?", [ranking, id]);
        res.json(result);   
    } catch (error) {
        res.status(500);
        res.send(error.message);  
    }
}; 

export const methods ={
    getNew_Rankings,
    postNew_Ranking,
    updateNew_Ranking
} 