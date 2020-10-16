import React, {useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {alertActions} from './store/reducer';
function App() {
  const [fruitState, updateState] = React.useState("");
  const [personState, updatePersonState] = React.useState("");
  // const alert = useSelector(state => state.message);
  // const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(alertActions.success(state))
  //     console.log(state, alert)
  // }, [state]);

const renderUI = () => {
  if(fruitState == "apple") {
    return <div>Apple</div>
  }else if(fruitState == "banana") {
    return <div>Banana</div>
  }else {
    return <div>None</div>
  }
}

const renderEmployee = () => {
  if(personState == "bonnie") {
    return <div>Bonnie</div>
  }else if(personState == "fabio") {
    return <div>Fabio </div>
  }else {
    return <div>None</div>
  }
}


  return (
    <div className="App">  
        <h1>Fruits</h1>  
        <input test-id="name" type="text" value={fruitState} onChange={(event) => updateState(event.target.value)} />  
        {renderUI()} 

        <h1>Employee</h1>  
        <input test-id="employee" type="text" value={personState} onChange={(event) => updatePersonState(event.target.value)} />  
        {renderEmployee()}  
    </div>
  );
}

export default App;
