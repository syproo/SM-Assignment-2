
const Car = {
  brand:"Suzuki",
  color:"white",
  price:10000
}

window.localStorage.setItem('car', JSON.stringify(Car));
window.localStorage.getItem('car');
JSON.parse(window.localStorage.getItem('car'));