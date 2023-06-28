

const container = document.getElementById('container')
const pais = document.getElementById('inputPais')
const boton = document.getElementById('boton')
const formulario = document.getElementById('formulario')
const tipo = document.getElementById('tipo')
const canvas = document.getElementById('grafico')

const oms = async (e) => {
    e.preventDefault()




    const country = pais.value
    const type = tipo.value
    const url = `https://api.api-ninjas.com/v1/covid19?country=${country}&type=${type}`
    const { data } = await axios.get(url, {
        headers: {
            'X-Api-Key': '6BPR4z2jD4jpGwbHE9B8IQ==R206jBOff3JqFxdM'
        }
    })

    console.log(data)
    let dataGrafico ={}

    if(type === 'cases'){
        const fechas = Object.keys(data[0].cases);
    const info = Object.values(data[0].cases).map((elemento) => elemento.total);
    dataGrafico = {
        fechas,
        info,
        type,
    };
    }
    else if(type === 'deaths'){
        const fechas = Object.keys(data[0].deaths);
    const info = Object.values(data[0].deaths).map((elemento) => elemento.total);
     dataGrafico = {
        fechas,
        info,
        type,
    };
    }

crearGrafico(dataGrafico);

}
boton.addEventListener('click', oms)
const  saludar =  () =>{
    console.log('hola')

}
