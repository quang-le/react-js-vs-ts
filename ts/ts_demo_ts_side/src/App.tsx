import {useState, useCallback, FunctionComponent} from 'react'
import {Button} from '@material-ui/core'


type Props = {
    layout :Layout,
    buttonStyle :(color:string)=> ButtonStyle
}

type Layout = {
    color :string;
    textAlign :"left"|"center"|"right";
}

interface ButtonStyle {     // same as type, but easier to use if you want to combine types
    backgroundColor :string,
    color :string,
    fontSize :number
}

const Counter:FunctionComponent<Props> = ({layout, buttonStyle}) => {
    const [count,setCount] = useState<number>(0); 
    const color :string = count > 0 ? 'rebeccaPurple' : 'grey';
    
    const addCount = useCallback(() :void => setCount(count+1),[count]);

    const subtractCount = useCallback(():void => setCount(count-1),[count]);

    return (
        <div style= {layout}>
            <p>{count}</p>
            <Button onClick={addCount} variant="outlined" style={buttonStyle(color)}>+</Button>
            <Button onClick={subtractCount} variant="outlined" style={buttonStyle(color)}>-</Button>
        </div>
    );
}

const layout :Layout = {
    color:"blue",
    textAlign:"center"
}

const buttonStyle = (color :string) :ButtonStyle => ({
    backgroundColor:color,
    color:"white",
    fontSize:16
})

const App :FunctionComponent<void> = () => {
  return (
   <div>
       <Counter layout={layout} buttonStyle={buttonStyle}/>
   </div>
  );
}

export default App;
