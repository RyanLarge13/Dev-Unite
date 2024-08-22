import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider, SignInButton, SignedOut } from "@clerk/nextjs";
import Nav from "@/components/Nav";
import Messages from "@/components/Messages";

export const metadata: Metadata = {
  title: "Dev Unite",
  description: "Build Software Together",
  icons: ["/assets/logo.jpeg"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="pb-10 pt-20 no-scrollbar">
          <Nav />
          <SignedOut>
            <SignInButton />
          </SignedOut>
          {children}
          <Messages />
        </body>
      </html>
    </ClerkProvider>
  );
}
