import Blurr from "../Blurr/Blurr"
import "./styles/PrompterStyle.css"
import SpansDisplay from "../SpansDisplay/SpansDisplay"
import ErrorBoundary from "../../error-boundary/ErrorBoundary.tsx";

interface PrompterProps {
    words: string[]
}

export default function Prompter({ words }: PrompterProps) {
    return (
        <div className="prompter-container">
            <div className="prompter-blur">
                <Blurr />
                <ErrorBoundary>
                    <SpansDisplay words={words}/>
                </ErrorBoundary>
            </div>
        </div >
    )
}
