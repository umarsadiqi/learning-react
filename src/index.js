import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    state = { lat: null, errorMessage: '' }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    // we have to define render() method in every class-based component
    render() {
        // in case: location is fetched successfully
        if (this.state.lat && !this.state.errorMessage) {
            return (<div>Latitude: {this.state.lat}</div>)
        }
        // in case: location cannot be fetched
        if (!this.state.lat && this.state.errorMessage) {
            return (<div>Error: {this.state.errorMessage}</div>)
        }
        // while fetching location
        return (<div>loading...</div>)
    }

}


ReactDOM.render(<App />, document.getElementById("root"));