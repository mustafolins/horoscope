import React, { Component } from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

export default class SelectDay extends Component {

    render() {
        return (
            <FormControl variant="outlined" style={{borderColor:'white'}}>
                <InputLabel>Sign</InputLabel>
                <Select
                    value={this.props.sign}
                    onChange={this.props.selectionChange}
                    label="Sign"
                    style={{color:'white'}}
                >
                    <MenuItem value={'aries'}>Aries</MenuItem>
                    <MenuItem value={'taurus'}>Taurus</MenuItem>
                    <MenuItem value={'gemini'}>Gemini</MenuItem>
                    <MenuItem value={'cancer'}>Cancer</MenuItem>
                    <MenuItem value={'leo'}>Leo</MenuItem>
                    <MenuItem value={'virgo'}>Virgo</MenuItem>
                    <MenuItem value={'libra'}>Libra</MenuItem>
                    <MenuItem value={'scorpio'}>Scorpio</MenuItem>
                    <MenuItem value={'sagittarius'}>Sagittarius</MenuItem>
                    <MenuItem value={'capricorn'}>Capricorn</MenuItem>
                    <MenuItem value={'aquarius'}>Aquarius</MenuItem>
                    <MenuItem value={'pisces'}>Pisces</MenuItem>
                </Select>
            </FormControl>
        )
    }
}
