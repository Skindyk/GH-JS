import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class Contacts extends Component {
  render () {
    return (
        <div className="contact-container">
            <div className="contact-left-part">
                <div>
                    <h2>Contact me</h2>
                </div>
                <div className="contact-list">
                    <div className="social">
                        <a href="https://facebook.com" target="blank" title="Visit page">
                            <FontAwesome name="facebook"/>
                        </a>
                        <a href="https://google.com" target="blank" title="Visit page">
                            <FontAwesome name="google"/>
                        </a>
                        <a href="https://twitter.com" target="blank" title="Visit page">
                            <FontAwesome name="twitter"/>
                        </a>
                    </div>
                    <div className="phone">
                        <a href="tel:+38(093)7859688" title="Make a call">+38(093)7859688</a>
                        <a href="mailto:skindyk@yandex.ru" title="Send mail">skindyk@yandex.ru</a>
                    </div>
                </div>
            </div>
            <div className="contact-right-part">
                <p>I will answer as soon as possible</p>
                <form action="">
                    <input placeholder="Name"></input>
                    <input type="email" placeholder="email"></input>
                    <input placeholder="Theme"></input>
                    <textarea placeholder="Message"></textarea>
                    <input type="submit" placeholder="Submit"></input>
                </form>
            </div>
        </div>
    )
  }
}

export default withRouter(Contacts)