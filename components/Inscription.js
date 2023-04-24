import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import { TextInput } from 'react-native';

export default function Inscription({navigation}) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
       <Text style={{marginTop: 40 ,marginBottom: 70, fontSize: 22, fontWeight: '600', textDecorationLine: 'underline' }}>Bienvenue sur la page d'inscription:</Text>
        <Text style={{ marginBottom: 5, fontSize: 16, textAlign: 'center', color: 'blue'}}>Vous vous trouvez sur la page d'inscription dans les champs suivant veuillez entré votre pseudo, email et mot de passe.</Text>
        <Text style={{ marginBottom: 60, fontSize: 16, textAlign: 'center', color: 'red'}}> Attention, si vous n'appuyer pas sur le boutton s'inscrire votre compte ne sera pas crée ! </Text>
        <TextInput
            style={{ height: 40, width: 300, borderColor: 'black', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
            placeholder="Pseudo"
          />
        <TextInput
            style={{ height: 40, width: 300, borderColor: 'black', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
            placeholder="Email"
          />
          <TextInput
            style={{ height: 40, width: 300, borderColor: 'black', borderWidth: 1, marginBottom: 50 ,paddingHorizontal: 10 }}
            placeholder="Mot de passe"
          />
        <TouchableOpacity onPress={() => navigation.navigate("Accueil")} style={styles.button }>
          <Text style={styles.buttonText}>S'inscrire !</Text>
        </TouchableOpacity>
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