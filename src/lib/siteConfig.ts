export const siteConfig = {
  name: "Focus Studio",
  domain: "https://aloneghost12.github.io",
  pathPrefix: "/focus-studio",
  location: {
    street: "Mailavu",
    city: "Kozicode",
    region: "Kerala",
    postalCode: "673001",
    countryCode: "IN",
  },
  contact: {
    phoneDisplay: "+91 99999 99999",
    phoneRaw: "+91-99999-99999",
    whatsappUrl: "https://wa.me/919999999999",
    email: "hello@focusstudio.example",
  },
  social: {
    instagram: "https://www.instagram.com/focusstudio",
  },
  hours: {
    opens: "09:00",
    closes: "20:00",
    display: "Open daily, 9:00 AM - 8:00 PM",
  },
} as const;
