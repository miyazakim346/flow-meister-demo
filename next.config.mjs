/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  /* URLの末にスラッシュをつける */
  trailingSlash: true,

  /* WordPress REST APIで取得した、投稿画像を許可する */
  /* https://nextjs.org/docs/messages/next-image-unconfigured-host */
  images: {
    remotePatterns: [
      // WordPress の画像の配信元（公開用のため例のドメインにしてあります）
      new URL("https://example.com/**"),
    ],
  },
};

export default nextConfig;
