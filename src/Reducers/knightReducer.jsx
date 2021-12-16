import {DELETE_KNIGHT, SET_KNIGHT, ADD_KNIGHT, REVERT_KNIGHT} from "../Constants/constants";
import {check_dragon_exists} from "../Actions/dragonsActions-type";

const initialState = {
    knightList: [],
    knight:'',
    messages:'',
    counter:0,
    verifKnight:false
}

const reducer = (state = initialState, action) => {

    let knight, knightList;
    switch (action.type) {
        case SET_KNIGHT:
            knight = action.payload;
            return {
                ...state,
                knight,
                messages: ''
            }
        case ADD_KNIGHT:
            knightList = state.knightList;
            knight = state.knight;
            if (knight === '') {
                return {
                    ...state,
                    verifKnight: false,
                    messages: "J'ai besoin d'un chevalier pour combatre les dragons",
                    knight: ''
                }
            }
            if (check_dragon_exists(knight, knightList) === true) {
                return {
                    ...state,
                    verifKnight: false,
                    messages: `${knight} ne joue pas les usurpateurs il existe déjà`,
                    knight: ''
                }
            }
            knightList = [...state.knightList];
            knightList.push(state.knight);
            return {
                ...state,
                knightList,
                verifKnight: true,
                messages: `Bienvenue à toi au grand chevalier ${knight}`,
                counter: state.counter + 1,
                knight: ''
            }
        case DELETE_KNIGHT:
            knight = action.payload;
            knightList = [...state.knightList];
            if (check_dragon_exists(knight, knightList) === false) {
                return {
                    ...state,
                    knight: '',
                    messages: `Chevalier ${knight} n'existe pas`,
                    verifKnight: false
                }
            }
            knightList = knightList.filter(k => k !== knight);
            return {
                ...state,
                verifKnight: false,
                messages: `Au revoir jeune et courageux Chevalier ${knight}`,
                counter: state.counter - 1,
                knightList
            }
        case REVERT_KNIGHT:
            knightList = [...state.knightList];
            knightList.sort(() => Math.random() - .5);
            return {
                ...state,
                knightList
            }

        default:
            return state;
    }
}


export default reducer;
