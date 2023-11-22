import { Signal, useSignal } from '@preact/signals-react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';
import { Pressable, Icon, Input, InputField, InputSlot } from '@gluestack-ui/themed';
import React, { useState, useTransition } from 'react';
import { CalendarIcon } from 'lucide-react-native';

function DefaultDatePicker({ onChange, date = new Date(), show }: {
  onChange: ((date: Date) => void),
  date?: Date,
  show: boolean
}) {
  if (show) {
    return (
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={"date"}
        is24Hour={true}
        onChange={(_, date) => {
          if (date) onChange(date);
        }}
      />
    );
  } else {
    return (
      <React.Fragment />
    );
  }
};

function WebDatePicker({ onChange, date, placeholder }: {
  onChange: (date: Date) => void,
  date?: Date,
  placeholder?: string
}) {
  return (
    <input type="date" placeholder={placeholder} defaultValue={date?.toDateString()} onChange={(event) => {
      const inputDate = event.currentTarget.valueAsDate;
      if (inputDate != null) {
        onChange(inputDate);
      }
    }} />
  )
}

function NotWebDatePicker({ onChange, placeholder, startDate }: {
  placeholder?: string,
  onChange: ((date: Date) => void),
  startDate?: Date
}) {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      <Pressable onPress={() => {
        setShow(true);
      }}>
        <Input isReadOnly>
          <InputField type='text' placeholder={placeholder} value={date.toDateString()} />
          <InputSlot>
            <Icon as={CalendarIcon} />
          </InputSlot>
        </Input>
      </Pressable>
      <DefaultDatePicker
        onChange={(_date) => {
          if (_date) {
            setShow(false);
            setDate(_date);
            onChange(_date);
          }
        }}
        date={startDate}
        show={show}
      />
    </React.Fragment>
  );
}

export default function DatePicker({ onChange, placeholder, startDate }: {
  placeholder?: string,
  onChange: ((date: Date) => void),
  startDate?: Date
}) {
  if (Platform.OS !== "web") {
    return (
      <NotWebDatePicker onChange={onChange} placeholder={placeholder} startDate={startDate} />
    );
  } else {
    return (
      <WebDatePicker onChange={onChange} placeholder={placeholder} date={startDate} />
    );
  }
}