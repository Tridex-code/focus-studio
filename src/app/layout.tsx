import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.name} | Wedding Photography and Printing in ${siteConfig.location.city}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    `${siteConfig.name} in ${siteConfig.location.street}, ${siteConfig.location.city} offers wedding photography, event coverage, premium printing, and fast studio support.`,
  keywords: [
    "Focus Studio",
    "wedding photography Kozicode",
    "photo studio Mailavu",
    "passport photo printing",
    "event photography",
    "creative studio Kerala",
  ],
  alternates: {
    canonical: `${siteConfig.pathPrefix}/`,
  },
  openGraph: {
    title: `${siteConfig.name} | Wedding Photography and Printing in ${siteConfig.location.city}`,
    description:
      "Artistic wedding storytelling, event coverage, and professional print services from Focus Studio.",
    url: `${siteConfig.pathPrefix}/`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteConfig.pathPrefix}/focus-studio-og.svg`,
        width: 1200,
        height: 630,
        alt: "Focus Studio social preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Wedding Photography and Printing in ${siteConfig.location.city}`,
    description:
      "Explore Focus Studio services in Mailavu, Kozicode for weddings, portraits, and quality print outputs.",
    images: [`${siteConfig.pathPrefix}/focus-studio-og.svg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description:
      `Wedding photography, event shoots, portraits, and professional print services in ${siteConfig.location.street}, ${siteConfig.location.city}.`,
    areaServed: siteConfig.location.city,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.location.street,
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      postalCode: siteConfig.location.postalCode,
      addressCountry: siteConfig.location.countryCode,
    },
    telephone: siteConfig.contact.phoneRaw,
    url: `${siteConfig.domain}${siteConfig.pathPrefix}/`,
    sameAs: [siteConfig.social.instagram, siteConfig.contact.whatsappUrl],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: siteConfig.hours.opens,
        closes: siteConfig.hours.closes,
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Studio Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wedding Photography",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Event Coverage",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Printing and Finishing",
          },
        },
      ],
    },
  };

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
