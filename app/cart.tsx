import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

const CartScreen = () => {
  const router = useRouter();
  const { cart: cartParams } = useLocalSearchParams();

  // Garante que cartParams seja tratado como um array de objetos
  const initialCart = cartParams && typeof cartParams === 'string' ? JSON.parse(cartParams) : [];
  const [cart, setCart] = useState(initialCart);

  const removeItem = (index: number) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho de Compras</Text>
      {cart.length > 0 ? (
        <FlatList
          data={cart}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.cartItem}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>${item.price.toFixed(2)}</Text>
              </View>
              <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(index)}>
                <Text style={styles.removeText}>Remover</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <Text style={styles.emptyText}>Seu carrinho está vazio.</Text>
      )}
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => router.push('/confirmation')}
        disabled={cart.length === 0}
      >
        <Text style={styles.checkoutText}>Finalizar Pedido</Text>
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
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  info: {
    flex: 1,
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
  removeButton: {
    backgroundColor: '#FA5A02',
    padding: 5,
    borderRadius: 5,
  },
  removeText: {
    color: '#FFF',
    fontSize: 14,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#212121',
  },
  checkoutButton: {
    marginTop: 20,
    backgroundColor: '#FBC02D',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    opacity: 1,
  },
  checkoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
  },
});

export default CartScreen;
