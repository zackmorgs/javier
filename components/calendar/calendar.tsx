"use client";
import React, { useState, useEffect } from 'react';
import CalendarDay from "./calendar-day";
import { TitleMd } from "../ui/title";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { select } from "@material-tailwind/react";

import '@/styles/calendar.scss';

export default function Calendar() {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const [selectedDate, setSelectedDate] = useState(new Date());

    const daysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getDates = (date: Date) => {
        const totalDays = daysInMonth(date);
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        const paddingDays = firstDay;
        return [
            ...Array(paddingDays).fill(null),
            ...Array.from({ length: totalDays }, (_, i) => {
                return new Date(date.getFullYear(), date.getMonth(), i + 1);
            }),
        ];
    };

    const [dates, setDates] = useState(getDates(selectedDate));

    useEffect(() => {
        setDates(getDates(selectedDate));
    }, [selectedDate]);

    const handleNextMonthClick = () => {
        setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1));
    };

    const handlePrevMonthClick = () => {
        setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1));
    };

    return (
        <div id="calendar" >
            <div className="text-center border-b mb-3 pb-2">
                <TitleMd>
                    <FiArrowLeft className="inline-block icon" onClick={handlePrevMonthClick} /> {months[selectedDate.getMonth()]} {selectedDate.getFullYear()}  <FiArrowRight className="inline-block icon" onClick={handleNextMonthClick}/>
                </TitleMd>
            </div>
            <div id="calendar-days" className="grid grid-cols-7 gap-1">
                {daysOfWeek.map(day => (
                    <div key={day} className="py-2 text-center">{day}</div>
                ))}
                {dates.map((date, index) => (
                    <CalendarDay key={index} date={date} selected={!date? (false) : (date.getDate() == selectedDate.getDate())}/>
                ))}
            </div>
        </div>
    )
}