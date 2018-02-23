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
                            <p>Sed ut perspiciatis unde omnis iste natus error
                             sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore
                                 veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </li>
                        <li>
                            <span>Experience</span>
                            <p>Sed ut perspiciatis unde omnis iste natus error
                             sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore
                                 veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </li>
                        <li>
                            <span>Education</span>
                            <p>Sed ut perspiciatis unde omnis iste natus error
                             sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore
                                 veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </li>
                    </ul>
                    <ul className="resume-sidebar">
                        <li>
                            <FontAwesome name="exclamation" size="2x"/>
                            <h5>Skills</h5>
                            <ul className="skills-list">
                                <li>First skill - 99%</li>
                                <li>Second skill - 89%</li>
                                <li>Third skill - 79%</li>
                                <li>Fourth skill - 69%</li>
                                <li>Fifth skill - 59%</li>
                            </ul>
                        </li>
                        <li>
                            <FontAwesome name="globe" size="2x"/>
                            <h5>Languages</h5>
                            <ul className="language-list">
                                <li>First lang - 99%</li>
                                <li>Second lang - 89%</li>
                                <li>Third lang - 79%</li>
                                <li>Fourth lang - 69%</li>
                                <li>Fifth lang - 59%</li>
                            </ul>
                        </li>
                    </ul>
                </div>





            </div>
        )
    }
}

export default withRouter(Resume)
