import {useEffect, useRef} from "react"
import { useGetBreaklines, useUpdateBreaklines } from '../contexts/ContextAccessFunctions.ts'
import {PROMPTER_WIDTH} from "../constants/Constants.ts";
const calculateBreaklineBooleanState = (width: number, widthsSum: React.MutableRefObject<number>, id: number) => {
    if (id === 0) {
        widthsSum.current = 0
    }
    widthsSum.current += width
    return widthsSum.current > PROMPTER_WIDTH ? !!(widthsSum.current = width) : false;
}

const useGetBreaklineBoolById = (spanRef: React.MutableRefObject<HTMLSpanElement | null>, spansWidthSum: React.MutableRefObject<number>, spanId: number) => {
    const breaklines = useGetBreaklines()
    const updateBreaklines = useUpdateBreaklines()
    const idRef = useRef(spanId)
    
    useEffect(() => {
        if (spanRef.current && spanRef.current.offsetWidth !== undefined){
            updateBreaklines(([...prevBreaklines]) => {
                return prevBreaklines.map((flag, index) => {
                    return index === idRef.current ? calculateBreaklineBooleanState(spanRef?.current?.offsetWidth || 0, spansWidthSum, idRef.current) : flag
                })
            })
        } else {
            console.error("Error: sanRef is not available or offsetWidth is undefined")
        }
    }, [spanRef, spansWidthSum, updateBreaklines])
    return breaklines[idRef.current] 
}

export default useGetBreaklineBoolById
