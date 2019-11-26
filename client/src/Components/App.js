import React from 'react';
import axios from 'axios';
import {Switch, 
  Route,
  Link,
  BrowserRouter as Router} from 'react-router-dom'
import Servicio from './Servicio';
import './list.css'

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
           servicios: []
        };
    }

    componentDidMount = () => {
        axios.get('http://localhost:8080/api/services').then((res) => {
           this.setState({
              servicios: res.data
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

  render() {

    let links = this.state.servicios.map(
      servicio =>
      <li>
        <Link to={{
          pathname: servicio.name,
          servicioProps: {
            key: servicio.id, 
            name: servicio.name,
            description: servicio.description,
            extra_info: servicio.extra_info,
            included: servicio.included,
            price: servicio.price
          }
          }}>{servicio.name}</Link>
      </li>
    )

    return (
      <div className="list" style={this.Style}>
        <Router>
          <div >
              
                  <ul>
                    <h2>Servicios</h2>
                      {links}
                  </ul>
                  <hr></hr>
              <Switch>
                  <Route path="/:id" component={Servicio } />
              </Switch>
          </div>
        </Router>
     </div>
     );
    }
}

export default App;