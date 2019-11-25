var johnScore = (89 + 120 + 103) / 3;
console.log (johnScore);

var mikeScore = (116 + 94 + 123) / 3;
console.log (mikeScore);

var highestScore = mikeScore > johnScore;
console.log ('The highest team scored 111 average scores' + highestScore);

if (mikeScore > johnScore){
	console.log('mikes team is the best, they scored 333 goals and their average score is 111');
}
var maryScore = (97 + 134 + 105) / 3;
console.log (maryScore)

if (maryScore > mikeScore && maryScore > johnScore) {
	console.log ('mary\'s team is the best');
} else if ( mikeScore > johnScore && mikeScore > maryScore) {
	console.log ('mike\'s team is the best');
} 