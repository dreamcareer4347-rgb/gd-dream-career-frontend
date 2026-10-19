export default function sitemap() {
  const baseUrl = "https://gddreamcareer.online";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];
}