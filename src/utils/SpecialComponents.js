import { View } from 'react-native';

export const Gap = ({ size }) => {
    //Use this component to reduce the padding and margin unecessary uses.
	return <View style={{ height: size, width: size }} />;
};