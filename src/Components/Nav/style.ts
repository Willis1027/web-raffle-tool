import tw, { styled } from "twin.macro";

export const Content = styled.ul`
  ${tw`m-auto bg-[#694F8E] flex gap-x-4`}
  ${tw`lg:(max-w-[1260px] p-4 text-[32px])`}
  li {
    ${tw`flex items-end`}
    ${tw`lg:(text-[0.8em] text-white font-medium)`}
    &:first-of-type {
      ${tw`text-[1em]`}
    }
  }
`;
