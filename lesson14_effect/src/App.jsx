// import logo from './logo.svg';
// const logo = reqiure('./logo.svg');
import "./App.css";
import React, {useState, useEffect, useRef} from "react";
function App() {
  function getGoodstudents(students) {
        // for(grade of students.grades)
     for(let i = 0; i < students.grades.length; i++){
      if (students.grades[i] === 'A'){
        return <li key={students.name}>{students.name}</li>
  function getGoodstudents(students) {
        // for(grade of students.grades)
     for(let i = 0; i < students.grades.length; i++){
      if (students.grades[i] === 'A'){
        return <li key={students.name}>{students.name}</li>
      }
    }
  }
  // const fruits = ["apple", "banana", "orange"];
  const [fruits, setFruits] = useState(["apple", "banana", "orange"]);
  const [counter, setCounter]= useState(0);
  const checker = useRef(0);
  // .map is a method of array that returns a new array with the results of calling a provided function on every element in the calling array.
  // const fruits2 = fruits.map( (fruit) => fruit[0] );
  // const listItems = fruits.map( (fruit) => <li>{fruit}</li>)
  // fruits -> listItems -> <ul>
  // fruits -> <ul>
  const number = 10;
  const groups = [
    [
      { name: "Max", age: 12, grades: ["A", "A", "A"] },
      { name: "Joe", age: 13, grades: ["B", "C", "A"] },
    ],
    [
      { name: "Jakson", age: 16, grades: ["F", "F", "F"] },
      { name: "Carl", age: 10, grades: ["B", "C", "B"] },
    ],
    [
      { name: "Mike", age: 14, grades: ["A", "F", "A"] },
      { name: "Jane", age: 11, grades: ["B", "C", "B"] },
    ],

  ];
  const [students, setstudents] = useState(groups);
  const [students, setstudents] = useState(groups);



  useEffect(()=>{
    if(checker.current > 1){
      alert(counter);
      console.log('Hello world');
    }
    else{
      checker.current += 1;
    }
    // setCounter(prev => prev+1)
  }, [counter]);

  useEffect(()=>{
    if (counter2.current > 1){
      let group = students[students.length - 1];
      let student = group[group.length - 1];
      alert(student.name);
    }
    else{
      counter2.current += 1;
    }
    
  }, [students]);

  const counter2 = useRef(0);
  
const count_till_10 = useRef(0);


  
  return (
    <div>
      <p>Hello world</p>
      {/* condition          if true, do this         if false, do this*/}
      {fruits.length > 0 ? "I have some fruits" : "I don't have any fruits "}
      {number < 7 ? "small" : number > 12 ? "super big" : "big"}
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
      {/* elements = [el,el2,el3] => ...elements => el, el2, el3 */}
      <button onClick={()=>setFruits(["empty", "empty2"])}>make empty</button>
      <button onClick={()=>setFruits(prev => [...prev, "new fruit"])}>add fruit</button>
      
      
      <p>
        {counter}</p>
        <button onClick={()=> {
          // TODO: check if our ref is == 10, then increase the counter by 1 and make ref = 0
          if(count_till_10.current === 10){
            setCounter(prev =>prev+1)
            count_till_10.current = 0;
          }
          else{
            count_till_10.current += 1;
          }
          
        }}>Increase counter</button>

{/* [] -> {},{},{} */}
      <p>students older than age 12</p>
      <p>students older than age 12</p>
      {/* <ul>{groups.map((groups) => groups.age > 12 ? <li key={groups.name}>{groups.name} </li> : null)}</ul> */}
      {/* [] -> [][][] -> {}  */}
      <ul>
        {students.map((group) => {
        {students.map((group) => {
          return group.map((student) => student.age > 12 ? <li key= {student.name}>{student.name}</li>: null)
        })}
      </ul>
      <p>students That have an A grade</p>
      <p>students That have an A grade</p>
      <ul>
        {students.map((group) =>{// 1 == '1' true, 1 === 1 true, 1 === '1' false
          // return group.map((students) => getGoodstudents(students))
          return group.map(getGoodstudents)
        {students.map((group) =>{// 1 == '1' true, 1 === 1 true, 1 === '1' false
          // return group.map((students) => getGoodstudents(students))
          return group.map(getGoodstudents)
         })}
      </ul>
      {/* students.splice()
        students = students.splice()
      {/* students.splice()
        students = students.splice()
      */}
      <button onClick={() => setstudents(prev => [...prev,  [{name: "Ben", age: 15, grades: ["A", "C", "C"]}] ])}>Add New students</button>
      <button onClick={() => setstudents(prev => {
      <button onClick={() => setstudents(prev => [...prev,  [{name: "Ben", age: 15, grades: ["A", "C", "C"]}] ])}>Add New students</button>
      <button onClick={() => setstudents(prev => {
      // copy
      const copy = [...prev]
      copy.pop()
      return copy
      // prev.splice(0,  students.length - 2)
      })}>Remove students</button>
      // prev.splice(0,  students.length - 2)
      })}>Remove students</button>
 {/* without useEffect:
 change state -> something happend -> state is changed -> something else happend 
 whith useEffect:
 change state -> something happend -> state is changed + our executed -> something else happend
 */}
      

     
    </div>
  );
}

export default App;
