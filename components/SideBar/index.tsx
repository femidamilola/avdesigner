import styles from "./style.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { DashboardIcon } from "../icons/DashboardIcon";
import { ProjectIcon } from "../icons/ProjectIcon";
import { LayerIcon } from "../icons/LayerIcon";
import { PeopleIcon } from "../icons/PeopleIcon";
import { CopyIcon } from "../icons/CopyIcon";
import { ContactIcon } from "../icons/ContactIcon";
import { BookIcon } from "../icons/BookIcon";
import { PlayIcon } from "../icons/PlayIcon";
import { SunIcon } from "../icons/SunIcon";
import useMediaQuery from "../../hooks/useMediaQuery";
interface propType {
  open?: boolean;
  setOpen?: any;
  logout?: () => void;
}

const bottom = [
  {
    label: "Learn AV Designer",
    icon: <BookIcon />,
    to: "/dashboard",
    id: "/dashboard",
  },
  {
    label: "Tutorials",
    icon: <PlayIcon />,
    to: "/dashboard",
    id: "/dashboard",
  },
  {
    label: "Need Help?",
    to: "/dashboard",
    id: "/dashboard",
  },
];

const links = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    to: "/dashboard",
    id: "/dashboard",
  },
  {
    label: "Create Project",
    icon: <ProjectIcon />,
    to: "/dashboard",
    id: "/create",
  },
  {
    label: "All Projects",
    icon: <LayerIcon />,
    to: "/dashboard",
    id: "/projects",
  },
  {
    label: "Proposals",
    icon: <CopyIcon />,
    to: "/dashboard",
    id: "/proposals",
  },
  { label: "Clients", icon: <PeopleIcon />, to: "/dashboard", id: "/clients" },
  {
    label: "All Contacts",
    icon: <ContactIcon />,
    to: "/dashboard",
    id: "/contacts",
  },
];
const SideBar = ({ open, setOpen }: propType) => {
  const router = useRouter();
  console.log(router.route);
  const mobile = useMediaQuery("(max-width: 767px)");
  return open || !mobile ? (
    <div className={styles.pd_sidebar + " flex flex-col relative"}>
      {mobile && (
        <div className={"ml-4 px-3 text-white"} onClick={() => setOpen(false)}>
          X
        </div>
      )}
      <div className={"block text-center text-2xl"}>
        <p className={"text-white"}>
          <span className={"text-[#eb5e00]"}>AV</span> DESIGNER
        </p>
      </div>
      <div className={styles.cover_all + " py-3 md:pt-0 md:pb-[140px]"}>
        <ul className={styles.nav_list}>
          {links.map((link) => (
            <li
              className={
                (router.pathname === link.id
                  ? "bg-[#eb5e00]"
                  : "bg-[#ECF1F41A]") +
                " mx-[27px] rounded-[8px] mb-[23px] py-[11px] px-[16px] text-base "
              }
              key={link.id}
            >
              <span className={"mr-[15px] text-white font-bold text-xl"}>
                {link.icon}
              </span>
              <Link href={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className={"bottom-2 mt-3 md:mt-[60px]"}>
        <ul className={styles.nav_list}>
          {bottom.map((link) => (
            <li
              className={
                "mx-[27px] rounded-[8px] py-[11px] pl-[16px] text-sm nowrap"
              }
              key={link.id}
            >
              <span className={"mr-[15px] text-white font-bold text-xl"}>
                {link.icon}
              </span>
              <Link href={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <Link href={"/dashboard"}>
          <span className={"text-[#ECF1F4BF] text-xs ml-[42px]"}>
            Get Support/Feedback
          </span>
        </Link>
      </div>
      <div className={"flex flex-row items-center gap-[16px] justify-center"}>
        <SunIcon iconWidth={"22px"} iconHeight={"22px"} />
        <div>
          <label className={styles.switch}>
            <input type="checkbox" />
            <span className={styles.slider + " " + styles.round}></span>
          </label>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SideBar;
