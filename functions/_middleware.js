// Middleware for Cloudflare Pages Functions
export async function onRequest(context) {
  // Get the response from the origin
  const response = await context.next();
  
  // Add security headers
  const newResponse = new Response(response.body, response);
  newResponse.headers.set('X-XSS-Protection', '1; mode=block');
  newResponse.headers.set('X-Content-Type-Options', 'nosniff');
  newResponse.headers.set('X-Frame-Options', 'DENY');
  newResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  return newResponse;
}
