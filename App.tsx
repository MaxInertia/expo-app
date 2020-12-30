import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import GlobalContexts from "./GlobalContexts";

import useCachedResources from './hooks/useCachedResources';
import {useColorSchemeContext} from "./hooks/useColorSchemeContext";
import Navigation from './navigation';

function App() {
	const isLoadingComplete = useCachedResources();
	const {value: colorScheme} = useColorSchemeContext()
	if (!isLoadingComplete) return null;

	return (
		<>
			<Navigation colorScheme={colorScheme}/>
			<StatusBar style={colorScheme === "dark" ? "light" : undefined}/>
		</>
	);
}

export default () => (
	<SafeAreaProvider>
		<GlobalContexts>
			<App/>
		</GlobalContexts>
	</SafeAreaProvider>
)
