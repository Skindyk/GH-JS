import React, { Component } from 'react';

export default class Home extends Component {
  render () {
    return (
      <div className="home-container">
        <div className="home-photo">
          <img src="images\photo.jpg"></img>
        </div>
        <div className="home-info">
          <h2>Hallo,</h2>
          <h3>Let's met:</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
    )
  }
}