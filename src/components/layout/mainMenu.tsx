import closeSvg from "assets/close.svg";
import { myContext } from "context";
import { Link } from "gatsby";
import { generateMenu } from "lib";
import React, { useContext } from "react";
import tw from "twin.macro";

import styled from "@emotion/styled";

// overflow-hidden overscroll-contain
const MainMenu = (): JSX.Element => {
  const PageWrapper = tw.div`absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white  h-screen`;
  const MenuWrapper = styled.div`
    ${tw`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900`};
    transition: opacity 0.25s ease;
    max-width: 100%;
    max-height: 100vh;
    opacity: 0.98;
  `;
  // TODO: add leading
  const MenuItem = styled.li`
    ${tw`hover:font-bold hover:text-yellow-500 hover:underline text-5xl leading-snug tracking-wide text-center text-white`};
  `;
  const Img = styled.img`
    ${tw`hover:opacity-100 opacity-75 cursor-pointer`}
    width: 2rem;
    height: 2rem;
    text-align: center;
  `;
  const CloseWrapper = styled.div`
    ${tw`cursor-pointer`}
    z-index: 800;
  `;
  // TODO: disable scroll
  const context = useContext(myContext);
  const menuItems = generateMenu();
  console.log(menuItems);
  const displayMenu = menuItems.map((menuItem, index) => {
    return (
      <MenuItem key={index}>
        <Link
          onClick={context.handleSelect}
          to={menuItem.link}
          key={index}
          activeClassName={"text-blue-300"}
        >
          {menuItem.name}
        </Link>
      </MenuItem>
    );
  });
  return context.menuVisible?.isVisible ? (
    <PageWrapper
      onKeyPress={(event) => {
        if (event.code === "Escape") context.closeMenu;
      }}
    >
      <CloseWrapper onClick={context.closeMenu}>
        <Img src={closeSvg} alt="close button" />
      </CloseWrapper>
      <MenuWrapper>
        <nav id="menu" role="fullscreen-menu">
          <div className="inner">
            <ul className="links pointer-events-auto">{displayMenu}</ul>
          </div>
        </nav>
      </MenuWrapper>
    </PageWrapper>
  ) : (
    <p></p>
  );
};

export default MainMenu;
