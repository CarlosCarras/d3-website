import React from 'react';
import MapContainer from '../../components/MapContainer/MapContainer';
import axios from 'axios'
import './Tracker.css';

class Tracker extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        googleKey: null,
      };
    }

    componentDidMount() {
      axios.get('/getKey')
          .then((res) => {
              console.log(res)
              const key = res.data.key;
              this.setState({
                  googleKey: key
              })
          });
    }

    render() {
        return( !(this.state.googleKey === null) ? 
              <div className="tracker-container">
                  <MapContainer googleKey={this.state.googleKey} id="google-map"/>
              </div>
              
              :
              
              <div className="tracker-container"/>
        )
    }
}

export default Tracker;
