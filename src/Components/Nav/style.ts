import tw, { styled } from "twin.macro";

import DehazeIcon from "@mui/icons-material/Dehaze";

export const Content = styled.nav`
  ${tw`relative`}
  .wrap {
    ${tw`relative z-30 m-auto bg-[#304463] flex items-end justify-between gap-x-4 px-6 py-3`}
    ${tw`md:(px-8 py-4 justify-start)`}
  ${tw`lg:(max-w-[1260px])`}
    h2 {
      ${tw`flex justify-center items-center text-white font-medium text-[22px]`}
      ${tw`md:(text-[32px])`}
    }
  }
`;

export const NavUlPc = styled.ul`
  ${tw`hidden`}
  ${tw`md:(gap-x-4 flex)`}
    li {
    ${tw`flex items-end text-white`}
    ${tw`md:(text-[26px])`}
  }
`;

export const NavUlMo = styled.ul<NavUlMoType>`
  ${tw`absolute left-0 z-20 top-full w-full px-3 py-2 duration-300 bg-[#7D8ABC]`};
  ${tw`md:(hidden)`};
  ${(props) =>
    props.$NavCollapState ? tw`translate-y-0` : tw`translate-y-[-100%]`}
  li {
    ${tw`text-white my-1 text-[16px]`}
  }
`;

export const NavCollapIcon = styled(DehazeIcon)`
  && {
    ${tw`text-white w-[32px] h-[32px]`}
    ${tw`md:(hidden)`}
  }
`;

interface NavUlMoType {
  $NavCollapState: boolean;
}
