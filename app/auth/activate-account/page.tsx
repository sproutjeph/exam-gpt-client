"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { axiosInstance } from "@/lib/axiosInstance";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { IActivateUser } from "@/types/types";

export const registerFormSchema = z.object({
  otp1: z.string().min(1, "First OTP Code").max(1),
  otp2: z.string().min(1, "2nd OTP Code").max(1),
  otp3: z.string().min(1, "3rd OTP Code").max(1),
  otp4: z.string().min(1, "4th OTP Code").max(1),
  otp5: z.string().min(1, "5th OTP Code").max(1),
  otp6: z.string().min(1, "6th OTP Code").max(1),
});

function ActivateAccountPage() {
  const router = useRouter();
  const activationToken = useSearchParams().get("activationToken");

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
      otp6: "",
    },
  });
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof registerFormSchema>) => {
    const activationCode = `${values.otp1}${values.otp2}${values.otp3}${values.otp4}${values.otp5}${values.otp6}`;

    const data = {
      activationToken,
      activationCode,
    } as IActivateUser;

    try {
      const res = await axiosInstance.post("/activate-user", data);
      if (res.data.success === true) {
        toast("activation is successful");
        form.reset();
        router.push("/auth/login");
      }
      console.log(res);
    } catch (error: any) {
      toast(`${error}`);
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Activate your accout</CardTitle>
        <CardDescription>
          Enter the activation code sent to you email
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex items-center gap-2 ">
              <FormField
                name="otp1"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input disabled={isLoading} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="otp2"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input disabled={isLoading} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="otp3"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="">
                      <Input className="" disabled={isLoading} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="otp4"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input disabled={isLoading} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="otp5"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input disabled={isLoading} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="otp6"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input disabled={isLoading} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <CardFooter className="p-0 mt-4">
              <Button className="w-full">Activate</Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
export default ActivateAccountPage;
