import React from 'react';
import './App.css';


export const renderEmployee = (personState, fruitState) => {
  if(personState === "person1") {    
    if(fruitState === "apple") { // we can add more states or variables ex: (fruitState && ) function ex: renderEmployee(personState, fruitState, someotherState)
      console.log(personState, fruitState)
      return <div test-id="person">Person1</div> 
    }
  }else if(personState.name == "person2") {
    return <div test-id="person">Person2</div>
  }else {
    console.log(personState, fruitState, "else")
    return <div test-id="person">None</div>
  }
}


function App(props) {
  const [fruitState, updateState] = React.useState("");
  const [personState, updatePersonState] = React.useState("");
  // const fruite = useSelector(state => state.fruite);
//   const person = useSelector(state => state.person);
//   const dispatch = useDispatch();
  //   React.useEffect(() => {
  //     // dispatch(actionTypes.add({fruite: fruitState}))
  // }, []);

//   useEffect(() => {
//     dispatch(actionTypes.add({person: personState}))
//     console.log(personState, person);
// }, [personState]);

const renderUI = () => {
  if(fruitState === "apple") {
      return <div test-id="fruite">Apple</div>
  }else if(fruitState === "banana") {
    return <div test-id="fruite">Banana</div>
  }else {
    return <div test-id="fruite">None</div>
  }
}


  return (
    <div className="App"> 
        <h1>Fruits</h1> 
        <input test-id="name" type="text" value={fruitState} onChange={(event) => updateState(event.target.value)} />  
        {renderUI()} 
        { props.myname === "abc" ? <div test-id="test1">{props.myname}</div> : props.myname === "xyz" ? <div test-id="test1">xyz</div> : <div test-id="test1">none</div>  }
        <h1>Employee</h1>
        <input test-id="employee" type="text" value={personState} onChange={(event) => updatePersonState(event.target.value)} />  
        <br/>
        {renderEmployee(personState, fruitState)}  
    </div>
  );
}

export default App;
// export default withRouter(App);
