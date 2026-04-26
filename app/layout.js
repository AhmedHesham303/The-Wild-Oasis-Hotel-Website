import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

export const metadata = {
  title: {
    template: "%s | The wild oasis",
    default: "The Wild OOasis",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
        </header>
        <Navigation />
        <main> {children}</main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
