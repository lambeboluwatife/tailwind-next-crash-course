import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Tailwind Next.js Crash Course",
  description: "Using this template to learn and practice Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-faculty">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
