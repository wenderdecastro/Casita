import React from 'react';
import { View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AppColors } from '../utils/Pallete';

export default function AppTimePicker({ time, setTime, show = false, setShow }) {
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setTime(currentDate);
    };

    return (
        <View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={time}
                    mode={'time'}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
}
