import React, {useState, useCallback} from 'react'
import {Button} from '@material-ui/core'
import {object,func} from 'prop-types'

const Counter = ({layout, buttonStyle}) => {
    const [count,setCount] = useState(0); 
    const color = count > 0 ? 'rebeccaPurple' : 'grey';
    
    const addCount = useCallback(() => setCount(count+1),[count]);

    const subtractCount = useCallback(() => setCount(count-1),[count]);

    return (
        <div style= {layout}>
            <p>{count}</p>
            <Button onClick={addCount} variant="outlined" style={buttonStyle(color)}>+</Button>
            <Button onClick={subtractCount} variant="outlined" style={buttonStyle(color)}>-</Button>
        </div>
    );
}

Counter.propTypes = {
    layout:object,
    buttonStyle:func
}

const layout = {
    color:"blue",
    textAlign:"center"
}

const buttonStyle = color =>({
    backgroundColor:color,
    color:"white",
    fontSize:16
})

const App = () => {
  return (
   <div>
       <Counter layout={layout} buttonStyle={buttonStyle}/>
   </div>
  );
}

export default App;
