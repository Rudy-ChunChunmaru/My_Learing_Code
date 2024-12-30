"use client";
import { useState, useTransition } from "react";

import { useSearchParams } from "next/navigation";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
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

import { login } from "@/actions/login";

type Props = {};

const LoginForm = (props: Props) => {
  const searchParams = useSearchParams();
  const urlErorr =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "u'r account being use with different providers !!! "
      : "";

  const [pending, setPending] = useTransition();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (value: z.infer<typeof LoginSchema>) => {
    setPending(() => {
      setError("");
      setSuccess("");

      login(value).then((result) => {
        setError(result?.error ? result.error : "");
        setSuccess(result?.success ? result.success : "");
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="wellcome back"
      backButtonLable="dont have an account ?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
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
          <FormError massage={error || urlErorr} />
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

export default LoginForm;
