// import logo from './logo.svg';
// const logo = reqiure('./logo.svg');
import "./App.css";
import React, {useState, useEffect} from "react";
function App() {
  function getGoodStudent(student) {
        // for(grade of student.grades)
     for(let i = 0; i < student.grades.length; i++){
      if (student.grades[i] == 'A'){
        return <li key={student.name}>{student.name}</li>
      }
    }
  }
  // const fruits = ["apple", "banana", "orange"];
  const [fruits, setFruits] = useState(["apple", "banana", "orange"]);
  const [counter, setCounter]= useState(0);
  
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
  const [student, setStudent] = useState(groups);



  useEffect(()=>{
    alert(counter);
    console.log('Hello world');
    setCounter(prev => prev+1)
  }, [counter]);




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
          setCounter(prev =>prev+1)
        }}>Increase counter</button>

{/* [] -> {},{},{} */}
      <p>Students older than age 12</p>
      {/* <ul>{groups.map((groups) => groups.age > 12 ? <li key={groups.name}>{groups.name} </li> : null)}</ul> */}
      {/* [] -> [][][] -> {}  */}
      <ul>
        {student.map((group) => {
          return group.map((student) => student.age > 12 ? <li key= {student.name}>{student.name}</li>: null)
        })}
      </ul>
      <p>Students That have an A grade</p>
      <ul>
        {student.map((group) =>{// 1 == '1' true, 1 === 1 true, 1 === '1' false
          // return group.map((student) => getGoodStudent(student))
          return group.map(getGoodStudent)
         })}
      </ul>
      {/* student.splice()
        student = student.splice()
      */}
      <button onClick={() => setStudent(prev => [...prev,  [{name: "Ben", age: 15, grades: ["A", "C", "C"]}] ])}>Add New Student</button>
      <button onClick={() => setStudent(prev => {
      // copy
      const copy = [...prev]
      copy.pop()
      return copy
      // prev.splice(0,  student.length - 2)
      })}>Remove Student</button>
 {/* without useEffect:
 change state -> something happend -> state is changed -> something else happend 
 whith useEffect:
 change state -> something happend -> state is changed + our executed -> something else happend
 */}
      

     
    </div>
  );
}

export default App;
