import {useDispatch, useSelector} from "react-redux";
import {Fragment} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import {add_dragon, set_dragon} from "../Actions/dragonsActions-type";
import Messages from "./Messages";
import {add_knight, set_knight} from "../Actions/knightActions-type";

const Formulaire = () => {
    const{ message, dragon, verifAdd } = useSelector(state => state.dragonReducer);
    const {messages, knight, verifKnight} = useSelector(state => state.knightReducer)
    const dispatch = useDispatch();

    const handleChangeDrogon = e => {
       const {value: dragon} = e.target;
        dispatch(set_dragon(dragon))
    }

    const handleChangeKnight = e => {
       const {value: knight} = e.target;
        dispatch(set_knight(knight))
    }

    const handleSubmitDragon = e => {
        e.preventDefault();
        dispatch(add_dragon());

    }
    const handleSubmitKnight = e => {
        e.preventDefault();
        dispatch(add_knight());
    }
    return (
        <Fragment>
            <Messages message={message} verifAdd={verifAdd}/>
            <Form onSubmit={handleSubmitDragon}>
                <h6>Ajouter un dragon</h6>
                <FloatingLabel controlId="dragon" label="Dragon" className="mb-3">
                    <Form.Control type={'text'} onChange={handleChangeDrogon} value={dragon} placeholder="Dragon"/>
                </FloatingLabel>
                <Button type={'submit'} variant="outline-dark" size={'sm'} className={'mb-4'}>Ajouter</Button>
            </Form>
            <Messages message={messages} verifAdd={verifKnight}/>
            <Form onSubmit={handleSubmitKnight}>
                <h6>Ajouter un chevalier</h6>
                <FloatingLabel controlId="knight" label="Chevalier" className="mb-3">
                    <Form.Control type={'text'} onChange={handleChangeKnight} value={knight} placeholder="Chevalier"/>
                </FloatingLabel>
                <Button type={'submit'} variant="outline-dark" size={'sm'}>Ajouter</Button>
            </Form>
        </Fragment>
    )
}

export default Formulaire;