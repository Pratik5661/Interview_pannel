import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';


export default function ResponsiveTimePickers({handleChange}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'MobileTimePicker'
        ]}
      >
        <DemoItem>
          <MobileTimePicker defaultValue={null} onChange={handleChange} />
        </DemoItem>

      </DemoContainer>
    </LocalizationProvider>
  );
}