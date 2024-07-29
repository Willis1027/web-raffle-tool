/* Import package-套件 */
import tw, { styled } from "twin.macro";

export const Content = styled.div`
  ${tw`m-auto`}
  ${tw`lg:(max-w-[1260px] mt-10)`}
`;

export const RoulettModal = styled.div`
  ${tw``}
`;

export const Title = styled.div`
  ${tw`text-center`}
  ${tw`sm:()`}
  ${tw`lg:(text-[32px] my-3)`}
`;

export const RaffleList = styled.ul`
  ${tw`border-black border-2 overflow-y-scroll`}
  ${tw`lg:(m-auto max-w-[800px] p-2 text-[24px] max-h-[340px])`}
  li {
    ${tw`border-black`}
    ${tw`lg:(border-b-2 p-2)`}
    &:last-of-type {
      ${tw`border-b-0`}
    }
  }
`;

export const InputBlock = styled.div`
  ${tw`flex justify-between m-auto mt-4`}
  ${tw`lg:(w-[30%] gap-x-4 text-[24px])`}
  input {
    ${tw`flex-1 border-black`}
    ${tw`lg:border-2`}
  }
  button {
    ${tw`border-black`}
    ${tw`sm:()`}
    ${tw`lg:(p-1 border-2 )`}
  }
`;

export const DrawCanvas = styled.canvas`
  ${tw`w-[500px] h-[500px]`}
`;
