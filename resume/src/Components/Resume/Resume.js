import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class Resume extends Component {
    render () {
        return(
            <div className="resume-container">
                <h2>Resume</h2>
                <div className="resume-content">
                    <ul className="resume-info">
                        <li>
                            <span>About me</span>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </li>
                        <li>
                            <span>Experience</span>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </li>
                        <li>
                            <span>Education</span>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </li>
                    </ul>
                    <ul className="resume-sidebar">
                        <li>
                            <FontAwesome name="facebook" size="2x"/>
                            <h5>Skills</h5>
                            <ul>
                                <li>First</li>
                                <li>Second</li>
                                <li>Third</li>
                                <li>Fourth</li>
                                <li>Fifth</li>
                            </ul>
                        </li>
                        <li>
                            <FontAwesome name="facebook" size="2x"/>
                            <h5>Languages</h5>
                            <ul>
                                <li>First lang</li>
                                <li>Second lang</li>
                                <li>Third lang</li>
                                <li>Fourth lang</li>
                                <li>Fifth lang</li>
                            </ul>
                        </li>
                    </ul>
                </div>





            </div>
        )
    }
}

export default withRouter(Resume)