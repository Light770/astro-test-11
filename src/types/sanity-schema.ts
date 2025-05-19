// TypeScript type definitions

interface SiteSettings {
  _id: string;
  _type: 'siteSettings';
  title: string;
  description?: string;
  keywords?: string[];
  logo?: Image;
  navigation?: NavigationLink[];
  socialLinks?: { platform: string; url: string }[];
  footer?: string;
  googleAnalyticsId?: string;
  googleSearchConsoleId?: string;
  googleTagManagerIdHead?: string;
  googleTagManagerIdBody?: string;
}

interface NavigationLink {
  _id: string;
  _type: 'navigationLink';
  label: string;
  url: string;
  isExternal?: boolean;
}

interface Page {
  _id: string;
  _type: 'page';
  title: string;
  slug: { current: string };
  seo?: SEO;
  content?: (TextImage | BasicForm | ContactCards | BasicDarkCTA | BasicLightCTA | BasicFAQ | FeatureCards | FeatureList | BasicFeed | HighlightRows | SignUp | PricingColumns | BasicSocialProof | BasicDarkTestimonials | PricingTable)[];
}

interface BlogPost {
  _id: string;
  _type: 'blogPost';
  title: string;
  slug: { current: string };
  publishedAt: string;
  author: Author;
  mainImage?: Image;
  categories?: Category[];
  tags?: string[];
  body?: (Block | Image)[];
  seo?: SEO;
}

interface Author {
  _id: string;
  _type: 'author';
  name: string;
  slug: { current: string };
  image?: Image;
  bio?: string;
}

interface Category {
  _id: string;
  _type: 'category';
  title: string;
  description?: string;
}

interface SEO {
  title?: string;
  description?: string;
  image?: Image;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

interface Block {
  _type: 'block';
  children: {
    _type: 'span';
    text: string;
  }[];
  style: string;
}

interface TextImage {
  _type: 'textImage';
  heading?: string;
  text?: string;
  image?: Image;
  imagePosition?: 'left' | 'right';
}

interface BasicForm {
  _type: 'basicForm';
  title?: string;
  fields?: FormField[];
  submitButtonText?: string;
  successMessage?: string;
}

interface FormField {
  _type: 'formField';
  label?: string;
  name?: string;
  type?: 'text' | 'email' | 'textarea';
  required?: boolean;
}

interface ContactCards {
  _type: 'contactCards';
  title?: string;
  cards?: {
    title?: string;
    description?: string;
    icon?: Image;
    link?: string;
  }[];
}

interface BasicDarkCTA {
  _type: 'basicDarkCTA';
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

interface BasicLightCTA {
  _type: 'basicLightCTA';
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

interface BasicFAQ {
  _type: 'basicFAQ';
  title?: string;
  questions?: {
    question?: string;
    answer?: string;
  }[];
}

interface FeatureCards {
  _type: 'featureCards';
  title?: string;
  cards?: {
    title?: string;
    description?: string;
    image?: Image;
    link?: string;
  }[];
}

interface FeatureList {
  _type: 'featureList';
  title?: string;
  features?: {
    title?: string;
    description?: string;
    icon?: Image;
  }[];
}

interface BasicFeed {
  _type: 'basicFeed';
  title?: string;
  items?: {
    title?: string;
    description?: string;
    image?: Image;
    link?: string;
  }[];
}

interface HighlightRows {
  _type: 'highlightRows';
  rows?: {
    title?: string;
    description?: string;
    image?: Image;
    buttonText?: string;
    buttonLink?: string;
  }[];
}

interface SignUp {
  _type: 'signUp';
  title?: string;
  description?: string;
  form?: BasicForm;
}

interface PricingColumns {
  _type: 'pricingColumns';
  title?: string;
  description?: string;
  columns?: {
    title?: string;
    price?: number;
    features?: string[];
    buttonText?: string;
    buttonLink?: string;
  }[];
}

interface BasicSocialProof {
  _type: 'basicSocialProof';
  title?: string;
  items?: {
    image?: Image;
    altText?: string;
  }[];
}

interface BasicDarkTestimonials {
  _type: 'basicDarkTestimonials';
  title?: string;
  testimonials?: {
    quote?: string;
    author?: string;
    authorTitle?: string;
    image?: Image;
  }[];
}

interface PricingTable {
  _type: 'pricingTable';
  header?: PricingTableHeader;
  body?: PricingTableBody;
  footer?: PricingTableFooter;
}

interface PricingTableHeader {
  _type: 'pricingTableHeader';
  title?: string;
  description?: string;
}

interface PricingTableBody {
  _type: 'pricingTableBody';
  rows?: {
    label?: string;
    plan1?: boolean;
    plan2?: boolean;
    plan3?: boolean;
  }[];
}

interface PricingTableFooter {
  _type: 'pricingTableFooter';
  plan1ButtonText?: string;
  plan1ButtonLink?: string;
  plan2ButtonText?: string;
  plan2ButtonLink?: string;
  plan3ButtonText?: string;
  plan3ButtonLink?: string;
}

type SanityDocument = SiteSettings | Page | BlogPost | Author | Category;
