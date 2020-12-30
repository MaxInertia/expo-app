import {useEffect} from "react";

export default function useLogOnChange(text: string, values: any[]) {
    useEffect(() => {
        console.log(text, ...values)
    }, [values])
}
