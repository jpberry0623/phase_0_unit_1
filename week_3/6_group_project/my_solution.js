//////////////SUM///////////////////



//original code from Kate:

var oddLengthArray  = [1, 2, 3, 4, 5, 5, 7];
var evenLengthArray = [4, 4, 5, 5, 6, 6, 6, 7];

function sum(array) {
total = array[0], 
for (i = 0; i < array.length; i++) {
    return total += array[i];
 }

alert(sum(oddLengthArray));
alert(sum(evenLengthArray));


//John fixed syntax and refactored:

var oddLengthArray  = [1, 2, 3, 4, 5, 5, 7];
var evenLengthArray = [4, 4, 5, 5, 6, 6, 6, 7];


function sum(array) { 
	total=0;
for (var i = 0; i < array.length; total += array[i++]);
    return total;
 };


 alert(sum(oddLengthArray));
 alert(sum(evenLengthArray));

//////////// MEAN ////////////////

var oddLengthArray  = [1, 2, 3, 4, 5, 5, 7];
var evenLengthArray = [4, 4, 5, 5, 6, 6, 6, 7];

function mean(array) {
 var sum = 0, i;
 for (i = 0; i < array.length; i++) {
 	sum += array[i];
	}
	return array.length ? sum / array.length : 0;
};
 

alert(mean(oddLengthArray));
alert(mean(evenLengthArray));

//////////// MEDIAN ////////////////

var oddLengthArray  = [1, 2, 3, 4, 5, 5, 7];
var evenLengthArray = [4, 4, 5, 5, 6, 6, 6, 7];

function median(array) {
	var med = Math.floor(array.length / 2);
    
    	if ((array.length % 2) === 1) { 
        	return array[med];
        } else {
        	return (array[med - 1] + array[med]) / 2;
        }
};

alert(median(oddLengthArray))
alert(median(evenLengthArray))
