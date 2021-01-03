import { Ionicons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createStackNavigator } from "@react-navigation/stack"
import * as React from "react"

import Colors from "../constants/Colors"
import useColorScheme from "../hooks/useColorScheme"
import TabOneScreen from "../screens/TabOneScreen"
import TabTwoScreen from "../screens/TabTwoScreen"
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "./types"

const Drawer = createDrawerNavigator<Omit<BottomTabParamList, "Other">>()

export default function DrawerNavigator() {
	const colorScheme = useColorScheme()

	return (
		<Drawer.Navigator initialRouteName="TabOne" drawerType={"slide"}>
			<Drawer.Screen
				name="TabOne"
				component={TabOneNavigator}
				// options={{}}
			/>
			<Drawer.Screen
				name="TabTwo"
				component={TabTwoNavigator}
				// options={{}}
			/>
		</Drawer.Navigator>
	)
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
	// @ts-ignore <- DONT DO THIS... =)
	return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>()

function TabOneNavigator() {
	return (
		<TabOneStack.Navigator>
			<TabOneStack.Screen
				name="TabOneScreen"
				component={TabOneScreen}
				options={{ headerTitle: "Tab One Title" }}
			/>
		</TabOneStack.Navigator>
	)
}

const TabTwoStack = createStackNavigator<TabTwoParamList>()

function TabTwoNavigator() {
	return (
		<TabTwoStack.Navigator>
			<TabTwoStack.Screen
				name="TabTwoScreen"
				component={TabTwoScreen}
				options={{ headerTitle: "Tab Two Title" }}
			/>
		</TabTwoStack.Navigator>
	)
}
