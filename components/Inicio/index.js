import { Text, View } from "react-native-web";

import estilo from "./estilo";

export default function Inicio() {
  return (
    <View style={estilo.Container}>
      <Text style={estilo.texto}> Página de Início</Text>
    </View>
  );
}
