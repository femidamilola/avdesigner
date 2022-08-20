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
interface propType {
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
const SideBar = ({}: propType) => {
  const router = useRouter();
  console.log(router.route);
  return (
    <div className={styles.pd_sidebar}>
      <div className={"block text-center text-2xl"}>
        <p className={"text-white"}>
          <span className={"text-[#eb5e00]"}>AV</span> DESIGNER
        </p>
      </div>
      <div className={styles.cover_all + " pb-[140px]"}>
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
      <div className={"mt-[60px]"}>
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
      </div>
    </div>
  );
};

export default SideBar;
