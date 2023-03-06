import { ClipPath, Defs, Path, Svg } from "react-native-svg"

export const ComeBackAuthIcon = () => {
    return (
        <Svg width={48} height={48} viewBox="0 0 24 24" fill="none">
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" d="M0 0h24v24H0z" />
                </ClipPath>
            </Defs>
            <Path
                d="M20.5 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20.5v-2z"
                fill="#8af3cb"
                clipPath="url(#prefix__clip0)"
            />
        </Svg>
    )
}