import { Flex, Heading, Text } from "@chakra-ui/react";
import { useResponsive } from "@hooks/use-responsive";
import { useAppSelector } from "@redux/hooks";
import { selectPortfolioBehavior } from "@redux/slices/portfolio-behavior";
import { useMemo } from "react";
import ReactTypingEffect from "react-typing-effect";

export function Introduction() {
  const { showIntroduction } = useAppSelector(selectPortfolioBehavior);
  const { isTablet } = useResponsive();

  const containerMinHeight = useMemo(() => {
    if (!isTablet) return "calc(100vh - 108px)";

    return "100vh";
  }, [isTablet]);

  return (
    <Flex
      p={1}
      flexDirection="column"
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      position="relative"
      minHeight={containerMinHeight}
      marginTop={20}
    >
      <Heading size="xl" color="white" fontFamily="Heebo">
        {showIntroduction && (
          <ReactTypingEffect
            cursor=" "
            typingDelay={50}
            eraseDelay={10000 * 10000}
            speed={25}
            text={["Olá, Eu sou o Felipe Austríaco 👋"]}
          />
        )}
      </Heading>
      <Heading size="xl" color="white" fontFamily="Heebo">
        {showIntroduction && (
          <ReactTypingEffect
            typingDelay={1000}
            eraseDelay={1000}
            speed={75}
            eraseSpeed={50}
            text={["Software Engineer.", "Gamer.", "Self Taught."]}
          />
        )}
      </Heading>
      <Heading size="xl" color="white" fontFamily="Heebo">
        {showIntroduction && (
          <ReactTypingEffect
            cursor=" "
            typingDelay={2000}
            eraseDelay={10000 * 10000}
            speed={75}
            text={["Criando experiências únicas através do código"]}
          />
        )}
      </Heading>
      <Text fontFamily="Heebo" fontWeight="medium" color="white">
        {showIntroduction && (
          <ReactTypingEffect
            cursor=" "
            typingDelay={7000}
            eraseDelay={10000 * 10000}
            speed={50}
            text={["Atualmente desenvolvendo @ Mercado Livre"]}
            displayTextRenderer={(text, i) => {
              return (
                <h1>
                  {text.split("").map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span
                        key={key}
                        style={i > 24 ? { color: "#FFD858" } : {}}
                      >
                        {char}
                      </span>
                    );
                  })}
                </h1>
              );
            }}
          />
        )}
      </Text>
    </Flex>
  );
}
