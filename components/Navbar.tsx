import { Box, Button, Flex, HStack, Stack, ChakraProvider } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  MenuTriggerItem,

} from "../components/ui/menu";
import { useNavBar } from "./context/navItemsContext";
import { AppLogo } from "./logo/applogo";
import { SocialNav } from "./socialnav/socialNav";
import { useMediaQuery } from '@chakra-ui/react'


interface NavItem {
  value: string;
  label: string;
  submenu?: NavItem[];
}

const Navbar = () => {
  
  const { items }: { items: NavItem[] } = useNavBar();
  const [isMobile] = useMediaQuery(['(max-width: 768px)'], {
    fallback:[false]
  });

  const renderMenuItems = (i: NavItem[]) => {
    return i.map((item) => {
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
    <HStack flex={{base: 1}} align={'center'} justify={'space-between'}>
      <Flex  >
          <AppLogo/>
      </Flex>
      {/* {isMobile?} */}
      {/*!Mobile */}
      <Flex justify={'center'} align={'center'} direction={'row'} gap={4} bg={"red.800"} minW={50} h={'50px'}>
        {items.map((item) => (
          <Box key={item.label} >
            {item.submenu ? (
              <MenuRoot >
                <MenuTrigger asChild>
                  <Button _hover={{bg:'none'}} border={'none'} variant="outline" size="sm">
                    {item.label}
                  </Button>
                </MenuTrigger>
                <MenuContent>
                  {item.submenu && renderMenuItems(item.submenu)}
                </MenuContent>
              </MenuRoot>
            ) : (
              <Button _hover={{bg:'none'}} border={'none'} variant={'outline'} size={'sm'}>
                {item.label} 
              </Button>
            )}
          </Box>
        ))}
      </Flex>
      {/*Mobile */}
      <Flex position={'static'}>
        <SocialNav/>
      </Flex>
    </HStack>

  );
};

export default Navbar;