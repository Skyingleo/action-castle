const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

let where;

let commands = {
	go: (location) => {
		//console.log(location);

		weebStory[location]();
	},

	purchase: (items) =>{
		console.log("You purchased" + items);
	},

	verb: () => {
		console.log("uh oh");
	}

}

function verbObject (str){
	let verb = str.split(' ')[0];
	let object = str.split(' ')[1];
	if(commands[verb]){
		if(exits[where][object]==1){
			commands[verb](object);
		}
		else{
			console.log("Sorry that place or item doesn't exists");
		}
	}
	else{
		console.log("Sorry, you can't do that...");
	}
}

item = {
	convienceStore: {
		
	}
}

exits = {
	convienceStore: {
		outside: 1,
	},
	outside: {
		convienceStore: 1,
	}
}

weebStory = {


	convienceStore: () => {
		// first we have the description of the area:
		console.log("You are in a convienceStore, there's some interesting items like a kawaii knife.");
		where = "convienceStore";
		let items = [
			"kawaii knife", "a copy of crabGame", "cup noodle", "diet pepsi", "a copy of Yuri On Ice BlueRay"
		];
		let kawaii_knife = 1
	    let cup_noodle = 1


		let exits = [
			"outside"
		];

		// while(){
		// 	rl.question("What do you want to get?", (item) => {
		// 		console.log("You got " + item);
		// 	});
		// }


		rl.question("Where do you wanna go?", (exits) => {
			console.log("You " + exits);
			verbObject(exits);
		});

	},

	outside: () => {
		console.log("You are now outside");
		where = "outside";

		rl.question("Where do you wanna go?", (exits) => {
			console.log("You " + exits);
			verbObject(exits);
		});
	},

	shortcut: () => {
		where = "shortcut";
	}
}

props = {
	"kawaii knife" : {
		price: 40,
		"anime woo": function() {

		}
	}

}

props["kawaii knife"]["anime woo"]()

weebStory.convienceStore(); 