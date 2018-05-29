import React from 'react';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import RefreshIcon from '@material-ui/icons/Refresh';


class Navigation extends React.Component {

    render() {
        return (
            <Paper style={{width: 500}}>
                <Tabs
                    value={"Tabs"}
                    fullWidth
                    indicatorColor="cyan"
                    textColor="cyan"
                />
                <Tab icon={<RefreshIcon />} />
                
            </Paper>
        );
    }
}