import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';
export default function App() {
  const data = [
    {
      id: 1,
      title: "Atardecer Surf",
      imageUrl: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/0E0F/production/_129699530_gettyimages-586626621.jpg.webp',
      descripcion: 'Imagen de una persona sufrando con el atardecer de fondo.'
    },
    {
      id: 2,
      title: "Tubo Surf",
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtQ9T1-ENZbi91V9AI5_Y09hpATdH3lLlKw&s',
      descripcion: 'Imagen de una persona sufrando realizando un tubo.'
    },
    {
      id: 3,
      title: "Aereo Surf",
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfPfAjI8I3Oqu4hYa8MJH0PK3Q15OHfFViGg&s',
      descripcion: 'Imagen de una persona sufrando y realizando un aereo.'
    },
    {
      id: 4,
      title: "Atardecer Surf",
      imageUrl: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/0E0F/production/_129699530_gettyimages-586626621.jpg.webp',
      descripcion: 'Imagen de una persona sufrando con el atardecer de fondo.'
    },
    {
      id: 5,
      title: "Tubo Surf",
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtQ9T1-ENZbi91V9AI5_Y09hpATdH3lLlKw&s',
      descripcion: 'Imagen de una persona sufrando realizando un tubo.'
    },
    {
      id: 6,
      title: "Aereo Surf",
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfPfAjI8I3Oqu4hYa8MJH0PK3Q15OHfFViGg&s',
      descripcion: 'Imagen de una persona sufrando y realizando un aereo.'
    },
    {
      id: 7,
      title: "Atardecer Surf",
      imageUrl: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/0E0F/production/_129699530_gettyimages-586626621.jpg.webp',
      descripcion: 'Imagen de una persona sufrando con el atardecer de fondo.'
    },
    {
      id: 8,
      title: "Tubo Surf",
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtQ9T1-ENZbi91V9AI5_Y09hpATdH3lLlKw&s',
      descripcion: 'Imagen de una persona sufrando realizando un tubo.'
    },
    {
      id: 9,
      title: "Aereo Surf",
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfPfAjI8I3Oqu4hYa8MJH0PK3Q15OHfFViGg&s',
      descripcion: 'Imagen de una persona sufrando y realizando un aereo.'
    },
  ];
  
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={ ( {item} ) =>( 
        <View style={[styles.card, styles.cardshadow, styles.shadow]}>
          <Image style={styles.image} source={{uri: item.imageUrl}}/>
          <View style={styles.subcard}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.descripText}>{item.descripcion}</Text>
          </View>
        </View>
       )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 20,
    margin: 10,
  },
  text:{
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  descripText: {
    color: '#fff',
    fontSize: 8,
    margin: 4,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderColor: '#000',
    borderRadius: 15,
    margin: 5,
    borderWidth: 1,
  },
  cardshadow: {
    margin: 10,
    shadowColor: '#000',
    shadowOffset:{
      width: 6,
      height: 6
    },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    borderRadius: 15,
  },
  shadow: {
    elevation: 10,
    borderRadius: 15,    
  },
  subcard: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    borderColor: '#000',
    borderRadius: 10,
    width: 250,
    marginBottom: 10,
  },
});
