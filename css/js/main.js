const form = console.log(document.getElementById("novoItem"))

form.addEventListener("submit", (evento)=>{
  evento.prevenDefaut()


  console.log()
  console.log(eventoevento.target.elements['quantidade'].value)


  criaElemento(evento.target.elements['nome'].value, quantidade)
})

function criaElemento(nome,quantidade) {

   const novoItem = document.createElemente('li')
   novoItem.classList.add("item")

   const numeroItem = document.createElement('strong')
   numeroItem.innerHTML = quantidade

   novoItem.appendChild(numeroItem)































}














