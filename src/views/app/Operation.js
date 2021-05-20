import React,{useState} from 'react'
import { ModalResults } from "./ModalResults";

export const Operation = ({data,contador}) => {
    const [modal, setModal] = useState(false);
    const toggle=() => setModal(!modal);
    return (
        <div className="operation py-2" onClick={toggle}>
            <div className="operation__content">
                <div className="operation__content-left">
                    {` Letra ${contador+1} - ${data.moneda}`}
                </div>
                <div className="operation__content-right">
                    {` TCEA ${data.tcea.TCEA} %`}
                </div>
            </div>
            <ModalResults toggle={toggle} modal={modal} setModal={setModal} data={data} value={data.tcea}/>
        </div>
    )
}
