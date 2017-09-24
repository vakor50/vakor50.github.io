var creatures = [
	{
		"name":"Gladiator",
		"armor_class":16,
		"hit_points":165,
		"strength":18,
		"dexterity":15,
		"constitution":16,
		"intelligence":10,
		"wisdom":12,
		"charisma":15,
		"actions":{
			"attack":[
				{
					"number":3,
					"name":"spear",
					"attack_bonus":7,
					"damage_dice":"3d8",
					"damage_bonus":4,
					"damage_type":"piercing"
				}
			]
		}
	},
	{
		"name":"Archer",
		"armor_class":17,
		"hit_points":100,
		"strength":18,
		"dexterity":16,
		"constitution":16,
		"intelligence":12,
		"wisdom":10,
		"charisma":14,
		"actions":{
			"attack":[
				{
					"number":2,
					"name":"bow",
					"attack_bonus":7,
					"damage_dice":"1d8",
					"damage_bonus":4,
					"damage_type":"piercing"
				}
			]
		}
	},
	{
		"name":"Goblin",
		"armor_class":15,
		"hit_points":12,
		"strength":8,
		"dexterity":14,
		"constitution":10,
		"intelligence":10,
		"wisdom":8,
		"charisma":8,
		"actions":{
			"attack":[
				{
					"number":1,
					"name":"scimitar",
					"attack_bonus":4,
					"damage_dice":"1d6",
					"damage_bonus":2,
					"damage_type":"slashing"
				}
			]
		}
	},
	{
		"name":"Kobold",
		"armor_class":12,
		"hit_points":10,
		"strength":7,
		"dexterity":15,
		"constitution":9,
		"intelligence":8,
		"wisdom":7,
		"charisma":8,
		"actions":{
			"attack":[
				{
					"number":1,
					"name":"dagger",
					"attack_bonus":4,
					"damage_dice":"1d4",
					"damage_bonus":2,
					"damage_type":"piercing"
				}
			]
		}
	},
	{
		"name":"Orc",
		"armor_class":13,
		"hit_points":22,
		"strength":16,
		"dexterity":12,
		"constitution":16,
		"intelligence":7,
		"wisdom":11,
		"charisma":10,
		"actions":{
			"attack":[
				{
					"number":1,
					"name":"greataxe",
					"attack_bonus":5,
					"damage_dice":"1d12",
					"damage_bonus":3,
					"damage_type":"slashing"
				}
			]
		}
	},
	{
		"name":"Hobgoblin",
		"armor_class":18,
		"hit_points":18,
		"strength":13,
		"dexterity":12,
		"constitution":12,
		"intelligence":10,
		"wisdom":10,
		"charisma":9,
		"actions":{
			"attack":[
				{
					"number":1,
					"name":"longsword",
					"attack_bonus":3,
					"damage_dice":"1d10",
					"damage_bonus":1,
					"damage_type":"slashing"
				}
			]
		}
	},
	{
		"name":"Bandit",
		"armor_class":12,
		"hit_points":18,
		"strength":11,
		"dexterity":12,
		"constitution":12,
		"intelligence":10,
		"wisdom":10,
		"charisma":10,
		"actions":{
			"attack":[
				{
					"number":1,
					"name":"scimitar",
					"attack_bonus":3,
					"damage_dice":"1d6",
					"damage_bonus":1,
					"damage_type":"slashing"
				}
			]
		}
	},
	{
		"name":"Bandit Captain",
		"armor_class":15,
		"hit_points":100,
		"strength":15,
		"dexterity":16,
		"constitution":14,
		"intelligence":14,
		"wisdom":11,
		"charisma":14,
		"actions":{
			"attack":[
				{
					"number":2,
					"name":"scimitar",
					"attack_bonus":5,
					"damage_dice":"1d6",
					"damage_bonus":3,
					"damage_type":"slashing"
				},
				{
					"number":1,
					"name":"dagger",
					"attack_bonus":5,
					"damage_dice":"1d4",
					"damage_bonus":3,
					"damage_type":"piercing"
				}
			]
		}
	},
	{
		"name":"Berserker",
		"armor_class":13,
		"hit_points":99,
		"strength":16,
		"dexterity":12,
		"constitution":17,
		"intelligence":9,
		"wisdom":11,
		"charisma":9,
		"actions":{
			"attack":[
				{
					"number":1,
					"name":"greataxe",
					"attack_bonus":5,
					"damage_dice":"1d12",
					"damage_bonus":3,
					"damage_type":"slashing"
				}
			]
		}
	},
	{
		"name":"Knight",
		"armor_class":18,
		"hit_points":80,
		"strength":16,
		"dexterity":11,
		"constitution":14,
		"intelligence":11,
		"wisdom":11,
		"charisma":15,
		"actions":{
			"attack":[
				{
					"number":2,
					"name":"greatsword",
					"attack_bonus":5,
					"damage_dice":"2d6",
					"damage_bonus":3,
					"damage_type":"slashing"
				}
			]
		}
	},
	{
		"name":"Scout",
		"armor_class":13,
		"hit_points":27,
		"strength":11,
		"dexterity":14,
		"constitution":12,
		"intelligence":11,
		"wisdom":13,
		"charisma":11,
		"actions":{
			"attack":[
				{
					"number":2,
					"name":"longbow",
					"attack_bonus":4,
					"damage_dice":"1d8",
					"damage_bonus":2,
					"damage_type":"piercing"
				}
			]
		}
	},
	{
		"name":"Veteran",
		"armor_class":17,
		"hit_points":90,
		"strength":16,
		"dexterity":13,
		"constitution":14,
		"intelligence":10,
		"wisdom":11,
		"charisma":10,
		"actions":{
			"attack":[
				{
					"number":2,
					"name":"longbow",
					"attack_bonus":5,
					"damage_dice":"1d8",
					"damage_bonus":3,
					"damage_type":"slashing"
				},
				{
					"number":1,
					"name":"shortsword",
					"attack_bonus":5,
					"damage_dice":"1d6",
					"damage_bonus":3,
					"damage_type":"slashing"
				}
			]
		}
	},
	{
		"name":"Ogre",
		"armor_class":11,
		"hit_points":91,
		"strength":19,
		"dexterity":8,
		"constitution":16,
		"intelligence":5,
		"wisdom":7,
		"charisma":7,
		"actions":{
			"attack":[
				{
					"number":1,
					"name":"greatclub",
					"attack_bonus":6,
					"damage_dice":"2d8",
					"damage_bonus":4,
					"damage_type":"budgeoning"
				}
			]
		}
	},
	{
		"name":"Half-Ogre",
		"armor_class":12,
		"hit_points":48,
		"strength":17,
		"dexterity":10,
		"constitution":14,
		"intelligence":7,
		"wisdom":9,
		"charisma":10,
		"actions":{
			"attack":[
				{
					"number":1,
					"name":"battleaxe",
					"attack_bonus":5,
					"damage_dice":"2d10",
					"damage_bonus":3,
					"damage_type":"slashing"
				}
			]
		}
	},
	{
		"name":"Griffon",
		"armor_class":12,
		"hit_points":91,
		"strength":18,
		"dexterity":15,
		"constitution":16,
		"intelligence":2,
		"wisdom":13,
		"charisma":8,
		"actions":{
			"attack":[
				{
					"number":1,
					"name":"beak",
					"attack_bonus":6,
					"damage_dice":"1d8",
					"damage_bonus":4,
					"damage_type":"piercing"
				},
				{
					"number":1,
					"name":"claws",
					"attack_bonus":6,
					"damage_dice":"2d6",
					"damage_bonus":4,
					"damage_type":"slashing"
				}
			]
		}
	},
	{
		"name":"Hill Giant",
		"armor_class":13,
		"hit_points":160,
		"strength":21,
		"dexterity":8,
		"constitution":19,
		"intelligence":5,
		"wisdom":9,
		"charisma":6,
		"actions":{
			"attack":[
				{
					"number":2,
					"name":"greatclub",
					"attack_bonus":8,
					"damage_dice":"3d8",
					"damage_bonus":5,
					"damage_type":"bludgeoning"
				}
			]
		}
	},
	{
		"name":"Test Monk",
		"armor_class":20,
		"hit_points":116,
		"strength":11,
		"dexterity":20,
		"constitution":15,
		"intelligence":13,
		"wisdom":18,
		"charisma":13,
		"actions":{
			"attack":[
				{
					"number":2,
					"name":"quarterstaff",
					"attack_bonus":8,
					"damage_dice":"1d8",
					"damage_bonus":5,
					"damage_type":"bludgeoning"
				},
				{
					"number":2,
					"name":"unarmed",
					"attack_bonus":8,
					"damage_dice":"1d6",
					"damage_bonus":5,
					"damage_type":"bludgeoning"
				}
			]
		}
	},
]

