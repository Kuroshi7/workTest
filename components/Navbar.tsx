import { Box, Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  MenuTriggerItem,
} from "../components/ui/menu";
import { useNavBar } from "../context/navItemsContext";

const Navbar = () => {
 const {items}= useNavBar()

  const renderMenuItems = (i: any) => {
    return i.map((item: any) => {
      if (item.submenu) {
        return (
          <Box>
            <MenuRoot key={item.value} positioning={{ placement: "right-start", gutter: 2 }}>
              <MenuTriggerItem value={item.value}>{item.label}</MenuTriggerItem>
              <MenuContent>
                {renderMenuItems(item.submenu)}
              </MenuContent>
            </MenuRoot>
          </Box>

        );
      }
      return (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      );
    });
  };

  return (
    <Box style={{ backgroundColor: "#8b2121", width: "100%", height: "60px", display: "flex", alignItems: "center", padding: "0 16px" }}>
      <Button variant="outline" size="sm" onClick={() => window.location.href = '/about'}>
        About
      </Button>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm">
            Services
          </Button>
        </MenuTrigger>
        <MenuContent>
          {renderMenuItems(items)}
        </MenuContent>
      </MenuRoot>
    </Box>
  );
};

export default Navbar;
