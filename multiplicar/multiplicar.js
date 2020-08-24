const fs = require('fs');


let data ='';

let crearArchivo = (base)=>{

    return new Promise((resolve,reject) => {
        
        for (let i  = 1; i  <= 10; i ++) {
            data += `${i} * ${base} = ${i*base} \n`;
            
        }
        
        fs.writeFile('tabla2.txt', data, (err) => {
            if (err) 
                reject (err)
            else
                resolve(`hola - ${base}`);
               
          });
    });


}

module.exports = {
    crearArchivo
}
