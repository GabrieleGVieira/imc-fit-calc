import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import ResultImc from "./resultImc/resultImc"
import styles from "./formStyles";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState(null);
  const [resultImc, setResultImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [idealWeight, setIdealWeight] = useState(null);

  const imcCalculator = () => {
    if (height && weight) {
      const heightMeters = parseFloat(height.replace(",", "."));
      const weightKg = parseFloat(weight.replace("kg", ""));
      const imc = weightKg / (heightMeters * heightMeters);
      setResultImc(imc.toFixed(2));
      setMessageImc("Seu IMC é: ");
    } else {
      setResultImc(null);
      setMessageImc("Por favor, preencha a altura e o peso.");
      setIdealWeight(null);
    }
  };

const hadleReset = () => {
    setHeight(null);
    setWeight(null);
    setMessageImc(null);
    setResultImc(null);
  };

  return (
    <View stye={styles.formContext}>
      <View>
        <View style={styles.formTextHeight}>
          <Text style={styles.formText}> Altura</Text>
        </View>
        <View style={styles.screenWidth}>
          <TextInput
            style={styles.input}
            placeholder="Ex.: 1.57"
            keyboardType="numeric"
            onChangeText={setHeight}
            value={height}
          />
        </View>
        <View>
          <View style={styles.formTextHeight}>
            <Text style={styles.formText}> Peso </Text>
          </View>
        </View>
        <View style={styles.screenWidth}>
          <TextInput
            style={styles.input}
            placeholder="Ex.: 63"
            keyboardType="numeric"
            onChangeText={setWeight}
            value={weight}
          />
        </View>

        {resultImc === null && (
          <TouchableOpacity
            style={[styles.button, styles.buttonContainer]}
            onPress={imcCalculator}
          >
            <Text style={styles.buttonText}>Calcular IMC</Text>
          </TouchableOpacity>
        )}
      </View>
      <ResultImc messageImc={messageImc} resultImc={resultImc} />
      {resultImc !== null && (
        <TouchableOpacity
          style={[styles.button, styles.buttonContainer]}
          onPress={hadleReset}
        >
          <Text style={styles.buttonText}> Reiniciar </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}