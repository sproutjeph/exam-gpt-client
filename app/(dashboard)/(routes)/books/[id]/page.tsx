import { FC } from "react";

interface pageProps {
  params: {
    id: string;
  };
}

const BookDetailsPage: FC<pageProps> = ({ params }) => {
  console.log(params.id);

  return <main className="text-white">Book Details page{params.id}</main>;
};

export default BookDetailsPage;
