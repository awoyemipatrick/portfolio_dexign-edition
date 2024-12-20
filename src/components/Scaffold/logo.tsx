import Logo from "@/public/assets/value.png";
import Image from "next/image";

const LogoPage = () => {
  return (
    <div className="p-[2px] bg-[#edbf6d] rounded-full">
      <Image src={Logo} alt="Logo" width={42} height={42} className="rounded-full" />
    </div>
  );
};

export default LogoPage;
