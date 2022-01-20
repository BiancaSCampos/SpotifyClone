import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {AlbumType} from '../../types';
import styles from './styles';

export type AlbumProps = {
  album: AlbumType;
};

const Album = (props: AlbumProps) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Album', {id: props.album.id});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image source={{uri: props.album.imageUri}} style={styles.image} />
        <Text numberOfLines={2} style={styles.text}>
          {props.album.artistsHeadline}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Album;
