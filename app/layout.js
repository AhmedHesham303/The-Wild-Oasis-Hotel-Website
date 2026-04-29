import { Josefin_Sans } from "next/font/google";
import "./_styles/globals.css";
import Header from "./_components/Header";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: {
    template: "%s | The wild oasis",
    default: "The Wild OOasis",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <Header />
        <main className="max-w-7xl  mx-auto "> {children}</main>
      </body>
    </html>
  );
}
