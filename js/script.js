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
	'm2': 'sc2.mp3',
	'm3': 'party.mp3',
	'm4': 'cheated.mp3',
	'm5': 'Love.mp3'

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {
	'v1':'Crash.mp4',
	'v2':'Split.mp4',
	'v3':'coding.mp4'

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'im0':'sc1.jpg' ,
	'im1':'sc2.jpeg',
	'im2':'sc4bank.jpeg' ,
	'im3':'sc5insidebank.jpeg',
	'im4':'party.jpeg' ,
	'im5':'kiss.jpeg',
	'im6':'hrroom.jpeg' ,
	'im7':'london1.jpeg',
	'im8':'london2.jpeg' ,
	'im9':'london3.jpeg',
	'im10':'amster1.jpeg',
	'im11':'amster2.jpeg' ,
	'im12':'amster3.jpeg',
	'im13':'amster4.jpg',
	'im14':'fired.jpeg',
	'im15': 'halloween.jpg'
	//'im16',
	//'im17'
});
monogatari.component ('main-screen').template (() => {
    return `
	<img src="https://i.gifer.com/7XHE.gif">
	<main-menu></main-menu>
    `;
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
		"Directory": "Lewis",
		"Images":{
			"Lewis": "Lewis.png"
		}
	},
	'l':{
		"Name": "Lucy",
		"Color": "#00bfff",
		"Directory": "Lucy",
		"Images":{
			"Lucy": "Lucy.png"
		}
	},
	'd':{
		"Name": "Daphne",
		"Color": "#00bfff",
		"Directory": "Daphne",
		"Images":{
			"Normal": "Daphne.png"
		}

	},
	'h':{
		"Name": "Hannah",
		"Color": "#00bfff",
		"Directory": "Hannah",
		"Images":{
			"Normal": "HR.png"
		}

	},
	'o':{
		"Name": "Olivia",
		"Color": "#00bfff",
		"Directory": "Olivia",
		"Images":{
			"Normal": "1.png",
			"Happy": "2.png",
			"Druggy": "3.png"
		}

	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		
		//() => { gtag("event", "Scene", {"name": "0"});return true; },

		'g So I am finally here, at a crucial stage of my life',
		'g A job interview with HSBC Investment bank',
		'g I just need to ace this interview and my life is set',
		'g Ana is also attending. I hope she gets selected too 😍',
		'g May be I will be able to ask her out on a date 🥰',
		'a Hi Gunner',
		'play music m1 with volume 25 loop',
		'show background im0',
		'show character a Normal at center with fadeIn',
		'a Best of luck Gunner. Hope you crack this interview.',
		'g Hey Ana! Thank you ao much. I wish you the same.',
		'a I am not sure about it. There is a lot of competition for this job.',
		'g Competition will always be there Ana',
		'g As my master says - Never give up. Thats my ninja way',
		'a Umm.. which professor said this?',
		'g Lol. Its a popular dialogue from one of my favourite anime - Naruto',
		'a <Giggles> Oh you are such a nerd.. Gunner',
		'g I know , I know',
		'a Hey Gunner, I think they are calling out ur name. All the best..',
		'g Thanks. Ill see you soon.',
		'hide character a',
		'stop music m1',

		//() => { gtag("event", "Scene", {"name": "1"}); return true;},
			
		

		'play music m2 with volume 50 loop',
		'show background im1',
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
		'b Nice. Do you have any questions for me',
		'g I would like to know about the culture of the team that you worked with',
		'b We have a very open culture. you can feel at ease to make your point without being judges. and yes, high performers get promoted fast <wink>',
		'g good to know sir. thank you',
		'b Sayonara! Gunner',
		'g Arigato gozaimasu',
		'stop music m2',

	
		'show background im0',
		'show character l Lucy at left with fadeIn',
		'l We would like the following candidates to stay back - Bella, Daphne, Gunner, Ana',
		'l We invite the selected candidates to join us for drinks and dinner at hard Rock cafe tonight at 8pm . Please come in casuals ',
		'l See you all soon',
		'hide character l',
		'stop music m2',
		'show character a Normal at center with fadeIn',
		'play music m1 with volume 25 with loop',
		'a Congrats Gunner',
		'g Congrats Ana. We cracked the interview successfully',
		'a Yes we made it. Never give up - Thats my ninja way as well 😊',
		'g Do you wanna go to HardRock together tonight ?',
		'a Yes we all 4 should go together tonight',
		'g Yeah, you are right',
		'stop music m1',
		'hide character a',
		'g Damn! four is a crowd.',

	
		'show background im2',
		'centered 6 months later.....',
		'g Wow. Time just flies. ',
		'g Cant believe its been 6 months since I got this job',
		'g I need a vacation',

		'show background im3',
		'show character b Lewis at left with fadeIn',
		'b Hello Team. I am very pleased to announce that we have secured the IPO deal for Lucky Games',
		'b Thanks to everyone for all the late night work to secure this deal',
		'b Tonight we party like animals',
		'b Coke and weed is on me..',
		'hide character b',
		'show character a Normal at right with fadeIn',
		'a Finally we can blow some steam off today',
		'g Yeah.. I have been waiting for this day to finally come...',
		'g So Ana, shall I pick you tonight for the party',
		'a Awwww. you are so sweet Gunner',
		'a I need to go to the parlor though. So im planning to head straight to the party from there',
		'g Thats cool. So I will see you tonight',
		'a See ya!',
		'hide character a',

		'play music m3 with volume 50 loop',
		'show background im4',
		'show character d Normal at left with fadeIn',
		'd Hey Gunner... You are late... Where have you been dude ?',
		'g I went to buy something for... umm.. Nevermind',
		'g Hey do you know where Ana is',
		'd yea she is dancing right now on the floor',
		'g Ok I will go and check on her',
		'd Ok Romeo...',
		'hide character d',
		'show character a Happy at center with fadeIn',
		'g Hello Ana !',
		'a Gunner OMG.. Im so high...',
		'a Hey can you get me a martini sweety..',
		'g Sure. I will be back in a minute',
		'hide character a',
		'show character d Normal at left with fadeIn',
		'a Hey Daphne.. Where did Ana go..',
		'd Turn to your right dude ',
		'hide character d',
		'stop music m3',

		'play music m4 with volume 50 loop',
		'show background im5',
		'g What the...',
		'show background im4',
		'show character d Normal at left with fadeIn',
		'd I feel sorry for you Gunner',
		'd I cant believe she is making out with Lewis',
		"d Well money can buy anything these days.. even a girl's love",
		'g umm... yea.. my stomach is not feeling good...',
		'g So i think ill leave now',
		'd Take care Gunner. Call me once you reach home',
		'g Yeah sure.. Bye..',
		'hide character d',
		'stop music m4',

		'show background im6',
		'show character h Normal at right with fadeIn',
		'h Hello Gunner. How are you doing',
		'h Im happy to see you. Not many folks walk in to meet the HR folks here... It gets lonely',
		'g Hello Hannah.. I am doing good',
		'g I have a favor to ask',
		'h How can I help you Gunner',
		'g I am beginning to hate this place',
		'h Did anybody mistreat you here ? Did something happen at the party ?',
		'g No Hannah. I meant I would like to move to a different city, a different country maybe if possible',
		'h I see. No worries . It happens to all of us',
		'h Let me see which other city branches have openings right now',
		'h Hey there is an urgent opening in London',
		'h Do you wanna move there ?',
		'g yes I would love to move to UK at the earliest',
		'h Well, I can make it happen. How soon would you like to join',
		'g I just need a week to move out of this place',
		'h Consider it done',
		'g Thanks Hannah',
		'hide character h',

		'show background im7',
		'show character o Normal at center with fadeIn',
		'o Hi.. you must be Gunner from USA',
		'h Yes I am. and you must be Olivia',
		'o Yes I am mate. Welcome to London. Come inside',

		'show background im8',
		'o you found the right house to stay with a wonderful and kind housemate  - me',
		'g Haha.. Yes I am sure about that. Thanks for offering a room to stay ',
		'o Well.. I usually work out of house and the room was anyway empty so I put it up for rent.',
		'g So what do you do Olivia',
		'o I am a musician and a painter',
		'g Wow you must be one creative person',
		'o Are you trying to flirt with me',
		'g Umm.. no sorry.. I didnt mean it like that',
		'o Chill dude.. I was just joking',
		'g You had me there for a moment. ',
		'o I will have you for a much longer time someday soon',
		'g umm.. whaaat ?',
		'o haha.. nothing... You must be tired...',
		'o I will leave you alone so tht you can get some rest',
		'g Sure ill catch you soon',
		'hide character o',

		'show background im9',
		'show character o Druggy at center with fadeIn',
		'g Thnks for showing me around today Olivia',
		'o Its my pleasure Gunner. I was anyway bored at home',
		'g I thought painting removes boredom from people"s lives',
		'o Yes. But I have this mental block that I wann remove',
		'o I am out of my LSD strips. My dealer is out of town',
		'g Wait what ? You do drugs?',
		'o Jus for recreation and to boost my creativity',
		'o It started with cocaine. I slowly moved to Ketamine and LSD',
		'o What about you? Whats your poison ?',
		'g I smoke marjuana occasionally to chill',
		'o So you have never tried anything else ?',
		'g Nope..',
		'o Not even magic mushrooms ?',
		'g Nope. Are they good?',
		'o Are they good ? OMG you are such a noob ',
		'g Yeah thats what all girls say to me',
		'o Awwwww..... You know what ?',
		'o I have a crazy idea',
		'g And that is...?',
		'o Lets catch the next eurostar train to Amsterdam',
		'o Its leaving London in an hour',
		'g Well no doubt you are crazy',
		'o Hey I am not joking... please please please .. lets go',
		'g Alright. Lets go pack our bags and catch the next train',
		'hide character o',


		'show background im10',
		'show character o Druggy at center with fadeIn',
		'g I cant believe we caught the 4 pm train and reached Amsterdam in 4 hrs',
		'o Thats why i love eurostar',
		'g Now what do we do',
		'o Well lets check into a hotel, drop our bags and start the party',
		'g ooookkaaaayy',
		'o OMG you are s cute',
		'g Yea all girls say that to me',
		'o Lets go shopping for magic mushrooms',
		'g I have no idea where to get them',
		'o We just need to make a stop at the Bulldog here',
		'g Cool. Lead the way Olivia',




		'show background im11',
		'show character o Druggy at center with fadeIn',
		'o Here you go. You should chew this a bit and swallow it',
		'g What is it ?',
		'o Its magic.. Its mushrooms.. Its magic mushrooms',
		'g Cool. How much should I eat',
		'o Since its your first time, just have half of what I am having',
		'o and drink a lot of wate after swallowing them',
		'g Done. Now... what will happen',
		'o Lets listen to my trippy playlist.. and wait for the magic to happen',
		
		'play music m5 with volume 50 loop',
		'show background im12',
		'g Im starting to fall in love',
		'show background im13',
		'g All is well',
		'stop music m5',
		'hide character o',
		'show background im9',
		'Few months later.....',

		'show video v1 immersive with close',
		'hide video v1',
		
		'show background im14',
		'And this happened',
		'show video v2 immersive with close',
		'hide video v2',

		'show background im8',
		'Gunner develops split personality - Satoshi Nakamoto .',
		'Nakamoto, who is pissed with Wall Street, starts working on Bitcoin.',
		'He wakes up and does coding at night time when Gunner falls asleep',
		'show video v3 immersive with close',
		'hide video v3',

		'show background im15',
		' Satoshi Nakamoto releases bitcoin paper on halloween night after discussing his work with 3 authors who had tried to create digital money.',
		









		'end'
	]
});