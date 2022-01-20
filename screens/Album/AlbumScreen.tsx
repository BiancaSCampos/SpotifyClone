import {useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const AlbumScreen = (id: any) => {
  const route = useRoute();

  useEffect(() => {
    console.log(route);
  }, []);

  return (
    <View>
      <Text style={styles.text}>Album Screen</Text>
    </View>
  );
};

export default AlbumScreen;
