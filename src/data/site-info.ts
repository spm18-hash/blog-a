export type SocialLink = {
  /** Longer descriptive label, e.g. `"Join the Astro community on Discord"` */
  text: string;
  /** Short label with the name of the platform, e.g. `"Discord"`*/
  label: string;
  /** Icon name for use with `astro-icon`, e.g. `"social/discord"`. */
  icon: string;
  /** URL for our profile on the external platform. */
  href: string;
  /** Platform ID, e.g. `"discord"`. Used for `astro.build/on/PLATFORM` redirects. */
  platform: string;
  /** Whether this platform should be linked in the site header */
  showInHeader?: boolean;
};

type SiteInfo = {
  name: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  socialLinks: SocialLink[];
};

const siteInfo: SiteInfo = {
  name: "Astro",
  title: "The Future of Web Development",
  description:
    "Astro is a modern web framework that combines the best of front-end and back-end development.",
  image: {
    src: "/og/social.png",
    alt: "Astro Logo",
  },
  socialLinks: [
    {
      text: "Join the Astro community on Discord",
      label: "Discord",
      icon: "social/discord",
      href: "https://discord.gg/astro",
      platform: "discord",
      showInHeader: true,
    },
    {
      text: "Follow Astro on Twitter",
      label: "Twitter",
      icon: "social/twitter",
      href: "https://twitter.com/astrodotbuild",
      platform: "twitter",
      showInHeader: true,
    },
    {
      text: "Subscribe to Astro on YouTube",
      label: "YouTube",
      icon: "social/youtube",
      href: "https://www.youtube.com/@astrodotbuild",
      platform: "youtube",
      showInHeader: true,
    },
  ],
};

export default siteInfo;
