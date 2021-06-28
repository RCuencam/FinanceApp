import React,{useState,useEffect} from 'react'
import { Modal } from 'reactstrap';
import CalculateTCEA from '../../helpers/CalculateTCEA';

export const ModalResults = ({toggle,modal,setModal,value,data,rate}) => {
    const [dataJson,setDataJson]=useState(data)
    const [resultado,setResultado]=useState(value)
    useEffect(()=>{
        if(data.moneda==='dolares'){
            setDataJson({...dataJson,moneda:"dolares"})
            setResultado(CalculateTCEA(data,rate))
        }else{
            setDataJson({...dataJson,moneda:"soles"})
            setResultado(CalculateTCEA(data,rate))
        }
    },[data])
    const updateResults=()=>{
        if(dataJson.moneda==='dolares'){
            setDataJson({...dataJson,moneda:"soles"})
            setResultado(CalculateTCEA({...data,moneda:"soles"},rate))
        }else{

            setDataJson({...dataJson,moneda:"dolares"})
            setResultado(CalculateTCEA({...data,moneda:"dolares"},rate))
        }
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} centered size="lg">
                
                <div className="modal__content">
                    <div className="close__button" onClick={()=>setModal(false)}>X</div>
                    <h2 className="modal__content-title">RESULTADOS</h2>
                    <div className="modal__content-results">
                        <div className="modal__content-results-left">
                            <div className="modal__content-results-item">
                                <p>Tipo de Moneda: <b className="text-green">{dataJson.moneda}</b> </p> 
                            </div>
                            <div className="modal__content-results-item">
                                <p>Tipo de Tasa: <b className="text-green">{data.tasa}</b> </p> 
                            </div>
                            <div className="modal__content-results-item">
                                <p>Valor de la tasa: <b className="text-green">{data.tasaValue}%</b> </p> 
                            </div>
                            <div className="modal__content-results-item">
                                <p>Capitalización: <b className="text-green">{data.capitalizacion}</b> </p> 
                            </div>
                            <div className="modal__content-results-item">
                                <p>Monto de operación: <b className="text-green">{data.operacion}</b> </p> 
                            </div>                        
                        </div>
                        <div className="modal__content-results-right">
                            <div className="modal__content-results-item">
                                <p>Costo Inicial: <b className="text-green">{value.costes_iniciales_totales}</b> </p> 
                            </div>
                            <div className="modal__content-results-item">
                                <p>Costo Final: <b className="text-green">{value.costes_finales_totales}</b> </p> 
                            </div>
                            <div className="modal__content-results-item">
                                <p>Fecha Inicio: <b className="text-green">{data.fechaInicio}</b> </p> 
                            </div>
                            <div className="modal__content-results-item">
                                <p>Fecha Final: <b className="text-green">{data.fechaFin}</b> </p> 
                            </div>
                        </div>
                    </div>
                    <h2 className="modal__content-result">TCEA: {resultado.TCEA}%</h2>
                    <button onClick={updateResults} className="modal_results">Cambiar a {data.moneda==="soles"? "dolares" : "soles" }</button>
                </div>
                
            </Modal>
            
        </div>
    )
}
