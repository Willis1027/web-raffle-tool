/* Import package-套件 */
import { useState, useRef, useEffect } from "react";
import {
  Content,
  RoulettModal,
  RaffleList,
  Title,
  InputBlock,
  DrawCanvas,
  WheelPin,
  WheelCenter,
} from "./style";

interface rafflePerson {
  name: string;
}

const raffleList: Array<rafflePerson> = [
  { name: "麥當勞" },
  { name: "肯德基" },
  { name: "漢堡王" },
  { name: "丹丹漢堡" },
  { name: "繼光香香雞" },
  { name: "四海遊龍" },
  { name: "八方雲集" },
  { name: "麥味登" },
  { name: "星巴克" },
  { name: "50嵐" },
  { name: "一嵐拉麵" },
];

function Roulette() {
  const [raffle, setRaffle] = useState(raffleList);
  const [wheelDeg, setWhelDeg] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const RaffleRef = useRef<HTMLUListElement>(null);
  const CanvasRef = useRef<HTMLCanvasElement>(null);

  const addNewItem = (): void => {
    const inputElement = inputRef.current;
    const UlListElement = RaffleRef.current;
    if (inputElement && UlListElement && inputElement.value !== "") {
      const inputValue = inputElement.value; // 首先保存輸入值到一個變量
      setRaffle((prev) => {
        const newDataList: Array<rafflePerson> = [...prev];
        newDataList.push({ name: inputValue }); // 使用保存的輸入值
        return newDataList;
      });
      inputElement.value = ""; // 在更新狀態的回調之後清空輸入欄位
    }
  };

  const gameStart = (): void => {
    if (!CanvasRef.current) return;
    const gapDeg = Math.floor(360 / raffle.length); // 每個區塊的角度
    const randomIndex = Math.floor(Math.random() * raffle.length); // 隨機抽獎
    console.log(raffle[randomIndex]);

    function normalizeDegrees(degrees: number): number {
      if (degrees < 360) {
        return 360 - degrees;
      } else {
        const remainder = degrees % 360;
        return 360 - remainder;
      }
    }

    const finDeg =
      wheelDeg +
      normalizeDegrees(wheelDeg) +
      (360 - gapDeg * (randomIndex + 1));

    setWhelDeg(finDeg);
    CanvasRef.current.style.transform = `rotate(${finDeg}deg)`;
  };

  useEffect(() => {
    if (!CanvasRef.current) return;
    const ctx = CanvasRef.current?.getContext("2d");
    if (!ctx) return;
    const centerX = CanvasRef.current.width / 2; // 圓心座標點
    const centerY = CanvasRef.current.height / 2; // 圓心座標點
    const radius = 520; // 半徑
    let startAngle = 0; // 初始角度
    const sliceAngle = (2 * Math.PI) / raffle.length; // 每塊扇形角度

    // 繪製圓餅圖外框
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 6;
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();

    for (let i = 0; i < raffle.length; i++) {
      ctx.fillStyle = "#FF8225";
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // 計算扇形中心角度
      const textAngle = startAngle + sliceAngle / 2;
      const textX = centerX + (radius - 30) * Math.cos(textAngle);
      const textY = centerY + (radius - 30) * Math.sin(textAngle);

      // 加上文字
      ctx.save(); // 保存畫布狀態
      ctx.translate(textX, textY);
      ctx.rotate(textAngle);
      ctx.fillStyle = "black"; // 選擇合適的文字顏色
      ctx.font = "52px Arial";
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      ctx.fillText(raffle[i]["name"], 0, 0);
      ctx.restore(); // 還原畫布狀態

      startAngle += sliceAngle; // 更新起始角度
    }
  }, [raffle]);

  return (
    <Content>
      <RoulettModal
        onClick={() => {
          gameStart();
        }}
      >
        <DrawCanvas ref={CanvasRef} width={"1080"} height={"1080"}></DrawCanvas>
        <WheelCenter></WheelCenter>
        <WheelPin>▼</WheelPin>
      </RoulettModal>
      <Title>抽獎名單</Title>
      <RaffleList ref={RaffleRef}>
        {raffle.map((item, index) => {
          return <li key={index}>{item["name"]}</li>;
        })}
      </RaffleList>
      <InputBlock>
        <input type="text" name="輪盤選項" id="roulette-item" ref={inputRef} />
        <button
          onClick={() => {
            addNewItem();
          }}
        >
          新增
        </button>
      </InputBlock>
    </Content>
  );
}

export default Roulette;
