//class plant
class Plant{
    constructor(name, thirstLine, absorption, moisture){
        this.name = name;
        this.thirstLine = thirstLine;
        this.moisture = moisture;
        this.absorption = absorption;
    }

    isThirsty(){
        return this.moisture <= this.thirstLine ? `The ${this.name} needs water` : `The ${this.name} doesn't needs water`;
    }

    watering(water){
        this.moisture += this.absorption * water;
        return this.moisture
    }
}

class Flower extends Plant{
    constructor(name, moisture, thirstLine = 5, absorption = 0.75){
        super(name, thirstLine, absorption, moisture);
    }
}

class Tree extends Plant{
    constructor(name, moisture, thirstLine = 10, absorption = 0.4){
        super(name, thirstLine, absorption, moisture);
    }
}

const peony = new Flower('peony', 1);
const rose = new Flower('rose', 2);
const daisy = new Flower('daisy', 3);
const pine = new Tree('pine', 4);
const oak = new Tree('oak', 5);

//class garden
class Garden{
    constructor(){
        this.plants=[peony];
    }

    addPlants(...plants){
        this.plants = [...this.plants, ...plants];
    }
    showPlants(){
        this.plants.forEach(plant => {
            console.log(plant.isThirsty());
        })
    }
    wateringGarden(waterAmount){
        this.plants.forEach(plant =>{
            plant.watering(waterAmount/this.plants.length);
            console.log(plant.isThirsty());
        })
    }
}


const plants = [rose, daisy, pine, oak];
const myGarden = new Garden();
myGarden.addPlants(...plants);

console.log('====== show garden =====');
myGarden.showPlants();
console.log('====== watering with 40 water =====');
myGarden.wateringGarden(40);
console.log('====== watering with 70 water =====');
myGarden.wateringGarden(70);

