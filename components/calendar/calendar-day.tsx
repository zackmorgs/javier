interface CalendarDayProps {
    date: Date;
    selected: boolean;
    [key: string]: any; // This line is for any additional props
    onClick?: () => void; // Optional onClick function
    // Other props
}

export default function CalendarDay({ date, selected, onClick }: CalendarDayProps) {
    if (!date) {
        return <div className="calendar-day null-date"></div>;
    } else {
        return (
            <div 
                className={`calendar-day text-center ${selected ? "selected" : ""}`} 
                onClick={onClick} // Add the onClick event handler
            >
                {date.getDate().toString()}
            </div>
        );
    }
}
