/* Import package-套件 */
import tw, { styled } from "twin.macro";

export const Content = styled.div`
  ${tw`m-auto mt-4 overflow-hidden`}
  ${tw`md:(max-w-[1260px] mt-10)`}
`;

export const RoulettModal = styled.div`
  ${tw`m-auto relative w-[calc(300_/_375_*_100vw)] h-[calc(300_/_375_*_100vw)]`}
  ${tw`md:(w-[500px] h-[500px])`}
`;

export const InfWrap = styled.div`
  ${tw`max-w-[calc(327_/_375_*_100vw)] m-auto`}
  ${tw`md:(max-w-[768px])`}
`;

export const Title = styled.div`
  ${tw`text-center text-[20px]`}
  ${tw`sm:(text-[28px])`}
  ${tw`md:(text-[32px] my-3)`}
`;

export const RaffleList = styled.ul`
  ${tw`border-black border-2 overflow-y-scroll text-[16px] px-1  h-[220px]`}
  ${tw`sm:(text-[20px])`}
  ${tw`md:(h-[340px] text-[24px] m-auto)`}
`;

export const InputBlock = styled.div`
  ${tw`flex justify-center m-auto gap-x-2 text-[16px]  mt-2`}
  ${tw`md:(gap-x-4 text-[22px] mt-6)`}
  input {
    ${tw`border-black border-2 w-full`}
  }
  button {
    ${tw`border-black border-2 flex justify-center items-center text-[14px] p-1 shrink-0`}
    ${tw`md:(p-2 text-[18px])`}
  }
`;

export const DrawCanvas = styled.canvas`
  ${tw`w-full h-full`}
  transition-duration:10s;
  transition-timing-function: cubic-bezier(0.6, 0, 0, 1);
`;

export const WheelCenter = styled.div`
  ${tw`absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] rounded-full bg-white w-[calc(20_/_375_*_100vw)] h-[calc(20_/_375_*_100vw)]`}
  ${tw`md:(w-[30px] h-[30px])`}
`;

export const WheelPin = styled.div`
  ${tw`absolute right-0 top-1/2 translate-x-[-10%] translate-y-[-50%] rotate-[90deg] text-[calc(20_/_375_*_100vw)]`}
  ${tw`md:(text-[24px] translate-x-[-16%])`}
`;

export const Winner = styled.p`
  ${tw`text-center m-auto text-[16px] font-medium mt-2`}
  ${tw`sm:(text-[24px]) mt-3`}
  ${tw`md:(text-[26px] max-w-[768px])`}
`;
