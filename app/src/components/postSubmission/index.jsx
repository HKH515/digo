
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import KeyboardVoice from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import Save from '@material-ui/icons/Save';
import {addEntry} from '../../services/markerService';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  textBox: {
    fontSize: 10,
  },
});


class TextFields extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        content: '',
        age: '',
        multiline: 'Controlled',
        open: false,
        range: 5,
        time: 3,
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleClickOpen = this.handleClickOpen.bind(this);

  }
      handleChange = content => event => {
        this.setState({
          [content]: event.target.value,
        });
      };

      handleSlideRange = (event, value) => this.setState({ range: value });
     
      handleSlideTime = (event, value) => this.setState({ time: value });
      
      handleClickOpen = () => {
        this.setState({
            open: true,
        });
        
        addEntry("default", "HR", this.state.content);
      };
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div style={{paddingTop: `5%`}}>
      <Paper style={{padding: `5%`}}> 
      <Typography style={{fontSize:18}}> Your current location: 

      Háskóli Reykjavíkur </Typography>
      <Typography style={{fontSize:14}}> Posting at: 64.123439, -21.927069 </Typography>
      <p style={{height: '15px'}}></p>
      <div className={classes.container}>
        <Typography> Range: </Typography>
        <Slider value={this.state.range} min={0.1} max={100} step={1} onChange={this.handleSlideRange} />
        <Typography>{this.state.range} km </Typography>
      </div>
      <div>
        <p style={{height: '15px'}}></p>
        <Typography> Time: </Typography>
        <Slider value={this.state.time} min={1} max={15} step={1} onChange={this.handleSlideTime} />
        <Typography>{this.state.time} days </Typography>
      </div>
      <p style={{height: '15px'}}></p>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField 
          onChange={this.handleChange('content')}
          id="content"
          InputLabelProps={{
            shrink: true,
          }}
          value={this.state.content}
          multiline rows="4"
          placeholder="What's happening?"
          helperText="Maximum length: 250 characters"
          fullWidth
          margin="normal"
        />
        <div style={{height: `50%`}}> </div>
        <TextField
          id="helperText"
          placeholder="//cats, //soccer, //.."
          helperText="Add your dashtags here!"
          fullWidth
          margin="normal"
        />
      </form>
       <Button className={classes.button} variant="raised" size="small" onClick={this.handleClickOpen}>
        <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
        Send
      </Button>
      </Paper>
      </div>

    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
