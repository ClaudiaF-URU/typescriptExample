function Greeter(greeting: string) {
    this.greeting = greeting;
}

Greeter.prototype.greet = function () {
    return "Hello, " + this.greeting;
}

let greeter = new Greeter('Claudia');

let button = document.createElement('button');
button.textContent = "Test";
button.onclick = function () {
    alert(greeter.greet());
};

document.body.appendChild(button);