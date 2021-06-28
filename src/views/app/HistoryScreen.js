import React, { useContext,useState } from 'react'
import { OperationContext } from '../../context/OperationContext';
import {Operation} from "./Operation";
import Filter from "./Filter";
import { types } from "../../types/types";
export const HistoryScreen = () => {

    const {data,dispatch}=useContext(OperationContext);

    const [toggleFilter,setToggleFilter]=useState('todo')
    const changeTipeMoney=()=>{
        console.log('click');
        if(toggleFilter==="dolar"){
            dispatch({
                type:types.change,
                payload:'soles'
            })
        }
        if(toggleFilter==="soles"){
            dispatch({
                type:types.change,
                payload:'dolares'
            })
        }
    }

    return (
        <div>
            <div className="history__filter py-5">
                <Filter setToggleFilter={setToggleFilter}/>
                {toggleFilter!=="todo" && <button className="button_filter_change" onClick={changeTipeMoney}>Cambiar todo a {toggleFilter==="soles" ? 'dolares' : 'soles'}</button>}
            </div>
            {toggleFilter==='todo' && data.map((value,contador)=>(
                <Operation data={value} contador={contador} key={value.id}/>
            ))}
            {toggleFilter==='soles' && data.filter(value=>value.moneda==='soles').map((value,contador)=>(
                <Operation data={value} contador={contador} key={value.id}/>
            ))}
            {toggleFilter==='dolar' && data.filter(value=>value.moneda==='dolares').map((value,contador)=>(
                <Operation data={value} contador={contador} key={value.id} />
            ))}
        </div>
    )
}
