import React, { Component } from 'react';
import { Grid, Cell,List,ListItem,ListItemContent} from 'react-mdl';


class contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>

                        <h3>Md.Reyadul Islam</h3>
                        <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{ height: '250px' }}
                        />
                        <p style={{width:'75%', margin:'auto', paddingTop:'3em',textAlign:'justify'}}>
                            This spring tutorial provides in-depth concepts of Spring Framework with simplified examples. It was developed by Rod Johnson in 2003. 
                            Spring framework makes the easy development of JavaEE application.
                        </p>

                    </Cell>
                    <Cell col={6}>

                        <h3>Contact me</h3>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" area-hidden="true" />
                                           (+088)  01761-922661
                                        </ListItemContent>
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-fax" area-hidden="true" />
                                           (+088)  01761-922661
                                        </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" area-hidden="true" />
                                           someone@example.com
                                        </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-skype" area-hidden="true" />
                                           MySkypeId
                                        </ListItemContent>
                                </ListItem>



                            </List>
                        </div>

                        

                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default contact;