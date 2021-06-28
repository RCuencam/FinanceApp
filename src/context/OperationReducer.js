import { types } from "../types/types";

export const OperationReducer=(state=[],action)=>
{
    switch(action.type)
    {
        case types.add:
            return [...state,action.payload]
        case types.change:
            return state.map(item=>{
                item.moneda=action.payload
                return item
            })
        default:
            return state
    }
}