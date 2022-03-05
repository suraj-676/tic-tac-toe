$(document).ready(function () {
    let music = new Audio("mixkit-quick-jump-arcade-game-239.wav")
    let playerX = $('.player-x-score');// select the player X score cell from html
    let playerO = $('.player-o-score');// select the player O score cell from html
    let draw = $('.draw-score');// select the draw score cell from html
    let xScoreUpdated = 0; // X player set the score to update to html
    let oScoreUpdated = 0; //O player set the score to update to html
    let drawScoreUpdate = 0;// Draw set the score to update to html
    let playerTurn = true;
    // let turn = 1;

    

    const winning = function (player) {
        if ($("#1").html() === player && $("#2").html() === player && $("#3").html() === player ||
            $("#4").html() === player && $("#5").html() === player && $("#6").html() === player ||
            $("#7").html() === player && $("#8").html() === player && $("#9").html() === player ||
            $("#1").html() === player && $("#4").html() === player && $("#7").html() === player ||
            $("#2").html() === player && $("#5").html() === player && $("#8").html() === player ||
            $("#3").html() === player && $("#6").html() === player && $("#9").html() === player ||
            $("#1").html() === player && $("#5").html() === player && $("#9").html() === player ||
            $("#3").html() === player && $("#5").html() === player && $("#7").html() === player) {
            if (player === 'x') {
                xScoreUpdated = xScoreUpdated + 1; // here is to add the winning score by 1 to the current score board
                playerX.html(xScoreUpdated);// here is to updated the score in the html
                $(".popup").addClass("show").html();// if player x win then this pop will come


            } else if (player === 'o') {
                oScoreUpdated = oScoreUpdated + 1;
                playerO.html(oScoreUpdated);
                $(".popup1").addClass("show").html();
            } // end of player o wins

        } else if ($('.box:empty').length === 0) { // here is if all cell are filled, it will return a draw
            drawScoreUpdate = drawScoreUpdate + 1;
            draw.html(drawScoreUpdate);
            
            
            // console.log('It\'s a draw');
        }// end of draw

    }; // end of winning


    // click function start to cLICK FOR X AND O
    const buttonclick = function () {
        $('.box').on('click', function () {

            music.play()

            // if statement start to checks player x and o turn one by one
            if ($(this).html() == 'x' || $(this).html() == 'o'){ // check if x is placed or o played

            return //
            }  else {
                // console.log('when cell is empty');
            }


            if (playerTurn === true) {

                $(this).html('x'); // set the html in the clicked element to 'x'
                playerTurn = false;
                // player turn over

                winning('x')

            } else {
                $(this).html('o');
                playerTurn = true; // its going to be player turn next click.


                winning('o')// winnig to check x is winner or o

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
