mysql = require('mysql');
connection = require('./csql')


let userModel = {};

userModel.getCode= (userData,callback) =>{
	if (connection) {
		connection.query(`Select * from orden where id_usuario = ${userData.id_usuario}`,
		(err,rows)=>{
			if (rows.length>0) {
				callback(null,rows);
			}else{
				callback(null, {
                  "exists": false,
                  codigo: userData.codeGene
		        });
			}
		});
	}else{
		callback(null, {
				"msg": "bad things"
			});
	}
}
userModel.InsertUser = (userData,callback) =>{
    if (connection) {
    	console.log(userData);
	    connection.query(`insert into usuario(id_usuario,nombre) values(${userData.id_usuario},'${userData.nombre}')`,
		//connection.query(`Select codigo from orden`,	
		(err,rows)=>{
				if (rows) {
					callback(null,{"exito":true});
				}else{
					callback(null, {
	                  "exists": false,
	                  codigo: userData.codeGene
			        });
				}
			});

	}else{
		callback(null, {
				"msg": "bad things"
			});
	}
}

function nuevoElemento(userData,callback,connection){
	//callback(null,{"prueba":true});
	
	connection.query(`insert into orden(id_usuario,id_sucursal,descripcion,total,codigo,fecha,realizada) values(${userData.id_usuario},${userData.id_sucursal}
		,'${userData.descripcion}',${userData.total},'${userData.codeGene}',NOW(),0)`,
	//connection.query(`Select codigo from orden`,	
	(err,rows)=>{
			if (rows) {
				callback(null,rows);
			}else{
				callback(null, {
                  "exists": false,
                  codigo: userData.codeGene
		        });
			}
		});
	//callback(null,userData);
}
	


function nuevoCodigo(find,rows){
	codes = ""
	while(find){
		codes = randomize(pattern,length);
		find = false;
		for(i = 0; i<rows.length; i++){
			if(codes.localeCompare(rows[i].codigoQR)==0){
				console.log("existe: "+userData.codeGene)
				find = true;
			}
		}		
	}
	return codes;
}
module.exports = userModel;