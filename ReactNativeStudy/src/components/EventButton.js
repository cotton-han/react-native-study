import React from 'react';
import { Pressable, Text } from 'react-native';

function EventButton() {
  const onPressIn = () => console.log('Press In !!! \n');
  const onPressOut = () => console.log('Press Out !!!\n');
  const onPress = () => console.log('Press !!!\n');
  const onLongPress = () => console.log('Long Press !!!\n');

  return (
    <Pressable
      style={{
        backgroundColor: '#f1c40f',
        padding: 16,
        margin: 10,
        borderRadius: 8,
      }}
      delayLongPress={3000}
      onPressIn={onPressIn}
      onLongPress={onLongPress}
      onPressOut={onPressOut}
      onPress={onPress}>
      <Text style={{ color: 'white', fontSize: 24 }}>Press</Text>
    </Pressable>
  );
}

export default EventButton;
