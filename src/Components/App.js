import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
    async onSearchSubmit(term) {
        const response = await axios.get(
            "https://api.unsplash.com//search/photos",
            {
                params: { query: term },
                headers: {
                    Authorization:
                        "Client-ID fQG59eCcttGsymPIuGsl6ORbiGN9xqV2Zvp60npJQWU",
                },
            }
        );

        response.data.results.forEach((item) => {
            console.log(item.urls.small_s3);
        });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;
