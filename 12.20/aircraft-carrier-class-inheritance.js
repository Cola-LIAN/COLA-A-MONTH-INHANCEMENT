//https://github.com/green-fox-academy/jsa-shenzhen-2019-syllabus/blob/master/teaching-materials/inheritance/aircraft-carrier/README.md

class Aircraft{
    constructor(type, ammunition, baseDamage, maxAmmo){
        this.type = type;
        this.ammunition = ammunition;
        this.baseDamage = baseDamage;
        this.maxAmmo = maxAmmo;
    }

    fight(){
        let allDamage = this.baseDamage * this.ammunition;
        this.ammunition = 0; 
        return allDamage
    }

    refill(ammo){
        this.ammunition = Math.min(this.maxAmmo, this.ammunition + ammo);
        return this.ammunition == this.maxAmmo ? 1 : 'error'
    }

    getType(){
        return this.type;
    }

    getStatus(){
        return {
            'Type': this.type,
            'Ammo': this.ammunition,
            'Base Damage': this.baseDamage,
            'All Damage': this.fight(),
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
            while(ammo > 0){
                if(aircraft.isPriority){
                    aircraft.refill(ammo);
                }
            }
        })

        this.aircrafts.forEach(aircraft => {
            while(ammo > 0){
                if(!aircraft.isPriority){
                    aircraft.refill(ammo);
                }
            }
        })

    }
}