import React from 'react'
import ServiceItem from './ServiceItem'

const Servicio = (props) => {

    return(
        <ServiceItem 
                key = {props.location.servicioProps.id}
                name={props.location.servicioProps.name}
                description={props.location.servicioProps.description}
                extra_info={props.location.servicioProps.extra_info}
                included={props.location.servicioProps.included}
                price={props.location.servicioProps.price}/>
    )
}

export default Servicio