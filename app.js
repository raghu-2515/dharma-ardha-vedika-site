const siteContent = {
  heroSignals: [
    {
      title: "Market Lens",
      note: "Review portfolio trackers, macro signals, super-investor ideas, and long-horizon investing references.",
    },
    {
      title: "Learning Lane",
      note: "Keep AI platforms, machine learning resources, and practical study tools one click away.",
    },
    {
      title: "Wisdom Practice",
      note: "Bring literature, reflection, and durable reading into the same personal dashboard.",
    },
  ],
  focusAreas: [
    {
      tag: "Home",
      title: "A homepage shaped by pursuits, not promotion",
      body:
        "This is a personal dashboard for the subjects that keep drawing attention back: capital, learning, literature, and useful tools.",
      pills: ["One-page layout", "Clear sections", "Curated links"],
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80",
    },
    {
      tag: "Finance",
      title: "Personal finance as a practice of clarity",
      body:
        "Portfolio tools, macro references, and long-horizon research live together here so decisions can start from context rather than noise.",
      pills: ["Portfolio tracking", "Super-investors", "Macro data"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    },
    {
      tag: "Learning",
      title: "Learning through models, tools, and experimentation",
      body:
        "A working lane for AI platforms, machine learning references, and tools that make study more applied and less abstract.",
      pills: ["LLMs", "ML resources", "Notebook tools"],
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
    },
    {
      tag: "Literature",
      title: "Literature as a source of depth and return",
      body:
        "Not just a shelf of links, but a place for texts, passages, and ideas worth revisiting slowly.",
      pills: ["Books", "Essays", "Notes"],
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",
    },
  ],
  sections: {
    finance: [
      {
        heading: "My Portfolio",
        items: [
          {
            title: "Yahoo Finance / My Portfolio",
            href: "https://finance.yahoo.com/portfolios",
            description: "A practical first stop for portfolio movement, watchlists, and day-to-day market context.",
            label: "Market hub",
            image:
              "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=80",
          },
          {
            title: "My Portfolio Tracker",
            href: "https://stock-portfolio-tracker-40279.web.app/",
            description: "Your own tracker for a more personal monitoring rhythm and a clearer view of what you hold.",
            label: "Personal",
            image:
              "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=900&q=80",
          },
        ],
      },
      {
        type: "market-research",
        heading: "Market Research & Analysis",
        description:
          "A compact research desk for market context, fund analysis, macro data, and long-horizon perspective.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        items: [
          {
            title: "Morningstar Markets",
            href: "https://www.morningstar.com/markets",
            description: "A steadier research lane for funds, markets, and valuation-minded perspective.",
            label: "Research",
            icon: "MS",
            tone: "morningstar",
            image:
              "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
          },
          {
            title: "MSN Money",
            href: "https://www.msn.com/en-us/money",
            description: "A quick read on headlines and market movement when you want a second pulse.",
            label: "Pulse",
            icon: "MN",
            tone: "msn",
            image:
              "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
          },
          {
            title: "Dataroma / Super Investors",
            href: "https://www.dataroma.com/m/home.php",
            description: "Track respected investors and use their filings as one thoughtful input into idea generation.",
            label: "Tracking",
            icon: "DR",
            tone: "dataroma",
            image:
              "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=900&q=80",
          },
          {
            title: "ETF Database",
            href: "https://etfdb.com/",
            description: "Compare ETFs, study exposures, and keep fund research close when allocation questions come up.",
            label: "Screening",
            icon: "ETF",
            tone: "etf",
            image:
              "https://images.unsplash.com/photo-1518186233392-c232efbf2373?auto=format&fit=crop&w=900&q=80",
          },
          {
            title: "FINRA Fund Analyzer",
            href: "https://tools.finra.org/fund_analyzer/",
            description: "A useful check on fund fees and the long-term cost of seemingly small decisions.",
            label: "Analyzer",
            icon: "FN",
            tone: "finra",
            image:
              "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
          },
          {
            title: "FRED Data",
            href: "https://fred.stlouisfed.org/",
            description: "Macro data for rates, inflation, unemployment, and the broader economic backdrop.",
            label: "Macro",
            icon: "FD",
            tone: "fred",
            image:
              "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
          },
          {
            title: "Macrotrends",
            href: "https://www.macrotrends.net/",
            description: "Historical charts and financials that make it easier to zoom out and see the longer arc.",
            label: "History",
            icon: "MT",
            tone: "macrotrends",
            image:
              "https://images.unsplash.com/photo-1468254095679-bbcba6f40fba?auto=format&fit=crop&w=900&q=80",
          },
        ],
      },
    ],
    learning: {
      aiTools: {
        title: "AI Toolkit",
        description:
          "A focused set of AI companions for exploration, synthesis, research, and practical experimentation.",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
        items: [
          { title: "OpenAI", href: "https://openai.com/", icon: "OA", tone: "openai" },
          { title: "Claude", href: "https://claude.ai/", icon: "CL", tone: "claude" },
          { title: "Gemini", href: "https://gemini.google.com/", icon: "GM", tone: "gemini" },
          { title: "NotebookLM", href: "https://notebooklm.google/", icon: "NL", tone: "notebook" },
          { title: "xAI Grok", href: "https://x.ai/", icon: "x", tone: "grok" },
          { title: "Perplexity", href: "https://www.perplexity.ai/", icon: "PX", tone: "perplexity" },
        ],
      },
      mlReference: {
        title: "scikit-learn Learn",
        href: "https://scikit-learn.org/stable/",
        description: "A dependable anchor for classical machine learning references, examples, and documentation.",
        label: "ML reference",
        image:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
      },
    },
    literature: [
      {
        title: "Valmiki Ramayana",
        href: "https://www.valmiki.iitk.ac.in/sloka?field_kanda_tid=1&language=dv&field_sarga_value=1",
        description: "A direct path into the text for reading, revisiting, and sustained contemplative study.",
        label: "Epic",
        image:
          "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Gita Super Site - IITK",
        href: "https://www.gitasupersite.iitk.ac.in/",
        description: "A central wisdom resource for study, comparison, and reflective return.",
        label: "Scripture",
        image:
          "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Project Gutenberg",
        href: "https://www.gutenberg.org/",
        description: "A rich source for classics and public-domain works that nourish long-form reading.",
        label: "Classics",
        image:
          "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Harvard Business Review",
        href: "https://hbr.org/",
        description: "Leadership and strategy ideas that widen technical learning into judgment and decision-making.",
        label: "Broader lens",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Notes and Quotations",
        href: "#literature",
        description: "A place to later collect passages, reflections, and themes that continue to speak back.",
        label: "Notes",
        image:
          "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?auto=format&fit=crop&w=900&q=80",
      },
    ],
    tools: [
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/raghuram-rao-gangaraju-28014a13/",
        description: "A professional anchor for outward-facing work, experience, and connection.",
        label: "Profile",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "X",
        href: "https://twitter.com/Raghu6875",
        description: "A stream for following ideas, commentary, and market conversation as it unfolds.",
        label: "Stream",
        image:
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Medium",
        href: "https://medium.com/@raghu3007/list/reading-list",
        description: "A reading and writing lane for essays, articles, and thoughtful long-form pieces.",
        label: "Writing",
        image:
          "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  pursuits: [
    {
      title: "Revisit portfolio architecture",
      phase: "Active",
      body: "Review holdings, conviction levels, diversification, and whether your research stack is improving the quality of decisions.",
    },
    {
      title: "Stay current with practical AI tools",
      phase: "Ongoing",
      body: "Follow the model platforms and note tools that are genuinely useful in daily work rather than chasing every launch.",
    },
    {
      title: "Build a reading-and-notes rhythm",
      phase: "Developing",
      body: "Use the site to surface books, essays, and reflections that deserve repeated return alongside finance and learning.",
    },
  ],
  socials: [
    {
      title: "LinkedIn",
      meta: "Professional network",
      href: "https://www.linkedin.com/in/raghuram-rao-gangaraju-28014a13/",
    },
    {
      title: "X",
      meta: "Ideas and market chatter",
      href: "https://twitter.com/Raghu6875",
    },
    {
      title: "Medium",
      meta: "Essays and long-form reading",
      href: "https://medium.com/@raghu3007/list/reading-list",
    },
    {
      title: "Perplexity",
      meta: "Research companion",
      href: "https://www.perplexity.ai/",
    },
    {
      title: "OpenAI",
      meta: "AI exploration",
      href: "https://openai.com/",
    },
  ],
};

function renderHeroFocusCards() {
  const container = document.querySelector("#heroFocusCards");
  container.innerHTML = siteContent.focusAreas
    .map(
      (area) => `
        <div class="hero-focus-card">
          <span class="hero-focus-tag">${area.tag}</span>
          <strong>${area.title}</strong>
        </div>
      `
    )
    .join("");
}


function renderFinanceGroups() {
  const container = document.querySelector("#financeGrid");
  container.innerHTML = siteContent.sections.finance
    .map(
      (group) =>
        group.type === "market-research"
          ? renderMarketResearchCard(group)
          : `
              <div class="resource-group">
                <p class="resource-group-heading">${group.heading}</p>
                <div class="resource-links-grid">
                  ${group.items.map((item) => renderSectionLink(item)).join("")}
                </div>
              </div>
            `
    )
    .join("");
}

function renderMarketResearchCard(group) {
  return `
    <article class="ai-toolkit-card market-research-card">
      <div class="ai-toolkit-image" style="background-image: linear-gradient(180deg, rgba(12, 15, 14, 0.08), rgba(12, 15, 14, 0.52)), url('${group.image}');"></div>
      <div class="ai-toolkit-content">
        <span class="ai-toolkit-kicker">Curated research</span>
        <h3>${group.heading}</h3>
        <p>${group.description}</p>
        <div class="ai-tool-list market-tool-list">
          ${group.items
            .map(
              (item) => `
                <a class="ai-tool-link market-tool-link" href="${item.href}" target="_blank" rel="noreferrer">
                  <span class="ai-tool-icon market-tool-icon-${item.tone}" aria-hidden="true">${item.icon}</span>
                  <span>${item.title}</span>
                </a>
              `
            )
            .join("")}
        </div>
      </div>
    </article>
  `;
}

function renderResources() {
  renderFinanceGroups();
  renderLearningSection();
  renderSectionLinks("#literatureGrid", siteContent.sections.literature);
  renderSectionLinks("#toolsGrid", siteContent.sections.tools);
}

function renderLearningSection() {
  const container = document.querySelector("#learningGrid");
  const { aiTools, mlReference } = siteContent.sections.learning;

  container.innerHTML = `
    <article class="ai-toolkit-card">
      <div class="ai-toolkit-image" style="background-image: linear-gradient(180deg, rgba(12, 15, 14, 0.08), rgba(12, 15, 14, 0.52)), url('${aiTools.image}');"></div>
      <div class="ai-toolkit-content">
        <span class="ai-toolkit-kicker">Curated tools</span>
        <h3>${aiTools.title}</h3>
        <p>${aiTools.description}</p>
        <div class="ai-tool-list">
          ${aiTools.items
            .map(
              (item) => `
                <a class="ai-tool-link" href="${item.href}" target="_blank" rel="noreferrer">
                  <span class="ai-tool-icon ai-tool-icon-${item.tone}" aria-hidden="true">${item.icon}</span>
                  <span>${item.title}</span>
                </a>
              `
            )
            .join("")}
        </div>
      </div>
    </article>
    ${renderSectionLink(mlReference)}
  `;
}

function renderSectionLink(item) {
  return `
    <a class="resource-link is-section-link" href="${item.href}" target="_blank" rel="noreferrer">
      <div class="resource-thumb" style="background-image: linear-gradient(180deg, rgba(12, 15, 14, 0.06), rgba(12, 15, 14, 0.36)), url('${item.image}');"></div>
      <div>
        <strong>${item.title}</strong>
        <p>${item.description}</p>
      </div>
      <span>${item.label}</span>
    </a>
  `;
}

function renderSectionLinks(selector, items) {
  const container = document.querySelector(selector);
  container.innerHTML = items
    .map(
      (item) => renderSectionLink(item)
    )
    .join("");
}

function renderPursuits() {
  const container = document.querySelector("#pursuitList");
  container.innerHTML = siteContent.pursuits
    .map(
      (item) => `
        <article class="pursuit-item">
          <div class="pursuit-item-head">
            <h3>${item.title}</h3>
            <span class="pursuit-phase">${item.phase}</span>
          </div>
          <p>${item.body}</p>
        </article>
      `
    )
    .join("");
}

function renderSocials() {
  const container = document.querySelector("#socialLinks");
  container.innerHTML = siteContent.socials
    .map(
      (item) => `
        <a class="social-chip" href="${item.href}" target="_blank" rel="noreferrer">
          <strong>${item.title}</strong>
          <span>${item.meta}</span>
        </a>
      `
    )
    .join("");
}

function setupMenuToggle() {
  const button = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#navLinks");

  button.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
}

renderHeroFocusCards();
renderResources();
setupMenuToggle();
