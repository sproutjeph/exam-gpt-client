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
  closeRegisterUserModal,
  openActivateUserModal,
  openLoginModal,
} from "@/featuers/modals/modalSlice";
import { IRegUser } from "@/types/types";
import { axiosInstance } from "@/lib/axiosInstance";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Facebook, Loader2, LucideEye, LucideEyeOff } from "lucide-react";
import Image from "next/image";
import { saveActivationToken } from "@/featuers/userSlice";
import { useState } from "react";

export const registerFormSchema = z.object({
  name: z.string().min(1, "First Name is Required").max(100),

  email: z.string().email("Invalid email").min(1, "Email is Required"),
  password: z
    .string()
    .min(6, "password must be greater than 6 characters")
    .max(20),
});

const RegisterUserModal = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const router = useRouter();

  const dispatch = useAppDispatch();
  const { isRegisterUserModalOpen } = useAppSelector((state) => state.modals);

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
        toast.success(`${res.data.message || "Registration Successed"}`);
        form.reset();
        dispatch(saveActivationToken(res.data.activationToken));
        dispatch(closeRegisterUserModal());
        dispatch(openActivateUserModal());
      }
      console.log(res);
    } catch (error: any) {
      toast.error(`${error.response.data.msg}`);
    }
  };

  return (
    <Dialog
      open={isRegisterUserModalOpen}
      onOpenChange={() => dispatch(closeRegisterUserModal())}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center justify-center pb-2 gap-y-4">
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
                disabled={isLoading}
                size="lg"
                variant="default"
                className="w-full"
              >
                {isLoading ? (
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
          <Button variant="ghost">
            <Image
              src="/google-logo.svg"
              width="40"
              height="40"
              alt="google logo"
            />
          </Button>
          <Button variant="ghost">
            <Facebook />
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
