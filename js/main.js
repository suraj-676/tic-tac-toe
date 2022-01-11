//console.log('hello,world')
let player1score = 0;
let player2score = 0;
let ties = 0;
let turn = 1;
$
$(document).ready(function () {
    $('.box').on('click', function () {
        // if its player 1 turn and condition checks if it is true then first playes is x
        if($(this).html("x") || $(this).html("o")) {
            console.log('anything')
            return;
        }
        else if (turn === 1) {
            $(this).text("x")
            turn = 2;
            console.log($(this))
            // if($(this).includes("x")) {
            //     return;
            // }
            // return;
        } else {
            //if (turn == 2)
            $(this).text("o")
            turn = 1;
        }
        $('#turn').text(turn)

        
    })
})