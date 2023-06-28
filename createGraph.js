let grafico;
export const crearGrafico = (data) => {
    if(grafico){
        grafico.destroy()
    }
 grafico = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: data.fechas,
            datasets: [{
                label: data.type,
                data: data.info
            }]
        }
    })
}