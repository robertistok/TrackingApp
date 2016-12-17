import React from 'react';
import { connect } from 'react-redux';

class Map extends React.Component {
  componentDidMount() {
    this.initMap();
    this.showTerminalPosition();
  }

  componentWillUnmount() {
    this.map = null;
  }

  componentWillUpdate() {
    this.initMap();
  }

  componentDidUpdate() {
    this.showTerminalPosition();
  }

  initMap() {
    const initLocation = { lat: 46.772308, lng: 23.585766 }
    this.map = new google.maps.Map(this.refs.map, {
      center: initLocation,
      zoom: 2
    });
  }

  addMarker(location) {
    const marker =  new google.maps.Marker({
      position: location,
      map: this.map,
    });

  }

  showTerminalPosition() {
    this.props.filteredTerminal.map((pos) => {
      const location = { lat: pos.latitude, lng: pos.longtitude };
      this.addMarker(location);
    })
  }

  render() {
    const mapStyle = {
      width: '100%',
      height: 500
    };
    return(
        <div ref='map' id="google-map" style={mapStyle} >
          I should be a map
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const mapStateToProps = (state) => {
  return {
    filteredTerminal: state.devices.filteredTerminal
  }
}

export default connect(mapStateToProps, null)(Map);
