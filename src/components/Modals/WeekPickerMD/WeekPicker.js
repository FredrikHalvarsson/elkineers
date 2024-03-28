import React from 'react'
import { DateRangePicker } from 'rsuite';
import { useState } from 'react';
import 'rsuite/DateRangePicker/styles/index.css';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import addDays from 'date-fns/addDays';
import { Accordion , Typography, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

const WeekPicker = ({onChange, onClearFilter}) => {
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

        onChange(startDateFormatted, endDateFormatted);

        console.log(`Startdatum: ${startDateFormatted}`);
        console.log(`Slutdatum: ${endDateFormatted}`);
        console.log(typeof startDateFormatted);
      }
      const handleClear = () => {
        setValue([new Date(), new Date()]);
        onClearFilter();
      }

     return(
        <div className='WeekPicker'>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel-content"
              id="panel-Filter"
            >
              <Typography id="accordion-title" variant="h6" component="h2">Filter</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography id="modal-modal-title" variant="subtitle1" component="h3">
                  Select week
                </Typography>
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
                  <Button variant="outlined" onClick={handleClear}>Clear Filter</Button>
            </AccordionDetails>
          </Accordion>
        </div>
      );
}
export default WeekPicker;