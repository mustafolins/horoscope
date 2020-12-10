import React, { Component } from 'react'
import request from 'request'
import SelectDay from './SelectDay';
import SelectSign from './SelectSign';

export default class Horoscope extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dateRange: '',
            currentDate: '',
            description: '',
            day: props.day,
            sign: props.sign
        }

        // bind functions so there aren't errors on updating state
        this.recievedHoroscope = this.recievedHoroscope.bind(this)
        this.changeDay = this.changeDay.bind(this)
        this.changeSign = this.changeSign.bind(this)
    }

    componentDidMount() {
        // initial call
        this.requestHoroscope()
    }

    componentWillUnmount() {
        clearInterval(this.updateInterval)
    }

    requestHoroscope() {
        request({
            url: 'https://aztro.sameerkumar.website/?sign=' + this.state.sign + '&day=' + this.state.day,
            method: 'POST'
        }, this.recievedHoroscope)
    }

    changeDay(event) {
        console.log(event.target.value)

        this.setState({
            day: event.target.value
        })

        setTimeout(() => {
            this.requestHoroscope()
        }, 1000);
    }

    changeSign(event) {
        console.log(event.target.value)

        this.setState({
            sign: event.target.value
        })

        setTimeout(() => {
            this.requestHoroscope()
        }, 1000);
    }

    recievedHoroscope(error, response, body) {
        if (!error && response.statusCode === 200) {
            var data = JSON.parse(body)
            console.log(data);

            this.setState({
                description: data.description
            })
            this.setState({
                dateRange: data.date_range
            })
            this.setState({
                dateRange: data.date_range
            })
            this.setState({
                currentDate: data.current_date
            })
        }
    }

    render() {
        return (
            <div>
                <span>
                    <SelectSign sign={this.state.sign} selectionChange={this.changeSign} />
                    <SelectDay day={this.state.day} selectionChange={this.changeDay} />
                </span>
                <h2>
                    {this.state.sign}
                </h2>
                <h3>
                    {this.state.dateRange}
                </h3>
                <h4>
                    Day: {this.state.currentDate}
                </h4>
                <div>
                    {this.state.description}
                </div>
            </div>
        )
    }
}
