import {SET_LOG} from '../Constants/constants';

const initialState = {
    logs: new Map(), //Comme une dictionnaire de clé valeur
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOG:
            const {count,date} = action.payload
            const logs = new Map(state.logs);
            logs.set(date,count);
            return {
                ...state,
                logs
            }
        default: return state;
    }
}

export default reducer;