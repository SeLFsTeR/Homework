// Write your JS here
let hero = {
    name        : 'Paul',
    heroic      : true, 
    inventory   : [],
    health      : 10,   
    weapon      : {
        type    : '',
        damage  : 2
    }
}

let dagger = {type:'dagger', damage: 2}

let person = hero //so the player can input own name

document.getElementById("inn").onclick = function() {rest(person)}
document.getElementById('dagger').onclick = function() {pickUpItem(person, dagger)}
document.getElementById('bag').onclick = function() {equipWeapon(person)}

function rest(person) {

    if (person.health === 10) {
        alert( "Yo!You already at 10!")
    } else {
        person.health = 10
    }
     
    return person
    }

function pickUpItem(person, weapon) {
    person.inventory.push(weapon)    
}



function equipWeapon(person) {
	
	if (person.inventory.length < 1) {
		return
	}
	
	person.weapon=person.inventory[0]
	return person.weapon
}


let sign = prompt('What is your name?')

