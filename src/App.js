import React, {useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {alertActions} from './store/reducer';
function App() {
  const [state, updateState] = React.useState("");
  // const alert = useSelector(state => state.message);
  // const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(alertActions.success(state))
//     console.log(state, alert)
// }, [state]);

const renderUI = () => {
  if(state == "apple") {
    return <div>Apple</div>
  }else if(state == "banana") {
    return <div>Banana</div>
  }else {
    return <div>None</div>
  }
}


  return (
    <div className="App">    
        <input test-id="name" type="text" value={state} onChange={(event) => updateState(event.target.value)} />  
        {renderUI()}  
    </div>
  );
}

export default App;