// generate a random number between low and high
function generateRandom(low, high) {
	return Math.floor(Math.random() * high) + low; 
}

// given an ability score, find its modifier
function calculateModifier(attr) {
	return Math.floor((attr - 10) / 2);
}

// sum n calls of the generateRandom function
function generateSumRandom(n, low, high) {
	var sum = 0;
	for (var i = 0; i < n; i++) {
		sum += generateRandom(low, high);
	}
	return sum;
}


// use the damage string to generate a damage value
// EX:
//		damageValue(creatures[one].Action.Attack[0].Damage, false)
// TODO:
// 		
function damageValue(dmg_dice, dmg_bonus, crit) {
	var splitD = dmg_dice.split("d");
	
	var numDie = parseInt(splitD[0]);
	var dieValue = parseInt(splitD[1]);

	var critical = (crit) ? 2 : 1;

	return (critical * generateSumRandom(numDie, 1, dieValue)) + dmg_bonus;

}


var winner = [];
var creatOneCrit = [];
var creatTwoCrit = [];
var margin = [];
var firstHitRatio = [];
var secondHitRatio = [];

function fight() {
	var one = $("#comb-1 option:selected").val();
	var two = $("#comb-2 option:selected").val();

	var initOne = generateRandom(1, 20) + calculateModifier(creatures[one].dexterity);
	var initTwo = generateRandom(1, 20) + calculateModifier(creatures[two].dexterity);

	var first = 0;
	var second = 0;

	if (initOne > initTwo) {
		first = one;
		second = two;
	} else {
		first = two;
		second = one;
	}

	var hpFirst = creatures[first].hit_points;
	var hpSecond = creatures[second].hit_points;

	var acFirst = creatures[first].armor_class;
	var acSecond = creatures[second].armor_class;

	firstCrit = 0;
	secondCrit = 0;

	var firstCount = 0;
	var firstHit = 0;
	var secondCount = 0;
	var secondHit = 0;

	while(hpFirst > 0 && hpSecond > 0) {
		// first creature attacks second creature
		firstHit = 0;
		firstCount = 0;
		secondHit = 0;
		secondCount = 0;
		for (var a = 0; a < creatures[first].actions.attack.length; a++) {
			for (var i = 0; i < creatures[first].actions.attack[a].number; i++) {
				if (hpSecond > 0) {
					// roll d20
					var roll = generateRandom(1, 20);

					if (roll == 20) {
						firstCrit++;
					}

					var atk = roll + creatures[first].actions.attack[a].attack_bonus;
					// $(".log").append("<p>" + creatures[first].name + "1 rolled " + roll + " + " + (atk-roll) + " to hit!</p>");

					// compare against opponent AC
					if (atk > creatures[second].armor_class) {
						var damage = damageValue(creatures[first].actions.attack[a].damage_dice, creatures[first].actions.attack[a].damage_bonus, roll == 20); 
						hpSecond -= damage;
						
						// $(".log").append("<p>" + creatures[first].name + "1 made a(n) " + creatures[first].actions.attack[0].name + " attack against " + creatures[second].name + "2</p>");
						// $(".log").append("<p>" + creatures[second].name + "2 was dealt " + damage + " " + creatures[first].actions.attack[0].damage_type + " damage.</p>");
						// $(".log").append("<p>" + creatures[second].name + "2 has " + hpSecond + " hp remaining.</p>");
						if (hpSecond <= 0) {
							// $(".log").append("<p><h4>" + creatures[second].name + "2 is dead!</h4></p>");
							winner.push(first);
						}
						firstHit++;
					} else {
						// $(".log").append("<p>" + creatures[first].name + "1 missed!</p>");
					}
					
				}
				firstCount++;
			}
		}


		// $(".log").append("<br>");

		

		// second creature attacks first creature
		if (hpSecond > 0) {
			for (var a = 0; a < creatures[second].actions.attack.length; a++) {
				for (var i = 0; i < creatures[second].actions.attack[a].number; i++) {
					if (hpFirst > 0) {
						// roll d20
						var roll = generateRandom(1, 20);

						if (roll == 20) {
							secondCrit++;
						}

						var atk = roll + creatures[second].actions.attack[a].attack_bonus;
						// $(".log").append("<p>" + creatures[second].name + "2 rolled " + roll + " + " + (atk-roll) + " to hit!</p>");

						// compare against opponent AC
						if (atk > creatures[first].armor_class) {
							var damage = damageValue(creatures[second].actions.attack[a].damage_dice, creatures[second].actions.attack[a].damage_bonus, roll == 20); 
							hpFirst -= damage;
							
							// $(".log").append("<p>" + creatures[second].name + "2 made a(n) " + creatures[second].actions.attack[0].name + " attack against " + creatures[first].name + "1.</p>");
							// $(".log").append("<p>" + creatures[first].name + "1 was dealt " + damage + " " + creatures[second].actions.attack[0].damage_type + " damage.</p>");
							// $(".log").append("<p>" + creatures[first].name + "1 has " + hpFirst + " hp remaining.</p>");
							if (hpFirst <= 0) {
								// $(".log").append("<p><h4>" + creatures[first].name + "1 is dead!</h4></p>");
								winner.push(second);
							}
							secondHit++;
						} else {
							// $(".log").append("<p>" + creatures[second].name + "2 missed!</p>");
						}
						
					}
					secondCount++;
				}
			}
		}

		// $(".log").append("<br>");



		var f = (firstCount == 0) ? 0 : firstHit/firstCount;
		var s = (secondCount == 0) ? 0 : secondHit/secondCount;

		// console.log(f);

		if (first == one) {
			firstHitRatio.push(f);
			secondHitRatio.push(s);
		} else {
			secondHitRatio.push(f);
			firstHitRatio.push(s);
		}
	}

	if (hpFirst < 0) {hpFirst = 0;}
	if (hpSecond < 0) {hpSecond = 0;}

	margin.push(Math.abs(hpFirst - hpSecond));

	if (first == one) {
		creatOneCrit.push(firstCrit);
		creatTwoCrit.push(secondCrit);
	} else {
		creatOneCrit.push(secondCrit);
		creatTwoCrit.push(firstCrit);
	}
	

	hpFirst = creatures[first].hit_points;
	hpSecond = creatures[second].hit_points;
}


