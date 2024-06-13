import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getPlantList} from './services/getplantList';
import Header from './components/Header';

// images
const paw = require('./images/paw.png');
const bag = require('./images/bag.png');
const heart = require('./images/heart.png');

const HomeScreen = ({route, navigation}) => {
  const [plantList, setPlantList] = useState();
  useEffect(() => {
    callGetplantList();
  }, []);

  const callGetplantList = async () => {
    try {
      let plantDetails = await getPlantList();
      setPlantList(plantDetails);
    } catch (error) {}
  };

  const moveToDetailsScreen = item => {
    try {
      navigation.navigate('DetailsScreen', {data: item});
    } catch (error) {}
  };

  const renderItem = ({item, index}) => {
    console.log('🚀 ~ renderItem ~ item:', JSON.stringify(item, null, '  '));
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          style={styles.itemTouchable}
          onPress={() => {
            moveToDetailsScreen(item);
          }}>
          {/* Category view */}
          <View style={styles.categoryView}>
            <Text style={styles.categoryText}>{item.category}</Text>
            <Image source={paw} style={styles.pawImage} />
          </View>
          {/* Header Text View */}
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>{item.name}</Text>
          </View>
          {/* Price and button view */}
          <View style={styles.priceButtonView}>
            <Text style={styles.priceText}>${item.price}</Text>
            <Image source={heart} style={styles.heartImage} />
            <Image source={bag} style={styles.bagImage} />
          </View>
          <Image source={{uri: item.image}} style={styles.itemImage} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header view */}
      <Header />
      {/* FlatList View */}
      <View style={styles.listViewStyle}>
        <FlatList
          data={plantList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF24',
  },
  listViewStyle: {
    flex: 1,
    marginLeft: 19,
    marginRight: 19,
    backgroundColor: '#FFFFFF24',
  },
  itemContainer: {
    backgroundColor: '#FFFFFF24',
  },
  itemTouchable: {
    width: '90%',
    height: 177,
    backgroundColor: '#9CE5CB',
    marginBottom: 54,
    justifyContent: 'space-around',
    borderRadius: 20,
  },
  categoryView: {
    flexDirection: 'row',
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
  },
  headerTextView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 34,
    fontFamily: 'Philosopher',
    fontWeight: '700',
    color: '#002140',
  },
  priceButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
  heartImage: {
    width: 24,
    height: 22,
    resizeMode: 'contain',
  },
  bagImage: {
    width: 56,
    height: 56,
    resizeMode: 'contain',
  },
  itemImage: {
    position: 'absolute',
    top: -30,
    right: -40,
    width: 116,
    height: 150,
  },
});
