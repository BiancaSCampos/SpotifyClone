import {Text, View} from 'react-native';
import AlbumCategory from '../../components/AlbumCategory';
import {RootTabScreenProps} from '../../types';

const albumCategory = {
  id: '1',
  title: 'Happy Vibes',
  albums: [
    {
      id: '1',
      imageUri: 'https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg',
      artistsHeadline: 'Taylor Swift, Ed Sheeran, Snoop Dogg',
    },
    {
      id: '2',
      imageUri: 'https://upload.wikimedia.org/wikipedia/pt/c/cf/Lady_Gaga_-_Joanne.jpg',
      artistsHeadline: 'Lady Gaga, Ed Sheeran, Snoop Dogg',
    },
    {
      id: '3',
      imageUri: 'https://m.media-amazon.com/images/I/71nenZdrRkL._AC_SY355_.jpg',
      artistsHeadline: 'Taylor Swift, Ed Sheeran, Snoop Dogg',
    },
  ],
};

export default function HomeScreen({navigation}: RootTabScreenProps<'Home'>) {
  return (
    <View>
      <AlbumCategory title={albumCategory.title} albums={albumCategory.albums} />
      <AlbumCategory title={albumCategory.title} albums={albumCategory.albums} />
    </View>
  );
}
