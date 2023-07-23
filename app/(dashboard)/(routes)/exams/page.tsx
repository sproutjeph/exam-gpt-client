import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { examsData } from "@/utils/data";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

interface pageProps {}

const ExamsPage: FC<pageProps> = ({}) => {
  return (
    <main className="p-8 text-white">
      <Tabs defaultValue="JAMB" className="">
        <TabsList className="justify-between w-full">
          {examsData.examTypes.map((exam) => (
            <>
              <TabsTrigger value={exam.name} key={exam.id}>
                {exam.name}
              </TabsTrigger>
            </>
          ))}
        </TabsList>

        {examsData.examTypes.map((exam) => (
          <TabsContent value={exam.name} key={exam.id}>
            <h4 className="my-4 text-lg text-center">{`${exam.name} PAST QUESTION`}</h4>
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {exam.subjects.map((subject) => (
                <Popover key={subject.id}>
                  <PopoverTrigger asChild>
                    <Button variant="main">{subject.name}</Button>
                  </PopoverTrigger>
                  <PopoverContent className="bg-gray-800 border-black w-80">
                    <h4 className="mb-2 text-center text-white">
                      {subject.name}
                    </h4>
                    <div className="grid justify-center grid-cols-3 gap-2">
                      {subject.examYears.map((year, i) => (
                        <Link
                          key={i}
                          href={`/questions/?examType=${exam.name}&subject=${subject.name}&examYear=${year}`}
                        >
                          <Button variant="main">{year}</Button>
                        </Link>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              ))}
            </ul>
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
};

export default ExamsPage;
