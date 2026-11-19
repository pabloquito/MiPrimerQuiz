import { useState } from 'react';

import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function App() {

  const [resultado, setResultado] = useState(
    'Selecciona una respuesta'
  );

  function revisarRespuesta(respuesta : string) {

    if (respuesta === 'Java') {

      setResultado(
        '¡Correcto! Java es un lenguaje de programación.'
      );

    } else {

      setResultado(
        'Respuesta incorrecta. Inténtalo nuevamente.'
      );

    }
  }

  return (
    <View style={styles.contenedor}>

      <Text style={styles.titulo}>
        MI PRIMER QUIZ
      </Text>

      <Text style={styles.pregunta}>
        ¿Cuál de estos es un lenguaje de programación?
      </Text>

      <Button
        title="HTML"
        onPress={() => revisarRespuesta('HTML')}
      />

      <Button
        title="Java"
        onPress={() => revisarRespuesta('Java')}
      />

      <Button
        title="Windows"
        onPress={() => revisarRespuesta('Windows')}
      />

      <Text style={styles.resultado}>
        Resultado: {resultado}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  contenedor: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#eef4ff'
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25
  },

  pregunta: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20
  },

  resultado: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 25,
    fontWeight: 'bold'
  }

});