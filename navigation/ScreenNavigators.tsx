import { createStackNavigator } from "@react-navigation/stack"
import * as React from "react"
import TabOneScreen from "../screens/TabOneScreen"
import TabTwoScreen from "../screens/TabTwoScreen"
import { TabOneParamList, TabTwoParamList } from "./types"

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>()

// type TabOneScreenNavigationProp = StackNavigationProp<TabOneParamList, "TabOneScreen">

export function TabOneNavigator() {
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

export function TabTwoNavigator() {
	return (
		<TabTwoStack.Navigator mode={"card"}>
			<TabTwoStack.Screen
				name="TabTwoScreen"
				component={TabTwoScreen}
				options={{ headerTitle: "Tab Two Title" }}
			/>
		</TabTwoStack.Navigator>
	)
}
