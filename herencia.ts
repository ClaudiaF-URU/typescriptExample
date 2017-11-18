class Animal {
    constructor(public name: string) {}
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");




let button1 = document.createElement('button');
button1.textContent = "Snake";
button1.onclick = function () {
    sam.move();
};

document.body.appendChild(button1);

let button2 = document.createElement('button');
button2.textContent = "Horse";
button2.onclick = function () {
    tom.move(34);
};

document.body.appendChild(button2);