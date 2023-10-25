import loading from "../../public/loading.gif";
import Image from "next/image";

const Loading = () => {
  return (
    <Image src={loading} width={35} height={35} alt="Loading..." />
  );
};

export default Loading;
