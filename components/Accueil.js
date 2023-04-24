import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button } from 'react-native';

export default function Accueil({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', justifyContent: 'flex-start' }}>
        <Text style={{marginTop: 40 ,marginBottom: 70, fontSize: 22, fontWeight: '600', textDecorationLine: 'underline' }}>Bienvenue sur la page d'accueil:</Text>
        <Text style={{ marginBottom: 60, fontSize: 16, textAlign: 'center', color: 'blue'}}>Voici les autres page que vous pourrez trouver sur cette application.</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Inscription")} style={styles.button}>
          <Text style={styles.buttonText}>Inscription</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Connexion")} style={styles.button}>
          <Text style={styles.buttonText}>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Compte")} style={styles.button}>
          <Text style={styles.buttonText}>Mon compte</Text>
        </TouchableOpacity>
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
    button: {
      backgroundColor: 'blue',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginBottom: 15,
      marginTop: 3,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    }
  });