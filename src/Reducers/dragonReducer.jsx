import {ADD_DRAGON, DELETE_DRAGON, REVERT_DRAGON_LIST, SET_DRAGON} from "../Constants/constants";
import {check_dragon_exists} from "../Actions/dragonsActions-type";

const initialState = {
    dragonList: [],
    dragon: '',
    message: '',
    count: 0,
    verifAdd:false
}

const reducer = (state = initialState, action) => {
   let dragon, dragonList;
    switch (action.type) {
        case SET_DRAGON:
            dragon = action.payload;
            return {
                ...state,
                dragon,
                message:''
            }

        case ADD_DRAGON:
            dragon = state.dragon;
            dragonList = state.dragonList
            if (dragon === '') {
                return {
                    ...state,
                    message: 'Il me faut un dragon',
                    dragon: '',
                    verifAdd:false
                }
            }
            if(check_dragon_exists(dragon,dragonList) === true) {
                return {
                    ...state,
                    message: `Attention votre dragon ${dragon} existe déjà`,
                    dragon:'',
                    verifAdd:false
                }
            }
            dragonList = [...state.dragonList ]
            dragonList.push(state.dragon);
            return {
                ...state,
                dragonList,
                verifAdd: true,
                message: `${dragon} à bien été ajouter`,
                count: state.count + 1,
                dragon: ''
            }

        case DELETE_DRAGON:
            dragon = action.payload;
            dragonList = [ ...state.dragonList ];
            if(check_dragon_exists(dragon, dragonList) === false) {
                return {
                    ...state,
                    message: `Le dragon ${dragon} n'existe pas`,
                    dragon: '',
                    verifAdd:false
                }
            }
            dragonList = dragonList.filter( d => d !== dragon )
           return {
               ...state,
               dragonList,
               message: `${dragon} à bien été supprimer`,
               count: state.count - 1,
               verifAdd:false
           }

        case REVERT_DRAGON_LIST:
            dragonList = [...state.dragonList ];
            dragonList.sort(() => Math.random() - .5 );
            return {
                ...state,
                dragonList
            }
        default: return state;
    }
}

export default reducer;