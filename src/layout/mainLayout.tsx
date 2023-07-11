import React from "react";
import styled from "styled-components";
import { Categories } from "../components/categories";
import { SideMenu } from "../components/sideMenu";
import { TopStrams } from "../components/topStrams";
import { MainApp } from "../pages/mainApp/mainApp";
import { AudioPlayer } from "./../components/audioPlayer";

const MainLayoutContainer = styled.main`
  display: flex;
  flex: 1;
  height: 90vh;
`;
const SideMenuLayout = styled.div`
  flex: 0.1;
`;
const Children = styled.div`
  flex: 0.75;
`;
const AsideMainLyout = styled.aside`
  flex: 0.2;
  padding: 1rem;
`;

export const MainLayout = ({ children }: any) => {
  return (
    <>
      <MainLayoutContainer>
        <SideMenuLayout>
          <SideMenu />
        </SideMenuLayout>
        <Children>{children}</Children>
        <AsideMainLyout>
          <TopStrams />
          <Categories />
        </AsideMainLyout>
      </MainLayoutContainer>
      <AudioPlayer />
    </>
  );
};
