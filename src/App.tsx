import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg,rgb(238, 0, 153),rgb(221, 0, 238));
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 1000px;
  gap: 10px;
  margin-bottom: 50px;
`;

const Box = styled(motion.div)`
  height: 250px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
`;

const Button = styled(motion.button)`
  width: 120px;
  height: 50px;
  background-color: white;
  border-radius: 5px;
  font-size: 30px;
  font-weight: bold;
  color: blueviolet;
  border: none;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [Id, setId] = useState<null | string>(null);
  const [Switch, setSwitch] = useState(true);
  const toggle = () => setSwitch((prev) => !prev);
  return (
    <Wrapper>
      <AnimatePresence>
        <Grid>
          <Box onClick={() => setId("1")} key={"1"} layoutId={"1"} whileHover={{ scale: 1.1, x: -24, y: -13 }} />
          <Box key={"2"} layoutId={"2"}>{Switch ? <Circle layoutId="circle"/> : null}</Box>
          <Box key={"3"} layoutId={"3"}>{Switch ? null : <Circle layoutId="circle"/>}</Box>
          <Box onClick={() => setId("4")} key={"4"} layoutId={"4"} whileHover={{ scale: 1.1, x: 24, y: 13 }} />
        </Grid>
        {Switch ? <Button onClick={toggle} layoutId="button" exit={{color: "tomato", scale:1.2}}>Switch</Button> : null}
        {Switch ? null : <Button onClick={toggle} initial={{color: "blueviolet", scale: 1}} animate={{ color: "tomato", scale: 1.2 }} exit={{color: "blueviolet", scale: 1}} layoutId="button">Switch</Button>}
        {Id ?
          <Overlay onClick={() => setId(null)} initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }} animate={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }} exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
            <Box style={{ width: 400, height: 300, backgroundColor: "rgba(255, 255, 255, 1)" }} layoutId={Id} />
          </Overlay>
        : null}
      </AnimatePresence>
    </Wrapper>
  );
};

export default App;