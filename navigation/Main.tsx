import { createStackNavigator } from '@react-navigation/stack'
import DetailScreen from 'screens/DetailScreen';
import HomeScreen from 'screens/HomeScreen';
import { MainParamList, PAGES } from 'types/Types';
const MainStack = createStackNavigator<MainParamList>();

const Main = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name={PAGES.Home} component={HomeScreen} options={{
                headerShown: false
            }} />
            <MainStack.Screen
                name={PAGES.Detail}
                component={DetailScreen}
                options={{ headerShown: false }}
            />
        </MainStack.Navigator>


    )
}

export default Main;
