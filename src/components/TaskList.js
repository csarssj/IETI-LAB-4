import React, {Component} from 'react';
import { Card, CardTitle, CardBody, CardActions } from '@progress/kendo-react-layout';
import Grid from '@material-ui/core/Grid';
import {Cards} from './Cards'

export class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = [
            {   
                "title":"Implement Login view.",
                "description": "some description text ",
                "responsible": {
                    "name": "Santiago Carrillo",
                    "email": "sancarbar@gmail.com"
                },
                "status": "ready",
                "dueDate": 156464645646
            },
            {   
                "title":"Implement Login view.",
                "description": "Learn to program in ReactJS",
                "responsible": {
                  "name": "Cesar Gonzalez",
                  "email": "cesego98@gmail",
                },
                "status": "completed",
                "dueDate": 156464645646
            },
           
        ];
    }
    render() {
        const cardsArray = this.state.map(robot => (
              <Card
                name={this.state.name}
                email={this.state.email}
                id={this.state.id} />
        ));
        return (
            <div>
                <Grid container spacing={32} justify="center">
                    {this.state.map((actividad, i) => {
                        return (
                            <Cards props={actividad} />
                        );
                    })}
                </Grid>
            </div>
        );
    }

}

