import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('/login');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo-gomarket.png')} style={styles.logo} />
      <Text style={styles.text}>GoMarket - Seu mercado favorito, sem sair de casa!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f7c6', // Corrigido
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    color: '#FA5A02',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default SplashScreen;
