import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }

    state = { spans: 0 };

    componentDidMount() {
        this.imageRef.current.addEventListener("load", this.setSpans);
    }

    setSpans = () => {
        const spans = Math.ceil(this.imageRef.current.clientHeight / 12 + 1);
        this.setState({ spans });
    };

    render() {
        const { alt_description, urls } = this.props.image;

        return (
            <div
                className="image-card"
                style={{ gridRowEnd: `span ${this.state.spans}` }}
            >
                <img
                    ref={this.imageRef}
                    alt={alt_description}
                    src={urls.small_s3}
                />
            </div>
        );
    }
}

export default ImageCard;
