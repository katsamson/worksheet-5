"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.
/*global console*/ // This line tells jsLint that you're allowed to use console.log for printing.


function flip_coin (){
 var result;
if (Math.random() <= 0.5){
  result = 'heads';
} else {
  result = 'tails';
}
  return result;
}

function roll_die (){
 var result;
 var random_number;
 random_number = Math.random();
 if (random_number <= .1667){
  result = 1;
  }
  	if (random_number <= .1667*2){
		result = 2;
		}
	if (random_number <= .1667*3){
		result = 3;
		}
	if (random_number <= .1667*4){
		result = 4;
		}
	if (random_number <= .1667*5){
		result = 5;
		}
	if (random_number <= .1667*6){
		result = 6;
		}
  return result;
}

function 5rolls() {
    var result = [0];
    var index = 0
    while (index < 5) {
        result[index] = roll_die();
        index = index + 1
    }
    return result;
}

function yahtzee() {
    var result[index];
    if (result[0] === result[1] && result[1] === result[2] && result[2] === result[3] && result[3] === result[4]) {
        return 50;
    }
    return 0;
}

