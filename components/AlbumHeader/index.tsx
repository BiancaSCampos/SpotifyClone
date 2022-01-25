import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {AlbumType} from '../../types';
import styles from './styles';

export type AlbumHeaderProps = {
  album: AlbumType;
};

const AlbumHeader = (props: AlbumHeaderProps) => {
  const {album} = props;
  return (
    <View style={styles.container}>
      <Image source={{uri: props.album.imageUri}} style={styles.image} />
      <Text style={styles.name}>{album.name}</Text>
      <View style={styles.creatorContainer}>
        <Text style={styles.creator}>By {album.by}</Text>
        <Text style={styles.numberOfLikes}>{album.numberOfLikes} Likes</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>PLAY</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlbumHeader;
