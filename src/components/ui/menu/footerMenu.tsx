import { myContext } from "context";
import { Link } from "gatsby";
import { generateMenu } from "lib";
import React, { useContext } from "react";
import tw from "twin.macro";

const MenuWrapper = tw.nav`flex flex-row justify-between w-full`;
const MenuItem = tw.span`hover:text-white hover:underline text-xs xl:text-xl lg:text-xl md:text-base sm:text-xs text-center cursor-pointer`;

export const FooterMenu = (): JSX.Element => {
  const context = useContext(myContext);
  const menuItems = generateMenu();
  const displayMenu = menuItems.map((menuItem, index) => {
    return menuItem.isAtFooter ? (
      <MenuItem key={index}>
        <Link
          onClick={context.handleSelect}
          to={menuItem.link}
          key={index}
          activeClassName={"text-white"}
        >
          {menuItem.name}
        </Link>
      </MenuItem>
    ) : null;
  });
  return (
    <MenuWrapper id="footer_menu" role="navigation">
      {displayMenu}
    </MenuWrapper>
  );
};
