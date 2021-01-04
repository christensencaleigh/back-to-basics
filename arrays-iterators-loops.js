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

//multi-dimensional arrays example
var myShoppingList = [["Oranges", 5], ["Apples", 10], ["Bananas", 5], ["Watermelon", 1], ["Pineapple", 2]];
console.log(myShoppingList);


//array manipulation
//add element to the end
myArray.push(['Matt', 28]);
//remove an element from the end
myArray.pop();
//add element to the beginning
myArray.unshift(['Gia', 7]);
//remove element from the beginning, assigning to a variable
var removedFromMyArray = myArray.unshift();

//splice method includes 2 arguments (start, stop) (allows us to copy a portion of an array, returns a new array)
var groceryList = ['eggs', 'milk', 'butter', 'bread', 'cheese'];

//join method (take an array and converts it to a string with the delimiter of your choice as the parameter: ("," or "-")


// objects

let spaceship = {
	homePlanet: 'Earth',
	color: 'silver',
	'Fuel Type': 'Turbo Fuel',
	numCrew: 5,
	flightPath: ['Venus', 'Mars', 'Saturn']
};
let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;
