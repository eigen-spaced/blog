export const SITE = {
  website: "https://pointinspace.xyz/", // replace this with your deployed domain
  author: "Sunny Khazin",
  profile: "",
  desc: "I can't make up my mind on what I want to write about, so I write about everything ",
  title: "Point In Space",
  ogImage: "", // falls back to the dynamically generated /og.png
  lightAndDarkMode: false,
  postPerIndex: 4,
  postPerPage: 8,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Australia/Melbourne", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
