import { LayerIcon } from "../../components/icons/LayerIcon";
import styles from "../../styles/dashboard/Home.module.css";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
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
  const shadow = { boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" };
  const summary = [
    { color: "bg-[#8D08F5]", text: "Completed Project: $1.2m" },
    { color: "bg-[#1255B3]", text: "Total Revenue: $1.2m" },
    { color: "bg-[#3DBF91]", text: "Pending Project: 1.2m" },
    { color: "bg-[#FF6600]", text: "Project Brief: 1.2m" },
  ];
  const designs = [
    { name: "Create BOM Project", progress: "100", estimate: "N2,500,000" },
    { name: "Hausba CONFERENCE HALL", progress: "80", estimate: "N1,250,800" },
    { name: "New NASS AUDITORIUM", progress: "50", estimate: "N7,500,000" },
    {
      name: "UniAbuja Ultra Morden LECTURE HALL",
      progress: "100",
      estimate: "N5,500,000",
    },
    { name: "Kilmanjaro CAFETERIA", progress: "100", estimate: "N2,500,000" },
  ];
  const projects = [
    {
      name: "Villa F25 Project",
      no: "P-101",
      date: "12/01/2018",
      client: "Your client name1",
      budget: "$55,000",
    },
    {
      name: "GMA Residence Project",
      no: "P-102",
      date: "22/01/2019",
      client: "Your client name2",
      budget: "$25,000",
    },
    {
      name: "Banana Mansion Project",
      no: "P-103",
      date: "10/02/2020",
      client: "Your client name3",
      budget: "$65,000",
    },
  ];
  const proposals = [
    { name: "Villa F25 project proposal", budget: "$25,000,000" },
    { name: "GMA Residence project proposal", budget: "$32,000,000" },
    {
      name: "Banana Mansion project proposal",
      budget: "Banana Mansion project proposal",
    },
  ];
  return (
    <div className={"my-[25px] mx-[25px]"}>
      <div className={"grid grid-cols-4 gap-[13px]"}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.color} px-[24px] py-[16px] rounded-lg cursor-pointer hover:scale-105 transition-transform `}
            style={shadow}
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
      <div className={"mt-[36px] grid grid-cols-2 gap-[20px]"}>
        <div className={"bg-white rounded-lg"} style={shadow}>
          <div
            className={
              "bg-[#E8E8E8] flex flex-row items-center justify-between py-[24px] px-[16px]"
            }
            style={shadow}
          >
            <span>Overall Summary</span>
            <div className={"flex flex-row"}>
              <span>Annual</span>
              <span>Icon</span>
            </div>
          </div>
          <div
            className={
              "grid grid-cols-2 items-center my-[40px] ml-[51px] gap-[50px]"
            }
          >
            <div className={styles.svg}>
              <div className={"w-[220px] h-['220px']"}>
                <CircularProgressbarWithChildren
                  className={"w-[48px] h-['48px']"}
                  value={80}
                  styles={buildStyles({
                    pathColor: "#FF6600",
                    trailColor: "transparent",
                  })}
                >
                  <div className={"w-[220px] h-['220px']"}>
                    <CircularProgressbarWithChildren
                      className={"w-[48px] h-['48px']"}
                      value={70}
                      styles={buildStyles({
                        pathColor: "#1255B3",
                        trailColor: "transparent",
                      })}
                    >
                      <div className={"w-[220px] h-['220px']"}>
                        <CircularProgressbarWithChildren
                          className={"w-[48px] h-['48px']"}
                          value={60}
                          styles={buildStyles({
                            pathColor: "#3DBF91",
                            trailColor: "transparent",
                          })}
                        >
                          <div className={"w-[220px] h-['220px']"}>
                            <CircularProgressbarWithChildren
                              className={"w-[48px] h-['48px']"}
                              value={50}
                              styles={buildStyles({
                                pathColor: "#8D08F5",
                                trailColor: "transparent",
                              })}
                            >
                              <div
                                className={"text-3xl text-[#8D08F5] font-bold"}
                              >
                                $1.2m
                              </div>
                              <div className={"text-sm"}>
                                12 projects completed
                              </div>
                            </CircularProgressbarWithChildren>
                          </div>
                        </CircularProgressbarWithChildren>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </div>
            <div>
              {summary.map((s, index) => (
                <div
                  key={index}
                  className={"flex flex-row items-center my-[20px]"}
                >
                  <div
                    className={
                      "w-[24px] h-[24px] rounded-full mr-[10px]" + ` ${s.color}`
                    }
                  ></div>
                  <span className="text-[14px]">{s.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={"bg-white rounded-lg"} style={shadow}>
          <div
            className={
              "bg-[#E8E8E8] flex flex-row items-center justify-between py-[24px] px-[16px]"
            }
            style={shadow}
          >
            <span>My Recent Designs</span>
          </div>
          <div className={"text-xs"}>
            <div className="grid grid-cols-2 px-[18px] py-[16px] border-b border-[#D3D6D880]">
              <div>Design Name</div>
              <div className={"grid grid-cols-2"}>
                <span>% Progress</span>
                <span>Estimate</span>
              </div>
            </div>
            {designs.map((design, index) => (
              <div key={index} className="grid grid-cols-2 px-[18px] py-[16px]">
                <div>{design.name}</div>
                <div className={"grid grid-cols-2"}>
                  <span>{design.progress}</span>
                  <span>{design.estimate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={"mt-[30px] grid grid-cols-5 gap-[20px] min-h-[300px]"}>
        <div className={"col-span-3 h-full"}>
          <div className={"bg-white rounded-lg h-full"} style={shadow}>
            <div
              className={
                "bg-[#E8E8E8] flex flex-row items-center justify-between py-[24px] px-[16px]"
              }
              style={shadow}
            >
              <span>My Recent Projects</span>
            </div>
            <div className={"text-xs"}>
              <div className="grid grid-cols-5 px-[18px] py-[16px] gap-[20px] border-b border-[#D3D6D880]">
                <span>Project Name</span>
                <span>Project No</span>
                <span>Date</span>
                <span>Client</span>
                <span>Budget</span>
              </div>
              {projects.map((p, index) => (
                <div
                  key={index}
                  className="grid grid-cols-5 px-[18px] py-[16px] gap-[20px] border-b border-[#D3D6D880]"
                >
                  <span>{p.name}</span>
                  <span>{p.no}</span>
                  <span>{p.date}</span>
                  <span>{p.client}</span>
                  <span>{p.budget}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={"col-span-2 h-full"}>
          <div className={"bg-white rounded-lg h-full"} style={shadow}>
            <div
              className={
                "bg-[#E8E8E8] flex flex-row items-center justify-between py-[24px] px-[16px]"
              }
              style={shadow}
            >
              <span>My Recent Proposals</span>
            </div>
            <div className={"text-xs"}>
              <div className="grid grid-cols-2 px-[18px] py-[16px] gap-[20px] border-b border-[#D3D6D880]">
                <span>Proposal Name</span>
                <span>Budget</span>
              </div>
              {proposals.map((p, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 px-[18px] py-[16px] gap-[20px] border-b border-[#D3D6D880]"
                >
                  <span>{p.name}</span>
                  <span>{p.budget}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
