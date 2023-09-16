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

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { closeChangePasswordModal } from "@/featuers/modals/modalSlice";
import { axiosInstance } from "@/lib/axiosInstance";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

const ChangePasswordModal = () => {
  const dispatch = useAppDispatch();

  const { isChangePasswordModalOpen } = useAppSelector((state) => state.modals);

  const UserValidation = z.object({
    oldPassword: z
      .string()
      .min(8, { message: "Minimum 8 characters." })
      .max(30, { message: "Maximum 30 caracters." }),
    newPassword: z
      .string()
      .min(8, { message: "Minimum 8 characters." })
      .max(30, { message: "Maximum 30 caracters." }),
  });
  const form = useForm<z.infer<typeof UserValidation>>({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof UserValidation>) => {};

  return (
    <Dialog
      open={isChangePasswordModalOpen}
      onOpenChange={() => dispatch(closeChangePasswordModal())}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl text-center">Account</DialogTitle>
          <span className="text-sm text-center text-muted-foreground">
            Manage your account information
          </span>
        </DialogHeader>
        <Form {...form}>
          <form
            className="flex flex-col justify-start gap-6 p-3 bg-background"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="oldPassword"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full gap-3">
                  <FormLabel className="text-base-semibold ">
                    Old Password
                  </FormLabel>
                  <FormControl>
                    <Input type="text" className="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full gap-3">
                  <FormLabel className="text-base-semibold ">
                    New Password
                  </FormLabel>
                  <FormControl>
                    <Input type="text" className="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              variant="default"
              className=""
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <span>Update</span>
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePasswordModal;
