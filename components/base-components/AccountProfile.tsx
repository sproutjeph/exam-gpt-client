"use client";

import * as z from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { FC } from "react";
import { isBase64Image } from "@/lib/utils";
import { updateUser } from "@/lib/actions/user.action";

interface AccountProfileProps {
  user?: {
    id: string;
    objectId: string;
    email: string;
    image: string;
    name: string;
  };
  btnTitle: string;
}

const UserValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(30, { message: "Maximum 30 caracters." }),
  email: z.string().email(),
});

const AccountProfile: FC<AccountProfileProps> = ({ user, btnTitle }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<z.infer<typeof UserValidation>>({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      name: user?.name ? user.name : "",
      email: user?.email ? user.email : "",
      profile_photo: user?.image ? user.image : "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserValidation>) => {
    //   console.log(values);
    //   const blob = values.profile_photo;
    //   const hasImageChanged = isBase64Image(blob);
    //   if (hasImageChanged) {
    //     const imgRes = await startUpload(files);
    //     if (imgRes && imgRes[0].fileUrl) {
    //       values.profile_photo = imgRes[0].fileUrl;
    //     }
    //   }
    //   await updateUser(
    //     user?.id!,
    //     values.name,
    //     values.email,
    //     values.profile_photo
    //   );
    // };
    // const handleImage = (
    //   e: ChangeEvent<HTMLInputElement>,
    //   fieldChange: (value: string) => void
    // ) => {
    //   e.preventDefault();
    //   const fileReader = new FileReader();
    //   if (e.target.files && e.target.files.length > 0) {
    //     const file = e.target.files[0];
    //     setFiles(Array.from(e.target.files));
    //     if (!file.type.includes("image")) return;
    //     fileReader.onload = async (event) => {
    //       const imageDataUrl = event.target?.result?.toString() || "";
    //       fieldChange(imageDataUrl);
    //     };
    //     fileReader.readAsDataURL(file);
    //   }
  };

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

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full gap-3">
              <FormLabel className="text-base-semibold ">Name</FormLabel>
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

        <Button type="submit" variant="default" className="">
          {btnTitle}
        </Button>
      </form>
    </Form>
  );
};

export default AccountProfile;
