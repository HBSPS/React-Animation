import styled from "styled-components";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg,rgb(238, 0, 153),rgb(221, 0, 238));
`;


const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(x, [-800, 0, 800], ["linear-gradient(135deg,rgb(0, 210, 238),rgb(0, 103, 238))", "linear-gradient(135deg,rgb(238, 0, 153),rgb(221, 0, 238))", "linear-gradient(135deg,rgb(0, 238, 218),rgb(147, 238, 0))"])

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    <Wrapper style={{background: gradient}}>
      <Box style={{x: x, rotate: rotate, scale: scale}} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
};

export default App;