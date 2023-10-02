import "src/app/globals.css";
import { Providers } from "./providers";
// import Loading from "./loading";
import { Suspense } from "react";
import TopNavbar from "@/components/Navbar";

export const metadata = {
  title: "Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Providers>
          <div className=" min-h-screen">
            <TopNavbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
