import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import UserProvider from "@/lib/UserProvider";


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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} font-sans antialiased`}
      >
        <UserProvider>
          <ThemeProvider attribute="class"
          defaultTheme="system"
            disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </UserProvider>
      </body>
    </html>
  );
}
