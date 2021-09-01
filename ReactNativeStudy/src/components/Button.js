import React from 'react';
import styled from 'styled-components/native';

const ButtonContainer = styled.Pressable`
  background-color: ${props => (props.title === 'Yeji' ? props.theme.blue : props.theme.purple)};
  border-radius: 15px;
  padding: 15px 40px;
  margin: 10px 0px;
  justify-content: center;
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.theme.text};
`;

function Button(props) {
  const { title } = props;

  return (
    <ButtonContainer title={title}>
      <Title>{title}</Title>
    </ButtonContainer>
  );
}

export default Button;
