import { TOTAL_INVESTMENT,TOTAL_EXPANSES } from "./Constants";

const initialState = {
    investment:[],
    expanses:[]
}
const HomeReducer = (state=initialState,action)=>{
    switch(action.type){        
        case TOTAL_INVESTMENT:
            return {
                ...state,
                investment:[...state.investment,action.payload]
            };
        
        case TOTAL_EXPANSES:
            return{
                ...state,
                expanses:action.payload
            }
        default:
            return state;
    }
}
export default HomeReducer;