import { useEffect } from "react";
import tw, { styled } from "twin.macro";
import { BearState, useBearStore } from "./BasicBearStore";

const ChatBtn = styled.ul`
  ${tw`flex justify-center gap-x-4 mt-2`}
  li {
    ${tw`px-2 py-1 border-black border-2 cursor-pointer`}
  }
`;

function UseStore() {
  const { bears, increaseBears, decreaseBears, resetBears } =
    useBearStore<BearState>((state) => state);

  useEffect(() => {
    const count = setInterval(() => {
      if (bears <= 0) return;
      decreaseBears();
    }, 1000); // 每 1000 毫秒執行一次
    return () => clearInterval(count);
  },[bears,decreaseBears]);

  return (
    <div className="p-10">
      <p className="text-center text-[32px] font-medium">熊哥哥聊天室</p>
      <img
        src="https://scontent.ftpe7-4.fna.fbcdn.net/v/t39.30808-6/275983856_5122513754474702_667710521452555569_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=bd9a62&_nc_ohc=NK7e9vEpK70Q7kNvgGt-6pk&_nc_ht=scontent.ftpe7-4.fna&oh=00_AYCr7lcGMhQ9O9Ob3iuVaWNUh-oPTH0UwnmsamfkbyVIDA&oe=66A50131"
        alt="Nl Nice Joke"
        className="m-auto"
      />
      <p className="text-center text-[38px] font-medium">
        禁言秒數：{bears} 秒
      </p>

      <ChatBtn>
        <li onClick={decreaseBears}>愛熊熊(秒數減少1秒)</li>
        <li onClick={increaseBears}>恨熊熊(秒數增加1秒)</li>
        <li onClick={resetBears}>Roger狗金生(秒數600秒)</li>
      </ChatBtn>
    </div>
  );
}

export default UseStore;
