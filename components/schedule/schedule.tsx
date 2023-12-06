"use client";
import React, { Component } from 'react';
import Link from 'next/link';

import "@/styles/schedule.scss";

interface Appointment {
    startTime: Date;
    endTime: Date;
    type: 'standard' | 'extended';
}

interface ScheduleProps {
    initialDate: Date;
}

type ScheduleState = {
    date: Date;
    timeSlots: Array<Date>;
    appointments: Array<Appointment>;
};

export default class Schedule extends Component<ScheduleProps, ScheduleState> {
    constructor(props: ScheduleProps) {
        super(props);

        const timeSlots = this.initializeTimeSlots(this.props.initialDate);
        const appointments = this.createExampleAppointments();

        this.state = {
            date: this.props.initialDate,
            timeSlots: timeSlots,
            appointments: appointments,
        };
    }

    isTimeSlotInPast = (timeSlot: Date): boolean => {
        const now = new Date();
        return timeSlot < now;
    };

    initializeTimeSlots(date: Date): Array<Date> {
        const slots = [];
        const startHour = 9; // 9:30 AM
        const endHour = 17; // 5:30 PM

        for (let hour = startHour; hour < endHour; hour++) {
            const minute = hour === startHour ? 30 : 0;
            let startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hour, minute);

            while (startTime.getHours() < endHour) {
                slots.push(new Date(startTime));
                startTime = new Date(startTime.getTime() + 30 * 60 * 1000); // Next 30-minute slot
            }
        }
        return slots;
    }

    createExampleAppointments(): Array<Appointment> {
        return [
            // Example appointments
            {
                startTime: new Date(this.props.initialDate.getFullYear(), this.props.initialDate.getMonth(), this.props.initialDate.getDate(), 10, 0),
                endTime: new Date(this.props.initialDate.getFullYear(), this.props.initialDate.getMonth(), this.props.initialDate.getDate(), 10, 30),
                type: 'standard'
            },
            // More appointments...
        ];
    }

    render() {
        return (
            <div id="schedule" className="xl:max-w-7xl mx-auto px-4 sm:px-6">
                <ul id="schedule-list">
                    {this.state.timeSlots.map((slot, index) => (
                        <li key={index} className={`time-slot ${this.isTimeSlotInPast(slot) ? 'disabled' : ''}`}>
                            {slot.toLocaleTimeString()}
                            {this.state.appointments.map((appointment, appIndex) => {
                                if (appointment.startTime <= slot && appointment.endTime > slot) {
                                    return (
                                        <div key={appIndex} className={`appointment ${appointment.type}`}>
                                            Appointment ({appointment.type})
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}