import ReactPlayer from "react-player";
import dynamic from "next/dynamic";
import React, { useCallback, useEffect, useMemo, useState, memo } from "react";
import {
  Box,
  Slider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
  Flex,
  Icon,
  Alert,
  Text,
} from "@chakra-ui/react";
import {
  AiFillPauseCircle,
  AiFillPlayCircle,
  BsFillVolumeUpFill,
  IoIosSkipBackward,
  IoIosSkipForward,
} from "@icons";
import { SONGS } from "@constants/songs";

export function Level_4Reward() {
  const [volume, setVolume] = useState(0.1);
  const [playing, setPlaying] = useState(true);
  const [currentSong, setCurrentSong] = useState(SONGS[0]);

  const handleVolumeChange = useCallback((value: number) => {
    setVolume(value);
  }, []);

  const handlePlayPause = useCallback(() => {
    setPlaying((play) => !play);
  }, []);

  const handleNextSong = useCallback(() => {
    const nextSong = SONGS.findIndex((song) => song === currentSong) + 1;

    if (nextSong < SONGS.length) setCurrentSong(SONGS[nextSong]);
  }, [currentSong]);

  const handlePreviousSong = useCallback(() => {
    const previousSong = SONGS.findIndex((song) => song === currentSong) - 1;

    if (previousSong !== -1) setCurrentSong(SONGS[previousSong]);
  }, [currentSong]);

  const formattedSongName = useMemo(() => {
    const cleanCurrentSongName = currentSong
      .replace("/sounds/", "")
      .replace(".mp3", "");

    const [songNameWithHyphen, artistNameWithHyphen] =
      cleanCurrentSongName.split("_");

    const songName = songNameWithHyphen.replaceAll("-", " ");
    const artistName = artistNameWithHyphen.replaceAll("-", " ");

    return `${songName} by ${artistName}`;
  }, [currentSong]);

  useEffect(() => {
    setPlaying(true);
    return () => {
      setPlaying(false);
    };
  }, []);

  return (
    <>
      <Box display="none" position="absolute">
        <ReactPlayer
          stopOnUnmount
          playing={playing}
          volume={volume}
          url={currentSong}
        />
      </Box>
      <Box
        position="fixed"
        bottom="2rem"
        left="0"
        right="0"
        w={["40%", "30%", "30%", "20%"]}
        m="0 auto"
      >
        <Alert
          bg="modalBackground"
          zIndex={999}
          display="flex"
          flexDir="column"
          borderRadius="10px"
          variant="solid"
        >
          <Flex textAlign="center" flexWrap="wrap">
            <Text color="brand" fontWeight="semibold">
              {formattedSongName}
            </Text>
          </Flex>
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
              onClick={handlePreviousSong}
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
              onClick={handleNextSong}
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
            maxW="7rem"
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={6}>
              <Box color="modalBackground" as={BsFillVolumeUpFill} />
            </SliderThumb>
          </Slider>
        </Alert>
      </Box>
    </>
  );
}

export const DynamicLevel_4Reward = dynamic<{}>(
  () =>
    import("@gamification/rewards/level-4/index").then((mod) =>
      memo(mod.Level_4Reward)
    ),
  {
    ssr: false,
  }
);
