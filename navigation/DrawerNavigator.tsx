import { createDrawerNavigator } from "@react-navigation/drawer"
import * as React from "react"

import { TabOneNavigator, TabTwoNavigator } from "./ScreenNavigators"
import { BottomTabParamList } from "./types"

const Drawer = createDrawerNavigator<Omit<BottomTabParamList, "Other">>()

export default function DrawerNavigator() {
	return (
		<Drawer.Navigator initialRouteName="TabOne" drawerType={"permanent"}>
			<Drawer.Screen name="TabOne" component={TabOneNavigator} />
			<Drawer.Screen name="TabTwo" component={TabTwoNavigator} />
		</Drawer.Navigator>
	)
}
