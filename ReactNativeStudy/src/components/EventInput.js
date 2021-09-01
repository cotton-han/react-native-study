import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const EventInput = () => {
  const [text, setText] = useState('');
  // const onChange = event => setText(event.nativeEvent.text);
  const onChangeText = changeText => setText(changeText);

  return (
    <View>
      <Text style={{ margin: 10, fontSize: 30 }}>text: {text}</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, fontSize: 20 }}
        placeholder="Enter a text..."
        // onChange={onChange}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default EventInput;
