import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getPlantList} from './services/getplantList';
import Header from './components/Header';

const HomeScreen = () => {
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

  const renderItem = ({item, index}) => {
    console.log('🚀 ~ renderItem ~ item:', JSON.stringify(item, null, '  '));
    return (
      <View
        style={{
          width: 280,
          height: 177,
          backgroundColor: 'red',
          marginBottom: 54,
        }}>
        {/* Catagary view */}
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'green',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text style={{fontSize: 14, fontWeight: '400', marginLeft: 24}}>
            {item.category}
          </Text>
          {/* <Image 
          source={}
          /> */}
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* header view */}
      <Header />
      {/* Flist View */}
      <View style={styles.lisViewStyle}>
        <FlatList data={plantList} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  lisViewStyle: {
    flex: 1,
    backgroundColor: '',
    marginLeft: 19,
    marginRight: 19,
    backgroundColor: '#FFFFFF24',
  },
});
