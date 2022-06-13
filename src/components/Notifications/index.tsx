import { Menu, MenuButton, MenuList, Button, Text } from "@chakra-ui/react";
import { MdNotificationsActive, MdNotificationsNone } from "@icons";

export function Notifications() {
  return (
    <Menu>
      <MenuButton
        minW="20%"
        variant="ghost"
        size="lg"
        as={Button}
        rightIcon={<MdNotificationsActive size={25} />}
      >
        <Text
          fontFamily="Indie Flower"
          fontSize="2xl"
          fontWeight="black"
          bgGradient="linear(to-r, #4CB8C4, #3CD3AD)"
          bgClip="text"
        >
          Notifications
        </Text>
      </MenuButton>
      <MenuList p={3}>
        <span>Teste notificação</span>
      </MenuList>
    </Menu>
  );
}
