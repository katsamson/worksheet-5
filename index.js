"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.
/*global console*/ // This line tells jsLint that you're allowed to use console.log for printing.


function flip_coin (){
 var result;
if (Math.random <= 0.5){
  result = 'heads';
} else {
  result = 'tails';
}
  return result;
}

function roll_die (){
 var result;
if (Math.random <= .1667){
  result = 1;
  }
  	if (Math.random <= .1667*2){
		result = 2;
		}
			if (Math.random <= .1667*3){
				result = 3;
				}
				if (Math.random <= .1667*4){
					result = 4;
					}
					if (Math.random <= .1667*5){
						result = 5;
						}
						if (Math.random <= .1667*6){
							result = 6;
							}
  return result;
}


