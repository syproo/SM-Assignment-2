

function greet() {
    let name = 'John';

    return function () {
        console.log("Hi " + name);
    };
}

let greeting = greet();
greeting();