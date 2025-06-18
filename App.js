import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image, ScrollView, Alert, StatusBar, Modal } from 'react-native';

const productos = [
 {
    id: '1',
    nombre: 'Gorra DANDY Sadboyz Azul',
    precio: 1700,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-JKtEQdDVDo3Yy1BSuLZLNwhRm42GFB_oeQ&s',
    reseñas: [5, 4, 5],
  },
  {
    id: '2',
    nombre: 'Gorra Dandy Sadboyz  Negra',
    precio: 1899,
    imagen: 'https://belicoimperial.com/cdn/shop/files/FCCA1AE4-C2DF-42B8-B3E9-2B14D5F8062C.jpg?v=1734410272',
    reseñas: [4, 4, 5],
  },
  {
    id: '3',
    nombre: 'Gorra Dandy Sadboyz Como Jordan',
    precio: 3742.50,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_804664-MLM81389724974_122024-O.webp',
    reseñas: [3, 5, 4],
  },
  {
    id: '4',
    nombre: 'Gorra Dandy Sadboyz  Rosa',
    precio: 6500,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_735810-MLM81939970291_012025-O-gorra-dandy-hats-junior-h-clave-ali-sad-boys-original.webp',
    reseñas: [5, 5, 5],
  },
  {
    id: '5',
    nombre: 'Gorra Dandy Rude Awakenings',
    precio: 3000,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsP9fQpdaq7Z0TeYdnCMwtFegAmQazwsu-bg&s',
    reseñas: [4, 4, 4],
  },
  {
    id: '6',
    nombre: 'Gorra 31 LA Azul',
    precio: 1850,
    imagen: 'https://mghatsmx.myshopify.com/cdn/shop/files/2_1000x_png.webp?v=1717876867',
    reseñas: [3, 4, 3],
  },
  {
    id: '7',
    nombre: 'Gorra 31 Cristal',
    precio: 3999,
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_769492-MLM79376178098_092024-O-gorra-31-thirty-one-hats-new-york-crystals-black.webp',
    reseñas: [5, 5, 4],
  },
  {
    id: '8',
    nombre: 'Gorra 31  Mura Travis',
    precio: 3100,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNQ7EWdc0o56gZymSmf4ie8rqj4lG7Yxhwlg&s',
    reseñas: [4, 4, 5],
  },
  {
    id: '9',
    nombre: 'Gorra Barbas Chrome',
    precio: 16999,
    imagen: 'https://belicoimperial.com/cdn/shop/files/1_900x_efe5dda5-f65d-40ce-8eec-5a900a601052.webp?v=1736895175',
    reseñas: [5, 3, 4],
  },
  {
    id: '10',
    nombre: 'Gorra Barbas Chrome III',
    precio: 3999,
    imagen: 'https://topcapz.com/cdn/shop/files/71DBC06A-6E85-4C11-9B37-7A8C229924D8.jpg?v=1724129284',
    reseñas: [4, 5, 5],
  },
  {
    id: '11',
    nombre: 'Gorra Barbas Luis R',
    precio: 2199,
    imagen: 'https://7hats.mx/cdn/shop/files/IMG_1470.jpg?v=1731287083',
    reseñas: [4, 4, 4],
  },
  {
    id: '12',
    nombre: 'Gorra Barbas Skulls',
    precio: 17000,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqq-t1T5q8IigiPX2o5ZPMvHF0oBOnwKFHjA&s',
    reseñas: [5, 5, 5],
  },
  {
    id: '13',
    nombre: 'Gorra Barbas Aleman',
    precio: 15000,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6lEjHUAWviK5CUKV0lTd5aXns61jVgwrnyg&s',
    reseñas: [4, 5, 4],
  },
  {
    id: '14',
    nombre: 'Gorra Barbas Huracan',
    precio: 4500,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlE1uG31hNaKECYfQzbu-XfTHfahXcZCUROg&s',
    reseñas: [3, 4, 3],
  },
  {
    id: '15',
    nombre: 'Gorra Barbas  Star',
    precio: 3900,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPygSLkmykadNHBN-vNbNfxInp_4MT0opyA&s',
    reseñas: [4, 4, 5],
  },
];


