import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import BooksList from '../screens/BooksList';

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={BooksList}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}