$(".fight").click(function() {
	$(".log").empty();
	console.log("combat");

	var cases = 100;

	for (var i = 0; i < cases; i++) {
		fight();
	}

	var one = $("#comb-1 option:selected").val();
	var two = $("#comb-2 option:selected").val();

	var numFirst = 0
	critsOne = 0;
	critsTwo = 0;
	var mDiff = 0;
	for (var i = 0; i < cases; i++) {
		if (parseInt(winner[i]) == one) {
			numFirst++;
		}
		critsOne += creatOneCrit[i];
		critsTwo += creatTwoCrit[i];
		mDiff += margin[i];
	}

	var oneRatio = 0;
	for (var i = 0; i < firstHitRatio.length; i++) {
		oneRatio += firstHitRatio[i];
	}
	oneRatio = oneRatio/firstHitRatio.length;

	var twoRatio = 0;
	for (var i = 0; i < secondHitRatio.length; i++) {
		twoRatio += secondHitRatio[i];
	}
	twoRatio = twoRatio/secondHitRatio.length;

	// console.log("1: " + firstHitRatio);
	// console.log("2: " + secondHitRatio);

	// console.log(winner);
	// console.log(creatOneCrit);
	// console.log(creatTwoCrit);
	// console.log(margin);

	$(".log").append("<p>The " + creatures[one].name + " won " + numFirst + "/"+ cases +" times.</p>");
	$(".log").append("<p>The " + creatures[one].name + " had an average of " + (critsOne/cases).toFixed(3) + " critical hits per fight.</p>");
	$(".log").append("<p>The " + creatures[two].name + " had an average of " + (critsTwo/cases).toFixed(3) + " critical hits per fight.</p>");
	$(".log").append("<p>The " + creatures[one].name + " had an average attack hit ratio of " + oneRatio.toFixed(3) + " per fight.</p>");
	$(".log").append("<p>The " + creatures[two].name + " had an average attack hit ratio of " + twoRatio.toFixed(3) + " per fight.</p>");
	$(".log").append("<p>There was an average margin of defeat of " + (mDiff/cases).toFixed(3) + " hit points.</p>")

	// after calculations, reset data stores
	winner = [];
	creatOneCrit = [];
	creatTwoCrit = [];
	margin = [];
});

$(document).ready(function() {
	for (var i = 0; i < creatures.length; i++) {
		console.log(creatures[i].name);
		$("#comb-1").append('<option value="' + i + '">' + creatures[i].name + '</option>');
		$("#comb-2").append('<option value="' + i + '">' + creatures[i].name + '</option>');
	}
});

