//console.log('hello,world')
// let player1score = 0;
// let player2score = 0;
// let ties = 0;
let music = new Audio("/mixkit-shaker-bell-alert-599.mp3")
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
            $(".popup").addClass("show").html();

            //console.log('the winner is x');
        } else if (
            $("#1").html() === "o" && $("#2").html() === "o" && $("#3").html() === "o" ||
            $("#4").html() === "o" && $("#5").html() === "o" && $("#6").html() === "o" ||
            $("#7").html() === "o" && $("#8").html() === "o" && $("#9").html() === "o" ||
            $("#1").html() === "o" && $("#4").html() === "o" && $("#7").html() === "o" ||
            $("#2").html() === "o" && $("#5").html() === "o" && $("#8").html() === "o" ||
            $("#3").html() === "o" && $("#6").html() === "o" && $("#9").html() === "o" ||
            $("#1").html() === "o" && $("#5").html() === "o" && $("#9").html() === "o" ||
            $("#3").html() === "o" && $("#5").html() === "o" && $("#7").html() === "o") {
            $(".popup1").addClass("show");
            // alert("The winner is: O");
        }
    }

    //on click function for all <div class="box"> 9 boxes

    const buttonclick = function () {
        $('.box').on('click', function () {
            music.play()

            // first check if the box is empty. 
            if ($(this).html() === 'x' || $(this).html() === 'o') { // check if x is placed or o played

                return // this is to stop the function 

            }
            if (playerTurn === true) {

                $(this).html('x'); // set the html in the clicked element to 'x'
                playerTurn = false; // playerTurn is over now, so set playerTurn to false.
                
            
                winning()

            } else {
                $(this).html('o');
                playerTurn = true; // its going to be player turn next click.
                
                winning()

            }
        })
    }
    // end of on click function
    $('#up').on('click', function () {
        $(".popup").removeClass("show")
        $('.box').html('')
        $(".popup1").removeClass("show");
        // end of on click function

    });
    buttonclick();





});//end of document.ready function
