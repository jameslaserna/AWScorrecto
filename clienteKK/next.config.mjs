/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',                         // El protocolo (https://)
        hostname: 'trxobfjrgbfcubjbzjph.supabase.co', // El dominio de tu proyecto de Supabase
        pathname: '/storage/v1/object/public/**',   // La ruta de acceso a las imágenes (esto puede variar dependiendo de tu estructura)
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',                // Si estás usando imágenes de Freepik también
        pathname: '/**',                             // Permite cargar imágenes desde cualquier ruta de este dominio
      },
    ],
  },
};

export default nextConfig;
