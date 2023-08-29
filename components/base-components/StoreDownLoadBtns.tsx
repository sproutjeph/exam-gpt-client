import Image from "next/image";
import Link from "next/link";

const StoreDownLoadBtns = () => {
  return (
    <div className="flex items-center justify-center gap-8 pb-4 ">
      <Link href="/" className="transition-all hover:scale-110">
        <Image src="/apple-btn.svg" height={200} width={200} alt="" />
      </Link>
      <Link href="/" className="transition-all hover:scale-110">
        <Image src="/google-btn.svg" height={200} width={200} alt="" />
      </Link>
    </div>
  );
};

export default StoreDownLoadBtns;
