# aiwaitress.com — SEO & Domain Authority checklist

Everything below is either already done in this repo, or is a one-time action only you can take (it needs your Google/Bing/marketplace accounts).

## Done in this repo

- [x] Title ≤60 chars with buyer-intent keywords ("AI Waitress Domain for Sale")
- [x] Meta description ≤160 chars
- [x] Canonical URL, `www`→apex, `http`→`https`, `/index.html`→`/` all 301
- [x] 404 page returns real 404 + `noindex`
- [x] `robots.txt` + `sitemap-index.xml`
- [x] JSON-LD: `WebPage`, `WebSite`, `Organization`, `Product` + `Offer`, `FAQPage`
- [x] Removed self-authored `AggregateRating`/`Review` (structured-data spam risk)
- [x] Hero is a real `<img>` with descriptive `alt` (image SEO + LCP)
- [x] FAQ section — ~250 words of buyer-intent copy + internal anchors
- [x] Mobile: no horizontal overflow at 320–768px, 44px tap targets, sticky mobile CTA
- [x] Contrast raised to WCAG AA (`text-white/55` floor)
- [x] `llms.txt` for answer-engine / LLM citation
- [x] Security headers (CSP, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy)

## One-time actions (yours)

### Indexing — do these first
- [ ] Google Search Console → add property `aiwaitress.com` (DNS TXT is already published) → **Sitemaps → submit `https://aiwaitress.com/sitemap-index.xml`** → Request indexing for `/`
- [ ] Bing Webmaster Tools → submit the same sitemap (Bing also feeds DuckDuckGo, ChatGPT search, Perplexity)
- [ ] After each deploy: GSC URL Inspection → `/` → Request Indexing

### Backlinks (this is what actually moves DA)
DA/DR is off-page — it cannot be set in a repo. Earn links, don't buy them:

- [ ] **Marketplace listings** (highest relevance for a domain-for-sale page): Sedo, Afternic, Bodis, Dan.com — each listing links back to the domain
- [ ] **Seller profile**: a Desert Rich / desertrich.com page that links to aiwaitress.com
- [ ] **Social profiles** with matching name linking to the site (X, LinkedIn, GitHub, About.me) — these are `rel=me` identity links
- [ ] **Directories**: Crunchbase-style and startup/domain directories that accept a listing
- [ ] **Content worth citing**: the FAQ + `llms.txt` give answer engines something quotable; consider a short "what is an AI waitress" explainer post if you want a second indexable URL
- [ ] **Digital PR**: when the domain sells, a public sale announcement on domain-industry outlets (NamePros, DNJournal) earns editorial links

### Do NOT
- [ ] Do not buy links, PBN links, or "DA boost" packages — Google treats these as link spam and the penalty is hard to reverse
- [ ] Do not fabricate reviews or ratings in structured data

## Verification after deploy

```bash
# schema + FAQ present
curl -s https://aiwaitress.com/ | grep -o 'FAQPage'
curl -s https://aiwaitress.com/ | grep -o 'AggregateRating'   # should return nothing
# mobile: no horizontal overflow at 320px (see audit script)
curl -s https://aiwaitress.com/llms.txt | head -1
```
