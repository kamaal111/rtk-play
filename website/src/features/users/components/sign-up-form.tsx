import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
    id: "f11216fd-4069-4eec-8962-78ef4e58cf46",
    name: "email",
    type: "email",
    placeholder: "me@email.com",
    title: "Email",
    description: "This is your login email address.",
  },
  {
    id: "49bce2f4-3c2e-4254-8f13-7dc8d046b0ac",
    name: "password",
    type: "password",
    title: "Password",
    description: "Login password.",
  },
];

function SignUpForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  function onSubmit(values: FormSchema) {
    console.log(values);
  }

  return (
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
                    <FormDescription>{mappedField.description}</FormDescription>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          );
        })}
        <Button type="submit">Sign up</Button>
      </form>
    </Form>
  );
}

export default SignUpForm;
