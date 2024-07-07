"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Podcast Title must be at least 2 characters.",
  }),
  podcastDescription: z.string(),
  // email: z.string().regex(emailRegex, "Invalid email address"),
});

const voiceCategories = ["alloy", "shimmer", "nova", "echo", "fable", "onyx"];

const CreatePodcast = () => {
  const [voiceType, setVoiceType] = useState<string | null>("");
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      podcastDescription: "",
      // email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <section className="mt-10 ">
      <h1 className="text-20 font-bold text-white-1">Creat Podcast </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-12 flex w-full flex-col"
        >
          <div className="flex flex-col gap-[30px] border-b border-black-5 pb-10">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2.5">
                  <FormLabel className="text-16 font-bold text-white-1">
                    Podcast Title
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="input-class focus-visible:ring-orange-1"
                      placeholder="shadcn input"
                      {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage className="text-white-1 w-full flex flex-row" />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-2.5">
              <Label className="text-16 font-bold text-white-1">
                Sellect AI voice
              </Label>
              <Select onValueChange={(value) => setVoiceType(value)}>
                <SelectTrigger className={cn("text-16 text-gray-1")}>
                  <SelectValue
                    placeholder="Select AI Voice"
                    className="placeholder:text-gray-1"
                  />
                </SelectTrigger>
                <SelectContent className="text-16 border-none bg-black-1 font-bold text-white-1 focus:ring-orange-1">
                  {voiceCategories.map((voice) => {
                    console.log(voice);
                    return (
                      <SelectItem
                        key={voice}
                        className="capitalize focus:bg-orange-1"
                        value={voice}
                      >
                        {voice}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
                {voiceType && (
                  <audio
                    src={`/${voiceType}.mp3`}
                    autoPlay
                    className="hidden"
                  />
                )}
              </Select>
            </div>

            <FormField
              control={form.control}
              name="podcastDescription"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2.5">
                  <FormLabel className="text-16 font-bold text-white-1">
                    Description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="input-class focus-visible:ring-orange-1"
                      placeholder="Write a short podcast description"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-white-1 w-full flex flex-row" />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </section>
  );
};

export default CreatePodcast;
