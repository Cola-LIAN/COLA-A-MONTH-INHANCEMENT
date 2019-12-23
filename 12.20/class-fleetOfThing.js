//Class Fleet
class Fleet {
    constructor(){
        this.things = [];
    }

    add(thing){
        this.things.push(thing);
    }

    getThings(){
        return this.things;
    }

    printThings(){
        for(let i = 0; i < this.things.length; i++){
            console.log(`${i+1}. ${this.things[i].print()}`);
            
        }
    }
}

//class Thing
class Thing {
    constructor(name){
        this.name = name;
        this.completed = false;
    }
    
    complete(){
        this.completed = true;
    }

    getName(){
        return this.name;
    }
    
    getCompleted(){
        return this.completed
    }

    print(){
        return this.completed ? (`[ ] ${this.name}`) :(`[x] ${this.name}`)
    }
}


const fleet = new Fleet();
let getMilk = new Thing('Get milk');
getMilk.complete();
fleet.add(getMilk);

fleet.add(new Thing('Remove the obstacles'));
fleet.add(new Thing('Stand up'));
fleet.add(new Thing('Eat lunch'));

fleet.printThings();
