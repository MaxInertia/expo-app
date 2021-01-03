import { StackScreenProps } from "@react-navigation/stack"

export type RootStackParamList = {
	Root: undefined
	Drawer: undefined
	NotFound: undefined
	// MUITop: undefined
	MUIBottom: undefined
}

type RootProps = StackScreenProps<RootStackParamList, "Root">

export type BottomTabParamList = {
	TabOne: undefined
	TabTwo: undefined
	Other: undefined
}

export type TabOneParamList = {
	TabOneScreen: undefined
}

export type TabTwoParamList = {
	TabTwoScreen: undefined
}
