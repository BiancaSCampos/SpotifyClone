import {Text, View} from 'react-native';
import Album from '../../components/Album';
import {RootTabScreenProps} from '../../types';

const album = {
  id: '1',
  imageUri: 'https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg',
  artistsHeadline: 'Taylor Swift, Ed Sheeran, Snoop Dogg',
};

export default function HomeScreen({navigation}: RootTabScreenProps<'Home'>) {
  return (
    <View>
      <Album album={album} />
    </View>
  );
}
