import Link from "next/link";
import { FC } from "react";

interface CopyRightProps {}

const CopyRight: FC<CopyRightProps> = ({}) => {
  return (
    <h6 className="my-4 text-center text-primary">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Exam-GPT
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </h6>
  );
};

export default CopyRight;
