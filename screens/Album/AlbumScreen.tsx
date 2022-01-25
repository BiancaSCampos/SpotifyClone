import {useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {FlatList, Text, useColorScheme, View} from 'react-native';
import styles from './styles';
import SongListItem from '../../components/SongListItem';
import albumDetails from '../../data/albumDetails';
import {LinearGradient} from 'expo-linear-gradient';
import AlbumHeader from '../../components/AlbumHeader/index';
import Navigation from '../../navigation';

const AlbumScreen = () => {
  const route = useRoute();

  useEffect(() => {
    console.log(route);
  }, []);

  return (
    <LinearGradient colors={['#EB627A', '#000000']} style={{flex: 1, paddingHorizontal: 20}} start={[0.5, -2]}>
      <FlatList
        data={albumDetails.songs}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <SongListItem song={item} />}
        ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
};

export default AlbumScreen;
