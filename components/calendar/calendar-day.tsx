interface CalendarDayProps {
    date: Date;
    selected: boolean;
    [key: string]: any; // This line is for any additional props
    onClick?: () => void; // Optional onClick function
    enabled: boolean;
    isToday: boolean;
}

export default function CalendarDay({ date, selected, enabled, isToday, onClick }: CalendarDayProps) {
    if (!date) {
        return <div className="calendar-day null-date"></div>;
    } else {
        return (
            <div 
                className={`calendar-day${selected ? " selected" : ""}${enabled ? " enabled" : " disabled"}${isToday ? " today" : ""}`} 
                onClick={onClick} // Add the onClick event handler
            >
                <span className="date">
                    {date.getDate().toString()}
                </span>
            </div>
        );
    }
}
