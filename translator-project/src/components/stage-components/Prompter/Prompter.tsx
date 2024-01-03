import Blurr from "../Blurr/Blurr"
import "./styles/PrompterStyle.css"
import SpansDisplay from "../SpansDisplay/SpansDisplay"

type PrompterProps = {
    words: string[]
}

export default function Prompter({ words }: PrompterProps) {
    return (
        <div className="prompter-container">
            <div className="prompter-blur">
                <Blurr />
                <SpansDisplay words={words} />
            </div>
        </div >
    )
}
