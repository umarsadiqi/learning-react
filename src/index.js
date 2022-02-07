import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
        // must call super() in constructor
        super(props);

        // this is only time, we direct assign object to this.state
        // elseWhere, we use setState()
        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => console.log(err)
        );
    }

    // we have to define render() method in every class-based component
    render() {
        return (
            <div>Latitude: {this.state.lat}</div>
        )
    }

}


ReactDOM.render(<App />, document.getElementById("root"));