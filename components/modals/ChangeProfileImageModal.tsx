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
} from "@/components/ui/form";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import { closeChangeProfileImageModal } from "@/featuers/modals/modalSlice";
import { axiosInstance } from "@/lib/axiosInstance";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { isBase64Image } from "@/lib/utils";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const ChangeProfileImageModal = () => {
  const [files, setFiles] = useState<File[]>([]);

  const dispatch = useAppDispatch();

  const { isChangeProfileImageModalOpen } = useAppSelector(
    (state) => state.modals
  );
  const user = useCurrentUser();

  const UserValidation = z.object({
    profile_photo: z.string().url().nonempty(),
  });
  const form = useForm<z.infer<typeof UserValidation>>({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      profile_photo: user?.image ? user.image : "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof UserValidation>) => {
    const blob = values.profile_photo;

    try {
      const hasImageChanged = isBase64Image(blob);
      if (hasImageChanged) {
        const imgRes = await axiosInstance.put("/update-avatar", {
          avatar: blob,
        });
        if (imgRes && imgRes.data) {
          toast.success("Profile image updated successfully");
          dispatch(closeChangeProfileImageModal());
        }
      }
    } catch (error: any) {
      toast.error(error?.response?.data.msg || "Something went wrong");
    }
  };
  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();
    const fileReader = new FileReader();
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files));
      if (!file.type.includes("image")) return;
      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";
        fieldChange(imageDataUrl);
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <Dialog
      open={isChangeProfileImageModalOpen}
      onOpenChange={() => dispatch(closeChangeProfileImageModal())}
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
                        width={100}
                        height={100}
                        priority
                        className="object-contain w-full h-full rounded-full"
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
                      onChange={(e) => {
                        handleImage(e, field.onChange);
                      }}
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
