import React, { Component } from 'react';
import { Tabs, Tab,Grid,Cell,Card,CardTitle,CardActions,Button,CardMenu,IconButton, CardText} from 'react-mdl';

class projects extends Component {
    constructor(props)
    {
        super(props);
        this.state = { activeTab:0 };
    }

    toggleCategories()
    {
        if (this.state.activeTab == 0) {
            return (
               
                <div className="projects-grid">
                    {/*projects #1*/}
                    <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://elysiumacademy.org/wp-content/uploads/2018/12/REACT-JS.jpg) center/cover' }}></CardTitle>
                        <CardText>
                            ReactJS tutorial provides basic and advanced concepts of ReactJS.
                            Currently, ReactJS is one of the most popular JavaScript front-end libraries which has a strong foundation and a large community.
                       </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                        </Card>
                    </div>

                    {/*projects #2*/}
                    <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://elysiumacademy.org/wp-content/uploads/2018/12/REACT-JS.jpg) center/cover' }}></CardTitle>
                        <CardText>
                            ReactJS tutorial provides basic and advanced concepts of ReactJS.
                            Currently, ReactJS is one of the most popular JavaScript front-end libraries which has a strong foundation and a large community.
                       </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    </div>
                    {/*projects #3*/}
                    <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://elysiumacademy.org/wp-content/uploads/2018/12/REACT-JS.jpg) center/cover' }}></CardTitle>
                        <CardText>
                            ReactJS tutorial provides basic and advanced concepts of ReactJS.
                            Currently, ReactJS is one of the most popular JavaScript front-end libraries which has a strong foundation and a large community.
                       </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                        </Card>
                    </div>

                  



                </div>
                
            )

        } 
        if (this.state.activeTab == 1) {
            return (
                
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://miro.medium.com/max/1200/1*15CYVZdpsxir8KLdxEZytg.png) center/cover' }}>AngularJS Project #2</CardTitle>
                        <CardText>
                        Angular JS is an open source JavaScript framework by Google to build web applications.
                        It can be freely used, changed and shared by anyone.
                        </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            

            )

        } 
        if (this.state.activeTab == 2) {
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png) center/cover' }}>VueJS Project #3</CardTitle>
                    <CardText>
                        Vue.js is an open-source progressive JavaScript framework used to develop interactive web user interfaces and single-page applications. 
                        Vue.js is mainly focused on the view part of the application that is also called front end development
                       </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

            )

        } 
        if (this.state.activeTab == 3) {
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://www.bloorresearch.com/wp-content/uploads/2013/03/MONGO-DB-logo-300x470--x.png) center/cover' }}>MongoDB Project #4</CardTitle>
                    <CardText>
                        MongoDB is a No SQL database. 
                        It is an open-source, cross-platform, document-oriented database written in C++.
                       </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

            )

        } 
    }

    



    render() {
        return (
            <div className="category-tabs" >
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
                    
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>

                </Tabs>
               
                    <Grid  >
                        <Cell Col={12} >
                            <div className="content" >
                                {this.toggleCategories()}
                            </div>
                              </Cell>
                        </Grid>

                                
               
            </div>
        );
    }
}

export default projects;