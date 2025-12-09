import type { Metadata } from "next";
import { Montserrat } from "next/font/google";


import "./globals.css";
import { Toaster } from 'sonner';
import { auth0 } from "@/lib/auth0";
import { Auth0Provider } from "@auth0/nextjs-auth0";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Safari Culture - Wilderness Namibia",
  description: "Discover luxury safari experiences in Namibia's most pristine wilderness areas",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get initial user session for hydration (v4 best practice)
  const session = await auth0.getSession();
  const user = session?.user;

  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-sans antialiased`}
      >
        <Auth0Provider user={user}>
          {children}
        </Auth0Provider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
