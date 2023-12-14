import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './screens/Home';
import DrawerMenu from './menuDrawer/DrawerMenu';

const Stack = createNativeStackNavigator();
export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator InitialRouteName="Home">

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title:"Home"
          }}
        />

        <Stack.Screen
          name="DrawerMenu"
          component={DrawerMenu}
          options={{
            title:"",
            headerShown: false
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
};