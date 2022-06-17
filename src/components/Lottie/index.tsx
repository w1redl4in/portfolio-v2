import { useMemo } from "react";
import ReactLottie from "react-lottie";

interface LottieProps {
  animationData: any;
  width?: number;
  height?: number;
  isClickToPauseDisabled?: boolean;
  loop?: boolean;
  speed?: number;
}
export function Lottie({
  animationData,
  width,
  height,
  isClickToPauseDisabled,
  loop,
  speed,
}: LottieProps) {
  const defaultOptions = useMemo(() => {
    return {
      loop,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  }, [animationData, loop]);

  return (
    <ReactLottie
      options={defaultOptions}
      width={width}
      height={height}
      isClickToPauseDisabled={isClickToPauseDisabled}
      speed={speed}
    />
  );
}
