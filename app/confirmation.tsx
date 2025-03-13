import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const OrderConfirmationScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedido Confirmado!</Text>
      <Text style={styles.message}>Seu pedido foi realizado com sucesso e estará a caminho em breve.</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/home')}>
        <Text style={styles.buttonText}>Voltar para Produtos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#34A853',
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    color: '#212121',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FA5A02',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default OrderConfirmationScreen;
