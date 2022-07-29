/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `@import "@styles/base.module"; @import "@styles/common.mixin";`,
  },
  env:{
    githubId: process.env.GITHUB_ID,
    githubSecret: process.env.GITHUB_SECRET
  }
}

module.exports = nextConfig
