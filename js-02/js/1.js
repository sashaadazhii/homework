let age = Number(prompt('What is your age?'));

if (age > 0 && age < 12) {
    alert('You are a child');
} else if (age <= 12 && age > 18) {
    alert('You are a teenager');
} else if (age <= 18 && age > 60) {
    alert('You are adult person');
} else {
    alert('You are a pensionare');
}
