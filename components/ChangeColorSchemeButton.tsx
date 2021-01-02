import * as React from "react"
import { Button } from "react-native"
import { useColorSchemeContext } from "../hooks/useColorSchemeContext"
import useLogOnChange from "../hooks/useLogOnChange"

export default function ChangeColorSchemeButton() {
	const { set, value } = useColorSchemeContext()
	return <Button title={`dont use ${value}`} onPress={() => set(value === "light" ? "dark" : "light")} />
}
