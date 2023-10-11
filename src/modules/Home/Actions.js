import { TOTAL_EXPANSES, TOTAL_INVESTMENT } from "./Constants"

export const totalInvestment = data =>({
    type : TOTAL_INVESTMENT,
    payload :data
})

export const totalExpanses = data =>({
    type: TOTAL_EXPANSES,
    payload : data
})