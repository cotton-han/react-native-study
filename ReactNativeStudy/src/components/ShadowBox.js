import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: '#fff',
    width: 200,
    height: 200,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
      },
      android: {
        elevation: 20,
      },
      web: {
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 7px 29px 0px',
      },
    }),
  },
});

function ShadowBox() {
  return <View style={styles.shadow} />;
}

export default ShadowBox;
