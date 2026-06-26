//Entry point o punto de entrada de la aplicacion
//Cuando nuestra app se empiece a ejecutar lo hace desde aqui


//Quiero una app que al ejecutarse me diga hola mundo por consola

//console.log('hello world')

//Quiero crear un archivo llamado guardado.txt que guarde el texto de la variable x

let x = 'Amo node.js'

//importamos la libreria nativa de node.js fs (filesystem) que nos permite interactuar con el sistema de archivos

//const libreria_filesystem = require('fs')
import libreria_filesystem from 'fs'
import { sumar } from './math.js'

/* libreria_filesystem.writeFileSync(
    'guardado.txt',//nombre del archivo
    x, //Valor que escribiremos en el archivo
    {
        encoding: 'utf8' // codificacion de caracteres
    }
) */

const texto_guardado = libreria_filesystem.readFileSync(
    'guardado.txt',
    'utf8'
)

console.log(texto_guardado)


/* 
const libreria_pdf = require('pdf-lib')

async function createPdf() {
    const pdfDoc = await libreria_pdf.PDFDocument.create();
    const timesRomanFont = await pdfDoc.embedFont(libreria_pdf.StandardFonts.TimesRoman)

    // Add a blank page to the document
    const page = pdfDoc.addPage()

    const { width, height } = page.getSize()

    const fontSize = 30
    page.drawText('Creating PDFs in JavaScript is awesome!', {
        x: 50,
        y: height - 4 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: libreria_pdf.rgb(0, 0.53, 0.71),
    })
    const pdfBytes = await pdfDoc.save()

    return pdfBytes
}

async function savePdf() {
    const pdf_doc = await createPdf()
    libreria_filesystem.writeFileSync('test.pdf', pdf_doc)
}

savePdf() */



/* 
Crear 2 archivos
a.txt => escribir un numero random
b.txt => escribir otro numero random

El programa:
    Debe leer el archivo a.txt y b.txt y sumar el contenido entre si (asumiendo que en cada archivo hay un numero). 
    El resultado de esta suma debe guardarse en resultado.txt
*/

function sumarArchivos (){
    let a = libreria_filesystem.readFileSync('a.txt', 'utf8')
    let b = libreria_filesystem.readFileSync('b.txt', 'utf8')

    if(!a || isNaN(a)){
        throw new Error('Error al leer a.txt, no existe o no es numerico')
    }

    if(!b || isNaN(b)){
        throw new Error('Error al leer b.txt, no existe o no es numerico')
    }

    a = Number(a)
    b = Number(b)
    let resultado = sumar(a, b)
    resultado = String(resultado)
    libreria_filesystem.writeFileSync('resultado.txt', resultado)
}

sumarArchivos()


import libreria_os from 'os'


const nombre_os = libreria_os.type()
console.log("SISTEMA OPERATIVO ACTUAL:", nombre_os)


//Cantidad de bytes de memoria ram
const free_mem_bytes_os = libreria_os.freemem()

//Aplicamos formula para pasar de bytes a GB
let free_mem_gb_os = (free_mem_bytes_os / (1024 * 1024 * 1024)).toFixed(2)

console.log("Tenemos disponibles aproximadamente:", free_mem_gb_os + ' GB')