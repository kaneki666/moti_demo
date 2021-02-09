import React, {useEffect} from 'react';
import {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Get_Categories_Api} from '../../utils/Api';
import {View as MotiView} from 'moti';

const Category = () => {
  const [catagories, setCatagories] = useState('');
  useEffect(() => {
    let fetching = true;
    Get_Categories_Api().then((res) => setCatagories(res.detail));
    return () => {
      fetching = false;
    };
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.image}
          source={require('../../../android/app/src/main/res/mipmap-xxxhdpi/bootsplash_logo.png')}
        />
      </View>
      <View style={styles.footerContainer}>
        <FlatList
          contentContainerStyle={{padding: 30}}
          showsVerticalScrollIndicator={false}
          data={catagories}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.itemContainer}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9a01e',
  },
  headerContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 100,
    height: 150,
    width: 150,
  },
  footerContainer: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width: 250,
    backgroundColor: '#F0C38E',
    margin: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
});
