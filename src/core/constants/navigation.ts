export const NAV_LINKS = [
  {
    label: "Services",
    href: "#services",
    hasDropdown: true,
    children: [
      { label: "Amazon Seller Resources", href: "/services/amazon" },
      { label: "E-commerce Fulfilment", href: "/services/ecommerce" },
      { label: "B2B Fulfilment", href: "/services/b2b" },
      { label: "Returns Handling", href: "/services/returns" },
      { label: "FBA Prep Services", href: "/services/fba" },
      { label: "Drop Shipping", href: "/services/dropshipping" },
      { label: "Worldwide Shipping", href: "/services/worldwide" },
    ],
  },
  {
    label: "Industries",
    href: "#industries",
    hasDropdown: true,
    children: [
      { label: "Apparel & Accessories", href: "/industries/apparel" },
      { label: "Automotive & Industrial", href: "/industries/automotive" },
      { label: "Books & BPM", href: "/industries/books" },
      { label: "Food & Beverage", href: "/industries/food" },
      { label: "Furniture & Home Decor", href: "/industries/furniture" },
      { label: "Health & Beauty", href: "/industries/health" },
      { label: "Handmade", href: "/industries/handmade" },
      { label: "Toys, Kids & Baby", href: "/industries/toys" },
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
