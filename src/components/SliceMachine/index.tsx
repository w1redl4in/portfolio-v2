/* eslint-disable jsx-a11y/alt-text */
import { Image, Quote, TextBlock } from "../../../slices";
import dynamic from "next/dynamic";
export interface SliceMachineProps {
  slices: any;
}
export const SliceMachine: React.FC<SliceMachineProps> = ({ slices }) => {
  return slices.map((slice: any) => {
    switch (slice.slice_type) {
      case "quote":
        return <Quote slice={slice} />;
      case "image":
        return <Image slice={slice} />;

      case "text_block":
        return <TextBlock slice={slice} />;
      default:
        return <></>;
    }
  });
};

export const DynamicSliceMachine = dynamic<SliceMachineProps>(
  () => import("@components/SliceMachine").then((mod) => mod.SliceMachine),
  {
    ssr: false,
  }
);
