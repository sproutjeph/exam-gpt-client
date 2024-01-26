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
  closeRegisterUserModal,
  openActivateUserModal,
  openLoginModal,
} from "@/featuers/modals/modalSlice";
import {
  Facebook,
  Github,
  Loader2,
  LucideEye,
  LucideEyeOff,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useTransition } from "react";
import { signIn } from "next-auth/react";
import { RegisterSchema } from "@/shemas";
import { register } from "@/actions/registerUser";
import { FormError } from "@/components/base-components/FormError";
import { FormSuccess } from "@/components/base-components/FormSuccess";
import { saveActivationToken } from "@/featuers/userSlice";
import { useRouter } from "next/navigation";

const RegisterUserModal = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const dispatch = useAppDispatch();
  const { isRegisterUserModalOpen } = useAppSelector((state) => state.modals);

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
        dispatch(saveActivationToken(data.token as string));
      });
    });
  };

  useEffect(() => {
    if (success) {
      //delay and open activation modal
      setTimeout(() => {
        form.reset();
        dispatch(closeRegisterUserModal());
        dispatch(openActivateUserModal());
      }, 1000);
    }
  }, [success, error, form, dispatch]);

  return (
    <Dialog
      open={isRegisterUserModalOpen}
      onOpenChange={() => dispatch(closeRegisterUserModal())}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center justify-center pb-2 gap-y-4">
            <FormError message={error} />
            <FormSuccess message={success} />
            <span className="flex items-center text-xl font-bold gap-x-2">
              Register an Account
            </span>
          </DialogTitle>
        </DialogHeader>

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
                      disabled={isPending}
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
                disabled={isPending}
                size="lg"
                variant="default"
                className="w-full"
              >
                {isPending ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <span>Sign Up</span>
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
        <h4 className="mt-4 mb-2 text-center">Or join with</h4>
        <div className="flex items-center justify-center ">
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
          <span>Already have an account?</span>
          <span
            className="ml-4 cursor-pointer text-blue"
            onClick={() => {
              dispatch(closeRegisterUserModal());
              dispatch(openLoginModal());
            }}
          >
            Sign In
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterUserModal;
