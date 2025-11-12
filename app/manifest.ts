import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'LaHood Accountability',
    short_name: 'LaHood Watch',
    description: 'Track Rep. Darin LaHood\'s voting record and accountability',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#991B1B',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
