import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions:["ts","tsx","js","jsx"],
 outputFileTracingIncludes: {
        "/**": ["components/codesnippetui/**/*"],
    },
     async headers() {
        return [
            {
                source: "/r/:path*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
        ];
    },

};

export default nextConfig;
