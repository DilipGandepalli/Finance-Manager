import { 
    TOTAL_EXPANSES, 
    TOTAL_INVESTMENT,
    ADD_CUSTOMER, 
    REMOVE_CUSTOMER 

} from "./Constants"

export const totalInvestment = data =>({
    type : TOTAL_INVESTMENT,
    payload :data
})

export const totalExpanses = data =>({
    type: TOTAL_EXPANSES,
    payload : data
})

export const addNewCustomer = data =>({
    type: ADD_CUSTOMER,
    payload : data
})

export const removeCustomer = data =>({
    type : REMOVE_CUSTOMER,
    payload : data
})