import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useRef } from 'react';

export default function App() {

  const [result, setResult] = useState('');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const initialFocus = useRef(null);

  const calculate = operator => {
    const [number1, number2] = [Number(num1), Number(num2)];

    switch (operator) {
      case '+':
        setResult(number1 + number2);
        break;

      case '-':
        setResult(number1 - number2);
        break;
    }
    setNum1('');
    setNum2('');
    initialFocus.current.focus();
  }


  return (

    <View style={styles.container}>

      <Text style={styles.text}>Result: {result} </Text>

      <TextInput style={styles.textbox} ref={initialFocus}
        keyboardType='numeric'
        onChangeText={text => setNum1(text)}
        value={num1}>
      </TextInput>
      <TextInput style={styles.textbox}
        keyboardType='numeric'
        onChangeText={text => setNum2(text)}
        value={num2}>
      </TextInput>
      <View style={styles.operators}>

        <TouchableOpacity style={styles.TouchableOpacity} title="+" onPress={() => calculate("+")}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity} title="-" onPress={() => calculate('-')}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />

    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',

  },

  textbox: {

    borderColor: 'black',
    borderWidth: 3,
    padding: 10,
    width: '50%',
    margin: 5,
    backgroundColor: 'lightblue',
    fontSize: 20,
    fontWeight: 'bold'


  },

  operators: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',

  },
  TouchableOpacity: {
    width: '20%',
    height: '35%',
    borderColor: 'black',
    borderWidth: 3,
    margin: 30,
    borderRadius: 50,
    backgroundColor: 'yellow',
    textAlign: 'center',
    justifyContent: 'center'


  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35

  }
});