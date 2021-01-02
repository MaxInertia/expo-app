import { useEffect } from "react"

export default function useLogOnChange(dependencies: any[], ...args: any) {
	useEffect(() => console.log(...args), [dependencies])
}
