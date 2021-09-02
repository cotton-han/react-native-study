import React from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { images } from '../images';

const Icon = styled.Image`
  tint-color: ${({ theme, completed }) =>
    completed ? theme.done : theme.text};
  width: 30px;
  height: 30px;
  margin: 10px;
`;

function IconButton({ type, onPressOut, id, completed }) {
  return (
    <Pressable onPressOut={() => onPressOut(id)}>
      <Icon source={type} completed={completed} />
    </Pressable>
  );
}

IconButton.propTypes = {
  type: PropTypes.oneOf(Object.values(images)).isRequired,
  onPressOut: PropTypes.func,
  id: PropTypes.number,
  completed: PropTypes.bool,
};

export default IconButton;
