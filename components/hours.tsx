export default function Hours() {
    const availability = [
        {
            dow: "Sunday",
            hours: <span className="text-red-500">Closed</span>
        },
        {
            dow: "Monday",
            hours: <span>9:30am-5:30pm</span>
        },
        {
            dow: "Tuesday",
            hours: <span>9:30am-5:30pm</span>
        },
        {
            dow: "Wednesday",
            hours: <span>9:30am-5:30pm</span>
        },
        {
            dow: "Thursday",
            hours: <span>9:30am-5:30pm</span>
        },
        {
            dow: "Friday",
            hours: <span>9:30am-5:30pm</span>
        },
        {
            dow: "Saturday",
            hours: <span>9:30am-5:30pm</span>
        }
    ]
    return (
        <section id="availability">
            <div className="xl:max-w-7xl mx-auto px-5 sm:px-6 py-3">
                <div className="mb-4 border-b border-gray-300 pb-4">
                    <h2 className="text-2xl font-bold text-center">Availability</h2>
                    <small className="text-gray-600 mt-2 block">
                        <i className="text-center mx:auto block">Hours may vary depending on Holidays, vacations, time-off etc.</i>
                    </small>
                </div>
                <ul className="px-2">
                    {availability.map((day, index) => {
                        return (
                            <li>
                                <span className="flex flex-row justify-between border-b border-gray-200 pb-2 pt-2">
                                    <h4>{day.dow}</h4>
                                    {day.hours}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}