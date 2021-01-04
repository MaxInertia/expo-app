import { Ionicons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import * as React from "react"

import Colors from "../constants/Colors"
import useColorScheme from "../hooks/useColorScheme"
import { TabOneNavigator, TabTwoNavigator } from "./ScreenNavigators"
import { BottomTabParamList } from "./types"

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
	const colorScheme = useColorScheme()
	return (
		<BottomTab.Navigator initialRouteName="TabOne" tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
			<BottomTab.Screen
				name="TabOne"
				component={TabOneNavigator}
				options={{
					tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
				}}
			/>
			<BottomTab.Screen
				name="TabTwo"
				component={TabTwoNavigator}
				options={{
					tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
				}}
			/>
		</BottomTab.Navigator>
	)
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
	// @ts-ignore <- DONT DO THIS... =)
	return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
}
