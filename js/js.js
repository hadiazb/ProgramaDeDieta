const NUMERO_DIAS_DEL_ANO = 365
const INCREMENTO_DECREMENTO = .4

var personaUno = {
  nombre : "Hugo",
  edad   : 23,
  peso   : 59
}


const bajar = persona => persona.peso -= INCREMENTO_DECREMENTO
const subir = persona => persona.peso += INCREMENTO_DECREMENTO
const comeMucho = () => Math.random() < 0.3
const adelgaza = () => Math.random() < 0.5
const perdida = 3
const META = personaUno.peso - perdida
var iteracion = 1

console.log(`${personaUno.nombre} pesa al iniciar el año ${personaUno.peso}kg`);
while (META < personaUno.peso){
  if (comeMucho()) {
    subir(personaUno)
  }
  if (adelgaza()) {
    bajar(personaUno)
  }
  console.log(`${personaUno.nombre} pesa en la iteración numero ${iteracion} ${personaUno.peso.toFixed(1)}kg`)
  iteracion += 1
}
console.log(`${personaUno.nombre} pesa al finalizar el año ${personaUno.peso.toFixed(1)}kg`);
