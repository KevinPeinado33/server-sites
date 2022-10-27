const arr = [
    { nombre: 'pedrito' },
    { nombre: 'maria' },
    { nombre: 'jesus' }
]

console.log(arr)

const arrGa = [ 1,2,3,4,5,6,7 ]

arr.map( async x => {
    x.arreglito = arrGa
})

console.log(arr)