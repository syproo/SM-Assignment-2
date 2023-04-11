const Person = {
  name: "Adil",
  age: 18,
  position:"Teacher",
};

const jsonObject = JSON.stringify(Person);
localStorage.setItem('person', jsonObject);
const str = localStorage.getItem('person');
const parsedObject = JSON.parse(str);
console.log(parsedObject);