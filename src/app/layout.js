import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add weights you need
});

export const metadata = {
  title: "Portfolio",
   icons: {
    icon: '/logo.ico', // or '/favicon.png'
  },
  description: "A portfolio showcasing my work and skills",
  viewport: "width=device-width, initial-scale=1.0",
  colorScheme:"light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}