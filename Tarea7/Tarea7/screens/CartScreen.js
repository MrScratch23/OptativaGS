import { useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useCartStore } from '../store/useCartStore';

export default function CartScreen() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const loadCart = useCartStore((state) => state.loadCart);
  const saveCart = useCartStore((state) => state.saveCart);

  // cargar carrito al iniciar
  useEffect(() => {
    loadCart();
  }, []);

  // guardar carrito al modificarlo
  useEffect(() => {
    saveCart();
  }, [cart]);

  // calcular el total del carrito (con una funcon es suficiente)
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito</Text>

      {cart.length === 0 && <Text style={styles.empty}>El carrito está vacío</Text>}

      <FlatList
        data={cart}
        keyExtractor={(item) => item.cartItemId}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>
              {item.name} - {item.price}€
            </Text>
            <Button title="Eliminar" onPress={() => removeFromCart(item.cartItemId)} />
          </View>
        )}
      />

      {cart.length > 0 && (
        <>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>
              Total: <Text style={styles.totalPrice}>{totalPrice.toFixed(2)}€</Text>
            </Text>
          </View>
          <Button title="Vaciar carrito" onPress={clearCart} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 26, marginBottom: 15, fontWeight: 'bold' },
  empty: { fontSize: 16, fontStyle: 'italic', marginBottom: 10 },
  item: {
    padding: 15,
    marginVertical: 6,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  text: { fontSize: 18 },
  totalContainer: {
    marginVertical: 15,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 20,
    fontWeight: '600',
  },
  totalPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2e8b57', // verde oscuro para destacar el total
  },
});