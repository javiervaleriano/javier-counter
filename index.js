// Selecting the element 'p' in DOM with the counter
const value = document.getElementById('value');

// Selecting each button
const btnDecrease = document.querySelector('.decrease');
const btnReset = document.querySelector('.reset');
const btnIncrease = document.querySelector('.increase');

// 'Click' event for decrease button
btnDecrease.onclick = function () {
    let oldValue = parseInt(value.innerText);
    let newValue = oldValue - 1;
    
    value.innerText = newValue;

    value.innerText > 0 ? value.style.color = '#237CE2' :
    value.innerText < 0 ? value.style.color = '#F54141' : value.style.color = '#000';
}

// 'Click' event for increase button
btnIncrease.onclick = function () {
    let oldValue = parseInt(value.innerText);
    let newValue = oldValue + 1;

    value.innerText = newValue;

    value.innerText > 0 ? value.style.color = '#237CE2' :
    value.innerText < 0 ? value.style.color = '#F54141' : value.style.color = '#000';
}

// 'Click' event for reset button
btnReset.onclick = function () {
    value.innerText = 0;
    value.style.color = '#000';
}


// Another method with Don't Repeat Yourself (DRY):

/* let count = 0;

* const valueOfCount = document.getElementById('value');

* const btns = document.querySelectorAll('.btn');
* btns.forEach(btn => {
*    btn.addEventListener('click', function (e) {
*        const currentButton = e.currentTarget.classList;
*
*        if (currentButton.contains('decrease')) {
*            count--;
*        } else if (currentButton.contains('increase')) {
*            count++;
*        } else {
*            count = 0;
*        }
*
*        if (count > 0) {
*            valueOfCount.style.color = '#237CE2';
*        } else if (count < 0) {
*            valueOfCount.style.color = '#F54141';
*        } else {
*            valueOfCount.style.color = '#000';
*        }
*
*        valueOfCount.innerText = count;
*    })
* }); */