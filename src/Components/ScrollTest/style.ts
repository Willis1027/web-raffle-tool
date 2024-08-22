/* Import package-套件 */
import tw, { styled } from "twin.macro";

export const Container = styled.div`
  ${tw`w-screen h-screen relative overflow-hidden`}
  scroll-behavior: smooth;
`;

export const Block1 = styled.div`
  ${tw`w-full h-full bg-[#FF4E88]`}
`;

export const Block2 = styled.div`
  ${tw`w-full h-full bg-[#FFDA76]`}
`;

export const Block3 = styled.div`
  ${tw`w-full h-full bg-[#B4D6CD]`}
`;

export const ScrollBar = styled.ul`
  ${tw`absolute top-1/2 right-0 translate-y-[-50%]`}
  li {
    ${tw`p-4 text-[24px] font-medium text-white `}
    button{
        ${tw`w-[20px] h-[40px] border-black border-2`}
    }
  }
`;
