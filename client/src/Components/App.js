import React from 'react';
import axios from 'axios';
import ServiceItem from './ServiceItem'

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
           servicios: []
        };
    }

    componentDidMount = () => {
        axios.get('http://localhost:8080/api/services').then((res) => {
           for (var i = 0; i < res.data.length; i++)
           this.setState({
              servicios: [...this.state.servicios, res.data[i]]
          });
          console.log(this.state.servicios)
        }).catch ((err) => {
           console.log(err);
       });
     }

     Style = {
        margin: '10px',
        padding: '10px'
      };

      handleClick = event => {
        event.currentTarget.classList.toggle('active');
        console.log("VIVE")
      }

  render() {

    let misServicios = this.state.servicios.map(
      servicio => 
      <ServiceItem 
        key = {servicio.id}
        name={servicio.name}
        description={servicio.description}
        extra_info={servicio.extra_info}
        included={servicio.included}
        price={servicio.price}/>)

    return (
      <div className="ui list" style={this.Style}>
        <h1> Servicios </h1>
        {misServicios}
     </div>
     );
    }
}


export default App;