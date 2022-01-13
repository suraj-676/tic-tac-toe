//console.log('hello,world')
// let player1score = 0;
// let player2score = 0;
// let ties = 0;
let music = new Audio("mixkit-quick-jump-arcade-game-239.wav")
// let turn = 1;
$(document).ready(function () {
    let playerTurn = true;

    const winning = function () {
        if ($("#1").html() === "x" && $("#2").html() === "x" && $("#3").html() === "x" ||
            $("#4").html() === "x" && $("#5").html() === "x" && $("#6").html() === "x" ||
            $("#7").html() === "x" && $("#8").html() === "x" && $("#9").html() === "x" ||
            $("#1").html() === "x" && $("#4").html() === "x" && $("#7").html() === "x" ||
            $("#2").html() === "x" && $("#5").html() === "x" && $("#8").html() === "x" ||
            $("#3").html() === "x" && $("#6").html() === "x" && $("#9").html() === "x" ||
            $("#1").html() === "x" && $("#5").html() === "x" && $("#9").html() === "x" ||
            $("#3").html() === "x" && $("#5").html() === "x" && $("#7").html() === "x") {
            $(".popup").addClass("show").html();// if player x win then this pop will come
           // column and rows to check player x position
        } else if (
            $("#1").html() === "o" && $("#2").html() === "o" && $("#3").html() === "o" ||
            $("#4").html() === "o" && $("#5").html() === "o" && $("#6").html() === "o" ||
            $("#7").html() === "o" && $("#8").html() === "o" && $("#9").html() === "o" ||
            $("#1").html() === "o" && $("#4").html() === "o" && $("#7").html() === "o" ||
            $("#2").html() === "o" && $("#5").html() === "o" && $("#8").html() === "o" ||
            $("#3").html() === "o" && $("#6").html() === "o" && $("#9").html() === "o" ||
            $("#1").html() === "o" && $("#5").html() === "o" && $("#9").html() === "o" ||
            $("#3").html() === "o" && $("#5").html() === "o" && $("#7").html() === "o") {
            $(".popup1").addClass("show");//if payer o win then this popup comes
            // column and rows to check player o position
        }
    }


            // click function start to check player x  and o position
    const buttonclick = function () {
        $('.box').on('click', function () {

            music.play()

           // if statement start to checks player x and o turn one by one
            if ($(this).html() === 'x' || $(this).html() === 'o') { // check if x is placed or o played

                return // return to stop the function 

            }
            if (playerTurn === true) {

                $(this).html('x'); // set the html in the clicked element to 'x'
                playerTurn = false; 
            // player turn over

                winning()

            } else {
                $(this).html('o');
                playerTurn = true; // its going to be player turn next click.

                winning()// winnig to check x is winner or o

            }
        })
    }
    
    $('#up').on('click', function () {
        $(".popup").removeClass("show")// to show image popup
        $('.box').html('')
        $(".popup1").removeClass("show");
        // end of on click function

    });
    buttonclick();





});//end of document.ready function
