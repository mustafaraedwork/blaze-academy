import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blaze Academy - منصة التعليم الإلكتروني | دورات تدريبية احترافية",
  description: "انضم إلى Blaze Academy واكتسب مهارات جديدة مع أفضل الدورات التدريبية في البرمجة، التصميم، التسويق والمزيد. تعلم من خبراء واحصل على شهادات معتمدة.",
  keywords: ["تعليم إلكتروني", "دورات تدريبية", "تعلم أونلاين", "كورسات", "Meta", "فيسبوك", "انستغرام"],
  authors: [{ name: "Blaze Academy" }],
  openGraph: {
    title: "Blaze Academy - منصة التعليم الإلكتروني",
    description: "أفضل منصة تعليمية عربية لتعلم المهارات الرقمية",
    type: "website",
    locale: "ar_IQ",
    siteName: "Blaze Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blaze Academy - منصة التعليم الإلكتروني",
    description: "أفضل منصة تعليمية عربية لتعلم المهارات الرقمية",
  },
  robots: "index, follow",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}