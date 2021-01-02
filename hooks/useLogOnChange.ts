import { useEffect } from "react"

export default function useLogOnChange(dependencies: unknown[], ...args: unknown[]) {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => console.log(...args), [...dependencies])
}
