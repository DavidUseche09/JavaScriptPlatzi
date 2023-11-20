const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');


btn.addEventListener('click', sumarInputValues);

function sumarInputValues() {
    // console.log({event});
    // Para que no se reinicie por el form usa:
    // event.preventDefault(); 
    const sumaInputs = innerText = parseInt(input1.value) + parseInt(input2.value);
    result.innerText = "Resultado: " + sumaInputs;
}




// const p = document.querySelector('p');
// const parrafito = document.getElementsByClassName('parrafito');
// const pid = document.getElementById('pid');
// const input = document.querySelector('input');

// console.log(input.value);

// console.log({
// h1,p,parrafito,pid,input
// });


// // Esta funcion permite modificar el HTML desde JS
// h1.innerHTML = 'Patito <br> Feo';
// h1.innerText = 'Patito <br> Feo';

// // Aqui se recibe el valor guardado en ese atributo 'pantalla'
// // console.log(h1.getAttribute('pantalla'));
// // Aqui se cambia el valor del atributo
// // h1.setAttribute('pantalla', 'rojo'); 


// h1.classList.add('rojo');
// h1.classList.remove('verde');
// // h1.classList.toogle('verde');
// // h1.classList.contains('verde');

// // Modificar un value del input
// input.value = '456';

// // Para crear elementos 
// const img = document.createElement('img');
// img.setAttribute('src', 'https://nltravel.s3.us-east-2.amazonaws.com/wp-content/uploads/2023/08/03133037/FERXXO.png');
// console.log(img);

// // Se agrega esta imagen creada a un parrafo del HTML
// // pid.append(img);

