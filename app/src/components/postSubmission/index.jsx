
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
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleClickOpen = this.handleClickOpen.bind(this);

  }
      handleChange = content => event => {
        this.setState({
          [content]: event.target.value,
        });
      };
     
      handleClickOpen = () => {
        this.setState({
            open: true,
        });
        
        addEntry("default", "HR", this.state.content);
      };
  render() {
    const { classes } = this.props;

    return (
      <div style={{paddingTop: `40%`}}>
      <p style={{fontSize:14}}> Your current location: 

      Háskóli Reykjavíkur </p>
      <p style={{fontSize:10}}> Posting at: 64.123439, -21.927069 </p>
      <p style={{height: '20px'}}></p>
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
      </form>
       <Button className={classes.button} variant="raised" size="small" onClick={this.handleClickOpen}>
        <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
        Send
      </Button>
      </div>

    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
