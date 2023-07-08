import { useEffect, useState } from "react";
import {
  LoginBackground,
  OnboardingLogo,
  OnboardingLogoText,
  SpotifySignUpContainer,
} from "./login.styles";
import Spotify from "../../assets/spotify.png"
import { Button } from "../../ui_elements/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { AUTHTENTICATION_ENDPOINT, CLIENT_ID, RESPONSE_TYPE, SCOPES } from "../../utils";
import { REDIRECT_URI } from './../../utils';


const Login = () => {
  const location = useLocation()
  const [showLogo, setShowLogo] = useState(true);
  useEffect(() => {
    setTimeout(() => setShowLogo(false), 5000);
  }, [location]);

  const loginWithSpotify = () => {
    const scopeParam:string = SCOPES.join(" ")
    window.location.href=`${AUTHTENTICATION_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&show_dialog=true&scope=${scopeParam}`;
  }


  
  return (
    <LoginBackground>
      {showLogo ? (
        <>
          <OnboardingLogo className="icon logo" />
          <OnboardingLogoText className="icon logo-text" />
        </>
      ) : (
          <SpotifySignUpContainer>
            <img src={Spotify} alt={"Spotify_logo"} />
            <Button spotify onClick={loginWithSpotify}>Sign in with Spotify</Button>
            <h3>Audacity needs spotify to function, please sign in...</h3>
          </SpotifySignUpContainer>
      )}
    </LoginBackground>
  );
};

export default Login;
