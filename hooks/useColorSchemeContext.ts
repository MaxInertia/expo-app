import {createContext, Dispatch, useContext} from "react";
import {ColorSchemeName} from "react-native";

export const colorSchemeContext = createContext<{set: Dispatch<ColorSchemeName>, value: ColorSchemeName} | null>(null)

export function useColorSchemeContext() {
    const colorScheme = useContext(colorSchemeContext)
    if(!colorScheme) {
        throw new Error("color scheme not available")
    }
    return colorScheme
}
