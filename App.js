import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Inicio from "./components/Inicio/index";
import Produtos from "./components/Produtos/";
import Contato from "./components/Contato/";

const Menu = createBottomTabNavigator().Navigator;
const ItenMenu = createBottomTabNavigator().Screen;

export default function App() {
  return (
    <NavigationContainer>
      <Menu>
        <ItenMenu name="Início" component={ Inicio } />
        <ItenMenu name="Produtos" component={ Produtos }/>
        <ItenMenu name="Contato" component={ Contato }/>
      </Menu>
    </NavigationContainer>
  );
}
