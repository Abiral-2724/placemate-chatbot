import * as React from "react";

const platforms = [
  {
    name: "PrepInsta",
    logo: "https://prepinsta.com/wp-content/uploads/2020/07/prepinsta-logo.png",
    link: "https://prepinsta.com/",
  },
  {
    name: "GeeksforGeeks",
    logo: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200X200.png",
    link: "https://www.geeksforgeeks.org/",
  },
  {
    name: "IndiaBIX",
    logo: "https://www.indiabix.com/_files/images/indiabix-logo.png",
    link: "https://www.indiabix.com/",
  },
  {
    name: "HackerRank",
    logo: "https://hrcdn.net/fcore/assets/favicon-ddc852f75a.png",
    link: "https://www.hackerrank.com/",
  },
  {
    name: "Codeforces",
    logo: "https://sta.codeforces.com/s/71122/images/codeforces-logo-with-telegram.png",
    link: "https://codeforces.com/",
  },
  {
    name: "Glassdoor",
    logo: "https://www.glassdoor.com/static/img/shared/glassdoor_logo_400x400.png",
    link: "https://www.glassdoor.com/",
  },
  {
    name: "PrepInsta Prime",
    logo: "https://prepinstaprime.com/static/media/logo.936c128c.png",
    link: "https://prepinstaprime.com/",
  },
  {
    name: "LeetCode",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    link: "https://leetcode.com/",
  },
];

const BoostSection = () => {
  return (
    <section className="p-6 md:p-10 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800 shadow-lg mx-4 mt-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-white">
          <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">
            🚀 Boost Your Preparation
          </span>
        </h2>
        <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
          Explore these top platforms to sharpen your skills and crack
          placements with confidence
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-4 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-all border border-gray-700 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-400/10"
            >
              <div className="relative h-12 w-12 mb-3">
                <img
                  src={platform.logo}
                  alt={`${platform.name} logo`}
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    (
                      e.target as HTMLImageElement
                    ).src = `https://ui-avatars.com/api/?name=${platform.name.replace(
                      /\s+/g,
                      "+"
                    )}&background=random`;
                  }}
                />
                <div className="absolute inset-0 bg-cyan-400/10 group-hover:opacity-20 opacity-0 transition-opacity rounded-full" />
              </div>
              <span className="text-sm font-medium text-gray-200 group-hover:text-white text-center">
                {platform.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoostSection;
