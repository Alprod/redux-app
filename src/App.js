import './App.css';
import Container from 'react-bootstrap/Container'
import Dragons from "./Components/Containers";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {dateTimeFormatter, set_log} from "./Actions/dragonsActions-type";

function App() {
    const dispatch = useDispatch();
    const {count, date} = useSelector(state => {
        return{
            count: state.dragonReducer.count,
            date: state.logReducer.logs
        }
    })

    useEffect(()=>{
        dispatch(set_log({
            count: count,
            date: dateTimeFormatter()
        }))
    },[count, dispatch]);

    console.log(date);
  return (
    <div className="App">
        <Container>
            <h1 className={'display-1 fw-lighter fst-italic'}>Redux React App</h1>
            <Dragons />
        </Container>
    </div>
  );
}

export default App;
