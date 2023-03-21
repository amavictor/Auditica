

import styled from "styled-components"
import { Logo, LogoText } from "../../assets"

export const LoginBackground = styled.main`
    height: 100vh;
    background-color: var(--background-black);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

`
export const OnboardingLogo = styled(Logo)`
    width: 5rem;
    height: 5rem;
`
export const OnboardingLogoText = styled(LogoText)`
    width: 14rem;
    height: 14rem;
`
export const SpotifySignUpContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    img{
        width: 180px;
        height: 180px;
    }
    button{
        display: block;
    }
`