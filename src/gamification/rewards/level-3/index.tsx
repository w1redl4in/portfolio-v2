import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Icon,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import Logo2 from "@lotties/logo2.json";
import { useEffect, useMemo, useState } from "react";
import { useResponsive } from "@hooks/use-responsive";
import { Lottie } from "@components/Lottie";
import { useAppSelector } from "@redux/hooks";
import { selectPortfolioBehavior } from "@redux/slices/portfolio-behavior";
import { MdOutlineWork } from "@icons";

export function Level_3Reward() {
  const [isMenuOpen, setOpen] = useState<boolean>();

  const { showHeaderAnimation } = useAppSelector(selectPortfolioBehavior);
  const { isMobile } = useResponsive();
  const control = useAnimation();

  const rightLottieVariant = {
    hidden: {
      x: "100vw",
      rotate: 360,
    },
    visible: {
      x: 0,
      rotate: 0,
      transition: {
        duration: 1,
      },
    },
    isOpen: {
      rotate: 45,
      transition: {},
    },
    isClosed: {
      rotate: 0,
      transition: {},
    },
  };

  const lottieWidthAndHeight = useMemo(() => {
    if (isMobile) return 90;
    return 130;
  }, [isMobile]);

  const menuWidth = useMemo(() => {
    if (isMobile) return "8rem";
    return "10rem";
  }, [isMobile]);

  useEffect(() => {
    if (showHeaderAnimation) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, showHeaderAnimation]);

  useEffect(() => {
    if (isMenuOpen) {
      control.start("isOpen");
    } else {
      control.start("isClosed");
    }
  }, [control, isMenuOpen]);

  return (
    <Menu colorScheme="blackAlpha">
      {({ isOpen }) => (
        <>
          {setOpen(isOpen)}
          <MenuButton>
            <Flex
              initial="hidden"
              animate={control}
              variants={rightLottieVariant}
              as={motion.div}
              mx="2rem"
            >
              <Lottie
                animationData={Logo2}
                width={lottieWidthAndHeight}
                height={lottieWidthAndHeight}
              />
            </Flex>
          </MenuButton>
          <MenuList ml="1rem" minW={menuWidth}>
            <MenuItem
              // _hover={{
              //   _focus: {
              //     background: "whiteAlpha.100",
              //   },
              // }}
              icon={
                <Icon
                  alignSelf="center"
                  as={MdOutlineWork}
                  w={5}
                  h={5}
                  color="brand"
                />
              }
            >
              <Text>Projetos</Text>
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
}