export default function App() {
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [vista, setVista] = useState('inicio');
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    Alert.alert('🛒 Agregado', `${producto.nombre} fue agregado al carrito.`);
  };

  const eliminarDelCarrito = (index) => {
    const nuevo = [...carrito];
    nuevo.splice(index, 1);
    setCarrito(nuevo);
    Alert.alert('🗑️ Eliminado', 'Producto eliminado del carrito.');
  };

  const promedioEstrellas = (reseñas) => {
    const total = reseñas.reduce((sum, r) => sum + r, 0);
    return Math.round(total / reseñas.length);
  };

  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const destacados = productos.slice(0, 5);

  const MenuLateral = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={menuVisible}
      onRequestClose={() => setMenuVisible(false)}
    >
      <View style={styles.menuLateral}>
        <TouchableOpacity onPress={() => { setVista('inicio'); setMenuVisible(false); }}><Text style={styles.menuItem}>🏠 Inicio</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => { setVista('carrito'); setMenuVisible(false); }}><Text style={styles.menuItem}>🛒 Ir al carrito</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setMenuVisible(false)}><Text style={styles.menuItem}>❌ Cerrar menú</Text></TouchableOpacity>
      </View>
    </Modal>
  );

  if (vista === 'detalle' && productoSeleccionado) {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>{productoSeleccionado.nombre}</Text>
        <Image source={{ uri: productoSeleccionado.imagen }} style={styles.imagen} />
        <Text style={styles.precio}>💲 {productoSeleccionado.precio.toFixed(2)}</Text>
        <Text style={styles.descripcion}>📝 Excelente calidad y estilo. Ideal para cualquier ocasión.</Text>
        <Text style={styles.subtitulo}>⭐ Reseñas</Text>
        <View style={styles.estrellas}>{Array(promedioEstrellas(productoSeleccionado.reseñas)).fill().map((_, i) => <Text key={i}>⭐</Text>)}</View>
        <FlatList data={productoSeleccionado.reseñas} keyExtractor={(_, i) => i.toString()} renderItem={({ item }) => <Text>⭐ {item} estrellas</Text>} />
        <TouchableOpacity style={styles.botonAgregar} onPress={() => agregarAlCarrito(productoSeleccionado)}><Text style={styles.botonTexto}>🛒 Agregar al carrito</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setVista('inicio')}><Text style={styles.enlaceVolver}>← Volver</Text></TouchableOpacity>
      </ScrollView>
    );
  }

  if (vista === 'carrito') {
    const total = carrito.reduce((sum, p) => sum + p.precio, 0);
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>🛒 Carrito</Text>
        {carrito.length === 0 ? <Text>No hay productos.</Text> :
          carrito.map((item, i) => (
            <View key={i} style={styles.card}>
              <Image source={{ uri: item.imagen }} style={styles.imagenPequena} />
              <Text>{item.nombre}</Text>
              <Text>💲 {item.precio.toFixed(2)}</Text>
              <TouchableOpacity onPress={() => eliminarDelCarrito(i)}><Text style={{ color: 'red' }}>Eliminar</Text></TouchableOpacity>
            </View>
          ))}
        <Text style={styles.precio}>Total: ${total.toFixed(2)}</Text>
        <TouchableOpacity style={[styles.botonAgregar, { backgroundColor: '#28a745' }]} onPress={() => setVista('pago')}><Text style={styles.botonTexto}>💳 Pagar</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setVista('inicio')}><Text style={styles.enlaceVolver}>← Volver</Text></TouchableOpacity>
      </ScrollView>
    );
  }

  if (vista === 'pago') {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>💳 Elegir método de pago</Text>
         <TouchableOpacity onPress={() => Alert.alert('✅ Compra realizada con pago en OXXO')}><Text style={styles.metodoPago}>🏪 OXXO</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('✅ Compra realizada con tarjeta')}><Text style={styles.metodoPago}>💳 Tarjeta</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('✅ Compra realizada con PayPal')}><Text style={styles.metodoPago}>🅿️ PayPal</Text></TouchableOpacity>
         <TouchableOpacity onPress={() => Alert.alert('✅ Compra realizada con Transferencia')}><Text style={styles.metodoPago}>💱 Transferencia</Text></
