import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styleResult";


export default function ResultImc(props) {
  const [reset, setReset] = useState(false);

  let message;
  let color;
  let belowWeightColor = "#18FFB5";
  let normalWeightColor = "#20FF23";
  let aboveWeightColor = "#F2661F";
  let obeseColor = "#F44336";

  if (reset) {
    message = "";
    color = "black";
  } else if (props.resultImc < 19.5) {
    message = "Abaixo do peso";
    color = belowWeightColor;
  } else if (props.resultImc >= 18.5 && props.resultImc < 25) {
    message = "Peso normal";
    color = normalWeightColor;
  } else if (props.resultImc >= 25 && props.resultImc < 30) {
    message = "Acima do peso";
    color = aboveWeightColor;
  } else {
    message = "Obeso";
    color = obeseColor;
  }

  const handleReset = () => {
    setReset(true);
  };

  React.useEffect(() => {
    setReset(false);
  }, [props.resultImc]);

  return (
    <View>
      <View style={styles.view}>
        <Text style={styles.textTitle}>{props.messageResultImc}</Text>
        <Text style={styles.text}> {props.resultImc}</Text>
      </View>
      {!reset && props.resultImc !== null && (
        <View style={styles.viewCenter}>
          <Text style={[styles.text, { color: color }]}>{message}</Text>
        </View>
      )}
    </View>
  );
}