import React from 'react';
import { ScrollView } from 'react-native';

function List({ width, children }) {
  return (
    <ScrollView style={{ flex: 1, width: width - 40 }}>{children}</ScrollView>
  );
}

export default List;
