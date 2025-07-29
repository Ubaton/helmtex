import localFont from "next/font/local";
import "./globals.css";
import Nav from "../components/Navbar/Nav";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
// import { Toaster } from "../../components/ui/sonner";

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
  title: "Helm Textile Mills",
  description:
    "Helm Textile Mills is a leading textile company that specializes in producing high-quality fabrics for various industries. From upholstery to automotive, we provide a wide range of fabrics that are durable, stylish, and sustainable.",
  keywords: [
    "Helm Textile Mills", "South Africa textile Manufacturer,", "Upholstery Fabrics", "Automotive Fabrics", "Sustainable Textiles", "Fire-retardant Fabrics", "Anti-microbal Textiles", "Commercial Contract Fabrics", "Custom Woven Fabrics", "Local Fabric Mill"
  ],
  openGraph: {
    title: "Helm Textile Mills",
    description:
      "Helm Textile Mills is a leading textile company that specializes in producing high-quality fabrics for various industries. From upholstery to automotive, we provide a wide range of fabrics that are durable, stylish, and sustainable.",
    type: "website",
    url: "https://helmtex.co.za",
    siteName: "Helm Textile Mills",
    images: [
      {
        url: "https://helmtex.co.za/images/helm.png",
        width: 1200,
        height: 630,
        alt: "Helm Textile Mills - High-Quality Fabrics",
      }
    ]
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://helmtex.co.za",
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Helm Textile Mills" />
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
        <Analytics/>
        <SpeedInsights/>
        {/* <Toaster /> */}
      </body>
    </html>
  );
}