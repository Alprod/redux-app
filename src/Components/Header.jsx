import {useSelector, useDispatch} from "react-redux";
import {revert_dragon } from "../Actions/dragonsActions-type";
import Button  from "react-bootstrap/Button";
import {Fragment} from "react";

const Header = () => {
    const { count } = useSelector(state=> state.dragonReducer);
    const {counter} = useSelector(state => state.knightReducer)

    const dispatch = useDispatch();
    const handleClick = () => {
      dispatch(revert_dragon());
    }
    return (
        <Fragment>
            <div className={'mb-3'}>
                <h6>Dragons</h6>
                <p>Le nombre de dragon{count > 1 ? 's':''} est de  {count}</p>
                <Button onClick={handleClick} size={'sm'} variant="outline-dark">Renverser la liste de dragon</Button>
            </div>
            <div>
                <h6>Chevalier</h6>
                <p>Le nombre de chevalier{counter > 1 ? 's':''} est de  {counter}</p>
            </div>

        </Fragment>
    )
}

export default Header;