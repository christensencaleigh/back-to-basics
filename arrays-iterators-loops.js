const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
	for(let i = 1; i <= 1000000; i++) {
		if ( (2 + 2) !== 4) {
			console.log('Something has gone very wrong :( ');
		}
	}
};

//re-assigned the function to a variable with a suitably short name
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();
console.log(is2p2.name);

//practice nesting an array of my children's name and ages
var myArray = [["Jayden", 3], ["Emily", 10]];
console.log(myArray);

//access array using indexes, remember arrays and objects are zero indexed!!!
var numbers = [50,60,70];
var myData = numbers[0];

//unlike strings, arrays are mutable! modify array using indexes
numbers[0] = 45;