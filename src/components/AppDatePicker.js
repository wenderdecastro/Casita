import React from 'react';
import { View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AppColors } from '../utils/Pallete';

export default function AppDatePicker({ date, setDate, show = false, setShow }) {
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
    };

    return (
        <View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    minimumDate={new Date}
                    
                />
            )}
        </View>
    );
}
