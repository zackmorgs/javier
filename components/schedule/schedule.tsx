"use client";

import React, { Component } from 'react';

interface ScheduleProps {
    initialDate: Date;
}
type ScheduleState = {
    date: Date;
};

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

export default class Schedule extends Component<ScheduleProps, ScheduleState> {
    constructor(props : ScheduleProps){
        super(props);
        this.state = {
            date: this.props.initialDate
        }
    }
    render() {
        return (
            <div id="schedule" className="xl:max-w-7xl mx-auto px-4 sm:px-6">
                {this.state.date.toString()}
            </div>
        )
    }
}