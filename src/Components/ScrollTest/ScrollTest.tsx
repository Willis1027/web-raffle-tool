// package
import { useState, useRef, useEffect } from "react";

// Component
import { Container, ScrollBar, Block1, Block2, Block3 } from "./style";

// hooks
import useWindowSize from "../../hooks/useWindowSize";

const btnArray: Array<number> = [1, 2, 3];

function ScrollTest() {
  const ContainerRef = useRef<HTMLDivElement>(null);
  const [scrollHeight, setScrollHeight] = useState(0);
  const size = useWindowSize();

  useEffect(() => {
    if (!ContainerRef.current) return;
    setScrollHeight(ContainerRef.current.scrollHeight / 3);
  }, [size.width]);

  return (
    <div className="relative">
      <Container ref={ContainerRef}>
        <Block1></Block1>
        <Block2></Block2>
        <Block3></Block3>
      </Container>
      <ScrollBar>
        {btnArray.map((item, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => {
                  if (!ContainerRef.current) return;
                  ContainerRef.current.scrollTop = scrollHeight * index;
                }}
              ></button>
            </li>
          );
        })}
      </ScrollBar>
    </div>
  );
}

export default ScrollTest;
