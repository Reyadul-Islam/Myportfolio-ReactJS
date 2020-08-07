import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class landingpage extends Component {
    render() {
        return (
            <div style={{ width: '100 %', margin: 'auto' }}>

                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://rajcooling.com/wp-content/uploads/sites/270/2016/05/avatar.png"
                            alt="avatar"
                            className="avatar-img" />
                        
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr />
                            <p>HTML | CSS | Bootstrap | React | React Native | NodeJS | Express |MongoDB</p>
                            <div className="social-links">
                                  {/* LinkedIn */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  area-hidden="true"></i>
                                </a>
                                
                                {/* Github */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" area-hidden="true"></i>
                                </a>

                                {/* Freecodecamp */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" area-hidden="true"></i>
                                </a>

                                {/* YouTube */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" area-hidden="true"></i>
                                </a>

                            </div>
                        </div>

                        
                        </Cell>
                </Grid>
                
            </div>
        );
    }
}

export default landingpage;