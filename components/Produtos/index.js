import { Text, View } from "react-native-web";

import estilo from "./estilo";

export default function Produtos() {
  return (
    <View style={estilo.Container}>
      <Text style={estilo.texto}> Página de Produtos</Text>
    </View>
  );
}
