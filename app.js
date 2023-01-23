const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')


console.clear();


crearArchivo(argv.b, argv.h, argv.l )
    .then( result => console.log(result) )
    .catch( err => console.log(err) );



