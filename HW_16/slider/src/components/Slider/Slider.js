import React, { Component } from 'react';
import Slide  from './Slide/Slide';

export default class slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                currentSlide: this.state.currentSlide + 1
            }, () => {
                this.setCurrentSlide(this.state.currentSlide)
            })
        }, this.props.spead)
    }

    setCurrentSlide = (curr) => {
        const { slides } = this.props;
        if (curr < 0) {
            this.setState({ currentSlide: slides.length -1 })
        } else if (curr > slides.length -1) {
            this.setState({ currentSlide: 0 })
        } else {
            this.setState({ currentSlide: curr })
        }
    };

    render() {
        const { slides } = this.props;
        let {currentSlide} = this.state;
        return (
            <div className="slider">
                <ul>
                    { slides.map((el, i) => {
                            return <Slide key={i} url={el.url} desc={el.desc} currentSlide={currentSlide} i={i} />
                        })
                    }
                </ul>
            </div>
        );
    }
}