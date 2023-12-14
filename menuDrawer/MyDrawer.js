import { createDrawerNavigator} from '@react-navigation/drawer';

import Produtos from '../screens/Produtos';
import Categorias from '../screens/Categorias';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator();

export default function MyDrawer(){

    return (

        <Drawer.Navigator>

            <Drawer.Screen
                name="Produtos"
                component={Produtos}
                options={{
                    title:"Tela de produtos",
                    headerTitleStyle: {color: "transparent"}
                }}
            />

            <Drawer.Screen
                name="Categorias"
                component={Categorias}
                options={{
                    title:"Tela de categorias",
                    headerTitleStyle: {color: "transparent"}
                }}
            />

            <Drawer.Screen
                name="Início"
                component={Home}
                options={{
                    title:"Tela inicial",
                    headerTitleStyle: {color: "transparent"}
                }}
            />

        </Drawer.Navigator>
    );
};