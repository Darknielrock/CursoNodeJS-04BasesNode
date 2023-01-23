const argv = require('yargs')
                .option(
                    'b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base para la tabla de multiplicar'
                    }
                )
                .option(
                    'l', {
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: false,
                        default: false,
                        describe: 'Muestra la Tabla en consola'
                    }
                )
                .option(
                    'h',{
                        alias: 'hasta',
                        type: 'number',
                        demandOption: false,
                        default: 10,
                        describe: 'El valor hasta que numero va ser la multiplicacin'
                    }
                )
                .check( (argv, options) => {
                    if( isNaN( argv.b ) ){
                        throw 'La base tiene que ser numero';
                    }
                    return true;
                })
                .argv;

module.exports = argv;