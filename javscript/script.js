let count = 0;
let min = 1;
let max = 10;
let myvar;

let number = document.getElementById('input');
let buttons = document.querySelector('.btn');
let tbody = document.querySelector('#body');
let tbody1 = document.querySelector('#body1');
let container = document.querySelector('.container');
let body = document.querySelector('.input-group')

//eventlistener

buttons.addEventListener('click', savenumber);






//function
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let guess = Math.floor(Math.random() * (max - min + 1) + min);
    return guess; //The maximum is inclusive and the minimum is inclusive
}

let random = getRandomIntInclusive(min, max);
console.log(random);

function showalertbig(message, classname) {
    removealert();
    let div = document.createElement('div');
    div.className = `alert ${classname} text-white`;
    div.appendChild(document.createTextNode(message));
    container.insertBefore(div, body);

    myvar = setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000);

}

function savenumber() {
    if (number.value >= 0 && number.value <= 10) {
        if (number.value == '' && count < 3) {
            showalertbig('VAi KICHU EKTA DEN PLZ...', 'danger')
        }
        else {
            count++;

            if (count <= 3) {
                let row = document.createElement('tr');

                let newnumber = document.createElement('td')
                newnumber.appendChild(document.createTextNode(number.value));
                newnumber.className = 'text-center'
                row.appendChild(newnumber);
                tbody.appendChild(row);
                if (random > number.value) {
                    // alert('the number is greater than your guess');
                    showalertbig('ARO BORO DEN VAI', 'success')
                }
                else if (random < number.value) {
                    showalertbig('ARO CHOTO DEN VAI', 'success')
                }
                else if(random == number.value) {
                    showalertbig(`OVINONDON!! JITSEN VAI`, 'success')
                    count = 4;
                    switch (number.value) {
                        case '9':
                             let row = document.createElement('tr');

                             let newnumber = document.createElement('td');
                            
                             var DOM_img = document.createElement("img");
                             DOM_img.src = "img/nine.png";
                             DOM_img.className = "img-fluid"
                             newnumber.appendChild(DOM_img);
                             newnumber.className = "text-center"
                            // row.appendChild(newnumber);
                             row.appendChild(newnumber);
                             tbody1.appendChild(row);
                            

                    }
                }
                else{
                    showalertbig(``, 'success')
                }
                number.value = '';
            }
        }
    }
    else {
        showalertbig('NUMBER RANGE ER BAHIRE.ABAR CHESTA KORUN', 'danger')
    }

}



function removealert() {
    let currentdiv = document.querySelector('.alert');
    if (currentdiv) {
        currentdiv.remove();
    }
    clearTimeout(myvar);
}




