"use client";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

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
  closeActivateUserModal,
  openLoginModal,
} from "@/featuers/modals/modalSlice";
import { IActivateUser } from "@/types/types";
import { axiosInstance } from "@/lib/axiosInstance";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";

export const FormSchema = z.object({
  otp1: z.string().min(1, "First OTP Code").max(1),
  otp2: z.string().min(1, "2nd OTP Code").max(1),
  otp3: z.string().min(1, "3rd OTP Code").max(1),
  otp4: z.string().min(1, "4th OTP Code").max(1),
  otp5: z.string().min(1, "5th OTP Code").max(1),
  otp6: z.string().min(1, "6th OTP Code").max(1),
});

const ActivateUserModal = () => {
  const dispatch = useAppDispatch();
  const activationToken = useSearchParams().get("activationToken");

  const { isActivateUserModalOpen } = useAppSelector((state) => state.modals);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
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

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const activationCode = `${values.otp1}${values.otp2}${values.otp3}${values.otp4}${values.otp5}${values.otp6}`;

    const data = {
      activationToken,
      activationCode,
    } as IActivateUser;

    try {
      const res = await axiosInstance.post("/activate-user", data);
      if (res.data.success === true) {
        toast("activation is successful");
        dispatch(closeActivateUserModal());
        dispatch(openLoginModal());
        form.reset();
      }
      console.log(res);
    } catch (error: any) {
      toast(`${error}`);
    }
  };

  return (
    <Dialog
      open={isActivateUserModalOpen}
      onOpenChange={() => dispatch(closeActivateUserModal())}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center justify-center pb-2 gap-y-4">
            <span className="flex items-center text-xl font-bold gap-x-2">
              Activate Account
            </span>
          </DialogTitle>
        </DialogHeader>

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

            <DialogFooter className="p-0 mt-4">
              <Button className="w-full">Activate</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ActivateUserModal;
