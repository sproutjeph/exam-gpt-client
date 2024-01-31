import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardDescription, CardTitle } from "@/components/ui/card";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import CustomCard from "./CustomCard";
import { randomUUID } from "crypto";
import { USERS } from "./Users";

const LandingContent = () => {
  return (
    <section className="relative">
      <div
        className="w-full
          blur-[120px]
          rounded-full
          h-32
          absolute
          -z-100
          top-56
        "
      />
      <div
        className="
          px-4
          sm:px-6 
          flex
          flex-col
          overflow-x-hidden
          overflow-visible
        "
      >
        <h2 className=" text-4xl font-extrabold text-center text-white">
          Testimonials
        </h2>

        {[...Array(2)].map((arr, index) => (
          <div
            key={randomUUID()}
            className={twMerge(
              clsx("mt-10 flex flex-nowrap gap-6 self-start", {
                "flex-row-reverse": index === 1,
                "animate-[slide_250s_linear_infinite]": true,
                "animate-[slide_250s_linear_infinite_reverse]": index === 1,
                "ml-[100vw]": index === 1,
              }),
              "hover:paused"
            )}
          >
            {USERS.map((testimonial, index) => (
              <CustomCard
                key={testimonial.name}
                className="w-[320px]
                  shrink-0s
                  rounded-xl
                  dark:bg-gradient-to-t
                  dark:from-border dark:to-background
                "
                cardHeader={
                  <div
                    className="flex
                      items-center
                      gap-4
                  "
                  >
                    <Avatar>
                      <AvatarFallback>
                        <AvatarImage src={String(testimonial.imageUrl)} />
                        <AvatarFallback>AV</AvatarFallback>
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-foreground">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="dark:text-washed-purple-800">
                        {testimonial.name.toLocaleLowerCase()}
                      </CardDescription>
                    </div>
                  </div>
                }
                cardContent={
                  <p className="dark:text-washed-purple-800">
                    {testimonial.message}
                  </p>
                }
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LandingContent;
