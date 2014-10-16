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

function five_rolls() {
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

function sum_of_numbers(list) {
	var index;
	var total;
	index = 0;
	total = 0;
	while (index < list.length) {
		total = total + list[index];
		index = index + 1;
	}
	return total;
}


function reorder(first, second) {
	if (first > second) {
	return 1;
} else {
	return -1;
} 
		if (first === second) {
		return 0;
} 
}
function four_of_a_kind(list) {
    list.sort(reorder);
    if (list[0] === list[1] && list[1] === list[2] && list[2] === list[3] || list[1] === list[2] && list[2] === list[3] && list[3] === list[4]) {
    	return sum_of_numbers(list);
}
    return 0;
}



function large_straight(list) {
	list.sort(reorder);
    if ([list[1] === list[0] + 1 && list[2] === list[1] + 1 && list[3] === list[2] + 1 && list[4] === list[3] + 1)   { 
        return 40;
}
    return 0;
}


function three_and_pair(list) {
	list.sort(reorder);
    if (list[0] === list[1] && list[1] === list[2] && list[3] === list[4] || list[0] === list[1] && list[2] === list[3] && list[3] === list[4] ) {
        return 25;
}
    return 0;
}

function list_return (five_rolls, yahtzee) {
	var list; 
		while (sum_of_numbers < list.length); {
		return list_return; 
			(sum_of_numbers = sum_of_numbers + 1);
}
	yahtzee() 
	yahtzee = 0;
	while (yahtzee < list.length); {
	return list_return;
	(yahtzee = yahtzee + 1);
}
}

