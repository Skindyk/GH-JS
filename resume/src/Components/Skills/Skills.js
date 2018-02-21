import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Skills extends Component {
    render () {
        return (
            <div>
                Skills
                <Link to='/Home'>Home</Link>
                <div className='home'>
                    <Route path='/Home' render={() => {
                        return(
                            <div>Home</div>
                        )
                    }}/>
                </div>

            </div>
        )
    }
}

export default withRouter(Skills)