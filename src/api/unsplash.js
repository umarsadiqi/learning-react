import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID fQG59eCcttGsymPIuGsl6ORbiGN9xqV2Zvp60npJQWU",
    },
});
