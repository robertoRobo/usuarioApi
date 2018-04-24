User = require('../models/usuario')
/*generator =  new CodeGenerator();*/

module.exports = function(app){
	app.post('/codigo',(req,res) =>{
        
        //console.log("code: "+codes[0]);
        var userData = {
            id_usuario: req.body.id_usu
          };
        User.getCode(userData,(err,data) =>{
			res.json(data);
		});
    });
    app.put('/usuario',(req,res) =>{
        
        //console.log("code: "+codes[0]);
        var userData = {
         
            id_usuario: req.body.id_usu,
            nombre : req.body.nom
            //numOrden: req.body.orden
          };
        User.InsertUser(userData,(err,data) =>{
            //console.log(data.length)
            res.json(data);
         
		});
    });
    
}