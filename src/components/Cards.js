import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "300px",
    minWidth:"30px",
    margin:"1em",
    boxSizing:"border-box"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
const useStyless=makeStyles({
  item:{
    minWidth:"350px",
    margin:"1em",
    boxSizing:"border-box"
  },
  media:{
    minWidth:"200px"
  }
});
export function Cards({props}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
    <CardHeader
      title={props.title}
      subheader={props.description}
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
      {props.status} - {props.dueDate}<br />
      {props.responsible.name}
      </Typography>
    </CardContent>
  </Card>
  );

}