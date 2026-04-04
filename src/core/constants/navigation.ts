export const NAV_LINKS = [
  {
    label: "Services",
    href: "#services",
    hasDropdown: true,
    isMega: true,
    children: [
      { label: "Amazon Seller Resources", href: "/services/amazon",     icon: "warehouse"   },
      { label: "Returns Handling",        href: "/services/returns",    icon: "shipment"    },
      { label: "World Shipping",          href: "/services/worldwide",  icon: "globe"       },
      { label: "E-commerce Fulfilment",   href: "/services/ecommerce",  icon: "workflow"    },
      { label: "FBA Prep Services",       href: "/services/fba",        icon: "manifest"    },
      { label: "B2B Fulfilment",          href: "/services/b2b",        icon: "shipmentAlt" },
      { label: "Dropshipping",            href: "/services/dropshipping", icon: "truck"     },
    ],
  },
  {
    label: "Industries",
    href: "#industries",
    hasDropdown: true,
    isMega: true,
    sections: [
      {
        heading: "Marketplace Shipping",
        children: [
          { label: "International Shipping for Amazon.com", href: "#", icon: "warehouse" },
          { label: "International Shipping for Walmart.com", href: "#", icon: "workflow" },
        ],
      },
      {
        heading: "Country Shipping Guide",
        cols: 2,
        children: [
          { label: "Ship to Canada",      href: "#", icon: "globe" },
          { label: "Ship to Malaysia",    href: "#", icon: "globe" },
          { label: "Ship to USA",         href: "#", icon: "globe" },
          { label: "Ship to Australia",   href: "#", icon: "globe" },
          { label: "Ship to UK",          href: "#", icon: "globe" },
          { label: "Ship to New Zealand", href: "#", icon: "globe" },
          { label: "Ship to Singapore",   href: "#", icon: "globe" },
          { label: "Ship to UAE",         href: "#", icon: "globe" },
        ],
      },
      {
        heading: "Import Guides",
        children: [
          { label: "Import from China", href: "#", icon: "manifest" },
        ],
      },
    ],
  },
  { label: "Blog", href: "/blog", hasDropdown: false },
  { label: "Contact", href: "/contact", hasDropdown: false },
] as const;

export const FOOTER_SERVICES = [
  "Amazon Seller Resources",
  "E-commerce Fulfilment",
  "B2B Fulfilment",
  "Returns Handling",
  "FBA Prep Services",
  "Drop shipping",
  "Worldwide Shipping",
];

export const FOOTER_INDUSTRIES = [
  "Apparel & Accessories",
  "Automotive & Industrial",
  "Books & BPM",
  "Food & Beverage",
  "Furniture & Home Decor",
  "Health & Beauty",
  "Handmade",
  "Toys, Kids & Baby",
];

export const FOOTER_RESOURCES = [
  { label: "International Shipping for Amazon.com", href: "#" },
  { label: "International Shipping for Walmart.com", href: "#" },
  { label: "Ship to Canada", href: "#" },
  { label: "Ship to USA", href: "#" },
  { label: "Ship to UK", href: "#" },
  { label: "Import from China", href: "#" },
  { label: "Ship to Singapore", href: "#" },
  { label: "Ship to Malaysia", href: "#" },
  { label: "Ship to Australia", href: "#" },
  { label: "Ship to New Zealand", href: "#" },
  { label: "Ship to U.A.E", href: "#" },
];
