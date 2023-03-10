import { Path, Svg } from "react-native-svg"

export const SecondBubble = () => {
    return (
        <Svg
            width={30}
            height={30}
            viewBox="0 0 20 20"
            fill="none"
        >
            <Path
                d="M10 0c5.523 0 10 4.478 10 10s-4.477 10-10 10S0 15.522 0 10 4.477 0 10 0zm0 13.5a1 1 0 100 2 1 1 0 000-2zm0-8.75A2.75 2.75 0 007.25 7.5a.75.75 0 001.493.102L8.75 7.5a1.25 1.25 0 112.5 0c0 .539-.135.805-.645 1.332l-.135.138c-.878.878-1.22 1.447-1.22 2.53a.75.75 0 001.5 0c0-.539.135-.805.645-1.332l.135-.138c.878-.878 1.22-1.447 1.22-2.53A2.75 2.75 0 0010 4.75z"
                fill="#212121"
            />
        </Svg>
    )
}