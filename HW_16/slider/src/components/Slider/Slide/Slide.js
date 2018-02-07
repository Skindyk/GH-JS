import React, { Component } from 'react';

export default class Slide extends Component {
    render() {
        const { url, desc, currentSlide, i } = this.props;
        let slideItem;
        if (currentSlide === i) {
            slideItem = { display: "inline-block"};
        } else {
            slideItem = { display: "none"};
        }
        return (
            <li style={slideItem}>
                <img src={url} alt={desc}/>
                <span className="description">{desc}</span>
            </li>
        );
    }
}