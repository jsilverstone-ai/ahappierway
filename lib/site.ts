export const site = {
  name: "A Happier Way",
  url: "https://ahappierway.com",
  canonical: "https://ahappierway.com/",
  provider: "Kelsey Vivatson, PMHNP-BC, APRN",
  shortName: "Kelsey Vivatson",
  credentials: "PMHNP-BC, APRN",
  role: "Clinical Director",
  phoneDisplay: "(305) 676-6070",
  phoneTel: "+13056766070",
  street: "2820 NE 214th St, Suite 1002",
  city: "Aventura",
  region: "FL",
  postal: "33180",
  maps: "https://www.google.com/maps/search/?api=1&query=2820+NE+214th+St+Suite+1002+Aventura+FL+33180",
  ketamineProviders: "https://www.rewiredketamine.com/providers",
  ketamineHome: "https://www.rewiredketamine.com/",
  legitScript:
    "https://www.legitscript.com/websites/?checker_keywords=rewiredketamine.com",
  social: [
    { label: "Instagram", href: "https://www.instagram.com/rewired_ketamine/" },
    { label: "Facebook", href: "https://www.facebook.com/RewiredKetamine/" },
    { label: "YouTube", href: "https://www.youtube.com/@RewiredKetamine" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jacob-silverstone-98414547/",
    },
  ],
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Care",
    href: "/#care",
    children: [
      { label: "Medication management", href: "/#care" },
      { label: "Psychotherapy", href: "/#care" },
      { label: "Diagnostic assessment", href: "/#care" },
      { label: "ADHD, autism, and mood", href: "/#treats" },
    ],
  },
  { label: "About Kelsey", href: "/#about" },
  { label: "How a visit works", href: "/#visit" },
  { label: "FAQ", href: "/#faq" },
  { label: "Location", href: "/#location" },
  { label: "Contact", href: "/#contact" },
];

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "What she treats", href: "/#treats" },
  { label: "How a visit works", href: "/#visit" },
  { label: "About Kelsey", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Free consultation", href: "/#contact" },
];
