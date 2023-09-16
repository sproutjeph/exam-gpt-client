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
  closeProfileModal,
  openChangeProfileModal,
} from "@/featuers/modals/modalSlice";
import { IRegUser } from "@/types/types";
import { axiosInstance } from "@/lib/axiosInstance";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ChevronRight, Facebook, Loader2 } from "lucide-react";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { Avatar, AvatarImage } from "../ui/avatar";

const UserValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(30, { message: "Maximum 30 caracters." }),
  email: z.string().email(),
  phone: z.string().min(11).max(20),
});

const ProfileModal = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  const { isProfileModalOpen } = useAppSelector((state) => state.modals);

  return (
    <Dialog
      open={isProfileModalOpen}
      onOpenChange={() => dispatch(closeProfileModal())}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl text-center">Account</DialogTitle>
          <span className="text-sm text-center text-muted-foreground">
            Manage your account information
          </span>
        </DialogHeader>

        <div className="">
          <div className="">
            <h4>Profile</h4>

            <Separator />
            <div className="flex items-center gap-4 p-2 my-2 rounded-sm cursor-pointer hover:bg-muted">
              <Avatar className="w-12 h-12 ">
                <AvatarImage src={user?.imageUrl || "/no-photo.jpg"} />
              </Avatar>
              <h4>{user?.name || "Jephthah Mbah"}</h4>
              <ChevronRight className="ml-auto" />
            </div>
          </div>
          <div className="">
            <h4>Email Address</h4>

            <Separator />
            <div className="flex items-center gap-4 p-2 my-2 rounded-sm cursor-pointer hover:bg-muted">
              <h4>{user?.email || "donjeph@gmail.com"}</h4>
              <ChevronRight className="ml-auto" />
            </div>
          </div>
          <div className="">
            <h4>Password</h4>

            <Separator />
            <div className="flex items-center gap-4 p-2 my-2 rounded-sm cursor-pointer hover:bg-muted">
              <h4>Change Password</h4>
              <ChevronRight className="ml-auto" />
            </div>
          </div>

          <div className="" onClick={() => dispatch(openChangeProfileModal())}>
            <h4>Profile Image</h4>

            <Separator />
            <div className="flex items-center gap-4 p-2 my-2 rounded-sm cursor-pointer hover:bg-muted">
              <Avatar className="w-12 h-12 ">
                <AvatarImage src={user?.imageUrl || "/no-photo.jpg"} />
              </Avatar>
              <h4>Change Profile Image</h4>
              <ChevronRight className="ml-auto" />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;

const UpdateAccount = () => {
  const { user } = useAppSelector((state) => state.user);

  const UserValidation = z.object({
    name: z
      .string()
      .min(3, { message: "Minimum 3 characters." })
      .max(30, { message: "Maximum 30 caracters." }),
    email: z.string().email(),
    phone: z.string().min(11).max(20),
  });
  const form = useForm<z.infer<typeof UserValidation>>({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      name: user?.name ? user.name : "",
      email: user?.email ? user.email : "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof UserValidation>) => {};
  return (
    <Form {...form}>
      <form
        className="flex flex-col justify-start gap-6 p-3 bg-background"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full gap-3">
              <FormLabel className="text-base-semibold ">Full Name</FormLabel>
              <FormControl>
                <Input type="text" className="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full gap-3">
              <FormLabel className="text-base-semibold ">Email</FormLabel>
              <FormControl>
                <Input type="text" className="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full gap-3">
              <FormLabel className="text-base-semibold ">
                phone Number
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
  );
};

const ChangeProfileImage = () => {
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
  );
};
