// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }

  attack = () => {
    return this.strength;
  }

  receiveDamage = (damage) => {
    this.health -= damage;
  }

}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health,strength);
    this.name = name;
  }  

  battleCry = () => {
    return 'Odin Owns You All!'
  }

  receiveDamage = (damage) => {
    this.health -= damage;

    if (this.health > 0) {
      return this.name + ' has received ' + damage + ' points of damage';
    } else {
      return this.name + ' has died in act of combat';
    }


    // this.health > 0 ? this.name + ' has received DAMAGE points of damage' :  name + 'has died in act of combat';
  }

}

// Saxon
class Saxon extends Soldier {
  receiveDamage = (damage) => {
    this.health -= damage;

    if (this.health > 0) {
      return 'A Saxon has received ' + damage + ' points of damage';
    } else {
      return 'A Saxon has died in combat';
    }

    // this.health > 0 ? 'A Saxon has received DAMAGE points of damage' :  'A Saxon has died in combat';
  }
}

// War
class War {

  vikingArmy = [];
  saxonArmy = [];

  addViking = (viking) => {
    this.vikingArmy.push(viking);
  }

  addSaxon = (saxon) => {
    this.saxonArmy.push(saxon);
  }

  vikingAttack = () => {
    let singleSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let singleViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    let damage = singleSaxon.receiveDamage(singleViking.strength);

    if (singleSaxon.health <= 0) {
      this.saxonArmy.splice(singleSaxon, 1);
    }
    
    return damage;
  }

  saxonAttack = () => {
    let singleSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let singleViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    let damage = singleViking.receiveDamage(singleSaxon.strength);

    if (singleViking.health <= 0) {
      this.vikingArmy.splice(singleViking, 1);
    }

    return damage;
  }

  showStatus = () => {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!'
    } else if (this.vikingArmy.length == 0) {
      return 'Saxons have fought for their lives and survived another day...'
    } else {
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
