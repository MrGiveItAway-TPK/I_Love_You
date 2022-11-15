var aText = new Array("What would I do without your smart mouth?", "Drawing me in, and you kicking me out", "You got my head spinning, no kidding, I can't pin you down", "What's going on in that beautiful mind?", "I'm on your magical mystery ride", "And I'm so dizzy, don't know what hit me, but I'll be alright", "My head's underwater", "But I'm breathing fine", "You're crazy and I'm out of my mind", "'Cause all...", "'Cause all of me", "Loves all of you", "Love your curves and all your edges", "All your perfect imperfections", "Give your all to me", "I'll give my all to you", "You're my end and my beginning", "Even when I lose I'm winning", "How many times do I have to tell you", "Even when you're crying you're beautiful too?", "The world is beating you down, I'm around through every mood", "You're my downfall, you're my muse", "My worst distraction, my rhythm and blues", "I can't stop singing, it's ringing in my head for you", "My head's underwater", "But I'm breathing fine", "You're crazy and I'm out of my mind", "'Cause all of me", "Loves all of you", "Love your curves and all your edges", "All your perfect imperfections", "Give your all to me", "I'll give my all to you", "You're my end and my beginning", "Even when I lose I'm winning", "'Cause I give you all...", "'Cause all of me", "Loves all of you", "Love your curves and all your edges", "All your perfect imperfections", "Give your all to me", "I'll give my all to you", "You're my end and my beginning", "Even when I lose I'm winning", "'Cause I give you all of me", "And you give me all of you", "'Cause I give you all of me", "And you give me all of you, oh");
var iSpeed = 100;
var iIndex = 0;
var iArrLength = aText[0].length;
var iScrollAt = 20;
var iTextPos = 0;
var sContents = '';
var iRow;

function scrolldown() {
	var elem = document.getElementById('typedtext');
	var scroll = 0;
	window.setInterval(function() {
		if(elem.scrollTop > scroll) scroll = elem.scrollTop;
		elem.scrollTo({
			top: scroll,
			behavior: 'smooth'
		})
		scroll += 1;
	}, 50);
}

function typewriter() {
	(document.getElementById("start_button")).style.display = "none";
	(document.getElementById("typedtext")).classList.add("typedtext");
	sContents = ' ';
	iRow = Math.max(0, iIndex - iScrollAt);
	var destination = document.getElementById("typedtext");
	while(iRow < iIndex) {
		sContents += aText[iRow++] + '<br />';
	}
	destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
	if(iTextPos++ == iArrLength) {
		iTextPos = 0;
		iIndex++;
		if(iIndex != aText.length) {
			iArrLength = aText[iIndex].length;
			setTimeout("typewriter()", 500);
		}
	} else {
		setTimeout("typewriter()", iSpeed);
	}
}

function gray() {
	(document.getElementById("background")).classList.remove("normal");
	(document.getElementById("background")).classList.add("gray-scale");
	(document.getElementById("start_button")).classList.remove("normal");
	(document.getElementById("start_button")).classList.add("gray-scale");
	setTimeout("normal()", 3000);
}

function normal() {
	(document.getElementById("background")).classList.remove("gray-scale");
	(document.getElementById("background")).classList.add("normal");
	(document.getElementById("start_button")).classList.remove("gray-scale");
	(document.getElementById("start_button")).classList.add("normal");
	setTimeout("gray()", 3000);
}

function start() {
	setTimeout("typewriter()", 8000);
	(document.getElementById("player")).play();
	setTimeout("gray()", 3000);
	scrolldown();
}
const button = document.querySelector(".heart-like-button");
button.addEventListener("click", () => {
	button.classList.add("liked");
	start()
});

const audio = document.querySelector("audio");

audio.addEventListener('ended', (event) => {
	window.location.reload();
});