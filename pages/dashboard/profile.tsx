import Image from "next/image";

const Profile = () => (
  <>
    <div className={"flex mt-12"}>
      <div
        className={"w-[270px] bg-white flex flex-col items-center py-[15px] "}
      >
        <div className={"pb-[10px] border-b w-full flex flex-col items-center"}>
          <Image
            src={"/images/profile.png"}
            alt={"profile"}
            width={140}
            height={140}
          />
          <span className={"font-bold mt-3"}>Chibuzo Michael</span>
        </div>
      </div>
    </div>
  </>
);

export default Profile;
