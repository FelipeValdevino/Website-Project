import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <View style={styles.navbar}>
          <Text style={styles.navItem}>Home</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Ecommerce')}>
            <Text style={styles.navItem}>E-commerce</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.headerContent}>
        <View style={styles.headerText}>
          <Text style={styles.title}>Segue o link para a aula online!</Text>
          <Text style={styles.description}>
            Descubra a magia das palavras e embarque em uma jornada única com os nossos livros e aulas online.
            Adquira já o seu exemplar e deixe-se envolver por histórias que inspiram, emocionam e transformam.
            Não perca tempo, mergulhe nesse universo de conhecimento e imaginação!
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Ecommerce')}>
            <Text style={styles.buttonText}>Veja Mais →</Text>
          </TouchableOpacity>
        </View>
        <Image source={require('./assets/aula_ead.png')} style={styles.headerImage} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Produtos Disponíveis</Text>

        <View style={styles.products}>
          <View style={styles.productRow}>
            <View style={styles.product}>
              <Image source={require('./assets/livros_disponiveis/ToyStory4.jpg')} style={styles.productImage} />
              <Text style={styles.productName}>A Pequena Sereia</Text>
              <Text style={styles.rate}>★★★★☆</Text>
              <Text style={styles.productPrice}>R$20,00</Text>
            </View>

            <View style={styles.product}>
              <Image source={require('./assets/livros_disponiveis/A bela e a fera.jpg')} style={styles.productImage} />
              <Text style={styles.productName}>A Bela e a Fera</Text>
              <Text style={styles.rate}>★★★★☆</Text>
              <Text style={styles.productPrice}>R$20,00</Text>
            </View>
          </View>

          <View style={styles.productRow}>
            <View style={styles.product}>
              <Image source={require('./assets/livros_disponiveis/Guardioes da galaxia.jpg')} style={styles.productImage} />
              <Text style={styles.productName}>Guardiões da Galáxia</Text>
              <Text style={styles.rate}>★★★★☆</Text>
              <Text style={styles.productPrice}>R$20,00</Text>
            </View>

            <View style={styles.product}>
              <Image source={require('./assets/livros_disponiveis/Homem Aranha.jpg')} style={styles.productImage} />
              <Text style={styles.productName}>Homem Aranha</Text>
              <Text style={styles.rate}>★★★★☆</Text>
              <Text style={styles.productPrice}>R$20,00</Text>
            </View>  
          </View>

          {/* Repita para mais produtos */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#000',
  },
  logo: {
    width: 100,
    height: 100,
  },
  navbar: {
    flexDirection: 'row',
  },
  navItem: {
    color: '#fff',
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  headerContent: {
    padding: 20,
    backgroundColor: 'rgb(17,17,78)',
    flexDirection: 'row',
  },
  headerText: {
    flex: 1,
    paddingRight: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  description: {
    color: '#d0cbcb',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'rgb(40, 40, 156)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
  },
  headerImage: {
    width: '50%',
    height: 200,
  },
  section: {
    padding: 20,
    backgroundColor: '#2c2c2c',
  },
  sectionTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  products: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  product: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  productName: {
    fontWeight: '600',
    marginTop: 10,
  },
  rate: {
    color: '#0084ff',
  },
  productPrice: {
    fontWeight: '600',
  },

  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerImage: {
    width: '50%',
    height: 200,
    alignSelf: 'center',
    borderWidth: 1, // Adiciona um contorno à imagem
    borderColor: '#fff', // Cor do contorno
    borderRadius: 10, // Borda arredondada
    shadowColor: '#000', // Cor da sombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5, // Opacidade da sombra
    shadowRadius: 3, // Raio da sombra
    elevation: 5, // Elevação para Android
  },
});

