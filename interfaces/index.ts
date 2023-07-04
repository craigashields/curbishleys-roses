// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For

export type SiteMetadata = {
    title: string;
    author: string;
    headerTitle: string;
    description: string;
    language: string;
    theme: 'system' | 'dark' | 'light';
    siteUrl: string;
    siteRepo: string;
    siteLogo: string;
    socialBanner: string;
    email: string;
    facebook: string;
    googlemap: string;
    locale: string;
    contentDir: string;
}