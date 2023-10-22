import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const HeartAnimation = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('./assets/heart-animation.json')} 
        autoPlay
        loop
        style={styles.animation}
      />
      <Text style={styles.message}>For my woman, Stella Obua.</Text>
      <Text style={styles.message}>My Dearest Lovely Wife,

Every moment with you is a treasure, and I can't help but smile thinking about the wonderful times we've shared. Your presence lights up my life, and your love warms my heart.

Your smile is my daily motivation, and your laughter is my favorite melody. You have a way of making even the simplest moments feel magical.

You are the love of my life, and I cherish every second with you. I am incredibly grateful to have you by my side. You make my life complete.

I want you to know that I love you more than words can express. You are the most beautiful person I've ever known, both inside and out. My love for you grows stronger with each passing day.

You are my sunshine, and I can't wait to share many more beautiful moments with you. You are my forever love, and I am so lucky to have you in my life.

With all my love,</Text>
      <Text style={styles.message}>I Love You.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 200,
    height: 300,
  },
  message: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
  },
});

export default HeartAnimation;
