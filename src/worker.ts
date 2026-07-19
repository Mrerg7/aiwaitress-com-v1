const CANONICAL_HOST = 'aiwaitress.com';
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

function canonicalRedirect(request: Request): Response | null {
  const url = new URL(request.url);

  if (url.hostname === `www.${CANONICAL_HOST}`) {
    url.hostname = CANONICAL_HOST;
    return Response.redirect(url.toString(), 301);
  }

  if (url.protocol === 'http:') {
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  if (
    url.hostname === CANONICAL_HOST &&
    url.pathname === '/' &&
    !url.search &&
    !request.url.endsWith('/')
  ) {
    return Response.redirect(`${CANONICAL_ORIGIN}/`, 301);
  }

  return null;
}

export default {
  async fetch(request, env): Promise<Response> {
    const redirect = canonicalRedirect(request);
    if (redirect) return redirect;

    const assetsResponse = await env.ASSETS.fetch(request);

    if (assetsResponse.status === 404) {
      const notFoundPage = await env.ASSETS.fetch(
        new Request(new URL('/404.html', request.url)),
      );
      return new Response(notFoundPage.body, {
        status: 404,
        headers: notFoundPage.headers,
      });
    }

    return assetsResponse;
  },
} satisfies ExportedHandler<Env>;
