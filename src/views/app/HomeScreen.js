import {useContext, useState} from "react"
import { Form, FormGroup,Input } from 'reactstrap';
import { RateMoney } from "./RateMoney";
import { ModalResults } from "./ModalResults";
import { useForm } from '../../hooks/useForm';
import { operationSchema } from "../../validation/OperationValidation";
import CalculateTCEA from "../../helpers/CalculateTCEA";
import { v4 as uuidv4 } from 'uuid';
import { types } from "../../types/types";
import { OperationContext } from "../../context/OperationContext";
export const HomeScreen = () => {

    const {dispatch}=useContext(OperationContext);
    const [rate,setRate]=useState(0);
    
    const [modal, setModal] = useState(false);

    const [moneda,setMoneda]=useState('');
    const [tasa,setTasa]=useState('');

    const [data,setData]=useState({})
    const [errorMessage,setErrorMessage]=useState([])
    const [errorValidation,setErrorValidation]=useState(true)

    const [TCEA,setTCEA]=useState({});


    const toggle=() => setModal(!modal);

    let [values,handleInputChange]=useForm({
        tipo_tasa:'',
        tasaValue:'',
        capitalizacion:0,
        operacion:'',
        fechaInicio:'',
        fechaFin:'',
        comision:'',
        fotocopias:'',
        gastosIniciales:'',
        portes:'',
        gastosAdm:'',
        gastosFinales:''
    })

    const {tipo_tasa,tasaValue,capitalizacion,operacion,fechaInicio,
        fechaFin,comision,fotocopias,gastosIniciales,portes,
        gastosAdm,gastosFinales}=values
        
    
    const createOperation=async()=>
    {
        await operationSchema.validate({
            id:uuidv4(),
            tasa,
            moneda,
            tasa,
            tasaValue,
            capitalizacion,
            operacion,
            fechaInicio,
            fechaFin,
            comision,
            fotocopias,
            gastosIniciales,
            portes,
            gastosAdm,
            gastosFinales
        }).then((dataJson)=>{
            setTCEA(CalculateTCEA(dataJson,rate))
            setData(dataJson)
            dispatch({
                type:types.add,
                payload:{...dataJson,tcea:CalculateTCEA(dataJson,rate),rate}
            })
        })
        .catch((err)=>setErrorMessage(err.errors))

        await operationSchema.isValid({
            tasa,
            moneda,
            tasa,
            tasaValue,
            capitalizacion,
            operacion,
            fechaInicio,
            fechaFin,
            comision,
            fotocopias,
            gastosIniciales,
            portes,
            gastosAdm,
            gastosFinales
        }).then((value)=>setErrorValidation(value))

    }

    const handleSubmit=(e)=>
    {
        e.preventDefault()
        createOperation()
        if(errorValidation)
        {
            setModal(!modal);
        }
    }
    return (
        <div>
            <RateMoney rate={rate} setRate={setRate} />
            {errorValidation ? <></>: <div className="home_error-message">{errorMessage}</div>}
            <Form className="home__form " onSubmit={handleSubmit}>
                <div className="home__form-container">
                    <div className="home__form-left">
                        <FormGroup>
                            <label className="home__form-label">Tipo de moneda: </label>
                            <Input type="radio" id="soles" name="tipo_moneda" className="radio__button" onChange={()=>setMoneda('soles')}  value={moneda} /><label htmlFor="soles" className="home__form-label mx-1">Soles</label>
                            <Input type="radio" id="dolares" name="tipo_moneda" className="radio__button rb2" onChange={()=>setMoneda('dolares')}  value={moneda}/><label htmlFor="dolares" className="home__form-label mx-1">Dólar</label>
                        </FormGroup>
                        <FormGroup className="my-3 align-c">
                            <label className="home__form-label">Tipo de tasa: </label>
                            <Input type="radio" id="nominal" name="tipo_tasa" className="radio__button" onChange={()=>setTasa('nominal')} /><label htmlFor="nominal" className="home__form-label mx-1">Nominal</label>
                            <Input type="radio" id="efectiva" name="tipo_tasa" className="radio__button rb2" onChange={()=>setTasa('efectiva')}/><label htmlFor="efectiva" className="home__form-label mx-1">Efectiva</label>
                        </FormGroup>
                        <FormGroup className="d-flex align-c">
                            <label className="home__form-label">Valor de tasa: </label>
                            <Input className="home__form-input-sm" type="number" name="tasaValue" onChange={handleInputChange} value={tasaValue} maxLength={3}/>%
                        </FormGroup>
                        
                        <FormGroup className="d-flex align-c my-4">
                            <label className="home__form-label">M. de operación: </label>
                            <Input className="home__form-input" type="number" name="operacion" onChange={handleInputChange} value={operacion}/>
                        </FormGroup>
                        <FormGroup className="d-flex align-c my-4">
                            <label className="home__form-label">Fecha Inicio: </label>
                            <Input className="home__form-input-date" type="date" name="fechaInicio" onChange={handleInputChange} value={fechaInicio}/>
                        </FormGroup>
                        <FormGroup className="d-flex align-c my-4">
                            <label className="home__form-label">Fecha Final: </label>
                            <Input className="home__form-input-date" type="date" name="fechaFin" onChange={handleInputChange} value={fechaFin}/>
                        </FormGroup>
                    </div>
                    <div className="home__form-right">
                        <FormGroup className="d-flex align-c">
                            <label className="home__form-label">Comisión: </label>
                            <Input className="home__form-input" type="number" name="comision" onChange={handleInputChange} value={comision}/>
                        </FormGroup>
                        <FormGroup className="d-flex align-c my-4">
                            <label className="home__form-label">Fotocopias: </label>
                            <Input className="home__form-input" type="number" name="fotocopias" onChange={handleInputChange} value={fotocopias}/>
                        </FormGroup>
                        <FormGroup className="d-flex align-c my-4">
                            <label className="home__form-label">Otros G. Iniciales: </label>
                            <Input className="home__form-input" type="number" name="gastosIniciales" onChange={handleInputChange} value={gastosIniciales}/>
                        </FormGroup>
                        <FormGroup className="d-flex align-c my-4">
                            <label className="home__form-label">Portes: </label>
                            <Input className="home__form-input" type="number" name="portes" onChange={handleInputChange} value={portes}/>
                        </FormGroup>
                        <FormGroup className="d-flex align-c my-4">
                            <label className="home__form-label">Gast. Adm: </label>
                            <Input className="home__form-input" type="number" name="gastosAdm" onChange={handleInputChange} value={gastosAdm}/>
                        </FormGroup>
                        <FormGroup className="d-flex align-c my-4">
                            <label className="home__form-label">Otros G. Finales: </label>
                            <Input className="home__form-input" type="number" name="gastosFinales" onChange={handleInputChange} value={gastosFinales}/>
                        </FormGroup>
                    </div>
                </div>
                <div className="home__form-button" onClick={handleSubmit}>
                    <button type="submit" className="btna my-4">CALCULAR</button>
                </div>
                {errorValidation &&
                    <ModalResults toggle={toggle} modal={modal} setModal={setModal} data={data} value={TCEA} rate={rate} setData={setData}/>
                }
            </Form>
        </div>
    )
}
