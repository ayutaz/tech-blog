import { Member } from "@src/types";

export const members: Member[] = [
  {
    name: "Kadinche",
    role: "Company",
    bio: "カディンチェ株式会社は、エンジニアリングで社会的価値を生むことに特化した会社です。",
    avatarSrc: "/avatars/kadinche.png",
    sources: [
      "https://medium.com/feed/kadinche-engineering",
    ],
    twitterUsername: "kadinche",
    githubUsername: "kadinche"
  },
  {
    name: "nikaera",
    role: "Web dev",
    bio:
      "様々な技術領域に関心のある雑食系エンジニアです。自分の記事が誰かのお役に立てれば幸いです。",
    avatarSrc: "/avatars/nikaera.jpg",
    sources: [
      "https://zenn.dev/nikaera/feed",
      "https://qiita.com/nikaera/feed.atom",
    ],
    twitterUsername: "n1kaera",
    githubUsername: "nikaera",
    websiteUrl: "https://nikaera.com",
  },
  {
    name: "KOGA Mitsuhiro",
    role: "VR dev",
    bio: "よく扱うものはServer Side Java/Go/Unityです。",
    avatarSrc: "/avatars/shiena.jpeg",
    sources: [
      "https://zenn.dev/shiena/feed",
      "https://dev.to/feed/shiena",
      "https://qiita.com/shiena/feed.atom",
    ],
    twitterUsername: "shiena",
    githubUsername: "shiena"
  },
];
