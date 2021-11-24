const ADMIN = true
const isAdmin = (req, res, next) =>{
    if (ADMIN){
        next();
    }
    else{
        res.status(401).json({error: -1, description: `ruta ${req.path} método ${req.method} no autorizada`})
    }
};
module.exports = isAdmin;