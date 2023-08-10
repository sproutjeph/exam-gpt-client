"use client";

import Grid from "@mui/material/Grid";
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

function Copyright(props: any) {
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
}

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
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader className="text-center bg-primary">
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
            </Grid>
          ))}
        </Grid>
      </main>
      {/* Footer */}
      <footer className="pt-6 pb-6 mt-20 border-t ">
        <ul className="container flex max-w-6xl gap-4 justify-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <h6>{footer.title}</h6>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="/">{item}</Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </ul>
        <Copyright sx={{ mt: 5 }} />
      </footer>
      {/* End footer */}
    </section>
  );
}
