//requires
// const fs = require('fs'); //propio de node
//const fs = require('express'); //no viene en node pero es paquete instalado externo
//const fs = require('./fs'); //requires de archivos,con path
const argv = require('./config/yargs').argv;
const colors = require('colors');
colors.setTheme({
    silly: 'rainbow',
    rojo: 'red'
});
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)

        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:` + colors.rojo(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('No existe comando');
}