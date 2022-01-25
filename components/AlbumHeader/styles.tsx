import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
  image: {
    width: 200,
    height: 200,
    margin: 15,
  },
  name: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  creatorContainer: {
    flexDirection: 'row',
  },

  creator: {
    color: 'grey',
    fontSize: 18,
    margin: 5,
  },

  numberOfLikes: {
    color: 'grey',
    fontSize: 18,
    margin: 5,
  },

  button: {
    backgroundColor: '#1FD660',
    height: 50,
    width: 175,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
