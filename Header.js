import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>Plantify</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerView: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    lineHeight: 22.4,
    fontFamily: 'Philosopher',
    color: '#002140',
    fontWeight: '700',
  },
});
