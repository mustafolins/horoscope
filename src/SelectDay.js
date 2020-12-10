import React, { Component } from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

export default class SelectDay extends Component {

    render() {
        return (
            <FormControl variant="outlined" style={{borderColor:'white'}}>
                <InputLabel>Day</InputLabel>
                <Select
                    value={this.props.day}
                    onChange={this.props.selectionChange}
                    label="Day"
                    style={{color:'white'}}
                >
                    <MenuItem value={'yesterday'}>Yesterday</MenuItem>
                    <MenuItem value={'today'}>Today</MenuItem>
                    <MenuItem value={'tomorrow'}>Tomorrow</MenuItem>
                </Select>
            </FormControl>
        )
    }
}
