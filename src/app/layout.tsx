import type { Metadata } from "next";
import { Montserrat } from "next/font/google";


import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
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
  // Get initial user session for hydration
 

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} font-sans antialiased`}
      >
        
          <ThemeProvider attribute="class"
          defaultTheme="system"
            disableTransitionOnChange>
            <Auth0Provider>
                {children}
            </Auth0Provider>
            <Toaster position="top-right" />
          </ThemeProvider>
        
      </body>
    </html>
  );
}
