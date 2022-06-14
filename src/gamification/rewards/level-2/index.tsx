import { CSSProperties, useMemo } from "react";
export function Level_2Reward() {
  const array: CSSProperties[] = useMemo(() => {
    return [
      {
        zIndex: 1,
        position: "absolute",
        width: 20,
        height: 20,
        background: "blue",
        top: "10%",
        bottom: 1,
        right: 1,
        left: "20%",
      },
      {
        zIndex: 1,
        position: "absolute",
        width: 20,
        height: 20,
        background: "red",
        top: "15%",
        bottom: 1,
        right: 1,
        left: "80%",
      },
      {
        zIndex: 1,
        position: "absolute",
        width: 20,
        height: 20,
        background: "red",
        top: "20%",
        bottom: 1,
        right: 1,
        left: "50%",
      },
      {
        zIndex: 1,
        position: "absolute",
        width: 20,
        height: 20,
        background: "red",
        top: "45%",
        bottom: 1,
        right: 1,
        left: "30%",
      },
      {
        zIndex: 1,
        position: "absolute",
        width: 20,
        height: 20,
        background: "blue",
        top: "30%",
        bottom: 1,
        right: 1,
        left: "95%",
      },
      {
        zIndex: 1,
        position: "absolute",
        width: 20,
        height: 20,
        background: "red",
        top: "80%",
        bottom: 1,
        right: 1,
        left: "5%",
      },
      {
        zIndex: 1,
        position: "absolute",
        width: 20,
        height: 20,
        background: "red",
        top: "70%",
        bottom: 1,
        right: 1,
        left: "70%",
      },
      {
        zIndex: 1,
        position: "absolute",
        width: 20,
        height: 20,
        background: "red",
        top: "80%",
        bottom: 1,
        right: 1,
        left: "90%",
      },
    ];
  }, []);

  return (
    <>
      {array.map((a, key) => (
        <span key={key} style={a}></span>
      ))}
    </>
  );
}
