import React from 'react'
import { Modal } from 'reactstrap';

export const ModalResults = ({toggle,modal,setModal,value,data}) => {


    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} centered size="lg">
                
                <div className="modal__content">
                    <div className="close__button" onClick={()=>setModal(false)}>X</div>
                    <h2 className="modal__content-title">RESULTADOS</h2>
                    <div className="modal__content-results">
                        <div className="modal__content-results-left">
                            <div className="modal__content-results-item">
                                <p>Tipo de Moneda: <b className="text-green">{data.moneda}</b> </p> 
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
                    <h2 className="modal__content-result">TCEA: {value.TCEA}%</h2>
                </div>
                
            </Modal>
            
        </div>
    )
}
