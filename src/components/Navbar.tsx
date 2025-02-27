import { Accordion, Box, Button, DrawerTitle, Flex, HStack, Stack } from "@chakra-ui/react";
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

import { DrawerBackdrop, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerHeader, DrawerRoot, DrawerTrigger } from "./ui/drawer";
import { AlignJustify } from "lucide-react";
import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot } from "./ui/accordion";


interface NavItem {
  value: string;
  label: string;
  submenu?: NavItem[];
}

const Navbar = () => {
  const { items }: { items: NavItem[] } = useNavBar();
  const [isMobile] = useMediaQuery(['(max-width: 820px)'], {
    fallback: [false]
  });
  const [isMedium] = useMediaQuery(['(max-width: 600px)'], {
    fallback: [false]
  });

  const renderMenuItems = (i: NavItem[]) => {
    return i.map((item,index) => {
      if (item.submenu) {
        return (
          <Box key={index}>
            <MenuRoot positioning={{ placement: "right-start", gutter: 2 }}>
              <MenuTriggerItem value={item.value}>{item.label}</MenuTriggerItem>
              <MenuContent>{renderMenuItems(item.submenu)}</MenuContent>
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

  const renderAccordionItem = (i: NavItem[]) =>{
    return i.map((item, index)=>{
      if(item.submenu){
        return (
          <Box key={index}>
            <AccordionRoot multiple defaultValue={['b']}>
              <AccordionItemTrigger value={item.value}> {item.label}</AccordionItemTrigger>
              <AccordionItemContent></AccordionItemContent>
            </AccordionRoot>
          </Box>
        );
      }
      return(
        <AccordionItem key={index} value={item.value}>{item.label}</AccordionItem>
      );
    });
  };

  return (
    <HStack
      flex="1"
      align="center"
      justify="space-between"
      wrap="wrap"
      p={4}
    >
      <Flex>
        <AppLogo />
      </Flex>

      {!isMobile && (
        <Flex
          justify="center"
          align="center"
          gap={4}
          bg="red.800"
          minW="150px"
          maxW="80%"
          h="50px"
          wrap="wrap"
        >
          {items.map((item, index) => (
            <Box key={index}>
              {item.submenu ? (
                <MenuRoot>
                  <MenuTrigger asChild>
                    <Button
                      _hover={{ bg: "none" }}
                      border="none"
                      variant="outline"
                      size="sm"
                      flexShrink={0}
                    >
                      {item.label}
                    </Button>
                  </MenuTrigger>
                  <MenuContent>{renderMenuItems(item.submenu)}</MenuContent>
                </MenuRoot>
              ) : (
                <Button
                  _hover={{ bg: "none" }}
                  border="none"
                  variant="outline"
                  size="sm"
                  flexShrink={0}
                >
                  {item.label}
                </Button>
              )}
            </Box>
          ))}
        </Flex>
      )}

      {isMobile && (
        <DrawerRoot placement="start">
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            <Button ml='auto'>
              <AlignJustify />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>MENU</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
              <Stack p={4}>
                {items.map((item, index) => (
                  <Box key={index}>
                    {item.submenu ? (
                      <AccordionRoot collapsible defaultValue={['b']} >
                        <AccordionItem value={item.value}>
                          <AccordionItemTrigger>
                            {item.label}
                          </AccordionItemTrigger>
                            <AccordionItemContent p={4}>{renderAccordionItem(item.submenu)}</AccordionItemContent>
                        </AccordionItem>
                      </AccordionRoot>
                    ) : (
                      <Button variant="outline" size="sm" w="full">
                        {item.label}
                      </Button>
                    )}
                  </Box>
                ))}
              </Stack>
              {isMedium && (
                <Flex>
                  <SocialNav />
                </Flex>
              )}
            </DrawerBody>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
      )}
      {!isMedium && (
        <Flex>
          <SocialNav />
        </Flex>
      )}

    </HStack>
  );
};
export default Navbar;