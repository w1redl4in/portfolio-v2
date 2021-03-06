import { CSSProperties, useMemo } from "react";
import { motion } from "framer-motion";

interface FloatIcons extends CSSProperties {
  iconName?: any;
}

const imageVariants = {
  visible: {
    y: 35,
    scale: 1.2,
    rotate: [16, -16],
    transition: {
      duration: 3,
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
        zIndex: 0,
        position: "absolute",
        iconName: "react.svg",
        width: 20,
        height: 20,
        top: "5%",
        bottom: 1,
        right: 1,
        left: "20%",
      },
      {
        zIndex: 0,
        position: "absolute",
        iconName: "redux.svg",
        width: 20,
        height: 20,
        top: "10%",
        bottom: 1,
        right: 1,
        left: "67%",
      },
      {
        zIndex: 0,
        position: "absolute",
        iconName: "js.svg",
        width: 20,
        height: 20,
        top: "16%",
        bottom: 1,
        right: 1,
        left: "12%",
      },
      {
        zIndex: 0,
        position: "absolute",
        iconName: "vercel.svg",
        width: 20,
        height: 20,
        top: "20%",
        bottom: 1,
        right: 1,
        left: "80%",
      },
      {
        zIndex: 0,
        position: "absolute",
        iconName: "vim.svg",
        width: 20,
        height: 20,
        top: "32%",
        bottom: 1,
        right: 1,
        left: "10%",
      },
      {
        zIndex: 0,
        position: "absolute",
        iconName: "vscode.svg",
        width: 20,
        height: 20,
        top: "41%",
        bottom: 1,
        right: 1,
        left: "9%",
      },
      {
        zIndex: 0,
        position: "absolute",
        iconName: "css.svg",
        width: 20,
        height: 20,
        top: "51%",
        bottom: 1,
        right: 1,
        left: "76%",
      },
      {
        zIndex: 0,
        position: "absolute",
        iconName: "css.svg",
        width: 20,
        height: 20,
        top: "60%",
        bottom: 1,
        right: 1,
        left: "5%",
      },
      {
        zIndex: 0,
        position: "absolute",
        iconName: "npm.svg",
        width: 30,
        height: 30,
        top: "30%",
        bottom: 1,
        right: 1,
        left: "85%",
      },
      {
        zIndex: 0,
        position: "absolute",
        iconName: "html.svg",
        width: 30,
        height: 30,
        top: "23%",
        bottom: 1,
        right: 1,
        left: "26%",
      },
      {
        zIndex: 0,
        position: "absolute",
        iconName: "node.svg",
        width: 30,
        height: 30,
        top: "76%",
        bottom: 1,
        right: 1,
        left: "5%",
      },
      {
        zIndex: 0,
        position: "absolute",
        iconName: "gitlab.svg",
        width: 20,
        height: 20,
        top: "70%",
        bottom: 1,
        right: 1,
        left: "70%",
      },
      {
        zIndex: 0,
        position: "absolute",
        iconName: "ts.svg",
        width: 35,
        height: 35,
        top: "85%",
        bottom: 1,
        right: 1,
        left: "30%",
      },
      {
        zIndex: 0,
        position: "absolute",
        iconName: "insomnia.svg",
        width: 20,
        height: 20,
        top: "92%",
        bottom: 1,
        right: 1,
        left: "63%",
      },
      {
        zIndex: 0,
        position: "absolute",
        iconName: "yarn.svg",
        width: 20,
        height: 20,
        top: "96.5%",
        bottom: 1,
        right: 1,
        left: "23%",
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
            src={`images/${a.iconName}`}
            alt={a.iconName}
          />
        </span>
      ))}
    </>
  );
}
