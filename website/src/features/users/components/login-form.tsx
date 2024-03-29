import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useLoginMutation } from "@/features/users/api/users-api";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

type FormSchema = z.infer<typeof formSchema>;

const mappedFields: {
  id: string;
  name: keyof FormSchema;
  type: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  title: string;
  description: string;
}[] = [
  {
    id: "1e3fa756-9d32-4220-90ea-93de78af5fe5",
    name: "email",
    type: "email",
    placeholder: "me@email.com",
    title: "Email",
    description: "This is your login email address.",
  },
  {
    id: "b8fb6477-bc9f-4d93-8bc5-e9374da0f5bb",
    name: "password",
    type: "password",
    title: "Password",
    description: "Login password.",
  },
];

function LoginForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
  });

  const [login, loginResult] = useLoginMutation();

  async function onSubmit({ email, password }: FormSchema) {
    login({ email, password });
  }

  React.useEffect(() => {
    if (loginResult.status === "rejected") {
      toast.error("Wrong credentials provided");
    } else if (loginResult.status === "fulfilled") {
      // Redirect
    }
  }, [loginResult.status]);

  console.log("loginResult", loginResult.data);

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {mappedFields.map((mappedField) => {
            return (
              <FormField
                key={mappedField.id}
                control={form.control}
                name={mappedField.name}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>{mappedField.title}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={mappedField.placeholder}
                          type={mappedField.type}
                        />
                      </FormControl>
                      <FormDescription>
                        {mappedField.description}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            );
          })}
          <Button type="submit">Login</Button>
        </form>
      </Form>
      <Toaster />
    </>
  );
}

export default LoginForm;
