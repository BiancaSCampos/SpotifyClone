import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Heart, Play} from '../../assets/icons';
import {Song} from '../../types';
import styles from './styles';

export type PlayerWidgetProps = {
  song: Song;
};

const PlayerWidget = (displayBottom: boolean) => {
  const song = {
    id: '1',
    title: 'Easy on Me',
    artist: 'Adele',
    imageUri: 'https://brunomarsforever.files.wordpress.com/2012/01/der.jpg',
  };

  return (
    <View style={displayBottom === true ? styles.albumScreen : styles.container}>
      <Image style={styles.image} source={{uri: song.imageUri}} />
      <View style={styles.rightContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{song.title}</Text>
          <Text style={styles.artist}> · {song.artist}</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Heart style={styles.iconHeart} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Play />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
