import { footers, tiers } from "@/utils/data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CopyRight from "./_Components/CopyRight";

export default function Pricing() {
  return (
    <section>
      <div className="container max-w-4xl">
        <h2 className="my-4 text-4xl text-center">Pricing</h2>
        <h6 className="mb-6 text-center">
          Prepare for O-level exams like JAMB, WAEC, NECO, and Post-UTME with
          Exam-GPT. Our app is your ultimate companion for acing these crucial
          tests. With meticulous design and innovative features, we empower
          students to conquer exams with confidence.
        </h6>
      </div>
      <main className="container max-w-4xl">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card>
              <CardHeader className="text-center bg-mainColor">
                <CardTitle> {tier.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center mt-2">
                  <h4> ₦{tier.price}</h4>
                  <span>/mo</span>
                </div>
                <ul>
                  {tier.description.map((line) => (
                    <h4 className="my-1 text-center" key={line}>
                      {line}
                    </h4>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant={tier.buttonVariant as "outline" | "default"}
                  className="w-full"
                >
                  {tier.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </ul>
      </main>
      {/* Footer */}
      <footer className="pt-6 pb-6 mt-20 border-t ">
        <ul className="container flex max-w-6xl gap-4 justify-evenly">
          {footers.map((footer) => (
            <div>
              <h6>{footer.title}</h6>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="/">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
        <CopyRight />
      </footer>
    </section>
  );
}
