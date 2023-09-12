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

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Facebook } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { IRegUser } from "@/types/types";
import { useRegisterUser } from "@/hooks/useResiterUser";
import { axiosInstance } from "@/lib/axiosInstance";
import toast from "react-hot-toast";

export const registerFormSchema = z.object({
  name: z.string().min(1, "First Name is Required").max(100),

  email: z.string().email("Invalid email").min(1, "Email is Required"),
  password: z
    .string()
    .min(6, "password must be greater than 6 characters")
    .max(20),
});

function RegisterPage() {
  const router = useRouter();

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof registerFormSchema>) => {
    const data: IRegUser = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    try {
      const res = await axiosInstance.post("/register-user", data);
      if (res.data.success === true) {
        toast("Your Registration is successful");
        form.reset();
        router.push(
          `/auth/activate-account/?activationToken=${res.data.activationToken}`
        );
      }
      console.log(res);
    } catch (error: any) {
      toast(`${error.message}`);
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Register your accout</CardTitle>
        <CardDescription>to continue with Exam-GPT</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="outline" className="w-full">
          <div className="flex gap-4">
            {/* < /> */}
            <span>Continue with Google</span>
          </div>
        </Button>
        <Button variant="outline" className="w-full mt-4">
          <div className="flex gap-4">
            <Facebook />
            <span>Continue with Facebook</span>
          </div>
        </Button>
        <div className="flex items-center w-full mt-8 mb-4">
          <Separator className="w-36" />
          <span className="mx-auto">or</span>
          <Separator className="w-36" />
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="name"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="">Name</FormLabel>

                  <FormControl className="">
                    <Input
                      className=""
                      disabled={isLoading}
                      {...field}
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem className="my-4">
                  <FormLabel className="">Email Address</FormLabel>

                  <FormControl className="">
                    <Input
                      className=""
                      disabled={isLoading}
                      {...field}
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              render={({ field }) => (
                <FormItem className="my-4">
                  <FormLabel className="">Password</FormLabel>

                  <FormControl className="">
                    <Input
                      className=""
                      disabled={isLoading}
                      {...field}
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CardFooter className="p-0 mt-4">
              <Button className="w-full" disabled={isLoading}>
                Register
              </Button>
            </CardFooter>
          </form>
        </Form>
        <div className="flex items-center mt-4">
          <h4>Have an account ?</h4>
          <Button variant="link" onClick={() => router.push("/auth/login")}>
            Sign in
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
export default RegisterPage;
