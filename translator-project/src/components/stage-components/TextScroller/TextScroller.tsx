import {ReactNode} from "react"

type TextScrollerProps = {
    children: ReactNode
}

function TextScroller({children}: TextScrollerProps){
    return <>{children}</>
}

export default TextScroller