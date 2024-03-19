import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React from 'react'

interface Login {
  username: string,
  password: string
}

export default function Login() {

  const [username, usernameText] = React.useState('');
  const [password, passwordText] = React.useState('');

  const printUser = () => {
    console.log(`Usuário: ${username}`);
    console.log(`Senha: ${password}`);
  };

  return (
    <View>
      <Text style={styles.h1}>Login</Text>
      <TextInput onChangeText={usernameText}
      value={username}
      style= {styles.input}
      placeholder='Usuario'>
      </TextInput>
      <TextInput onChangeText={passwordText}
      value={password}
      style={styles.input}
      secureTextEntry={true} 
      placeholder='Senha'
      ></TextInput>
      <Button title='Confirma'
      onPress={printUser}/>
    </View>
  )
}

const styles = StyleSheet.create({
  h1:{
    fontSize: 24,
    textAlign: "center",
    color: "blue"
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});