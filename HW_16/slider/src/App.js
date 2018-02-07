import React, { Component } from 'react';
import './App.css';
import Slider from './components/Slider/Slider'

class App extends Component {
    constructor(props) {
        super(props);
        this.firstSliderSpeed = 3000;
        this.secondSliderSpeed = 1000;
        this.sliderOne = [
            {
                desc: 'Kitty 1',
                url: 'https://cs8.pikabu.ru/post_img/2018/02/04/6/151773178217023415.jpg'
            },
            {
                desc: 'Kitty 2',
                url: 'https://cs8.pikabu.ru/post_img/2018/02/05/6/1517821273156863885.jpg'
            },
            {
                desc: 'Kitty 3',
                url: 'https://cs8.pikabu.ru/post_img/2018/02/07/4/1517979857123441552.jpg'
            },
            {
                desc: 'Kitty 4',
                url: 'https://cs9.pikabu.ru/post_img/2018/02/06/9/1517931070180548451.jpg'
            }
        ];
    }

    render() {
        return (
            <div className="container">
                <Slider spead={this.firstSliderSpeed} slides={this.sliderOne} />
                <br/>
                <Slider spead={this.secondSliderSpeed} slides={this.sliderOne} />
            </div>
        );
    }
}
export default App;