import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Navbar/Nav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Helm Textile Mills | Textile Company",
  description:
    "Helm Textile Mills is a leading textile company that specializes in producing high-quality fabrics for various industries. From upholstery to automotive, we provide a wide range of fabrics that are durable, stylish, and sustainable.",
  keywords: ["Helm Textile Mills", "Textile Company", "Fabric Manufacturer"],
  openGraph: {
    title: "Helm Textile Mills | Textile Company",
    description:
      "Helm Textile Mills is a leading textile company that specializes in producing high-quality fabrics for various industries. From upholstery to automotive, we provide a wide range of fabrics that are durable, stylish, and sustainable.",
    type: "website",
    url: "https://helmtex.co.za",
    siteName: "Helm Textile Mills",
  },
  twitter: {
    title: "Helm Textile Mills | Textile Company",
    description:
      "Helm Textile Mills is a leading textile company that specializes in producing high-quality fabrics for various industries. From upholstery to automotive, we provide a wide range of fabrics that are durable, stylish, and sustainable.",
    card: "summary_large_image",
    site: "@HelmTextileMills",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://helmtex.co.za",
  },
  alternates: {
    canonical: "https://helmtex.co.za",
  },
  alternates: {
    canonical: "https://helmtex.co.za",
  },
  alternates: {
    canonical: "https://helmtex.co.za",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav/>
        {children}
      </body>
    </html>
  );
}
