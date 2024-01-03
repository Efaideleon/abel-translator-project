import Blurr from "../Blurr/Blurr"
import "./styles/PrompterStyle.css"
import SpansDisplay from "../SpansDisplay/SpansDisplay"
import ErrorBoundary from "../../error-boundary/ErrorBoundary.tsx";
import TextScroller from "../TextScroller/TextScroller.tsx";

interface PrompterProps {
    words: string[]
}

export default function Prompter({ words }: PrompterProps) {
    return (
        <div className="prompter-container">
            <div className="prompter-blur">
                <Blurr />
                <ErrorBoundary>
                    <TextScroller>
                        <SpansDisplay words={words}/>
                    </TextScroller>
                </ErrorBoundary>
            </div>
        </div >
    )
}
