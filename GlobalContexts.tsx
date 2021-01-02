import React, { PropsWithChildren, useState } from "react"
import { ColorSchemeName } from "react-native"
import useColorScheme from "./hooks/useColorScheme"
import { colorSchemeContext } from "./hooks/useColorSchemeContext"

type GlobalContextsProps = PropsWithChildren<{}>

export default function GlobalContexts(props: GlobalContextsProps) {
	const colorScheme = useColorScheme()
	const [colorSchemeOverride, setColorScheme] = useState<ColorSchemeName>(colorScheme)
	return (
		<colorSchemeContext.Provider value={{ set: setColorScheme, value: colorSchemeOverride }}>
			{props.children}
		</colorSchemeContext.Provider>
	)
}
