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
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux-store/hooks";
import {
  closeActivateUserModal,
  openLoginModal,
} from "@/featuers/modals/modalSlice";
import { IActivateUser } from "@/types/types";
import React, { useEffect, useRef, useState, useTransition } from "react";
import { Loader2, ShieldCheckIcon } from "lucide-react";
import { FormError } from "@/components/base-components/FormError";
import { FormSuccess } from "@/components/base-components/FormSuccess";
import { ActivationSchema } from "@/shemas";

const ActivateUserModal = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const dispatch = useAppDispatch();
  const { activationToken } = useAppSelector((state) => state.user);

  const inputRefs = useRef<HTMLInputElement[] | null[]>([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const { isActivateUserModalOpen } = useAppSelector((state) => state.modals);

  const form = useForm<z.infer<typeof ActivationSchema>>({
    resolver: zodResolver(ActivationSchema),
    defaultValues: {
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
      otp6: "",
    },
  });

  // Function to handle input changes and focus on the next input
  const handleInputChange = (index: number, value: string) => {
    // Check if the input is a digit
    if (/^\d*$/.test(value) && value.length <= 1) {
      const nextIndex = index + 1;

      // Create an object with dynamically generated keys
      const updatedValues = {
        ...form.getValues(),
        [`otp${index + 1}`]: value,
      };

      // Update the form valuesx
      //@ts-ignore
      form.setValue(`otp${index + 1}`, value);

      // Move focus to the next input field
      if (
        nextIndex < inputRefs.current.length &&
        inputRefs.current[nextIndex]
      ) {
        inputRefs.current[nextIndex]!.focus();
      }
    }
  };

  const onSubmit = async (values: z.infer<typeof ActivationSchema>) => {
    setError("");
    setSuccess("");

    const activationCode = `${values.otp1}${values.otp2}${values.otp3}${values.otp4}${values.otp5}${values.otp6}`;

    const data = {
      activationToken,
      activationCode,
    } as IActivateUser;
    console.log(data);

    startTransition(() => {
      // activateUser(activationToken, activationCode).then((data) => {
      //   setError(data.error);
      //   setSuccess(data.success);
      //   form.reset();
      // });
    });
  };

  useEffect(() => {
    let timer: any;
    if (success) {
      //delay to see success message and open login modal
      timer = setTimeout(() => {
        form.reset();
        dispatch(closeActivateUserModal());
        dispatch(openLoginModal());
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [success, error, form, dispatch]);

  return (
    <Dialog
      open={isActivateUserModalOpen}
      onOpenChange={() => dispatch(closeActivateUserModal())}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center justify-center pb-2 gap-y-4">
            <FormError message={error} />
            <FormSuccess message={success} />
            <span className="flex items-center text-xl font-bold gap-x-2">
              Verify Your Account
            </span>
            <span className="text-xs">
              Enter your activation code sent to your email address
            </span>

            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary">
              <ShieldCheckIcon size={40} className="text-white" />
            </div>
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex items-center gap-2 shake">
              {["otp1", "otp2", "otp3", "otp4", "otp5", "otp6"].map(
                (name, i) => (
                  <FormField
                    key={i}
                    name={name}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            disabled={isPending}
                            {...field}
                            maxLength={1}
                            ref={(el) => (inputRefs.current[i] = el)}
                            onChange={(e) =>
                              handleInputChange(i, e.target.value)
                            }
                            className="text-center "
                            type="number"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                )
              )}
            </div>

            <DialogFooter className="p-0 mt-4">
              <Button className="w-full" disabled={isPending}>
                {isPending ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <span>Verify OTP</span>
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
        <div className="text-center">
          <span>Go back to sign in?</span>
          <Button
            variant="ghost"
            className="text-blue"
            onClick={() => {
              dispatch(closeActivateUserModal());
              dispatch(openLoginModal());
            }}
          >
            Sign in
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ActivateUserModal;
