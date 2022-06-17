import { useMemo } from "react";
import ReactLottie from "react-lottie";

interface LottieProps {
  animationData: any;
  width?: number;
  height?: number;
  isClickToPauseDisabled?: boolean;
}
export function Lottie({
  animationData,
  width,
  height,
  isClickToPauseDisabled,
}: LottieProps) {
  const defaultOptions = useMemo(() => {
    return {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  }, [animationData]);

  return (
    <ReactLottie
      options={defaultOptions}
      width={width}
      height={height}
      isClickToPauseDisabled={isClickToPauseDisabled}
    />
  );
}
