const {crearArchivo} = require ('./multiplicar/multiplicar.js');
let base =7;
crearArchivo(base)
            .then(archivo => console.log('Archivo Creado'))
            .catch(e => console.log(e));
