import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const products = [
  { id: '1', name: 'Nescau', price: 15.00, image: require('../assets/images/nescau.png'), description: 'Salada fresca com abacate e vegetais.' },
  // { id: '2', name: 'Royal Burger', price: 20.00, image: require('../assets/burger.png'), description: 'Hambúrguer gourmet com ingredientes premium.' },
  // { id: '3', name: 'Fruites Salad', price: 12.00, image: require('../assets/fruit-salad.png'), description: 'Salada de frutas tropicais frescas.' },
];

const HomeScreen = () => {
  const router = useRouter();
  const [cart, setCart] = useState<{ id: string; name: string; price: number; image: any; description: string }[]>([]);

  const addToCart = (item: { id: string; name: string; price: number; image: any; description: string }) => {
    setCart([...cart, item]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Encontre seu alimento</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
              <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => router.push({ pathname: '/cart', params: { cart: JSON.stringify(cart) } })}
      >
        <Text style={styles.cartText}>Ir para o Carrinho ({cart.length})</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 20,
  },
  productCard: {
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
  },
  price: {
    fontSize: 16,
    color: '#34A853',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#FA5A02',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartButton: {
    marginTop: 20,
    backgroundColor: '#FBC02D',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  cartText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
  },
});

export default HomeScreen;
