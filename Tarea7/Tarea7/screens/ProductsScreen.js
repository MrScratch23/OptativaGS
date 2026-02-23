import { useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useCartStore } from '../store/useCartStore';

const PRODUCTS = [
  { id: '1', name: 'Camiseta', price: 15 },
  { id: '2', name: 'Pantalón', price: 30 },
  { id: '3', name: 'Zapatillas', price: 60 },
];

export default function ProductsScreen({ navigation }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);
  const loadCart = useCartStore((state) => state.loadCart);
  const saveCart = useCartStore((state) => state.saveCart);

  // cargar carrito al iniciar
  useEffect(() => {
    loadCart();
  }, []);

  // guardar carrito al modificar
  useEffect(() => {
    saveCart();
  }, [cart]);

  // función para obtener la cantidad de un producto en el carrito
  const getProductQuantity = (productId) => {
    return cart.filter(item => item.id === productId).length;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos</Text>

      <Button
        title={`Ver carrito (${cart.length})`}
        onPress={() => navigation.navigate('Cart')}
      />

      <FlatList
        style={{ marginTop: 15 }}
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const quantity = getProductQuantity(item.id);
          return (
            <View style={styles.product}>
              <View>
                <Text style={styles.text}>
                  {item.name} - {item.price}€
                </Text>
                {quantity > 0 && (
                  <Text style={{ fontSize: 14, color: '#666', fontStyle: 'italic', marginTop: 2 }}>
                    En carrito: {quantity}
                  </Text>
                )}
              </View>
              <Button title="Añadir" onPress={() => addToCart(item)} />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 20 },
  title: { fontSize: 26, marginBottom: 15, fontWeight: 'bold' },
  product: {
    padding: 15,
    marginVertical: 6,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: { fontSize: 18 },
});