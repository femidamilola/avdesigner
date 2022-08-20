import { LayerIcon } from "../../components/icons/LayerIcon";
import styles from "../../styles/dashboard/Home.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CopyIcon } from "../../components/icons/CopyIcon";
import { PenIcon } from "../../components/icons/PenIcon";
import { ArchiveIcon } from "../../components/icons/ArchiveIcon";

const Home = () => {
  const cards = [
    {
      title: "My Projects",
      count: 42,
      icon: <LayerIcon iconColor={"#F2303080"} />,
      color: "bg-[#F2303040]",
      altColor: "#F2303080",
    },
    {
      title: "My Proposals",
      count: 25,
      icon: <CopyIcon iconColor={"#8D0DF540"} />,
      color: "bg-[#8D0DF540]",
      altColor: "#8D08F580",
    },
    {
      title: "My Designs",
      count: 15,
      icon: <ArchiveIcon />,
      color: "bg-[#3DBF9140]",
      altColor: "#3DBF9180",
    },
    {
      title: "My Drawings",
      count: 28,
      icon: <PenIcon />,
      color: "bg-[#FF660040]",
      altColor: "#FF660080",
    },
  ];
  return (
    <div className={"my-[25px] mx-[25px]"}>
      <div className={"grid grid-cols-4 gap-[13px]"}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.color} px-[24px] py-[16px] rounded-lg cursor-pointer hover:scale-105 transition-transform `}
            style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <div className={"flex flex-row justify-between mb-[25px]"}>
              <h4>{card.title}</h4>
              <span>{card.icon}</span>
            </div>
            <div className={"w-[36px] h-[36px] text-[36px] " + styles.circle}>
              <CircularProgressbar
                value={card.count}
                text={`${card.count}`}
                styles={buildStyles({
                  textColor: "black",
                  pathColor: `${card.altColor}`,
                  trailColor: "white",
                })}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
