/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	'm1': 'Ana.mp3'

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'im0':'sc1.jpg'  ,

});


// Define the Characters
monogatari.characters ({
	'g': {
		name: 'Gunner',
		color: '#5bcaff'
	},
	"a":{
		"Name": "Ana",
		"Color": "#00bfff",
		"Directory": "Sonal",
		"Images":{
			"Normal": "Normal.png",
			"Happy": "Party.png"
		}
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
	
		'g So I am finally here, at a crucial stage of my life',
		'g Job interview with HSBC Investment bank',
		'g I just need to ace this interview and my life is set',
		'g Ana is also attending. I hope she gets selected too',
		'g May be I will be able to ask her out on a date.',
		'a Gunner',
		'play music m1',
		'show background im0',
		'show character a Normal at center with fadeIn',
		'a Best of luck Gunner',
		'g Hey thank you . I wish you the same.',
		'a I am not sure. There is a lot of competition',
		'g Competition will always be there Ana',
		'g As my master says - Never give up. Thats my ninja way',
		'a Umm which professor said this',
		'g Lol. Its a popular dialogue from one of my favourite anime - Naruto',
		'a <Giggles> oh u r such a nerd Gunner',
		'g I know , I know',
		'a Hey Gunner, I think they are calling out ur name. All the best..',
		'g Thanks. Ill see you soon.',
		'stop music m1',





		'end'
	]
});