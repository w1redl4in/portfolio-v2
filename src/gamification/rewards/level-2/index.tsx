import { CSSProperties, useMemo } from "react";
import { motion } from "framer-motion";

interface FloatIcons extends CSSProperties {
  iconName?: any;
}

const imageVariants = {
  visible: {
    y: 25,
    transition: {
      duration: 2,
      yoyo: Infinity,
    },
  },
  hover: {
    scale: 1.5,
    rotate: 360,
  },
  tap: {
    scale: 1.5,
    rotate: 360,
  },
};
export function Level_2Reward() {
  const array: FloatIcons[] = useMemo(() => {
    return [
      {
        zIndex: 1,
        position: "absolute",
        iconName: "react.svg",
        width: 40,
        height: 40,
        top: "5%",
        bottom: 1,
        right: 1,
        left: "20%",
      },
      {
        zIndex: 1,
        position: "absolute",
        iconName: "favicon.ico",
        width: 40,
        height: 40,
        top: "15%",
        bottom: 1,
        right: 1,
        left: "80%",
      },
      {
        zIndex: 1,
        position: "absolute",
        iconName: "vim.svg",
        width: 40,
        height: 40,
        top: "25%",
        bottom: 1,
        right: 1,
        left: "10%",
      },
      {
        zIndex: 1,
        position: "absolute",
        iconName: "vscode.svg",
        width: 40,
        height: 40,
        top: "41%",
        bottom: 1,
        right: 1,
        left: "9%",
      },
      {
        zIndex: 1,
        position: "absolute",
        iconName: "npm.svg",
        width: 50,
        height: 50,
        top: "30%",
        bottom: 1,
        right: 1,
        left: "85%",
      },
      {
        zIndex: 1,
        position: "absolute",
        iconName: "node.svg",
        width: 50,
        height: 50,
        top: "76%",
        bottom: 1,
        right: 1,
        left: "5%",
      },
      {
        zIndex: 1,
        position: "absolute",
        iconName: "github.svg",
        width: 60,
        height: 60,
        top: "70%",
        bottom: 1,
        right: 1,
        left: "70%",
      },
      {
        zIndex: 1,
        position: "absolute",
        iconName: "ts.svg",
        width: 30,
        height: 30,
        top: "85%",
        bottom: 1,
        right: 1,
        left: "90%",
      },
      {
        zIndex: 1,
        position: "absolute",
        iconName: "insomnia.svg",
        width: 40,
        height: 40,
        top: "92%",
        bottom: 1,
        right: 1,
        left: "63%",
      },
    ];
  }, []);

  return (
    <>
      {array.map((a, key) => (
        <span key={key} style={a}>
          <motion.img
            style={{
              cursor: "pointer",

              zIndex: -999,
            }}
            whileHover="hover"
            whileTap="tap"
            variants={imageVariants}
            animate="visible"
            src={a.iconName}
            alt={a.iconName}
          />
        </span>
      ))}
    </>
  );
}
