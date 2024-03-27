import React from 'react'
import { DateRangePicker } from 'rsuite';
import { useState } from 'react';
import 'rsuite/DateRangePicker/styles/index.css';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import addDays from 'date-fns/addDays';

const predefinedRanges =[
    {
        label: 'Previous week',
        closeOverlay: false,
        value: value => {
          const [start = new Date()] = value 
          return [
            addDays(startOfWeek(start, { weekStartsOn: 0 }), -7),
            addDays(endOfWeek(start, { weekStartsOn: 0 }), -7)
          ];
        },
        appearance: 'default'
    },
    {
        label: 'Next week',
        closeOverlay: false,
        value: value => {
          const [start = new Date()] = value || [];
          return [
            addDays(startOfWeek(start, { weekStartsOn: 0 }), 7),
            addDays(endOfWeek(start, { weekStartsOn: 0 }), 7)
          ];
        },
        appearance: 'default'
    }
];

const WeekPicker = () => {
    
  const [value, setValue] = useState([
        new Date('yyy.MM.dd'),
        new Date('yyy.MM.dd')
      ]);

      const handleChange = (value) => {
         setValue(value);

        const startDate = value[0];
        const endDate = value[1];

        const startDateFormatted = startDate.toISOString().split('T')[0];
        const endDateFormatted = endDate.toISOString().split('T')[0];

        console.log(`Startdatum: ${startDateFormatted}`);
        console.log(`Slutdatum: ${endDateFormatted}`);
        console.log(typeof startDateFormatted);
      }

     return(
        <div className='WeekPicker' style={{marginLeft: '10px'}}>
            <h1>WeekPicker</h1>
            <DateRangePicker
            value={value}
            format='yyy.MM.dd'
            onChange={handleChange}
            ranges={predefinedRanges}
            oneTap
            name="dateRange"
            showOneCalendar
            showWeekNumbers
            hoverRange="week" 
            onShortcutClick={(shortcut, event) => {
            console.log(shortcut);
            }}
             />
        </div>
      );
}
export default WeekPicker;