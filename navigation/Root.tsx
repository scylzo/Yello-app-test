import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PAGES, RootTabParamList } from "types/Types";
import Main from "./Main";
import HomeButton from "components/HomeButton";



const RootTab = createBottomTabNavigator<RootTabParamList>();

const Root = () => {
    return (
        <NavigationContainer>
            <RootTab.Navigator>
                <RootTab.Screen
                    name={PAGES.Main}
                    component={Main}
                    options={({ navigation }) => ({
                        headerShown: false,
                        tabBarButton: () => (
                            <HomeButton
                                onPress={() => navigation.navigate(PAGES.Home)}
                            />
                        ),
                    })}
                />
            </RootTab.Navigator>
        </NavigationContainer>

    )
}


export default Root
