import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { useEffect, useState } from "react"
import * as React from "react"
import { ColorSchemeName } from "react-native"
import * as Device from "expo-device"

import NotFoundScreen from "../screens/NotFoundScreen"
import DrawerNavigator from "./DrawerNavigator"
import { RootStackParamList } from "./types"
import BottomTabNavigator from "./BottomTabNavigator"
import LinkingConfiguration from "./LinkingConfiguration"

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
	return (
		<NavigationContainer linking={LinkingConfiguration} theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			<RootNavigator />
		</NavigationContainer>
	)
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>()

function RootNavigator() {
	const [deviceType, setDeviceType] = useState<Device.DeviceType>()
	useEffect(() => {
		Device.getDeviceTypeAsync().then((deviceType: Device.DeviceType) => setDeviceType(deviceType))
	}, [])
	if (!deviceType) return null

	const onPhoneOrTablet = deviceType === Device.DeviceType.PHONE || deviceType === Device.DeviceType.TABLET
	const StackScreen = onPhoneOrTablet ? (
		<Stack.Screen name="Root" component={BottomTabNavigator} />
	) : (
		<Stack.Screen name="Root" component={DrawerNavigator} />
	)

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Root"}>
			{StackScreen}
			<Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
		</Stack.Navigator>
	)
}
