// Public academic profile. Publication metadata verified against Crossref.
window.portfolioContent = {
  "isPreview": false,
  "name": "蔡磊",
  "englishName": "Lei Cai",
  "initials": "CL",
  "bio": "我是蔡磊，现为南京大学工程管理学院博士后，2025 年获武汉大学管理科学与工程博士学位。我的研究围绕运筹优化与路径规划展开，关注无人机巡检、电动车调度等实际问题的建模与算法设计。",
  "focus": "围绕设施巡检与交通调度中的资源配置、路径设计问题，开展优化方法与算法研究。代表性工作涉及站点式无人机巡检，以及电动车重新调配中的自适应大邻域搜索与禁忌搜索。",
  "papers": [
    {
      "year": "2025",
      "title": "Optimal allocation and route design for station-based drone inspection of large-scale facilities",
      "authors": "Lei Cai; Jiliu Li; Kai Wang; Zhixing Luo; Hu Qin",
      "venue": "Omega · 130 · 103172",
      "role": "唯一第一作者",
      "description": "研究大型设施站点式无人机巡检中的资源配置与路径设计问题。",
      "contribution": "研究构想与问题提出、算法开发、研究方法设计、实验设计与实施、论文初稿撰写及修改润色。",
      "links": [
        {
          "label": "论文 / DOI",
          "url": "https://doi.org/10.1016/j.omega.2024.103172"
        }
      ]
    },
    {
      "year": "2022",
      "title": "A hybrid adaptive large neighborhood search and tabu search algorithm for the electric vehicle relocation problem",
      "authors": "Lei Cai; Xin Wang; Zhixing Luo; Yijing Liang",
      "venue": "Computers & Industrial Engineering · 167 · 108005",
      "role": "唯一第一作者",
      "description": "针对电动车重新调配问题，研究结合自适应大邻域搜索与禁忌搜索的混合算法。",
      "contribution": "研究方法设计、算法开发、实验设计与实施。",
      "links": [
        {
          "label": "论文 / DOI",
          "url": "https://doi.org/10.1016/j.cie.2022.108005"
        }
      ]
    }
  ],
  "apps": [],
  "socials": [
    {
      "name": "GitHub",
      "detail": "cl-coraje · 代码与开源",
      "icon": "⌘",
      "url": "https://github.com/cl-coraje"
    }
  ]
};

// English translations share publication metadata and links with the Chinese version.
window.portfolioContentEn = {
  ...window.portfolioContent,
  bio: "I’m Lei Cai, a postdoctoral researcher at the School of Management and Engineering, Nanjing University. I received my Ph.D. in Management Science and Engineering from Wuhan University in 2025. My research focuses on operations research and route planning, with an emphasis on modeling and algorithms for drone inspection and electric vehicle relocation.",
  focus: "I develop optimization methods and algorithms for resource allocation and route design in facility inspection and transportation. My work includes station-based drone inspection and hybrid adaptive large neighborhood search and tabu search for electric vehicle relocation.",
  papers: window.portfolioContent.papers.map((paper, index) => ({
    ...paper,
    role: "Sole first author",
    description: ["Resource allocation and route design for station-based drone inspection of large-scale facilities.", "A hybrid algorithm combining adaptive large neighborhood search and tabu search for electric vehicle relocation."][index],
    contribution: ["Conceptualization and problem formulation; algorithm development; methodology; experimental design and implementation; writing the original draft, reviewing, and editing.", "Methodology; algorithm development; experimental design and implementation."][index],
    links: paper.links.map(link => ({ ...link, label: "Paper / DOI" }))
  })),
  socials: window.portfolioContent.socials.map(social => ({ ...social, detail: "cl-coraje · Code & open source" }))
};
window.portfolioUI = {
  "zh": {
    "skip": "跳至主要内容",
    "home": "返回首页",
    "nav": "主导航",
    "about": "关于",
    "papers": "论文",
    "apps": "App",
    "contact": "联系",
    "headline": [
      "用运筹优化，",
      "连接研究与实践"
    ],
    "punctuation": "。",
    "explore": "探索我的工作",
    "affiliation": "南京大学 · 工程管理学院 · 博士后",
    "publications": "科研论文",
    "keywords": "研究关键词",
    "keywordsIntro": "以实际应用为出发点，连接问题建模、算法设计与计算实验。",
    "interests": [
      "运筹优化",
      "路径规划",
      "无人机巡检",
      "电动车调度",
      "启发式算法"
    ],
    "research": "研究工作",
    "appsHeading": "从想法，到 App",
    "connectHeading": "保持联系",
    "connectIntro": "关于研究、产品，或者一个有趣的想法。",
    "top": "回到顶部 ↑",
    "contribution": "本人贡献",
    "viewApp": "查看作品",
    "appTitle": "App 作品",
    "appEmpty": "暂无公开展示的 App，后续将在这里更新。",
    "count": "篇代表性论文",
    "avatar": "蔡磊的头像",
    "art": "研究与创作主题插画",
    "light": "切换为浅色主题",
    "dark": "切换为深色主题",
    "title": "蔡磊 · Lei Cai | 运筹优化与算法研究"
  },
  "en": {
    "skip": "Skip to main content",
    "home": "Back to home",
    "nav": "Main navigation",
    "about": "About",
    "papers": "Research",
    "apps": "Apps",
    "contact": "Contact",
    "headline": [
      "Operations research,",
      "put into practice"
    ],
    "punctuation": ".",
    "explore": "Explore my work",
    "affiliation": "Postdoctoral Researcher · Nanjing University",
    "publications": "Publications",
    "keywords": "Research interests",
    "keywordsIntro": "Connecting real-world problems with mathematical modeling, algorithm design, and computational experiments.",
    "interests": [
      "Operations research",
      "Route planning",
      "Drone inspection",
      "Vehicle relocation",
      "Heuristic algorithms"
    ],
    "research": "Research focus",
    "appsHeading": "From ideas to apps",
    "connectHeading": "Get in touch",
    "connectIntro": "For research, products, or an interesting idea.",
    "top": "Back to top ↑",
    "contribution": "My contributions",
    "viewApp": "View project",
    "appTitle": "App projects",
    "appEmpty": "No apps to showcase yet. New projects will appear here.",
    "count": "selected publications",
    "avatar": "Portrait of Lei Cai",
    "art": "Illustrations of research and creative work",
    "light": "Switch to light theme",
    "dark": "Switch to dark theme",
    "title": "Lei Cai | Operations Research & Algorithms"
  }
};
