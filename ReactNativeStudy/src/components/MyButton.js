import React from 'react';
import { Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';

function MyButton(props) {
  const { title, onPress } = props;

  return (
    <Pressable
      style={{
        backgroundColor: '#3498db',
        padding: 16,
        margin: 10,
        borderRadius: 8,
      }}
      onPress={() => onPress()}
      pressRetentionOffset={{ bottom: 50, left: 50, right: 50, top: 50 }}
      hitSlop={50}>
      <Text style={{ color: 'white', fontSize: 24 }}>{title}</Text>
    </Pressable>
  );
}

// MyButton.defaultProps = {
//   title: 'Button',
// };

MyButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default MyButton;
