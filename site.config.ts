export const config = {
  siteMeta: {
    title: "KadiTech Blog Hub",
    teamName: "Kadinche Corporation.",
    description: "カディンチェ株式会社は、エンジニアリングで社会的価値を生むことに特化した会社です。社会に向けた研究開発や実験を行いながら、物質的な豊かさではなく、知恵/経験的な豊かさを創出することに取り組みます。技術の発展こそ、人類の発展であるという信念を持ち、先端技術を用いた問題解決への意識を持って行動します。その一環として 2008 年の会社設立当初から、xR の受託開発に日々取り組んでいます。",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://tech.kadinche.com"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "Company",
      href: "https://kadinche.com",
    },
    {
      title: "Recruit",
      href: "https://www.wantedly.com/companies/kadinche",
    },
  ],
};
