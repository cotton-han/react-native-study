import React from 'react';
import styled from 'styled-components/native';

const ScrollList = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`;

function List({ width, children }) {
  return <ScrollList width={width}>{children}</ScrollList>;
}

export default List;
