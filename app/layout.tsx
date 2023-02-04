import { Inter } from "@next/font/google";
import { GlobalContextProvider } from "./context/store";
import globalStyle from "./styles/global.module.scss";

const inter = Inter({
  subsets: ["latin"],
  display: "optional",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${globalStyle.root}`}>
      <head />
      <body>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
