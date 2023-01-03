/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  env: {
    NEXT_PUBLIC_BASE_URL: "http://localhost:3000",
    NEXT_PUBLIC_SANITY_DATASET: "production",
    SANITY_API_TOKEN:
      "skfY7ooaOZZYAl5vE8hYvTPhQxgJ9YQRwUqp9e4RAlhXt3AkbM5e81PQxTZqcTXJfNJKYVDccrpP2V3y2SGcomW28NLtqq0RhQwZkBm2sXkuURW5gnei5mdlRzrvIyITqn2JK6LVq3ZzrTCBoBBoOaz2hM8n9QM2zmTw7JrXKumgzyXcVcdp",
    NEXT_PUBLIC_SANITY_PROJECT_ID: "cd2zaz37",
  },
};

module.exports = nextConfig;
