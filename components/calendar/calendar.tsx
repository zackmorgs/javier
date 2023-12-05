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
    dates: Date;
    today: Date;
};

export default class Calendar extends Component<{}, CalendarState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            selectedDate: new Date(),
            dates: [],
            today: new Date()
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
        // creates a new date, with date passed. passing 0 to the date parameter will return the date before the next month which gives you the total days in the month.
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    getDates = (date: Date): (Date | null)[] => {
        const totalDays = this.daysInMonth(date);
        const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

        // Calculate previous month's trailing dates
        const prevMonth = new Date(date.getFullYear(), date.getMonth(), 0);
        // get total days in month for last month
        const prevMonthDays = this.daysInMonth(prevMonth);
        // this i just dont get but it works. thanks chatgpt. we use it in the following line to create the array length.
        const prevMonthTrailingDays = firstDayOfMonth;
        // creates an array of length prevMonthTrailingDays 
        const prevMonthDates = Array.from({ length: prevMonthTrailingDays }, (_, i) => {
            // create a new date using prev month. date of prev month is calculated from prevMonthDays and is decremented incrementally (hope that makes sense :])
            return new Date(prevMonth.getFullYear(), prevMonth.getMonth(), prevMonthDays - i);
        }).reverse();

        // Current month's dates
        // uses from method to create an array of totalDays which gives total days in the month.
        const currentMonthDates = Array.from({ length: totalDays }, (_, i) => {
            // returns a date which date is incremented from the total length of days (using i)
            return new Date(date.getFullYear(), date.getMonth(), i + 1);
        });

        // Calculate next month's leading dates
        // i think the six means theres max of six days on the next month but im not sure.
        const nextMonthLeadingDays = 6 - lastDayOfMonth;

        // 
        const nextMonthDates = Array.from({ length: nextMonthLeadingDays }, (_, i) => {
            return new Date(date.getFullYear(), date.getMonth() + 1, i + 1);
        });

        return [...prevMonthDates, ...currentMonthDates, ...nextMonthDates];
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
    handleDayClick = (date: Date) => {
        return () => {
            this.setState({
                selectedDate: date
            });
        };
    };
    isPreviousDay = (date: Date | null): boolean => {
        if (!date) return false;

        const today = this.state.today;
        // Create a new date object for today at 00:00:00 for comparison
        const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());

        return date < startOfToday;
    };

    isSelectedDate = (date: Date | null): boolean => {
        const { selectedDate } = this.state;

        return date && selectedDate &&
            date.getDate() === selectedDate.getDate() &&
            date.getMonth() === selectedDate.getMonth() &&
            date.getFullYear() === selectedDate.getFullYear();
    };

    isToday = (date: Date | null): boolean => {
        const { today } = this.state;

        return date &&
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    };
    isSunday = (date: Date | null): boolean => {
        return date ? date.getDay() === 0 : false;
    };

    isHoliday = (date: Date | null): boolean => {
        if (!date) return false;

        const holidays = [
            { month: 0, day: 1 },   // Example: New Year's Day (January 1st)
            { month: 11, day: 25 }, // Example: Christmas (December 25th)
            // Add more holidays as needed
        ];

        return holidays.some(holiday =>
            date.getDate() === holiday.day && date.getMonth() === holiday.month
        );
    };

    isDayOff = (date: Date | null): boolean => {
        return false;
    }
    isValidDateSelected = (): boolean => {
        const { selectedDate } = this.state;
        return selectedDate && 
               !this.isPreviousDay(selectedDate) &&
               !this.isSunday(selectedDate) &&
               !this.isHoliday(selectedDate) &&
               !this.isDayOff(selectedDate);
    };
    handleSelectDateClick = (): void => {
        console.log("date selected:", this.state.selectedDate);
    }
    render() {

        return (
            <div id="calendar" className="mb-4 h-screen md:h-auto">
                <div className="text-center border-b mb-3 pb-2">
                    <TitleMd>
                        <FiArrowLeft className="inline-block icon" onClick={this.handlePrevMonthClick} /> {months[this.state.selectedDate.getMonth()]} {this.state.selectedDate.getFullYear()} <FiArrowRight className="inline-block icon" onClick={this.handleNextMonthClick} />
                    </TitleMd>
                    <small>
                        Select a date from below.
                    </small>
                </div>
                <div id="calendar-days" className="grid grid-cols-7 gap-1">
                    {daysOfWeek.map(day => (
                        <div key={day} className="day-of-week">{day}</div>
                    ))}
                    {this.state.dates.map((date, index) => (
                        <CalendarDay
                            key={index}
                            date={date}
                            selected={this.isSelectedDate(date)}
                            onClick={date ? this.handleDayClick(date) : undefined}
                            enabled={!this.isPreviousDay(date) && !this.isSunday(date) && !this.isHoliday(date) && !this.isDayOff(date)}
                            isToday={this.isToday(date)}
                        />
                    ))}
                </div>
                <div className="flex justify-center md:justify-start">
                    <div className="mt-4">
                        <button 
                            id="select_date"
                            className="btn btn-primary" 
                            disabled={!this.isValidDateSelected()}
                            onClick={this.handleSelectDateClick}>
                            Select Date
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}