import {getConecction} from "../database/database"

const getSolis = async(req, res) => {
    try {
        const connection= await getConecction();
        const result = await connection.query("SELECT solicitud_user.id, users.correo, solicitud_user.fecha_soli, solicitud_user.producto, solicitud_user.cantidad, solicitud_user.geolocalizacion, solicitud_user.evidencia FROM users INNER JOIN solicitud_user ON users.id = solicitud_user.id_users");
        res.json(result);   
    } catch (error) {
        res.status(500);
        res.send(error.message);  
    }
};

const getSoli = async(req, res) => {
    try {
        const {id} = req.params;
        const connection= await getConecction();
        const result = await connection.query("SELECT solicitud_user.id, users.correo, solicitud_user.fecha_soli, solicitud_user.producto, solicitud_user.cantidad, solicitud_user.geolocalizacion, solicitud_user.evidencia FROM users INNER JOIN solicitud_user ON users.id = solicitud_user.id_users WHERE solicitud_user.id =?", id);
        res.json(result);   
    } catch (error) {
        res.status(500);
        res.send(error.message);  
    }
};

const postSoli = async (req, res) => {
    try {
        const {usuario, fecha_soli, producto, cantidad, geolocalizacion, evidencia} = req.body;
        
        if(usuario === undefined  || fecha_soli === undefined || producto === undefined || cantidad === undefined || geolocalizacion === undefined || evidencia === undefined){
            res.status(400).json({ message: "Por favor llenar todos los campos"});
        }
        const soli = {usuario, fecha_soli, producto, cantidad, geolocalizacion, imagen};
        const connection= await getConecction();
        await connection.query("INSERT INTO solicitud_user SET ?", soli);
        res.json({message: "Solicitud ingresada"});
    } catch (error) {
        res.status(500);
        res.send(error.message);  
    }
};

const updateSoli = async(req, res) => {
    try {
        const {id} = req.params;
        const {usuario, fecha_soli, producto, cantidad, geolocalizacion, evidencia} = req.body;
        
        if(usuario === undefined  || fecha_soli === undefined || producto === undefined || cantidad === undefined || geolocalizacion === undefined || evidencia === undefined){
            res.status(400).json({ message: "Por favor llenar todos los campos"});
        }

        const soli = {usuario, fecha_soli, producto, cantidad, geolocalizacion, evidencia};
        const connection= await getConecction();
        const result = await connection.query("UPDATE solicitd_user SET ? WHERE id = ?", [soli, id]);
        res.json(result);   
    } catch (error) {
        res.status(500);
        res.send(error.message);  
    }
};

//EL ADMINISTRADOR ES EL UNICO QUE PODRA BORRAR Solicitudes
const deleteSoli = async(req, res) => {
    try {
        const {id} = req.params;
        const connection= await getConecction();
        const result = await connection.query("DELETE FROM solicitud_user WHERE id =?", id);
        res.json(result);   
    } catch (error) {
        res.status(500);
        res.send(error.message);  
    }
};

export const methods = {
    getSolis,
    getSoli,
    postSoli,
    updateSoli, 
    deleteSoli
};