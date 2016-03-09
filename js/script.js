$(document).ready(function() {
	
	var insult = ["You don’t have the IQ, you’re dumb with no clue.",
"What a waste of time. You’re a total lightweight.",
"You’re highly overrated, both in talent and other ways.",
"Not surprised, you’re a boring person.",
"You’re a totally overrated clown who speaks without knowing facts.",
"I’m not sure you were born in the U.S.",
"You are a fool! You need a new pair of glasses.",
"You put on glasses so people think you’re smart. And it just doesn’t work! You know people can see through the glasses.",
"You’re a total loser. You have zero credibility.", 
"Who cares! You’re an irrelevant clown.",
];

    var paper = document.createElement('audio');
        paper.setAttribute('src', 'sounds/paper.wav');
    
	$("#submit_problem").click(function() {
        paper.play();
		$("body").animate({scrollTop: $("#go_apology").offset().top}, 1300);
		document.getElementById("apology").innerHTML = insult[Math.floor(Math.random() * insult.length)]; 
	});
    
    $("#again_btn").click(function() { 
    	$("body").animate({scrollTop: 0}, 1300);
    	document.getElementById("exampleMessage").value = '';
    });
    
});
