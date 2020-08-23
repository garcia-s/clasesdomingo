let gente = [
    {nombre:'Juan', apellido:'Garcia', edad:27},
    {nombre:'Pedro', apellido:'Garcia', edad:16},
    {nombre:'Carlos', apellido:'Garcia', edad:20}
]

let mayores = []
let menores = []

for(let i = 0; i < gente.length; i++) {
    gente[i].edad < 18 ?  
        menores.push(gente[i]) : 
        mayores.push(gente[i])
}

console.log(mayores)
console.log(menores)