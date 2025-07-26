import type { NextConfig } from 'next';

import createNextIntlPlugin from 'next-intl/plugin';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // 静的ホスティングサービスとの互換性のためtrailingSlashを有効化
  trailingSlash: true,
  // 静的サイト生成（SSG）を有効化
  output: 'export',
  // サブディレクトリでのホスティングに対応
  basePath,
};

export default withNextIntl(nextConfig);
