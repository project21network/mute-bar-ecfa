// Cloudflare Pages configuration
export default {
  // Configure build settings
  build: {
    command: 'npm run build',
    outputDirectory: '.next',
  },
  
  // Configure routes
  routes: [
    {
      pattern: '/api/*',
      function: 'api/:splat',
    },
  ],
  
  // Configure compatibility
  compatibilityDate: '2023-12-01',
  compatibilityFlags: ['nodejs_compat'],
};
