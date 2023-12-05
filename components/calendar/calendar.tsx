"use client";
import React, { Component } from 'react';
import CalendarDay from "./calendar-day";
import { TitleMd } from "../ui/title";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { select } from "@material-tailwind/react";

import '@/styles/calendar.scss';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
];

type CalendarState = {
    selectedDate: Date;
    dates: (Date | null)[];
};
export default class Calendar extends Component<{}, CalendarState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            selectedDate: new Date(),
            dates: []
        };
    }

    componentDidMount() {
        this.setDates(this.state.selectedDate);
    }

    componentDidUpdate(prevProps: {}, prevState: CalendarState) {
        if (prevState.selectedDate !== this.state.selectedDate) {
            this.setDates(this.state.selectedDate);
        }
    }

    daysInMonth = (date: Date): number => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    getDates = (date: Date): (Date | null)[] => {
        const totalDays = this.daysInMonth(date);
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        const paddingDays = firstDay;
        return [
            ...Array(paddingDays).fill(null),
            ...Array.from({ length: totalDays }, (_, i) => new Date(date.getFullYear(), date.getMonth(), i + 1)),
        ];
    };

    setDates = (date: Date): void => {
        const dates = this.getDates(date);
        this.setState({ dates });
    };

    handleNextMonthClick = (): void => {
        this.setState({
            selectedDate: new Date(this.state.selectedDate.getFullYear(), this.state.selectedDate.getMonth() + 1, 1)
        });
    };

    handlePrevMonthClick = (): void => {
        this.setState({
            selectedDate: new Date(this.state.selectedDate.getFullYear(), this.state.selectedDate.getMonth() - 1, 1)
        });
    };
    handleDayClick = (date: Date) => (): void => {
        this.setState({
            selectedDate: date
        })
    };
    render() {
        const { selectedDate, dates } = this.state;
        return (
            <div id="calendar" className="mb-4">
                <div className="text-center border-b mb-3 pb-2">
                    <TitleMd>
                        <FiArrowLeft className="inline-block icon" onClick={this.handlePrevMonthClick} /> {months[selectedDate.getMonth()]} {selectedDate.getFullYear()} <FiArrowRight className="inline-block icon" onClick={this.handleNextMonthClick}/>
                    </TitleMd>
                </div>
                <div id="calendar-days" className="grid grid-cols-7 gap-1">
                    {daysOfWeek.map(day => (
                        <div key={day} className="py-2 text-center">{day}</div>
                    ))}
                    {dates.map((date, index) => (
                        <CalendarDay key={index} date={date} selected={!date ? false : (date.getDate() === selectedDate.getDate())} onClick={this.handleDayClick(date)} />
                    ))}
                </div>
            </div>
        );
    }
}