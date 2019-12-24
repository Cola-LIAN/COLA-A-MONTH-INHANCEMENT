//https://github.com/green-fox-academy/jsa-shenzhen-2019-syllabus/blob/master/teaching-materials/inheritance/aircraft-carrier/README.md

class Aircraft{
    constructor(type, ammunition, baseDamage, maxAmmo){
        this.type = type;
        this.ammunition = ammunition;
        this.baseDamage = baseDamage;
        this.maxAmmo = maxAmmo;
        // this.status = {
        //     'Type': this.type,
        //     'Ammo': this.ammunition,
        //     'Base Damage': this.baseDamage,
        //     'All Damage': this.baseDamage * this.ammunition,
        // }
    }

    fight(){
        let allDamage = this.baseDamage * this.ammunition;
        this.ammunition = 0; 
        return allDamage
    }

    refill(ammo){
        let refilled =  Math.min(this.maxAmmo - this.ammunition, ammo);
        this.ammunition += refilled;
        return refilled
    }

    getType(){
        return this.type;
    }

    getStatus(){
        // console.log(this.status);
        return {
            'Type': this.type,
            'Ammo': this.ammunition,
            'Base Damage': this.baseDamage,
            'All Damage': this.baseDamage * this.ammunition,
        }
    }

    isPriority(){
        return this.type === 'F35'&& true
    }
}


//class carrier
class Carrier{
    constructor(ammunition = 0, healthyPoint){
        this.aircrafts = [];
        this.ammunition = ammunition;
        this.healthyPoint = healthyPoint;
    }

    add(newAircraft){
        this.aircrafts.push(newAircraft);
    }

    fill(ammo){
        this.aircrafts.forEach(aircraft => {
            if(aircraft.isPriority()){
                if(ammo > 0){
                    ammo -= aircraft.refill(ammo);               
                }
            }
        })
        this.aircrafts.forEach(aircraft => {
            if(!aircraft.isPriority()){
                if(ammo > 0){
                    ammo -= aircraft.refill(ammo);               
                }
            }
        })
    }

    flight(enemy){
        this.aircrafts.forEach(aircraft => {
            aircraft.fight();
            this.healthyPoint = 0;
        })
    }

    getStatus(){
        this.aircrafts.map(aircraft => {
            console.log(aircraft.getStatus());
        })
    }

}

let airCraft1 = new Aircraft("F16", 2, 30, 8);
let airCraft2 = new Aircraft("F35", 5, 50, 12);
let airCraft3 = new Aircraft("F16", 4, 30, 8);
let airCraft4 = new Aircraft("F35", 6, 50, 12);

let carrier1 = new Carrier(healthyPoint = 5000);
carrier1.add(airCraft1);
carrier1.add(airCraft2);
carrier1.add(airCraft3);

let carrier2 = new Carrier(healthyPoint = 4000);
carrier2.add(airCraft3);
carrier2.add(airCraft4);


//test for carrier's fill function
// carrier1.getStatus();
// carrier1.fill(10);
// carrier1.getStatus();

carrier2.getStatus();
carrier2.fill(8);
carrier2.getStatus();