import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './components/Header';

// images
const paw = require('./images/paw.png');
const bag = require('./images/bag.png');
const heart = require('./images/heart.png');

const DetailsScreen = ({route}) => {
  const {data} = route.params;
  console.log('🚀 ~ DetailsScreen ~ data:', JSON.stringify(data));
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.detailsContainer}>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryText}>{data.category}</Text>
          <Image source={paw} style={styles.pawImage} />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{data.name}</Text>
        </View>
        {/* Price */}
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabelText}>PRICE</Text>
          <Text style={styles.priceValueText}>${data.price}</Text>
        </View>
        {/* Size */}
        <View style={styles.sizeContainer}>
          <Text style={styles.sizeLabelText}>SIZE</Text>
          <Text style={styles.sizeValueText}>{data.size}</Text>
        </View>
        <View style={styles.iconsContainer}>
          <Image source={bag} style={styles.bagImage} />
          <Image source={heart} style={styles.heartImage} />
        </View>
      </View>
      {/* Bio View */}
      <View style={styles.bioContainer}>
        <Text style={styles.bioTitleText}>Plant Bio</Text>
        <Text style={styles.bioDescriptionText}>{data.bio}</Text>
      </View>
      <Image source={{uri: data.image}} style={styles.plantImage} />
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  detailsContainer: {
    flex: 0.5,
    backgroundColor: '#9CE5CB',
    justifyContent: 'space-around',
    borderRadius: 50,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginLeft: 34,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 24,
    marginRight: 21,
    justifyContent: 'center',
  },
  pawImage: {
    width: 17,
    height: 18,
    marginLeft: 24,
  },
  nameContainer: {
    marginLeft: 34,
  },
  nameText: {
    fontSize: 38,
    fontWeight: '700',
    fontFamily: 'Philosopher',
    lineHeight: 47.12,
  },
  priceContainer: {
    marginLeft: 34,
  },
  priceLabelText: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Philosopher',
    lineHeight: 18,
  },
  priceValueText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    lineHeight: 24,
    color: 'black',
  },
  sizeContainer: {
    marginLeft: 34,
  },
  sizeLabelText: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Philosopher',
    lineHeight: 18,
  },
  sizeValueText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    lineHeight: 24,
    color: 'black',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 34,
  },
  bagImage: {
    width: 56,
    height: 56,
    resizeMode: 'contain',
    marginRight: 22,
  },
  heartImage: {
    width: 24,
    height: 22,
    resizeMode: 'contain',
  },
  bioContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    flex: 0.5,
    marginLeft: 34,
    marginRight: 34,
  },
  bioTitleText: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Poppins',
    lineHeight: 21,
    marginBottom: 20,
    color: 'black',
  },
  bioDescriptionText: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Poppins',
    lineHeight: 21,
  },
  plantImage: {
    position: 'absolute',
    top: 200,
    right: -20,
    width: 230,
    height: 250,
  },
});
