import { Link } from "react-router-dom";
import { Content } from "./style";

function Nav() {
  return (
    <Content>
      <li>
        <p>抽獎工具</p>
      </li>
      <li>
        <Link to="/roulette">轉盤</Link>
      </li>
    </Content>
  );
}

export default Nav;
