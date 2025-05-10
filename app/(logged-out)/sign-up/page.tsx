"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { PersonStandingIcon } from "lucide-react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { PasswordInput } from "@/components/ui/password-input";
import { useRouter } from "next/navigation"; //

const accountTypeSchema = z
  .object({
    accountType: z.enum(["personal", "Company"]),
    companyName: z.string().optional(),
    numberOfEmployees: z.coerce.number().optional(),
    acceptTerms: z
      .boolean({
        required_error: "you must accept the terms and conditions",
      })
      .refine((checked) => checked, "you must accept the terms and conditions"),
  })
  .superRefine((data, ctx) => {
    // CHECK COMPANY NAME IF ACCOUNT TYPE IS COMPANY
    if (data.accountType === "Company" && !data.companyName) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["companyName"],
        message: "company name is required",
      });
    }

    // CHECK NUMBER OF EMPLOYEES IF ACCOUNT TYPE IS COMPANY
    if (
      data.accountType === "Company" &&
      (!data.numberOfEmployees || data.numberOfEmployees < 0)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["numberOfEmployees"],
        message: "number of employees must be greater than 0",
      });
    }
  });

const passwordSchema = z
  .object({
    password: z.string().min(6, "password must be at least 6 characters"),
    // .refine((password) => {
    //   // must contain one uppercase or lowercase letter, one number and one special character
    //   const regex =
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    //   return regex.test(password);
    // }),

    passwordConfirm: z.string(),
  })
  .superRefine((data, ctx) => {
    // CHECK PASSWORD MATCH
    if (data.password !== data.passwordConfirm) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["passwordConfirm"],
        message: "passwords do not match",
      });
    }
  });

const baseSchema = z
  .object({
    email: z.string().email("invalid email"),

    dob: z.date().refine((date) => {
      const today = new Date();
      const eighteenYearsAgo = new Date(
        today.getFullYear() - 1,
        today.getMonth(),
        today.getDate()
      );
      return date <= eighteenYearsAgo;
    }, "you must be at least 18 years old"),
  })
  .superRefine((data, ctx) => {});

const formSchema = baseSchema.and(accountTypeSchema).and(passwordSchema);

export default function SignUpPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      //   password: "",
      accountType: "personal",
      //   companyName: "",
      //   numberOfEmployees: 0,
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form Data:", data);
    router.push("/dashboard");
  };

  const acceptTerms = form.watch("acceptTerms");
  const accountType = form.watch("accountType");
  const dobFormDate = new Date();
  dobFormDate.setFullYear(dobFormDate.getFullYear() - 120);

  return (
    <>
      <PersonStandingIcon size={50} />
      <Card className="w-full max-w-sm space-y-4">
        <CardHeader>
          <CardTitle>Sign up</CardTitle>
          <CardDescription>Sign Up to your supportMe account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@gmail.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This is your email address to login into support account
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="accountType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>account type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="select an account type"></SelectValue>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="personal">personal</SelectItem>
                        <SelectItem value="Company">company</SelectItem>
                      </SelectContent>
                      <FormMessage />
                    </Select>
                  </FormItem>
                )}
              />

              {accountType === "Company" && (
                <>
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel> Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Company Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="numberOfEmployees"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel> Employees</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="number of employees"
                            type="number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2 pt-2">
                    <FormLabel> date of birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className="normal-case flex justify-between pr-1"
                          >
                            {!!field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>pick a date</span>
                            )}

                            <CalendarIcon className="opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent align="start" className="w-auto p-0">
                        <Calendar
                          mode="single"
                          defaultMonth={field.value}
                          selected={field.value}
                          onSelect={field.onChange}
                          fixedWeeks
                          weekStartsOn={1}
                          fromDate={dobFormDate}
                          toDate={new Date()}
                          captionLayout="dropdown-buttons"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder="*********"
                        type="password"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* confirm password  */}

              <FormField
                control={form.control}
                name="passwordConfirm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>confirm password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder="*********"
                        type="password"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="acceptTerms"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center space-x-2 gap-2">
                      <FormControl>
                        <Checkbox
                          id="acceptTerms"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel
                        htmlFor="acceptTerms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I accept the terms and conditions
                      </FormLabel>
                    </div>
                    <FormDescription>
                      By Signing up you agree to our{" "}
                      <Link
                        href={"/terms"}
                        className="text-primary hover:underline"
                      >
                        terms and conditions
                      </Link>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="mt-4"
                onClick={handleSubmit}
                disabled={!acceptTerms}
              >
                Sign Up
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="justify-between">
          <small>do you have a account?</small>
          <Button asChild variant="outline" size="sm">
            <Link href="/login">login</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
