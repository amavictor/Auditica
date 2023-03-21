import React from "react";
import styled from "styled-components";
import {
  Browse,
  Favourite,
  Home, Library,
  Logo,
  LogoText
} from "../assets";
import { Button } from "../ui_elements/Button";

const NavigatonBar = styled.nav`
  width: 100%;
  height: 100%;
  background-color: var(--nav-black);
  position: sticky;
  top: 0;
  left: 0;
  padding: 1.2rem;

  hr {
    width: 100%;
    color: white;
    opacity: 0.1;
    margin: 5%;
  }
`;
const LogoContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  margin-bottom: 1rem;
  padding-left: 0.7rem;

  .sidebar_icon {
    width: 25px;
    height: 25px;
  }

  .sidebar_icon_text {
    width: 100px;
  }
`;
const UtilityButtonContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const SideMenu = () => {
  return (
    <NavigatonBar>
      <LogoContainer>
        <Logo className="sidebar_icon" />
        <LogoText className="sidebar_icon_text" />
      </LogoContainer>
      <UtilityButtonContainer>
        <Button>
          <Home className="icons" /> Home
        </Button>
        <Button>
          <Browse className="icons" /> Browse
        </Button>
        <Button>
          <Favourite className="icons" /> Favorite
        </Button>
        <Button>
          <Library className="icons" /> Library
        </Button>
      </UtilityButtonContainer>

      <hr />

      <UtilityButtonContainer>
        <Button>Create playlist</Button>
        <Button>Liked songs</Button>
      </UtilityButtonContainer>
    </NavigatonBar>
  );
};
