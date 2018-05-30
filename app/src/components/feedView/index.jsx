import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CommentIcon from '@material-ui/icons/Comment';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RoomIcon from '@material-ui/icons/Room';
import {entries} from '../../services/markerService.js';
import {ScrollBox, ScrollAxes, FastTrack} from 'react-scroll-box';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Image from 'material-ui-image';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  margin: {
    margin: theme.spacing.unit,
  },
});

class RecipeReviewCard extends React.Component {
  state = { 
        expanded: false 
        //expanded: Array(entries.length).fill(false)
  };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };
  
  render() {
    const { classes } = this.props;

    return (
       <div>
       <div className={classes.margin} style={{backgroundColor: "#fff", width: `100%`, height: `140%`, padding: `8% 5%`, margin: `-5%`, zIndex: 42000}}>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Search" />
          </Grid>
        </Grid>
      </div>
      <div style={{maxHeight: 680, overflowY: "scroll"}}>
       
      
      <Card className={classes.card} >
        <Button size="small" color="primary">
          PLACES NEAR YOU      
        </Button>

        <CardMedia
          className={classes.media}
          image={require("./hr.jpg")}
          title="Contemplative Reptile"
        />
        <CardContent>
       
          <Typography gutterBottom variant="headline" component="h2">
            Háskólinn í Reykjavík
          </Typography>
          <Typography component="p">Reykjavík University (RU; Icelandic: Háskólinn í Reykjavík), is the largest private university in Iceland with more than 3,500 students. It is chartered by the Chamber of  ... 
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary">
            USER FEED
          </Button>
          <Button size="small" color="primary">
            LOCATION FEED
          </Button>
         
        </CardActions>
      </Card>
      
      {entries.map((item)=>{return <p>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                    {item.user[0]}        

           </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={item.user}
            subheader= {item.timestamp}
          />
          <CardMedia
            //className={classes.media}
            //image="/static/images/cards/paella.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
            {item.post}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton aria-label="Comment">
              <CommentIcon />
            </IconButton>
            <IconButton aria-label="Location">
                <RoomIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                There are no comments yet.
              </Typography>
            </CardContent>
          </Collapse>
        </Card> 
        </p>})}
      </div>
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
