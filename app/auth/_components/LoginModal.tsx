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
} from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import {
  closeLoginModal,
  openRegisterUserModal,
} from "@/featuers/modals/modalSlice";
import { Github, Loader2, LucideEye, LucideEyeOff } from "lucide-react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useState, useTransition } from "react";
import { LoginSchema } from "@/shemas";
import { loginUser } from "@/actions/loginUser";
import { FormError } from "@/components/base-components/FormError";
import { FormSuccess } from "@/components/base-components/FormSuccess";

const LoginModal = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const dispatch = useAppDispatch();
  const { isLoginModalOpen } = useAppSelector((state) => state.modals);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      loginUser(values).then((data) => {
        if (data?.error) {
          form.reset();
          setError(data?.error);
        } else {
          setSuccess("Logedin successed");
        }
      });
    });
  };

  return (
    <Dialog
      open={isLoginModalOpen}
      onOpenChange={() => dispatch(closeLoginModal())}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center justify-center pb-2 gap-y-4">
            <FormError message={error} />
            <FormSuccess message={success} />
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
                      disabled={isPending}
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
                        disabled={isPending}
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
                {isPending ? (
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
          <Button variant="ghost" onClick={() => signIn("github")}>
            <Github />
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
