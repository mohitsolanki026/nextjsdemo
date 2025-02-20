import { toast } from "@/hooks/use-toast";
import { z } from "zod";

const randomWords = [
  "Innovation",
  "technology",
  "exploration",
  "growth",
  "design",
  "engineering",
  "vision",
  "future",
  "creativity",
  "teamwork",
  "challenge",
  "solutions",
  "journey",
  "discovery",
  "strategy",
  "development",
  "progress",
  "inspiration",
];

export const generateRandomDescription = (wordCount = 300) => {
  const randomText = [];
  for (let i = 0; i < wordCount; i++) {
    const randomWord =
      randomWords[Math.floor(Math.random() * randomWords.length)];
    randomText.push(randomWord);
  }
  return randomText.join(" ") + ".";
};

export const spliceParaInWord = (para, wordCount = 30) => {
  const arrOfPara = [];
  const words = para.split(" ");
  for (let i = 0; i < words.length; i += wordCount) {
    let para = "";
    for (let j = i; j < i + wordCount; j++) {
      if(words.length == j){
        break;
      }
      para += words[j] + " ";
    }
    arrOfPara.push(para);
  }
  return arrOfPara;
};

export const dateConvert = (dateValue) => {
  const date = new Date(dateValue);
};

export const defaultToaster = () => {
  toast({
    description: (
      <div>
        <pre className="mt-2 w-[340px] rounded-md bg-black p-4">
          <code className="text-green-100 text-xl">
            {JSON.stringify("Success", null, 2)}
          </code>
        </pre>
      </div>
    ),
  });
};

export const toaster = (title, desc) => {
  toast({
    title: title,
    description: (
      <div>
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(desc, null, 2)}</code>
        </pre>
      </div>
    ),
  });
};

export const salesSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().includes("@", { message: "Email should contain @" }),
  extension: z.string(),
  phone: z
    .string()
    .min(10, {
      message: "phone must be at least 10 characters.",
    })
    .max(10, { message: " phone must be 10 characters." }),
  company: z.string(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  category: z.string().min(require, {
    message: "Username must be at least 2 characters.",
  }),
});

export const customerSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().includes("@", { message: "Email should contain @" }),
  extension: z.string(),
  phone: z
    .string()
    .min(10, {
      message: "phone must be at least 10 characters.",
    })
    .max(10, { message: " phone must be 10 characters." }),
  company: z.string(),
  product: z.string({
    required_error: "Please select an Product to display.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  category: z.string().min(require, {
    message: "Username must be at least 2 characters.",
  }),
});

export const investorSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().includes("@", { message: "Email should contain @" }),
  extension: z.string(),
  phone: z
    .string()
    .min(10, {
      message: "phone must be at least 10 characters.",
    })
    .max(10, { message: " phone must be 10 characters." }),
  company: z.string(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  category: z.string().min(require, {
    message: "Username must be at least 2 characters.",
  }),
});
