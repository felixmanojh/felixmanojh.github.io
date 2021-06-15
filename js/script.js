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
	'm1': 'Ana.mp3',
	'm2': 'sc2.mp3'

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
	'im0':'sc1.jpg' ,
	'im1':'sc2.jpg'

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
	},
	'b':{
		"Name": "Lewis",
		"Color": "#00bfff",
	},
	'l':{
		"Name": "Lucy",
		"Color": "#00bfff",
		"Directory": "Lucy",
		"Images":{
			"Lucy": "Lucy.png"
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

		'show background im1',
		'play music m2',
		'b Hello Gunner. How are you doing today. My name is Lewis and I head the trading team at HSBC',
		'g I am doing good sir. How about you ?',
		'b Good Good. So shall we get started ?',
		'g Yes sir. I am ready',
		'b So tell me about yourself',
		'g Myself David Gunner . Born and brought up at Washington DC . ',
		'g Completed my schooling in New York and moved to Washington for completing my MBA. ',
		'g I have been coding from the age of 9 and I am deeply interested in IB trading, CDOs . ',
		'g In my freetime I watch anime and read financial magazines & research on cryptography',
		'b You watch anime ? at this age?',
		'g Sir, I dont think watching anime has any age requirement. I find their story plots very engaging',
		'b Oh i see. Cool lets check your financial knowledge',
		'b what are the different types of money?',
		'g There are 5 different types of money: Fiat, commodity, representative, fiduciary, and commercial bank money',
		'b Good. Why do we need investment banks',
		'g The primary role of an investment bank is to advise government and businesses on how to meet their financial needs and help procure their finances',
		'g Without us, the world would not have progressed at this rate',
		'b Impressive. Last question for you',
		'b Why should we select you?',
		'g I like to play with numbers and from the very starting, I am very good at it. ',
		'g I also have very good analytical and logical abilities and I have always liked to solve such mental abilities questions.',
		'g I am also the batch topper ',
		'b Nice. Do you have any quesntions for me',
		'g I would like to know about the culture of the team that you worked with',
		'b We have a very open culture. you can feel at ease to make your point without being judges. and yes, high performers get promoted fast <wink>',
		'g good to know sir. thank you',
		'b Sayonara! Gunner',
		'g Arigato gozaimasu',
		

	
		'show background im0',
		'show character l Lucy at left with fadeIn',
		'l We would like the following candidates to stay back - Bella, Daphne, Gunner, Ana',
		'stop music m2',
		'show character a Normal at right with fadeIn',
		'play music m1',
		'a Congrats Gunner',
		'g Congrats Ana. We cracked the interview successfully',
		'a Yes we made it. Never give up - Thats my ninja way as well 😊',
		'l We invite the selcted candidates to join us for drinks and dinner at hard Rock cafe tonight at 8pm . Please come in casuals ',
		'l See you all soon',
		'g Do you want to go together tonight ?',
		'a Yes we all 4 should go together tonight',
		'g Yeah, you are right',
		'stop music m1',
		'g <Damn! four is a crowd >',







		'end'
	]
});