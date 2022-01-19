import {Image, Text, View} from 'react-native';
import {AlbumType} from '../../types';
import styles from './styles';

export type AlbumProps = {
  album: AlbumType;
};

const Album = (props: AlbumProps) => (
  <View style={styles.container}>
    <Image source={{uri: props.album.imageUri}} style={styles.image} />
    <Text numberOfLines={2} style={styles.text}>
      {props.album.artistsHeadline}
    </Text>
  </View>
);

export default Album;
