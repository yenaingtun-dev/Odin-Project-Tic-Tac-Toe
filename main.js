const tics = document.querySelectorAll('.tic');
const button_x = document.querySelector('.button_x');
const button_y = document.querySelector('.button_y');
let x = [];
let y = [];
let user;
let pc;

button_x.addEventListener('click', () => {
    user = x;
    pc = y;
    console.log('pick x');
});
button_y.addEventListener('click', () => {
    user = y;
    pc = x;
    console.log('pick y');
});

// get the data from click
tics.forEach(tic => {
    tic.addEventListener('click', () => {
        if (user === x) {
            let randomNumber = `${Math.floor(Math.random() * (9 - 1 + 1)) + 1}`;
            if (!x.includes(tic.value) && !y.includes(tic.value) && !y.includes(randomNumber) && !x.includes(randomNumber) ) {
                x.push(tic.value);
                y.push(randomNumber);
                console.log('x ' + x);
                console.log('y ' + y);
            }
        } else if(user === y) {
            if (!y.includes(tic.value)) {
                y.push(tic.value);
            }
        } else {
            console.log('pick x or y');
        }
        if (x.length >= 3 || y.length >= 3) {
            game_logic();
        }
    });
});

// array value check
function arrayHasValues(arr, values) {
    return values.every(value => arr.includes(value));
}

// reset the values
function reset() {
    x = [];
    y = [];
    user;
}

// possible wining logic
function game_logic() {
    const possible_1 = ['1', '2', '3'];
    const possible_2 = ['4', '5', '6'];
    const possible_3 = ['7', '8', '9'];
    const possible_4 = ['1', '4', '7'];
    const possible_5 = ['2', '5', '8'];
    const possible_6 = ['3', '6', '9'];
    const possible_7 = ['1', '5', '9'];
    const possible_8 = ['3', '5', '7'];
    if (arrayHasValues(x, possible_1) || arrayHasValues(x, possible_2) || arrayHasValues(x, possible_3) || arrayHasValues(x, possible_4) || arrayHasValues(x, possible_5) || arrayHasValues(x, possible_6) || arrayHasValues(x, possible_7) || arrayHasValues(x, possible_8)) {
        console.log('x win');
        console.log(x);
        reset();
    } else if (arrayHasValues(y, possible_1) || arrayHasValues(y, possible_2) || arrayHasValues(y, possible_3) || arrayHasValues(y, possible_4) || arrayHasValues(y, possible_5) || arrayHasValues(y, possible_6) || arrayHasValues(y, possible_7) || arrayHasValues(y, possible_8)) {
        console.log('y win');
        reset();
    } else {
        console.log('draw');
        // reset();
    }
};