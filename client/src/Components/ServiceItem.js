import React from 'react';
import {Switch, Route} from 'react-router-dom'
const ServiceItem = (props) => {
    if (props.included){
        return (
            <div className="item">
                <div className="content">
                    <Switch>
                        <Route path="/services/:id" component = {props.name}/>
                        <h1><a className="header">{props.name}</a></h1>
                    </Switch>
                    <div className="description"> <h3> {props.description} </h3>
                    </div>
                    <div className="description"> <h3> {props.extra_info} </h3>
                    </div>
                </div>
            </div>
        );
    } else {
        return(
            <div className="item">
                <div className="content">
                    <Switch>
                        <Route path="/services/:id" component = {props.name}/>
                        <h1><a className="header">{props.name}</a></h1>
                    </Switch>
                    <div className="description"> <h3> {props.description} </h3>
                    </div>
                    <div className="description"> <h3> {props.extra_info} </h3>
                    </div>
                    <div className="description"> <h3>Costo: {props.price} </h3>
                    </div>
                </div>
            </div>
        );
        
    }
};

export default ServiceItem;