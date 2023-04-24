import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button } from 'react-native';

export default function Compte({navigation}) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
       <Text style={{marginTop: 40 ,marginBottom: 70, fontSize: 22, fontWeight: '600', textDecorationLine: 'underline' }}>Bienvenue sur la page de votre compte:</Text>
        <Text style={{ marginBottom: 15, fontSize: 16, textAlign: 'center', color: 'blue'}}>Vous vous trouvez sur la page des information de votre compte.</Text>
        <Text style={{ marginBottom: 60, fontSize: 16, textAlign: 'center', color: 'grey'}}> Voici les information que nous avons sur vous !</Text>
        <View style={{width: '100%'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderBottomColor: 'grey'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Pseudo</Text>
            <Text style={{fontSize: 16}}>Spiderman</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderBottomColor: 'grey'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Email</Text>
            <Text style={{fontSize: 16}}>peterparker@gmail.com</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderBottomColor: 'grey'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Mot de passe</Text>
            <Text style={{fontSize: 16}}>*******</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, marginBottom: 50}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Photo de profil</Text>
            <Image source={require('../assets/Spider.jpeg')} style={{ width: 50, height: 50 }} />
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Accueil")} style={styles.button}>
          <Text style={styles.buttonText}>Retour à l'accueil</Text>
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