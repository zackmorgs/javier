interface CalendarDayProps {
    date: Date;
    selected: boolean;
    [key: string]: any; // This line is for any additional props
}
export default function CalendarDay(props : CalendarDayProps) {
    console.log(props.date)
    if (!props.date) {
        return (
            <div className="calendar-day null-date">

            </div>
        )
    } else {
        return (
            <div className={`calendar-day text-center${ props.selected ? " selected" : ""}`} key={props.key}>
                {props.date.getDate().toString()}
            </div>
        )
    }

}