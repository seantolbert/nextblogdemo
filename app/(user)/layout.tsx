import Header from "@/components/Header";
import Banner from "@/components/Banner";

import "../../styles/globals.css";

export const metadata = {
  title: "demo blog",
  description: "this is a super dope blog and you should read it weekly",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
