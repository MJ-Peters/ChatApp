import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ChatsScreen from "../screens/ChatsScreen"
import NotImplementedScreen from "../screens/NotImplementedScreen"
import { Ionicons, Entypo } from '@expo/vector-icons'
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
    <Tab.Navigator
        initialRouteName="Chats"
        screenOptions={{
            activeTintColor: "royalblue", 
            tabBarStyle: { backgroundColor: "whitesmoke" },
            headerStyle: { backgroundColor: "whitesmoke" }
        }}
    >
        <Tab.Screen
            name="Status"
            component={NotImplementedScreen}
            options={{
                headerTitleAlign: "center",
                tabBarIcon: ({ color, size}) => (
                    <Ionicons name="apps-outline" size={size} color={color} />
                )
            }}
        />
        <Tab.Screen
            name="Calls"
            component={NotImplementedScreen}
            options={{
                headerTitleAlign: "center",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="call-outline" size={size} color={color} />
                )
            }}
        />
        <Tab.Screen
            name="Camera"
            component={NotImplementedScreen}
            options={{
                headerTitleAlign: "center",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="camera-outline" size={size} color={color} />
                )
            }}
        />
        <Tab.Screen
            name="Chats"
            component={ChatsScreen}
            options={{
                headerTitleAlign: "center",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="chatbubbles-outline" size={size} color={color} />
                ),
                headerRight: () => (
                    <Ionicons
                        name="create-outline"
                        size={24}
                        color={"royalblue"}
                        style={{marginRight: 15}}
                    />
                )
            }}
        />
        <Tab.Screen
            name="Settings"
            component={NotImplementedScreen}
            options={{
                headerTitleAlign: "center",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="settings-outline" size={size} color={color} />
                )
            }}
        />
    </Tab.Navigator>
    )
}

export default MainTabNavigator