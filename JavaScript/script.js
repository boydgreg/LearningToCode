function area (length, width) {
    return length * width;
}
function makeTransaction(priceOfSale) {
    if (priceOfSale <= bankBalance) {
        bankBalance -= priceOfSale;
        console.log("Purchase Successful");
    } else {
        console.log("Insufficient Funds.");
    }
}
function Student (first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function() {
        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
    }
}

var students = [];
students.push(new Student("Jenny", "lage",5));
students.push(new Student("Timmy", "Turner",8));
students.push(new Student("Carl", "Jr",4));

var student = students[0];

for (var key in student) {
    console.log(student[key]);
}



// for (var index = 0; index < students.length; index++) {
//     var student = students[index];

//     console.log(student.greeting());
// }


// var s1 = new Student("jenny", "Laga", 5);
// console.log(s1);
// console.log(s1.greeting());



// console.log(bankBalance);
// makeTransaction(79.00);
// console.log(bankBalance);
// makeTransaction(2.32);
// console.log(bankBalance);
// makeTransaction(10.45);
// console.log(bankBalance);
// makeTransaction(450.00);
// console.log(bankBalance);
// var rectanglesArea = [];
// rectanglesArea.push(area(10, 15));
// rectanglesArea.push(area(14,2));
// rectanglesArea.push(area(4,5));

// console.log(rectanglesArea);

// var bankBalance = 500;

// var student0 = {
//     firstName: "Jayne",
//     lastName: "Looo",
//     age:  8,
//     greeting: 
// };
// var student1 = new Object();
// student1.firstName = "John"
// student1.lastName = "Parker";
// student1.age = 7;

// var student2 = {};
// student2.firstName="Zack";
// student2.lastName="Bobo";
// student2.age=5;

// var students = [];
// students.push(student0);
// students.push(student1);
// students.push(student2);


// console.log(student0.greeting());