
const CalculateTCEA = (data,rate) => {
    const {tasa,moneda,tasaValue,operacion,fechaInicio,
        fechaFin,comision,fotocopias,gastosIniciales,portes,
        gastosAdm,gastosFinales}=data
    
    
    const costes_iniciales_totales=comision+fotocopias+gastosIniciales;
    const costes_finales_totales=gastosAdm+portes+gastosFinales;
    let fecha_inicio=new Date(fechaInicio);
    let fecha_final=new Date(fechaFin);
    let restaFechas=(fecha_final.getTime()-1)-(fecha_inicio.getTime()-1);
    
    let fecha=Math.round(restaFechas/(1000*60*60*24));
    let monto_operacion=operacion;

    if(moneda==='dolares')
    {
        monto_operacion = operacion*rate;
    }

    let tasa_nominal_periodo=(Math.pow((1+(tasaValue/100)/360),(360)))-1;

    let tasa_efectiva_periodo=(Math.pow((1+(tasaValue/100)),(fecha/360)))-1;
    let tasa_descuento=0;
    if(tasa==="nominal"){

         tasa_descuento=tasa_nominal_periodo/(1+tasa_nominal_periodo)
    }
    else{
        tasa_descuento=tasa_efectiva_periodo/(1+tasa_efectiva_periodo)
    }

    let descuento=monto_operacion*tasa_descuento;

    let valor_neto=monto_operacion-descuento;

    let valor_recibido=valor_neto-costes_iniciales_totales;

    let valor_entregado=monto_operacion+costes_finales_totales;

    let TCEA=((Math.pow((valor_entregado/valor_recibido),(360/fecha))-1)*100).toFixed(2);


    return {TCEA,costes_iniciales_totales,costes_finales_totales}
}

export default CalculateTCEA
