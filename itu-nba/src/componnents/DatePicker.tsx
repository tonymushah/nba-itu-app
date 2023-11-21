import { Signal, useSignal } from '@preact/signals-react';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';
import { Pressable, Icon, Input, InputField, InputSlot, onChange } from '@gluestack-ui/themed';
import FeatherIcon from 'react-native-vector-icons/Feather';
import React from 'react';

function CalendarIcon() {
  return (
    <FeatherIcon name='calendar' />
  )
}

function DefaultDatePicker({ onChange, date = new Date(), show }: {
  onChange: ((date: Date) => void),
  date?: Date,
  show: boolean | Signal<boolean>
}) {
  return (
    <React.Fragment>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          onChange={(_, date) => {
            if (date) onChange(date);
          }}
        />
      )}
    </React.Fragment>
  );
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
  const date = useSignal(new Date());
  const show = useSignal(false);
  return (
    <React.Fragment>
      <Pressable onPress={() => {
        show.value = !(show.value);
      }}>
        <Input isReadOnly>
          <InputField type='text' placeholder={placeholder} />
          <InputSlot>
            <Icon as={CalendarIcon} />
          </InputSlot>
        </Input>
      </Pressable>
      <DefaultDatePicker onChange={(_date) => {
        if (_date) {
          date.value = _date;
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