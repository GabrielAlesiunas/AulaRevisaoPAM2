import { Text, View } from "react-native-web";

import estilo from "./estilo";

export default function Contato() {
  return (
    <View style={estilo.Container}>
      <Text style={estilo.texto}> Página de Contato</Text>
    </View>
  );
}
