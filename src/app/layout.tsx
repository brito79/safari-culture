import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Auth0Provider } from "@auth0/nextjs-auth0";

import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from 'sonner';
import { auth0 } from "@/lib/auth0";

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
  // Get initial user session for hydration
  const session = await auth0.getSession();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} font-sans antialiased`}
      >
        <Auth0Provider user={session?.user}>
          <ThemeProvider attribute="class"
          defaultTheme="system"
            disableTransitionOnChange>
            {children}
            <Toaster position="top-right" />
          </ThemeProvider>
        </Auth0Provider>
      </body>
    </html>
  );
}
