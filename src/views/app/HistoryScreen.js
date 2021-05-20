import React, { useContext,useState } from 'react'
import { OperationContext } from '../../context/OperationContext';
import {Operation} from "./Operation";
import Filter from "./Filter";
export const HistoryScreen = () => {

    const {data}=useContext(OperationContext);

    const [toggleFilter,setToggleFilter]=useState('todo')

    return (
        <div>
            <div className="history__filter py-5">
                <Filter setToggleFilter={setToggleFilter}/>
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
