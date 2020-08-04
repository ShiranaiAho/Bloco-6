const formulario = document.querySelector('#formulario');
const nome = document.querySelector('#name');
const email = document.querySelector('#email');
const cpf = document.querySelector('#cpf');
const adress = document.querySelector('#adress');
const city = document.querySelector('#city');
const type = document.querySelector('#casa-apartamento');
const job = document.querySelector('#job');
const date = document.querySelector('#date');
const curriculum = document.querySelector('#curriculum');
const state = document.querySelector('#state');

formulario.addEventListener('submit', function (event) {
  event.preventDefault();

  const formElements = formulario.elements;
  for (i in formElements) {
    if (formElements[i].tagName != 'FIELDSET' && formElements[i].tagName != 'BUTTON' && formElements[i].tagName != undefined) {
      curriculum.innerHTML += formElements[i].value + "; ";
    } 
  }
});

const stateArray = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']

window.onload = function () {
  for (i in stateArray) {
    let element = document.createElement('option');
    element.innerHTML = stateArray[i];
    element.value = stateArray[i];
    state.appendChild(element);
  }
};
