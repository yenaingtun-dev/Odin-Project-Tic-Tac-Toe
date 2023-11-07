const tics = document.querySelectorAll('.tic');
const button_x = document.querySelector('.button_x');
const button_o = document.querySelector('.button_o');
let x = [];
let o = [];
let user_1;
let user_2;
let turn;

button_x.addEventListener('click', () => {
    user_1 = 'X';
    user_2 = 'O';
    turn = 'X';
    console.log('pick x');
});
button_o.addEventListener('click', () => {
    user_1 = 'O';
    user_2 = 'X';
    turn = 'O';
    console.log('pick o');
});

// get the data from click
tics.forEach(tic => {
    tic.addEventListener('click', () => {
        if (user_1 === 'X') {
            if (turn === 'X') {
                if (!x.includes(tic.value) && !o.includes(tic.value)) {
                    x.push(tic.value);
                    tic.classList.add('playerX');
                    turn = 'O';
                    game_logic();
                }
            } else {
                if (!x.includes(tic.value) && !o.includes(tic.value)) {
                    o.push(tic.value);
                    tic.classList.add('playerO');
                    turn = 'X';
                    game_logic();
                }
            }
            console.log('x ' + x);
            console.log('o ' + o);
        } else if (user_1 === 'O') {
            if (turn === 'X') {
                if (!x.includes(tic.value) && !o.includes(tic.value)) {
                    x.push(tic.value);
                    tic.classList.add('playerX');
                    turn = 'O';
                    game_logic();
                }
            } else {
                if (!x.includes(tic.value) && !o.includes(tic.value)) {
                    o.push(tic.value);
                    tic.classList.add('playerO');
                    turn = 'X';
                    game_logic();
                }
            }
            console.log('x ' + x);
            console.log('o ' + o);
        } else {
            console.log('need to select one');
        }
    });
});
// tics.forEach(tic => {
//     tic.addEventListener('click', () => {
//         let randomNumber = `${Math.floor(Math.random() * (9 - 1 + 1)) + 1}`;
//         if (user === 'X') {
//             if (!x.includes(tic.value) && !o.includes(tic.value ) && !o.includes(randomNumber) && !x.includes(randomNumber)) {
//                 console.log(x);
//                 console.log(o);
//                 x.push(tic.value);
//                 // tic.classList.add('playerX');
//                 o.push(randomNumber);
//                 // tics.forEach(tic => {
//                 //     if (tic.value === randomNumber) {
//                 //         tic.classList.add('playerO');
//                 //     }
//                 // })
//                 console.log('x ' + x);
//                 console.log('o ' + o);
//             } else {
//                 console.log('value include');
//             }
//         } else if(user === '0') {
//             if (!x.includes(tic.value) && !o.includes(tic.value) && !o.includes(randomNumber) && !x.includes(randomNumber)) {
//                 o.push(tic.value);
//                 tic.classList.add('playerO');
//                 x.push(randomNumber);
//                 console.log('x ' + x);
//                 console.log('o ' + o);
//             }
//         } else {
//             console.log('pick x or o');
//         }
//         // if (x.length >= 3 || o.length >= 3) {
//         //     game_logic();
//         // }
//     });
// });

// array value check

function arrayHasValues(arr, values) {
    return values.every(value => arr.includes(value));
}

// reset the values
function reset() {
    x = [];
    o = [];
    user_1;
    user_2;
    // tics.forEach(tic => {
    //     tic.classList.remove('playerX');
    //     tic.classList.remove('playerO');
    // })
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
    } else if (arrayHasValues(o, possible_1) || arrayHasValues(o, possible_2) || arrayHasValues(o, possible_3) || arrayHasValues(o, possible_4) || arrayHasValues(o, possible_5) || arrayHasValues(o, possible_6) || arrayHasValues(o, possible_7) || arrayHasValues(o, possible_8)) {
        console.log('o win');
        reset();
    } else {
        console.log('draw');
        // reset();
    }
};