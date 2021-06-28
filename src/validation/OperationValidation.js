import * as yup from "yup"

export const operationSchema=yup.object().shape({
    moneda:yup.string().required('Rellene todos los campos'),
    tasa:yup.string(),
    tasa:yup.string().required('Rellene todos los campos'),
    tasaValue:yup.number().required().max(100,'El campo de tasa debe ir de 0 a 100').typeError("Rellene todos los campos"),
    capitalizacion:yup.number().required().typeError("Rellene todos los campos"),
    operacion:yup.number().required().typeError("Rellene todos los campos"),
    fechaInicio:yup.string().required('Rellene todos los campos'),
    fechaFin:yup.string().required('Rellene todos los campos'),
    comision:yup.number().required().typeError("Rellene todos los campos"),
    fotocopias:yup.number().required().typeError("Rellene todos los campos"),
    gastosIniciales:yup.number().required().typeError("Rellene todos los campos"),
    portes:yup.number().required().typeError("Rellene todos los campos"),
    gastosAdm:yup.number().required().typeError("Rellene todos los campos"),
    gastosFinales:yup.number().required().typeError("Rellene todos los campos")
});