import React, {useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {actionTypes} from './store/reducer';
function App() {
  const [fruitState, updateState] = React.useState("65656565");
  // const [personState, updatePersonState] = React.useState("");
  // const fruite = useSelector(state => state.fruite);
//   const person = useSelector(state => state.person);
//   const dispatch = useDispatch();
//     useEffect(() => {
//       dispatch(actionTypes.add({fruite: fruitState}))
//       console.log(fruitState, fruite)
//   }, [fruitState]);

//   useEffect(() => {
//     dispatch(actionTypes.add({person: personState}))
//     console.log(personState, person);
// }, [personState]);

const renderUI = () => {
  if(fruitState == "apple") {
    return <div test-id="fruite">Apple</div>
  }else if(fruitState == "banana") {
    return <div test-id="fruite">Banana</div>
  }else {
    return <div test-id="fruite">None</div>
  }
}

// const renderEmployee = () => {
//   if(personState == "bonnie") {
//     return <div>Bonnie</div>
//   }else if(personState == "fabio") {
//     return <div>Fabio </div>
//   }else {
//     return <div>None</div>
//   }
// }


  return (
    <div className="App">  
        <h1>Fruits</h1> 
        <input test-id="name" type="text" value={fruitState} onChange={(event) => updateState(event.target.value)} />  
        {renderUI()} 

        <h1>Employee</h1>
        {/* <input test-id="employee" type="text" value={personState} onChange={(event) => updatePersonState(event.target.value)} />   */}
        {/* {renderEmployee()}   */}
    </div>
  );
}

export default App;
