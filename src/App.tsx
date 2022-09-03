import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg,rgb(238, 0, 153),rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box = {
  entry: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5
    }
  })
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const next = () => {
    setBack(false);
    setVisible((prev) => prev === 10 ? 10 : prev + 1);
  };
  const prev = () => {
    setBack(true);
    setVisible((prev) => prev === 1 ? 1 : prev - 1);
  };

  return (
    <Wrapper>
      <AnimatePresence exitBeforeEnter custom={back}>
        <Box key={visible} custom={back} variants={box} initial="entry" animate="center" exit="exit">{visible}</Box>
      </AnimatePresence>
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
    </Wrapper>
  );
};

export default App;