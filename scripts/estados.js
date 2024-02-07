const dataStates = [
    {estado: 'SP', valor: 6.783643},
    {estado: 'RJ', valor: 3.667843},
    {estado: 'MG', valor: 2.922988},
    {estado: 'ES', valor: 2.716548},
    {estado: 'OUTROS', valor: 1.984953}
]

const sumValues = dataStates.reduce((total, item) => total + item.valor, 0);

export function showSates() {
    dataStates.forEach(item => {
        let partState = (item.valor * 100) / sumValues
        let element = document.createElement('p')
        element.innerHTML = `No estado de ${item.estado} o percentual foi igual a ${partState.toFixed(0)}%`
        
        document.querySelector('.divElements').appendChild(element)
    })
}


