import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from './SeasonDisplay';
import Spinner from "./Spinner";

class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    // helper function to render conditions
    renderContent() {
        if (this.state.lat && !this.state.errorMessage) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
        if (!this.state.lat && this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        return <Spinner message="Please accept location request" />;
    }

    // we have to define render() method in every class-based component
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }

}


ReactDOM.render(<App />, document.getElementById("root"));