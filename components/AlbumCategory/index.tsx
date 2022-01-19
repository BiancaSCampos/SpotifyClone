import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {AlbumType} from '../../types';
import Album from '../Album';
import styles from './styles';

export type AlbumCategoryProps = {
  title: string;
  albums: AlbumType[];
};

const AlbumCategory = (props: AlbumCategoryProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <FlatList
        data={props.albums}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Album album={item} />}
      />
    </View>
  );
};

export default AlbumCategory;
