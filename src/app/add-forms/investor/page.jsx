"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SALES_POST_API } from "@/constants/constent";
import { defaultToaster, investorSchema } from "@/utils/utils";
import { useEffect, useState } from "react";
import { categoryData, countryCodes } from "../../../data/data";

const InvestorPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const form = useForm({
    resolver: zodResolver(investorSchema),
    defaultValues: {
      name: "",
      email: "",
      extension: "",
      phone: "",
      company: "",
      product: "",
      category: "investor",
    },
  });

  const onSubmit = async (data) => {
    const newData = {
      ...data,
      phone: `${data.extension}-${data.phone}`, // Concatenate extension and number
    };
    delete newData.extension;

    try {
      let response = await fetch(`${SALES_POST_API}`, {
        method: "POST",
        body: JSON.stringify(newData),
        headers: {
          "Content-type": "application/json",
        },
      });

      response = await response.json();
      if (response) {
        // toaster("Success", response);
        defaultToaster();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="col-span-12 max-md:col-span-12">
      {/* <h3 className="py-2 underline  text-2xl capitalize">Add {title}</h3> */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="formDiv">
          {/* Name input field */}
          <div className="formFieldDiv">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={`labelClass`}>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="bidaal" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Email Input field */}
          <div className="formFieldDiv">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={`labelClass`}>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="bidaal@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Phone Input filed */}
          <div className="formFieldDiv">
            <div className="flex space-x-1 max-sm:flex-col">
              <div className="w-auto max-sm:w-full">
                <FormField
                  control={form.control}
                  name="extension"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={`labelClass`}>Entension</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Extension" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {countryCodes
                            .sort((a, b) => a.country - b.country)
                            .map((data, i) => (
                              <SelectItem key={i} value={data.code}>
                                {`${data.country} (${data.code})`}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Number */}
              <div className="formFieldDiv grow">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={`labelClass`}>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="phone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          {/* company Input Field */}
          <div className="formFieldDiv">
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={`labelClass`}>company</FormLabel>
                  <FormControl>
                    <Input placeholder="company" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* message Text Area */}
          <div className="formFieldDiv">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={`labelClass`}>message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Category Input field */}
          <div className="hidden formFieldDiv">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={`labelClass`}>Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a Category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem
                        key={categoryData[2].value}
                        value={categoryData[2].value}
                      >
                        {categoryData[2].label}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <Button type="submit" className="w-full mt-5">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default InvestorPage;
