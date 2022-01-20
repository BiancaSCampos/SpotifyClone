import {FlatList, Text, View} from 'react-native';
import AlbumCategory from '../../components/AlbumCategory';
import {RootTabScreenProps} from '../../types';
import albumCategories from '../../data/albumCategories';
import {LinearGradient} from 'expo-linear-gradient';

export default function HomeScreen({navigation}: RootTabScreenProps<'Home'>) {
  return (
    <LinearGradient colors={['#8FF4E2', '#000000']} start={[-2, 0]}>
      <FlatList
        data={albumCategories}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <AlbumCategory title={item.title} albums={item.albums} />}
      />
    </LinearGradient>
  );
}
