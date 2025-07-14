// Removed newsletterFragment and fragmentOn imports

/* -------------------------------------------------------------------------- */
/*                                   Heading                                  */
/* -------------------------------------------------------------------------- */

// Replace fragment with plain interface
export interface HeadingFragment {
  title: string;
  subtitle: string;
  tag: string;
  align: string;
}

// Removed fragmentOn.infer usage

/* -------------------------------------------------------------------------- */
/*                                   Avatar                                   */
/* -------------------------------------------------------------------------- */

export interface AvatarFragment {
  url: string;
  alt: string;
}

// Removed fragmentOn.infer usage

/* -------------------------------------------------------------------------- */
/*                                   Author                                   */
/* -------------------------------------------------------------------------- */

export interface AuthorFragment {
  _id: string;
  _title: string;
  image: AvatarFragment & { height: number; width: number };
}

// Removed fragmentOn.infer usage

/* -------------------------------------------------------------------------- */
/*                                    Image                                   */
/* -------------------------------------------------------------------------- */

export interface OptimizedImageFragment {
  url: string;
  blurDataURL: string;
  aspectRatio: number;
  width: number;
  height: number;
  alt: string;
}

// Removed fragmentOn.infer usage

/* -------------------------------------------------------------------------- */
/*                                    Quote                                   */
/* -------------------------------------------------------------------------- */

export interface QuoteFragment {
  _id: string;
  author: {
    _id: string;
    _title: string;
    image: { url: string; alt: string };
    company: { _title: string; image: { url: string; alt: string } };
    role: string;
  };
  quote: string;
}

// Removed fragmentOn.infer usage

/* -------------------------------------------------------------------------- */
/*                                   Button                                   */
/* -------------------------------------------------------------------------- */

export interface ButtonFragment {
  _id: string;
  label: string;
  href: string;
  type: string;
  icon: string;
}

/* -------------------------------------------------------------------------- */
/*                              Dark Light Image                              */
/* -------------------------------------------------------------------------- */

export interface DarkLightImageFragment {
  dark: OptimizedImageFragment;
  light: OptimizedImageFragment;
}

// Removed fragmentOn.infer usage

/* -------------------------------------------------------------------------- */
/*                              General Events                               */
/* -------------------------------------------------------------------------- */

// Removed GeneralEvents export

/* -------------------------------------------------------------------------- */
/*                              Header Links                                */
/* -------------------------------------------------------------------------- */

export interface HeaderLinksFragment {
  _title: string;
  href: string;
  _id: string;
  sublinks: {
    items: Array<{
      _id: string;
      _title: string;
      link: {
        __typename: string;
        text?: string;
        page?: { pathname: string; _title: string };
      };
    }>;
  };
}

// Removed fragmentOn.infer usage

export interface HeaderFragment {
  navbar: {
    items: HeaderLinksFragment;
  };
  rightCtas: {
    items: ButtonFragment;
  };
}

// Removed fragmentOn.infer usage

export interface FooterFragment {
  newsletter: any;
  copyright: string;
  navbar: {
    items: Array<{ _title: string; url: string }>;
  };
  socialLinks: Array<{ _title: string; icon: { url: string }; url: string }>;
}

// Removed fragmentOn.infer usage
