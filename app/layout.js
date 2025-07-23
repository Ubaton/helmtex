import localFont from "next/font/local";
import "./globals.css";
import Nav from "../components/Navbar/Nav";
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
    "Helm Textile Mills", 
    "Textile Company", 
    "Fabric Manufacturer",
    "High-Quality Fabrics",
    "Upholstery Fabrics",
    "Automotive Fabrics",
    "Sustainable Textiles",
    "Textile Industry",
    "South Africa Textiles",
    "Textile Production",
    "Textile Innovation",
    "Textile Solutions",
    "Textile Design",
    "Textile Quality",
    "Textile Sustainability", 
    "Textile Expertise",
    "Textile Services",
    "Textile Products",
    "Textile Supply",
    "Textile Mills",
    "Textile Fabrication",
    "Contract Fabrics",
    "Textile Factory",
    "Textile Factories",
    "Commercial Upholstery Fabrics",
    "Auditorium Seating Fabrics",
    "Hospital Seating Fabrics",
    "Office Seating Fabrics",
    "Anti-microbial Fabrics", 
    "Fire Retardant Fabrics",
    "Anti-bacterial Fabrics",
    "Healthcare Upholstery Fabrics",
    "Durable Seating Fabrics",
    "Performance Fabrics",
    "Hotel Seating Fabrics",
    "Restaurant Seating Fabrics",
    "Curtains and Drapes Fabrics",
    "Custom Fabric Manufacturers",
    "Custom Lodge Fabrics",
    "Custom Hotel Fabrics",
    "Custom Restaurant Fabrics",
    "Custom Upholstery Fabrics",
    "African Lodge Custom Fabrics",
    "African Cotton Fabrics",
    "Sustainable Fabric",
    "Recycled Yarn",
    "Recycled Polyester Fabrics",
    "Recycled Fabrics",
    "Local Textile Production",
    "Local Fabric Manufacturer",
    "Local Textiles",
    "Proudly South African Fabrics",
    "PET Fabrics",
    "Screen Printing Fabrics",
    "Custom Woven Designs",
    "Wall Panelling Fabrics",
    "Jacquard Fabrics",
    "Jacquard Weaving",
    "Jacquard Upholstery",
    "Jacquard Textiles",
    "Textile Weaving",
    "Textile Manufacturing",
    "Outdoor Fabrics",
    "Outdoor Upholstery Fabrics",
    "Office Fabrics",
    "100% Polyester Fabrics",
    "100% Cotton Fabrics",
    "100 000 Rub Test Fabrics",
    "Durable Upholstery Fabrics",
    "50 000 Rub Test Fabrics",
    "30 000 Rub Test Fabrics",
    "Fabric Supplier",
    "Fabric Supplier South Africa",
    "Fabric Supplier Johannesburg",
    "Fabric Stock Ranges",
    "Fabric Ranges",
    "Textured Fabrics",
    "Oektex Fabrics",
    "UV Fabrics",
    "Fibre Tech Fabrics",
    "Olefin Fabrics",
    "Cotton Rich Fabrics",
    "Custom Throws",
    "Throws Manufactures",
    "Cushion Fabrics",
    "Retail Fabrics",
    "Cut Length Fabrics",
    "Heavy Duty Fabrics",
    "Heavy Traffic Area Fabrics",
    "Reception Area Fabrics",
    "Occasional Chair Fabrics",
    "Sofa Fabrics",
    "Couches Fabrics",
    "Boucle Fabrics",
    "Mesh Fabrics",
    "Contract Seating Fabrics For Architects",
    "Anti-bacterial Auditorium Fabric Supplier",
    "Hospital Seating Textile Specifications",
    "Commercial Curtain And Drapery Fabrics",
    "Fabric Mill for Architectural Projects",
    "Interior Fabrics Textiles",
    "Interior Fabrics Manufactures",
    "Specification Grade Textile Mill South Africa",
    "Architectural Textile Supplier",
    "Architectural Textile Supplier ZA",
    "Architectural Textile Supplier South Africa",
    "Tender Fabric Supplier South Africa",
    "SABS Certified Hospital Seating Fabrics",
    "SABS Certified Fabrics",
    "Weaving Companies",
    "Weaving Textiles",
    "Weaving",
    "Leading Textile Companies",
    "SA's Leading Textile Company",
    "South Africa Top Textile Companies",
    "Tailored Solutions",
    "Bulk Fabric Suppliers",
    "Bedding Fabrics",
    ""
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
        {/* <Toaster /> */}
      </body>
    </html>
  );
}