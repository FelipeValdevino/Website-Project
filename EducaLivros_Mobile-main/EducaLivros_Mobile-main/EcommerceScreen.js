import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function EcommerceScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <View style={styles.navbar}>
          <Text
            style={styles.navItem}
            onPress={() => navigation.navigate('Home')}>
            Home
          </Text>
          <Text
            style={styles.navItem}
            onPress={() => navigation.navigate('Ecommerce')}>
            E-commerce
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Serviços</Text>
        <View style={styles.features}>
          <View style={styles.featureBox}>
            <Image source={require('./assets/icons/presentation.png')} style={styles.icon} />
            <Text style={styles.featureText}>
              Aulas particulares, cursos específicos, etc.
            </Text>
          </View>
          <View style={styles.featureBox}>
            <Image source={require('./assets/icons/tshirt.png')} style={styles.icon} />
            <Text style={styles.featureText}>
              Camisetas da escola, bonés, etc.
            </Text>
          </View>
          <View style={styles.featureBox}>
            <Image source={require('./assets/icons/red-carpet.png')} style={styles.icon} />
            <Text style={styles.featureText}>
              Venha participar de diversos eventos!
            </Text>
          </View>
        </View>
      </View>


      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Feedbacks</Text>
        <View style={styles.feedbacks}>
          <View style={styles.feedbackItem}>
            <Text style={styles.feedbackText}>
              As aulas do professor/tutor Vinícios são muito claras e dinâmicas. A EducaLivros é demais !!
            </Text>
            <Text style={styles.feedbackAuthor}>- Guilherme</Text>
          </View>
          <View style={styles.feedbackItem}>
            <Text style={styles.feedbackText}>
              Os produtos do EducaLivros são os melhores. O acabamento deste é impecável. Vocês são 10 !!
            </Text>
            <Text style={styles.feedbackAuthor}>- Ana</Text>
          </View>
          <View style={styles.feedbackItem}>
            <Text style={styles.feedbackText}>
              Com o EducaLivros, você pode ter uma biblioteca inteira na palma da sua mão.
            </Text>
            <Text style={styles.feedbackAuthor}>- Rute</Text>
          </View>
        </View>
      </View>

      {/* Nova seção de produtos */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Produtos mais comprados</Text>
        <View style={styles.productContainer}>
          {/* Produto 1 */}
          <TouchableOpacity
            style={styles.productItem}
            onPress={() => navigation.navigate('Detalhes do Produto')}>
            <Image
              source={require('./assets/livros_disponiveis/ToyStory4.jpg')}
              style={styles.productImage}
            />
            <Text style={styles.productName}>A Pequena Sereia</Text>
            <Text style={styles.productPrice}>R$20,00</Text>
          </TouchableOpacity>

          {/* Produto 2 */}
          <TouchableOpacity
            style={styles.productItem}
            onPress={() => navigation.navigate('Detalhes do Produto')}>
            <Image
              source={require('./assets/livros_disponiveis/A bela e a fera.jpg')}
              style={styles.productImage}
            />
            <Text style={styles.productName}>A Bela e a Fera</Text>
            <Text style={styles.productPrice}>R$20,00</Text>
          </TouchableOpacity>

          {/* Adicione mais produtos aqui */}
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
  section: {
    padding: 20,
    backgroundColor: '#2c2c2c',
  },
  sectionTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  features: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  featureBox: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  featureText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  feedbacks: {
    padding: 15,
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
  },
  feedbackItem: {
    marginBottom: 20,
  },
  feedbackText: {
    fontSize: 16,
    color: '#fff',
    fontStyle: 'italic',
  },
  feedbackAuthor: {
    fontSize: 14,
    color: '#aaa',
    marginTop: 5,
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  productItem: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3, // Sombra para destacar o produto
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    padding: 10,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '500',
    color: '#888',
    padding: 10,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
});