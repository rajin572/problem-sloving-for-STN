// --------------------------------------------------------------------------------------------

// *-------------------------------------- Task 1: Array Filtering And Mapping ----------------------------------------------

// TODO: Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

const people = [
  { name: "Farjana", age: 23, gender: "female" },
  { name: "Rahim", age: 25, gender: "male" },
  { name: "Mithila", age: 28, gender: "female" },
  { name: "Karim", age: 18, gender: "male" },
  { name: "Eti", age: 33, gender: "female" },
  { name: "Habib", age: 15, gender: "male" },
  { name: "Rima", age: 35, gender: "female" },
  { name: "Fahim", age: 25, gender: "male" },
  { name: "Mim", age: 19, gender: "female" },
  { name: "Ruby", age: 20, gender: "female" },
];

const allFemales = people.filter(
  (singlePerson) => singlePerson.gender === "female"
);

const arrayOfNames = allFemales.map((singlePerson) => singlePerson.name);

console.log("Task 1 Final Result: ", arrayOfNames);

// ------------------------------------------Task 1 Complete--------------------------------------------
//
//
//
//

// *-------------------------------------- Task 2: Object Manipulation ----------------------------------------------

// TODO: Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.

const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
  },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  { title: "The Diary of a Young Girl", author: "Anne Frank", year: 1947 },
  { title: "The Da Vinci Code", author: "Dan Brown", year: 2003 },
];

const getBookTitles = (books) => {
  const titles = [];
  for (let i = 0; i < books.length; i++) {
    titles.push(books[i].title);
  }
  return titles;
};

const bookTitles = getBookTitles(books);

console.log("Task 2 Final Result: ", bookTitles);

// -------------------------------------------Task 2 Complete--------------------------------------------
//
//
//
//
// *-------------------------------------- Task 3: Sorting Objects ----------------------------------------------

// TODO: Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

const cars = [
  { make: "Tesla", model: "Model 3", year: 2020 },
  { make: "Ford", model: "F-150", year: 2018 },
  { make: "Honda", model: "Accord", year: 2019 },
  { make: "Chevrolet", model: "Silverado", year: 2017 },
  { make: "BMW", model: "X5", year: 2019 },
  { make: "Mercedes-Benz", model: "E-Class", year: 2018 },
  { make: "Audi", model: "A4", year: 2017 },
  { make: "Lexus", model: "RX", year: 2016 },
  { make: "Nissan", model: "Altima", year: 2014 },
  { make: "Subaru", model: "Outback", year: 2013 },
];
const sortCarsByYear = (cars) => {
  return cars.sort((a, b) => a.year - b.year);
};

const sortedCars = sortCarsByYear(cars);

console.log("Task 3 Final Result: ", sortedCars);

// -----------------------------------Task 3 Complete--------------------------------------------
//
//
//
//
// *-------------------------------------- Task 4: Sorting Objects ----------------------------------------------

// TODO: Write A Function That Determines Whether A Given Year Is A Leap Year.

const isLeapYear = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return `${year} is a Leap year`;
      }
      return `Sorry, ${year} is not a leap year`;
    }
    return `${year} is a leap year`;
  }
  return `Sorry, ${year} is not a leap year`;
};

const myYear = isLeapYear(2024);

console.log("Task 4 Final Result: ", myYear);

// ---------------------------------------- Task 4 Complete ---------------------------------------------
