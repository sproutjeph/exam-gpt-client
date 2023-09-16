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
import { closeChangeProfileModal } from "@/featuers/modals/modalSlice";
import { axiosInstance } from "@/lib/axiosInstance";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import Image from "next/image";

const ChangeProfileImageModal = () => {
  const dispatch = useAppDispatch();

  const { isChangeProfileModalOpen } = useAppSelector((state) => state.modals);
  const { user } = useAppSelector((state) => state.user);

  const UserValidation = z.object({
    profile_photo: z.string().url().nonempty(),
  });
  const form = useForm<z.infer<typeof UserValidation>>({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      profile_photo: user?.imageUrl ? user.imageUrl : "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof UserValidation>) => {};

  return (
    <Dialog
      open={isChangeProfileModalOpen}
      onOpenChange={() => dispatch(closeChangeProfileModal())}
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
              name="profile_photo"
              render={({ field }) => (
                <FormItem className="flex items-center gap-4">
                  <FormLabel className="account-form_image-label">
                    {field.value ? (
                      <Image
                        src={field.value}
                        alt="profile_icon"
                        width={96}
                        height={96}
                        priority
                        className="object-contain rounded-full"
                      />
                    ) : (
                      <Image
                        src="/assets/profile.svg"
                        alt="profile_icon"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    )}
                  </FormLabel>
                  <FormControl className="flex-1 text-gray-200 text-base-semibold">
                    <Input
                      type="file"
                      accept="image/*"
                      placeholder="Add profile photo"
                      className=""
                      onChange={(e) => {}}
                    />
                  </FormControl>
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

export default ChangeProfileImageModal;
