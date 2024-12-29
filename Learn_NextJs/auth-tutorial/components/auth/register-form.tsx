"use client";
import { useState, useTransition } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";
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
import { useForm } from "react-hook-form";
import { FormError } from "@/components/form-error";
import { FormSucess } from "@/components/form-success";
import CardWrapper from "@/components/auth/card-wrapper";

import { register } from "@/actions/register";

type Props = {};

const RegisterForm = (props: Props) => {
  const [pending, setPending] = useTransition();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (value: z.infer<typeof RegisterSchema>) => {
    setPending(() => {
      setError("");
      setSuccess("");

      register(value).then((result) => {
        setError(result.error);
        setSuccess(result.success);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="create account"
      backButtonLable="already have an account ?"
      backButtonHref="/auth/login"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={pending}
                        placeholder="user"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={pending}
                        placeholder="user@example.com"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={pending}
                        placeholder="Password"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <FormError massage={error} />
          <FormSucess massage={success} />
          <Button
            type="submit"
            className="w-full"
            variant="default"
            disabled={pending}
          >
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default RegisterForm;
