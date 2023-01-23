const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base, hasta,  listar = false ) => {

    try {

        let salida = '';
        let consola = '';
        
        for (let index = 0; index <= hasta; index++) {
            salida += `${ base } x ${ index } = ${ index * base }\n`;
            consola += `${ base } ${ colors.red('x')} ${ index } = ${ colors.green(index * base) }\n`;
            //console.log( ` 5 x ${index} = ${index * 5}`);
        }

        if(listar) {
            console.log('============================'.rainbow)
            console.log(` Talbla del: ${ colors.blue(base) }`)
            console.log('============================'.rainbow)

            console.log(consola)
        }
        
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );
        return '✅ Archivo creado con exito.';

    } catch (error) {
        throw `❌ Error al crear el arcivo, Detalles: ${ error }`;
    }
    

    

}

module.exports = {
    crearArchivo: crearArchivo,
}

