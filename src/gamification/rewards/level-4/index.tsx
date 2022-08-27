import ReactPlayer from "react-player";
import dynamic from "next/dynamic";
import React, { useCallback, useState } from "react";
import {
  Box,
  Slider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
  Flex,
  Icon,
  Alert,
} from "@chakra-ui/react";
import {
  AiFillPauseCircle,
  AiFillPlayCircle,
  IoIosSkipBackward,
  IoIosSkipForward,
  MdGraphicEq,
} from "@icons";

export function Level_4Reward() {
  const [volume, setVolume] = useState(0.1);
  const [playing, setPlaying] = useState(true);

  const handleVolumeChange = useCallback((value: number) => {
    setVolume(value);
  }, []);

  const handlePlayPause = useCallback(() => {
    setPlaying((play) => !play);
  }, []);

  const handleDuration = useCallback((duration: number) => {
    console.log("duration", duration);
  }, []);

  return (
    <>
      <Box display="none" position="absolute">
        <ReactPlayer
          playing={playing}
          volume={volume}
          onDuration={handleDuration}
          url="/sounds/Cozy-Place_Keys-Of-Moon.mp3"
        />
      </Box>
      <Box position="fixed" bottom="2rem" left="0" right="0" w="30%" m="0 auto">
        <Alert
          bg="modalBackground"
          zIndex={99}
          display="flex"
          flexDir="column"
          borderRadius="10px"
          variant="solid"
        >
          <Flex alignItems="center">
            <Icon
              _hover={{
                transform: "scale(1.1)",
                cursor: "pointer",
              }}
              as={IoIosSkipBackward}
              w={5}
              h={5}
              color="white"
            />
            <Icon
              _hover={{
                transform: "scale(1.1)",
                cursor: "pointer",
              }}
              as={playing ? AiFillPauseCircle : AiFillPlayCircle}
              w={10}
              h={10}
              color="brand"
              onClick={handlePlayPause}
            />
            <Icon
              _hover={{
                transform: "scale(1.1)",
                cursor: "pointer",
              }}
              as={IoIosSkipForward}
              w={5}
              h={5}
              color="white"
            />
          </Flex>
          <Slider
            min={0}
            max={1}
            step={0.1}
            onChange={handleVolumeChange}
            aria-label="slider-ex-2"
            colorScheme="yellow"
            defaultValue={0.3}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={6}>
              <Box color="brand" as={MdGraphicEq} />
            </SliderThumb>
          </Slider>
        </Alert>
      </Box>
    </>
  );
}

export const DynamicLevel_4Reward = dynamic<{}>(
  () =>
    import("@gamification/rewards/level-4/index").then(
      (mod) => mod.Level_4Reward
    ),
  {
    ssr: false,
  }
);
