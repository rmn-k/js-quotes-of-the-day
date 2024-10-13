var arrQuotes= [
	// are these array of objects?
	{
		"author": "Om Swami",
		"quote": "Live. Love. Laugh. Give."
	},
	
	{
		"author": "Guru Gobind Singh",
		"quote": "He alone is a man who keeps his word: Not that he has one thing in the heart, and another on the tongue."
	},

	{
		"author": "Kabir",
		"quote": "You have slept millions and millions of years. Why not wake up this morning?"
	},
	
	{
		"author": "Guru Arjan Dev",
		"quote": "Don't create enmity with anyone as God is within everyone."
	},
	
	{
		"author": "Guru Arjan Dev",
		"quote": "By the Grace of God, I am cured of the disease of egotism, and Death no longer terrifies me."
	}
];


function randomSelector(arrLength){
	return Math.floor(Math.random() * arrLength); // Math.random() creates random double value bw [0,1)
}

function generateQuote(){
	var randomNumber= randomSelector(arrQuotes.length);
	document.getElementById("quoteOutput").innerHTML='' + arrQuotes[randomNumber].quote + '"';
	document.getElementById("authorOutput").innerHTML="- " + arrQuotes[randomNumber].author;
}
