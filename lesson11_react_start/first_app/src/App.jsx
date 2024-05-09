// import logo from './logo.svg';
// const logo = reqiure('./logo.svg');
import './App.css';

function App() {
  const fruits = ['apple', 'banana', 'orange'];
  // .map is a method of array that returns a new array with the results of calling a provided function on every element in the calling array.
  // const fruits2 = fruits.map( (fruit) => fruit[0] );
  // const listItems = fruits.map( (fruit) => <li>{fruit}</li>)
  // fruits -> listItems -> <ul>
  // fruits -> <ul>
  // console.log(fruits2);
  const cars = [{ name: 'BMW', price: 13000 }, { name: 'Audi', price: 10000 }, { name: 'Mercedes', price: 15000 }];
  const number = 10;
  const groups = [[{name: 'Max', age: 12, grades:['A', 'A', 'A']}, {name: 'Joe', age: 13, grades:['B', 'C', 'A']}],
   [{name: 'Jakson', age: 16, grades:['F', 'F', 'F']}, {name: 'Carl', age: 10, grades:['B', 'C', 'B']}],
    [{name: 'Mike', age: 14, grades:['A', 'F', 'A']}, {name: 'Jane', age: 11, grades:['B', 'C', 'B']}]];
  return (
    <div>
      <p>Hello world</p>
      {/* condition          if true, do this         if false, do this*/}
      {fruits.length > 0 ? "I have some fruits" : "I don't have any fruits "}
      {number < 7 ? "small" : (number > 12 ? 'super big' : 'big')}
      <ul>{fruits.map((fruit) => <li key = {fruit}>{fruit}</li>)}</ul>
      {/* number<7 ->small, number > 7 -> big  */}
      <p>Cars with price more then 12k:</p>
      {/* {cars.price > 12000 ? (cars.name) : null} */}
      <ul>{cars.map((car) => car.price > 12000 ? <li key={car.name}>{car.name}</li> : null)}</ul>
    </div>
  );
}

export { App };
