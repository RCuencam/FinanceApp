import React,{useEffect} from 'react'

export const RateMoney = ({rate,setRate}) => {

    const fetchRate=async()=>
    {
        const response=await fetch('https://deperu.com/api/rest/cotizaciondolar.json');
        const data=await response.json()
        return data
    }
    useEffect(()=>
    {
        fetchRate().then((rate)=>
        {
            setRate(rate.Cotizacion[0].Compra)
        })
    },[setRate])

    return (
        <div className="ratemoney">
            <div className="containers rate__content">
                <div className="rate__content-title">
                    <h3>LETRAS</h3>
                </div>
                <div className="rate__content-rate">
                    <h5>Tipo de cambio: S/{rate}</h5>
                </div>
            </div>
        </div>
    )
}
