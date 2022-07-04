/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `@import "@styles/base.module"; @import "@styles/common.mixin";`,
  },
}

module.exports = nextConfig
