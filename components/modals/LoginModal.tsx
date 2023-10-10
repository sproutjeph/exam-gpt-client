"use client";

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

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import {
  closeLoginModal,
  openRegisterUserModal,
} from "@/featuers/modals/modalSlice";
import { IRegUser } from "@/types/types";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Facebook, Loader2, LucideEye, LucideEyeOff } from "lucide-react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useLoginMutation } from "@/featuers/auth/authApi";

export const FormSchema = z.object({
  email: z.string().email("Invalid email").min(1, "Email is Required"),
  password: z
    .string()
    .min(6, "password must be greater than 6 characters")
    .max(20),
});

const LoginModal = () => {
  const [login, { error, isSuccess }] = useLoginMutation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  const router = useRouter();

  const dispatch = useAppDispatch();
  const { isLoginModalOpen } = useAppSelector((state) => state.modals);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const data: IRegUser = {
      email: values.email,
      password: values.password,
    };

    await login(data);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Login successful");
      dispatch(closeLoginModal());
      form.reset();
      router.push("/dashboard");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.msg);
      } else {
        console.log("Something went wrong");
      }
    }
  }, [error, isSuccess]);

  return (
    <Dialog
      open={isLoginModalOpen}
      onOpenChange={() => dispatch(closeLoginModal())}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center justify-center pb-2 gap-y-4">
            <span className="flex items-center text-xl font-bold gap-x-2">
              Login
            </span>
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
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
                <FormItem className="my-6">
                  <FormLabel className="">Password</FormLabel>

                  <FormControl>
                    <div className="relative">
                      <Input
                        disabled={isLoading}
                        {...field}
                        type={isPasswordVisible ? "text" : "password"}
                      />
                      {isPasswordVisible ? (
                        <LucideEyeOff
                          className="absolute cursor-pointer top-2 right-2"
                          onClick={togglePasswordVisibility}
                        />
                      ) : (
                        <LucideEye
                          className="absolute cursor-pointer top-2 right-2"
                          onClick={togglePasswordVisibility}
                        />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button
                disabled={false}
                onClick={() => {}}
                size="lg"
                variant="default"
                className="w-full"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <span>Sign in</span>
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
        <h4 className="mt-4 mb-2 text-center">Or Sign in with</h4>
        <div className="flex items-center justify-center gap-4">
          <Button variant="ghost" onClick={() => signIn("google")}>
            <Image
              src="/google-logo.svg"
              width="40"
              height="40"
              alt="google logo"
            />
          </Button>
          <Button variant="ghost" onClick={() => signIn("facebook")}>
            <Facebook />
          </Button>
        </div>
        <div className="text-center">
          <span>Dont have an account?</span>
          <span
            className="ml-4 cursor-pointer text-blue"
            onClick={() => {
              dispatch(closeLoginModal());
              dispatch(openRegisterUserModal());
            }}
          >
            Sign Up
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
