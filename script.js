let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
let sorteados = [];

// console.log("numeros", numeros);
// console.log("sorteados", sorteados);

const sortear = () => {

    if (numeros.length > 0) {
        let index = Math.floor(Math.random() * (numeros.length));
        let sorteado = numeros[index]
        sorteados.push(sorteado);
        numeros.splice(index, 1);
    
        // mostrar numero
        document.getElementById('current-number').children[0].textContent = sorteado;
    
        // add previous number
        let span = document.createElement('span');
        span.textContent = sorteado;
        let div = document.createElement('div');
        div.classList.add('container', 'number');
        div.appendChild(span);
        document.getElementById('previous-numbers').prepend(div);

        // chekeo si ya termino el sorteo
        if (numeros.length == 0) {
            document.getElementsByTagName('button')[0].style.display = 'none';
            alertify.set('notifier','position', 'top-center');
            alertify.success('Sorteo Finalizado');
        }

    }

}

// console.log("numeros", numeros);
// console.log("sorteados", sorteados);
// console.log("sorteados ordenados", sorteados.sort(function(a, b) {
//     return a - b;
// }))