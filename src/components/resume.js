import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img src="https://trichyagribusiness.com/img/about/avatar.png "
                                alt="avatar"
                                style={{height:'200px'}}/>
                        </div>
                        <h3 style={{ paddingTop: '2em' }}>Md.Reyadul Islam</h3>
                        <h4 style={{ color: 'gray' }}>JavaScript Developer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>
                            Spring is a lightweight framework. It can be thought of as a framework of frameworks because it provides support to various frameworks such as Struts, Hibernate, Tapestry, EJB, JSF, etc. The framework, in broader sense,
                            can be defined as a structure where we find solution of the various technical problems.
                        </p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>
                            Natore,Bangladesh.
                        </p>
                        <h5>
                            Phone
                        </h5>
                        <p>(+088) 01647-412773</p>
                        <h5>
                            Email
                        </h5>
                        <p>Someone@example.com</p>
                        <h5>Web</h5>
                        <p>Mywebsite.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

                    </Cell>
                    <Cell className="resume-right-col" col={8}>

                        <h3>Education</h3>

                        <Education
                            startYear={2013}
                            endYear={2015}
                            schoolName="College Education"
                            schoolDescription="Spring framework provides templates for JDBC, Hibernate, JPA etc. technologies. So there is no need to write too much code. 
                            It hides the basic steps of these technologies."

                        />
                        <Education
                            startYear={2016}
                            endYear={2020}
                            schoolName="University Education"
                            schoolDescription="Spring framework provides templates for JDBC, Hibernate, JPA etc. technologies. So there is no need to write too much code. 
                            It hides the basic steps of these technologies."

                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        <h3>Experience</h3>
                        <Experience
                        
                            startYear={2021}
                            endYear={2023}
                            jobName="First Job"
                            jobDescription="Spring framework is lightweight because of its POJO implementation. The Spring Framework doesn't force the programmer to inherit any class or implement any interface. 
                            That is why it is said non-invasive."
                        
                        />
                        <Experience

                            startYear={2023}
                            endYear={2026}
                            jobName="Second Job"
                            jobDescription="Spring framework is lightweight because of its POJO implementation. The Spring Framework doesn't force the programmer to inherit any class or implement any interface. 
                            That is why it is said non-invasive."

                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h3>Skills</h3>
                        <Skills
                            skill="JavaScript"
                            progress={100}
                        
                        />
                        <Skills
                            skill="HTML & CSS"
                            progress={80}

                        />

                        <Skills
                            skill="ReactJS"
                            progress={60}

                        />
                        <Skills
                            skill="VueJS"
                            progress={45}

                        />
                        <Skills
                            skill="MeteorJS"
                            progress={30}

                        />
                        <Skills
                            skill="NodeJS"
                            progress={10}

                        />

                    </Cell>
                </Grid> 
            </div>
        );
    }
}

export default resume;