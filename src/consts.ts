export const SITE = {
  name: 'aiwaitress.com',
  title: 'aiwaitress.com — Premium AI Waitress Domain for Sale',
  description:
    'aiwaitress.com is for sale — a clever premium .com for AI concierge, hospitality tech, and recommendation platforms. Escrow-protected, instant transfer.',
  url: 'https://aiwaitress.com/',
  locale: 'en_US',
  email: 'sales@desertrich.com',
  year: 2026,
  asOfDate: '2026-09-25',
} as const;

/** Cloudflare Images CDN — hero image for og:image and structured data. */
export const CLOUDFLARE_IMAGE = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  id: '2ea60d2d-18ca-4613-9931-cba40fe9fa00',
  variant: 'public',
} as const;

export function cloudflareImageUrl(
  id: string = CLOUDFLARE_IMAGE.id,
  variant: string = CLOUDFLARE_IMAGE.variant,
): string {
  return `https://imagedelivery.net/${CLOUDFLARE_IMAGE.accountHash}/${id}/${variant}`;
}

export const HERO_IMAGE_URL = cloudflareImageUrl();

export const HERO_IMAGE_DIMENSIONS = { width: 1366, height: 745 } as const;

export function heroImageAbsoluteUrl(siteUrl: string = SITE.url): string {
  return HERO_IMAGE_URL;
}

export const GOOGLE_SITE_VERIFICATION = 'CAaaB6WqHxQ88xqtGX3-fbZWuI8vIZjE_RyBwU1HHNA';

export function acquisitionMailto(subject?: string): string {
  const body = [
    'Hello,',
    '',
    'I am interested in acquiring aiwaitress.com.',
    '',
    'Organization:',
    'Intended use:',
    'Budget range:',
    '',
    'Thank you,',
  ].join('\n');
  const encoded = `subject=${encodeURIComponent(subject ?? 'aiwaitress.com — Domain Acquisition Inquiry')}&body=${encodeURIComponent(body)}`;
  return `mailto:${SITE.email}?${encoded}`;
}
