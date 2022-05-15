import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePickerExample() {

const [selectedDate, setSelecteddate] = useState(null)

    return (
        <div>
           <DatePicker
            selected={selectedDate} 
            onChange={date => setSelecteddate(date)}
            dateFormat='dd/MM/yyyy'
            filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
            />
        </div>
    )
}

export default DatePickerExample
