import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },

  rightContainer: {
    justifyContent: 'space-around',
    marginLeft: 10,
  },

  image: {
    width: 60,
    height: 60,
  },

  text: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

  artist: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;
