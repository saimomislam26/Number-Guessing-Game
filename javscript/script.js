let count = 0;
let min = 1;
let max = 10;
let flag = 0;
let myvar;

let number = document.getElementById('input');
let buttons = document.querySelector('.btn');
let tbody = document.querySelector('#body');
let tbody1 = document.querySelector('#body1');
let container = document.querySelector('.container');
let body = document.querySelector('.input-group');
let countdown = document.querySelector('.counter');
let reloads = document.querySelector('#button-addon')

//eventlistener

buttons.addEventListener('click', savenumber);
reloads.addEventListener('click',reloadpage);






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

            if (count == 4 && flag == 1) {
                showalertbig('ALREADY JITE GESEN', 'success');
                number.value = ''
            }



            count++;
            if (count > 3 && flag == 0) {
                showalertbig('SOB CHANCE SESH.RELOAD DIYE ABAR KHELEN', 'danger');
                number.value = ''
            }


            if (count <= 3) {
                countdown.innerHTML--;
                var row = document.createElement('tr');

                var newnumber = document.createElement('td')
                newnumber.appendChild(document.createTextNode(number.value));
                newnumber.className = 'text-center font'
                newnumber.style.color = 'red'
                row.appendChild(newnumber);
                tbody.appendChild(row);
                if (random > number.value) {
                    // alert('the number is greater than your guess');
                    showalertbig('ARO BORO DEN VAI', 'success')
                }
                else if (random < number.value) {
                    showalertbig('ARO CHOTO DEN VAI', 'success')
                }
                else if (random == number.value) {
                    showalertbig(`OVINONDON!! JITSEN VAI`, 'success')
                    count = 4;
                    flag = 1;
                    switch (number.value) {
                        case '1':
                            var row = document.createElement('tr');

                            var newnumber = document.createElement('td');

                            var DOM_img = document.createElement("img");
                            DOM_img.src = "img/one.png";
                            DOM_img.className = "img-fluid"
                            newnumber.appendChild(DOM_img);
                            newnumber.className = "text-center"
                            // row.appendChild(newnumber);
                            row.appendChild(newnumber);
                            tbody1.appendChild(row);
                            break;
                        case '2':
                            var row = document.createElement('tr');

                            var newnumber = document.createElement('td');

                            var DOM_img = document.createElement("img");
                            DOM_img.src = "img/two.png";
                            DOM_img.className = "img-fluid"
                            newnumber.appendChild(DOM_img);
                            newnumber.className = "text-center"
                            // row.appendChild(newnumber);
                            row.appendChild(newnumber);
                            tbody1.appendChild(row);
                            break;
                        case '3':
                            var row = document.createElement('tr');

                            var newnumber = document.createElement('td');

                            var DOM_img = document.createElement("img");
                            DOM_img.src = "img/three.png";
                            DOM_img.className = "img-fluid"
                            newnumber.appendChild(DOM_img);
                            newnumber.className = "text-center"
                            // row.appendChild(newnumber);
                            row.appendChild(newnumber);
                            tbody1.appendChild(row);
                            break;
                        case '4':
                            var row = document.createElement('tr');

                            var newnumber = document.createElement('td');

                            var DOM_img = document.createElement("img");
                            DOM_img.src = "img/four.png";
                            DOM_img.className = "img-fluid"
                            newnumber.appendChild(DOM_img);
                            newnumber.className = "text-center"
                            // row.appendChild(newnumber);
                            row.appendChild(newnumber);
                            tbody1.appendChild(row);
                            break;
                        case '5':
                            var row = document.createElement('tr');

                            var newnumber = document.createElement('td');

                            var DOM_img = document.createElement("img");
                            DOM_img.src = "img/five.png";
                            DOM_img.className = "img-fluid"
                            newnumber.appendChild(DOM_img);
                            newnumber.className = "text-center"
                            // row.appendChild(newnumber);
                            row.appendChild(newnumber);
                            tbody1.appendChild(row);
                            break;
                        case '6':
                            var row = document.createElement('tr');

                            var newnumber = document.createElement('td');

                            var DOM_img = document.createElement("img");
                            DOM_img.src = "img/6.png";
                            DOM_img.className = "img-fluid"
                            newnumber.appendChild(DOM_img);
                            newnumber.className = "text-center"
                            // row.appendChild(newnumber);
                            row.appendChild(newnumber);
                            tbody1.appendChild(row);
                            break;
                        case '7':
                            var row = document.createElement('tr');

                            var newnumber = document.createElement('td');
                            var DOM_img = document.createElement("img");
                            DOM_img.src = "img/7.png";
                            DOM_img.className = "img-fluid"
                            newnumber.appendChild(DOM_img);
                            newnumber.className = "text-center"
                            // row.appendChild(newnumber);
                            row.appendChild(newnumber);
                            tbody1.appendChild(row);
                            break;
                        case '8':
                            var row = document.createElement('tr');

                            var newnumber = document.createElement('td');

                            var DOM_img = document.createElement("img");
                            DOM_img.src = "img/eight.png";
                            DOM_img.className = "img-fluid"
                            newnumber.appendChild(DOM_img);
                            newnumber.className = "text-center"
                            // row.appendChild(newnumber);
                            row.appendChild(newnumber);
                            tbody1.appendChild(row);
                            break;
                        case '9':
                            var row = document.createElement('tr');

                            var newnumber = document.createElement('td');
                            var DOM_img = document.createElement("img");
                            DOM_img.src = "img/nine.png";
                            DOM_img.className = "img-fluid"
                            newnumber.appendChild(DOM_img);
                            newnumber.className = "text-center"
                            // row.appendChild(newnumber);
                            row.appendChild(newnumber);
                            tbody1.appendChild(row);
                            break;

                        case '10':
                            var row = document.createElement('tr');

                            var newnumber = document.createElement('td');

                            var DOM_img = document.createElement("img");
                            DOM_img.src = "img/ten.png";
                            DOM_img.className = "img-fluid"
                            newnumber.appendChild(DOM_img);
                            newnumber.className = "text-center"
                            // row.appendChild(newnumber);
                            row.appendChild(newnumber);
                            tbody1.appendChild(row);
                            break;



                    }

                    number.value = '';


                }
                if (count < 3 && flag == 0) {
                    number.value = '';
                }


            }

            if (count == 3 && flag == 0) {
                number.value = '';
                showalertbig('HERE GELEN.Reload Kore Abar Khelen', 'danger');
                switch (random) {
                    case 1:
                        var row = document.createElement('tr');

                        var newnumber = document.createElement('td');

                        var DOM_img = document.createElement("img");
                        DOM_img.src = "img/one.png";
                        DOM_img.className = "img-fluid"
                        newnumber.appendChild(DOM_img);
                        newnumber.className = "text-center"
                        // row.appendChild(newnumber);
                        row.appendChild(newnumber);
                        tbody1.appendChild(row);
                        break;
                    case 2:
                        var row = document.createElement('tr');

                        var newnumber = document.createElement('td');

                        var DOM_img = document.createElement("img");
                        DOM_img.src = "img/two.png";
                        DOM_img.className = "img-fluid"
                        newnumber.appendChild(DOM_img);
                        newnumber.className = "text-center"
                        // row.appendChild(newnumber);
                        row.appendChild(newnumber);
                        tbody1.appendChild(row);
                        break;
                    case 3:
                        var row = document.createElement('tr');

                        var newnumber = document.createElement('td');

                        var DOM_img = document.createElement("img");
                        DOM_img.src = "img/three.png";
                        DOM_img.className = "img-fluid"
                        newnumber.appendChild(DOM_img);
                        newnumber.className = "text-center"
                        // row.appendChild(newnumber);
                        row.appendChild(newnumber);
                        tbody1.appendChild(row);
                        break;
                    case 4:
                        var row = document.createElement('tr');

                        var newnumber = document.createElement('td');

                        var DOM_img = document.createElement("img");
                        DOM_img.src = "img/four.png";
                        DOM_img.className = "img-fluid"
                        newnumber.appendChild(DOM_img);
                        newnumber.className = "text-center"
                        // row.appendChild(newnumber);
                        row.appendChild(newnumber);
                        tbody1.appendChild(row);
                        break;
                    case 5:
                        var row = document.createElement('tr');

                        var newnumber = document.createElement('td');

                        var DOM_img = document.createElement("img");
                        DOM_img.src = "img/five.png";
                        DOM_img.className = "img-fluid"
                        newnumber.appendChild(DOM_img);
                        newnumber.className = "text-center"
                        // row.appendChild(newnumber);
                        row.appendChild(newnumber);
                        tbody1.appendChild(row);
                        break;
                    case 6:
                        var row = document.createElement('tr');

                        var newnumber = document.createElement('td');

                        var DOM_img = document.createElement("img");
                        DOM_img.src = "img/6.png";
                        DOM_img.className = "img-fluid"
                        newnumber.appendChild(DOM_img);
                        newnumber.className = "text-center"
                        // row.appendChild(newnumber);
                        row.appendChild(newnumber);
                        tbody1.appendChild(row);
                        break;
                    case 7:
                        var row = document.createElement('tr');

                        var newnumber = document.createElement('td');
                        var DOM_img = document.createElement("img");
                        DOM_img.src = "img/7.png";
                        DOM_img.className = "img-fluid"
                        newnumber.appendChild(DOM_img);
                        newnumber.className = "text-center"
                        // row.appendChild(newnumber);
                        row.appendChild(newnumber);
                        tbody1.appendChild(row);
                        break;
                    case 8:
                        var row = document.createElement('tr');

                        var newnumber = document.createElement('td');

                        var DOM_img = document.createElement("img");
                        DOM_img.src = "img/eight.png";
                        DOM_img.className = "img-fluid"
                        newnumber.appendChild(DOM_img);
                        newnumber.className = "text-center"
                        // row.appendChild(newnumber);
                        row.appendChild(newnumber);
                        tbody1.appendChild(row);
                        break;
                    case 9:
                        var row = document.createElement('tr');

                        var newnumber = document.createElement('td');
                        var DOM_img = document.createElement("img");
                        DOM_img.src = "img/nine.png";
                        DOM_img.className = "img-fluid"
                        newnumber.appendChild(DOM_img);
                        newnumber.className = "text-center"
                        // row.appendChild(newnumber);
                        row.appendChild(newnumber);
                        tbody1.appendChild(row);
                        break;

                    case 10:
                        var row = document.createElement('tr');

                        var newnumber = document.createElement('td');

                        var DOM_img = document.createElement("img");
                        DOM_img.src = "img/ten.png";
                        DOM_img.className = "img-fluid"
                        newnumber.appendChild(DOM_img);
                        newnumber.className = "text-center"
                        // row.appendChild(newnumber);
                        row.appendChild(newnumber);
                        tbody1.appendChild(row);
                        break;
                }
            }


        }
    }
    else {
        if (count < 3 && flag == 0) {
            showalertbig('RANGE ER BAHIRE, ABAR DEN', 'danger');
            number.value = ''
        }
        else if (count == 4 && flag == 1) {
            showalertbig('ALREADY JITE GESEN', 'success');
            number.value = ''
        }
        else {
            showalertbig('SOB CHANCE SESH.RELOAD DIYE ABAR KHELEN', 'danger');
            number.value = ''
        }


    }

}





function removealert() {
    let currentdiv = document.querySelector('.alert');
    if (currentdiv) {
        currentdiv.remove();
    }
    clearTimeout(myvar);
}


function reloadpage(){
    window.location.reload();
}




