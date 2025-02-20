import { Toaster } from "@/components/ui/toaster";
import Footer from "./component/Footer";
import { ThemeProvider } from "./component/theme-provider";
import TopNav from "./component/TopNav";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        />
        {/* <link rel="icon" href="next.svg" type="image/x-icon" /> */}
      </head>
      <body className="relative scroll-none">
        <div className="flex justify-between items-center sticky top-0 backdrop-blur-lg z-[4]">
          <TopNav />
        </div>

        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        <main className=" mx-auto relative max-sm:min-w-full max-sm:mx-0">
          {children}
        </main>
        {/* </ThemeProvider> */}
        <Toaster />
        <footer className="min-w-full flex justify-center items-center py-5 z-50 border-t">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
