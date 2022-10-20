t = new Date();
time = t.getHours();
greeting = "Good" 

if (time < 10) {
    greeting = greeting + " morning!";
}
else if (time < 17) {
    greeting = greeting + " day!";
}
else {
    greeting = greeting + " evening!"
}

console.log(greeting)