TouchableOpacity>
        
        <TouchableOpacity onPress={() => setVista('inicio')}><Text style={styles.enlaceVolver}>← Volver</Text></TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity onPress={() => setMenuVisible(true)}><Text style={{ fontSize: 24 }}>☰</Text></TouchableOpacity>
      <Text style={styles.titulo}>🔥 THE KING OF CAPS</Text>
      <TextInput style={styles.input} placeholder="🔍 Buscar gorra..." value={busqueda} onChangeText={setBusqueda} />

      <Text style={styles.subtitulo}>✨ Productos Destacados</Text>
      <FlatList data={destacados} horizontal keyExtractor={item => item.id} renderItem={({ item }) => (
        <TouchableOpacity style={[styles.card, { marginRight: 10, width: 200, height:300, }]} onPress={() => { setProductoSeleccionado(item); setVista('detalle'); }}>
          <Image source={{ uri: item.imagen }} style={styles.imagenPequena} />
          <Text style={{ fontWeight: 'bold' }}>{item.nombre}</Text>
        </TouchableOpacity>
      )} />

      <Text style={styles.subtitulo}>🛍️ Todos los productos</Text>
      <FlatList data={productosFiltrados} keyExtractor={(item) => item.id} renderItem={({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => { setProductoSeleccionado(item); setVista('detalle'); }}>
          <Image source={{ uri: item.imagen }} style={styles.imagenPequena} />
          <Text style={styles.nombre}>{item.nombre}</Text>
          <Text>💲 {item.precio.toFixed(2)}</Text>
        </TouchableOpacity>
      )} />

      <TouchableOpacity style={styles.botonCarrito} onPress={() => setVista('carrito')}>
        <Text style={styles.botonTexto}>🛒 Ver carrito ({carrito.length})</Text>
      </TouchableOpacity>

      <MenuLateral />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 40, backgroundColor: '#5a7d9a', flex: 1 },
  titulo: { fontSize: 26, fontWeight: 'bold', marginBottom: 10, textAlign: 'center',color:'white' },
  input: { backgroundColor: '#fff', padding: 10, borderRadius: 5, marginBottom: 10 },
  card: { backgroundColor: '#fff', padding: 10, marginBottom: 10, borderRadius: 10, elevation: 2 },
  imagenPequena: { width: '100%', height: 220, borderRadius: 5 },
  imagen: { width: '100%', height: 250, marginBottom: 10, borderRadius: 10 },
  nombre: { fontWeight: 'bold', fontSize: 16 , color:'#ecd9b0', fontFamily:'Lora'},
  precio: { fontSize: 16, marginVertical: 5 ,color:'#d4af87'},
  descripcion: { marginBottom: 10 },
  estrellas: { flexDirection: 'row', marginBottom: 10 },
  botonAgregar: { backgroundColor: '#007bff', padding: 12, borderRadius: 5, alignItems: 'center', marginVertical: 10 },
  botonTexto: { color: '#fff', fontWeight: 'bold' },
  botonCarrito: { position: 'absolute', bottom: 20, left: 20, right: 20, backgroundColor: '#007bff', padding: 15, borderRadius: 30, alignItems: 'center' },
  enlaceVolver: { textAlign: 'center', marginTop: 20, color: '#007bff' },
  metodoPago: { backgroundColor: '#007bff', color: '#fff', padding: 15, borderRadius: 10, textAlign: 'center', marginVertical: 10 },
  subtitulo: { fontSize: 18, fontWeight: 'bold', marginVertical: 5 },
  menuLateral: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#fff', padding: 20, justifyContent: 'center' },
  menuItem: { fontSize: 18, paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' }
});
