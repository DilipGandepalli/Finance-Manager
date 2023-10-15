import { 
    TOTAL_INVESTMENT,
    TOTAL_EXPANSES,
    ADD_CUSTOMER,
    REMOVE_CUSTOMER,

} from "./Constants";

const initialState = {
    investment:[],
    expanses:[],
    customerDetails:[]
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
                expanses:[...state.expanses,action.payload ]
            };
        case ADD_CUSTOMER:
            return {
                ...state,
                // customerDetails: [],
                customerDetails: [...state.customerDetails, action.payload],
                
            };
        default:
            return state;
    }
}
export default HomeReducer;