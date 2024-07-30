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

const raffleList: Array<string> = [
  "麥當勞",
  "肯德基",
  "漢堡王",
  "丹丹漢堡",
  "繼光香香雞",
  "四海遊龍",
  "八方雲集",
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
        const newDataList: Array<string> = [...prev];
        newDataList.push(inputValue); // 使用保存的輸入值
        return newDataList;
      });
      inputElement.value = ""; // 在更新狀態的回調之後清空輸入欄位
    }
  };

  const gameStart = (): void => {
    if (!CanvasRef.current) return;
    const gapDeg = parseFloat((360 / raffle.length).toFixed(2)); // 每個區塊的角度
    const randomIndex = Math.floor(Math.random() * raffle.length); // 隨機抽獎
    console.log(raffle[randomIndex]); // 實際中獎

    function normalizeDegrees(degrees: number): number {
      if (degrees < 360) {
        return 360 - degrees;
      } else {
        const remainder = degrees % 360;
        return 360 - remainder;
      }
    }

    const finDeg =
      // 當前旋轉角度
      wheelDeg +
      // 角度歸復
      normalizeDegrees(wheelDeg) +
      // 旋轉度數
      (720 +
        parseFloat((360 - (gapDeg * randomIndex + gapDeg / 2)).toFixed(2)));

    CanvasRef.current.style.transform = `rotate(${finDeg}deg)`;
    setWhelDeg(finDeg);
  };

  useEffect(() => {
    if (!CanvasRef.current) return;
    const ctx = CanvasRef.current?.getContext("2d");
    if (!ctx) return;

    const bgColorArray: Array<string> = [
      "#FF8225",
      "#F9E400",
      "#FFAF00",
      "#F5004F",
    ]; // 扇形區塊顏色

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
      ctx.fillStyle = bgColorArray[i % bgColorArray.length]; // 分配顏色
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
      ctx.fillText(raffle[i], 0, 0);
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
          return <li key={index}>{item}</li>;
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
