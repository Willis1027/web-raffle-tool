// 元件說明:折價券
import { useState } from "react";

import { Link } from "react-router-dom";
import { Content, NavUlPc, NavUlMo, NavCollapIcon } from "./style";

interface RouterSite {
  text: string;
  router: string;
}

const RouterArray: Array<RouterSite> = [
  { text: "轉盤", router: "/roulette" },
  { text: "戳戳樂", router: "/roulette" },
];

function Nav() {
  const [NavCollapState, setNavCollapState] = useState(false); // 選單開啟狀態

  // 選單操作
  const handleNav = (): void => {
    setNavCollapState((prev) => !prev);
  };

  return (
    <Content>
      <div className="wrap">
        <h2>抽獎工具</h2>
        <NavUlPc>
          {RouterArray.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item["router"]}>{item["text"]}</Link>
              </li>
            );
          })}
        </NavUlPc>
        <NavCollapIcon
          onClick={() => {
            handleNav();
          }}
        />
      </div>
      <NavUlMo $NavCollapState={NavCollapState}>
        {RouterArray.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item["router"]}>{item["text"]}</Link>
            </li>
          );
        })}
      </NavUlMo>
    </Content>
  );
}

export default Nav;
