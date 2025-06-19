import Head from "next/head";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { HeroBgIcons } from "../components/HeroBgIcons";

interface GalleryItem {
  name: string;
  url: string;
  image: string;
  description?: string;
}

interface SubSection {
  name: string;
  subItems: GalleryItem[];
}

interface GallerySection {
  title: string;
  description?: string;
  items: (GalleryItem | SubSection)[];
}

const gallerySections: GallerySection[] = [
  {
    title: "Websites",
    description:
      "Official websites for various sports teams and leagues including IPL, CPL, ILT20, MLC, and other sports organizations.",
    items: [
      {
        name: "IPL",
        subItems: [
          {
            name: "Delhi Capitals",
            url: "https://www.delhicapitals.in",
            image: "/portfolio/images/gallery/websites/ipl/delhicapitals.jpg",
          },
          {
            name: "Gujarat Titans",
            url: "https://www.gujarattitansipl.com",
            image:
              "/portfolio/images/gallery/websites/ipl/gujarattitansipl.jpg",
          },
          {
            name: "Kolkata Knight Riders",
            url: "https://www.kkr.in",
            image:
              "/portfolio/images/gallery/websites/ipl/kolkataknightriders.jpg",
          },
          {
            name: "Lucknow Super Giants",
            url: "https://www.lucknowsupergiants.in",
            image:
              "/portfolio/images/gallery/websites/ipl/lucknowsupergiants.jpg",
          },
          {
            name: "Mumbai Indians",
            url: "https://www.mumbaiindians.com",
            image: "/portfolio/images/gallery/websites/ipl/mumbaiindians.jpg",
          },
          {
            name: "Punjab Kings",
            url: "https://www.punjabkingsipl.in",
            image: "/portfolio/images/gallery/websites/ipl/punjabkingsipl.jpg",
          },
          {
            name: "Rajasthan Royals",
            url: "https://www.rajasthanroyals.com",
            image: "/portfolio/images/gallery/websites/ipl/rajasthanroyals.jpg",
          },
          {
            name: "Royal Challengers Bengaluru",
            url: "https://www.royalchallengers.com",
            image:
              "/portfolio/images/gallery/websites/ipl/royalchallengers.jpg",
          },
        ],
      },
      {
        name: "CPL",
        subItems: [
          {
            name: "Barbados Royals",
            url: "https://www.barbadosroyals.com/",
            image: "/portfolio/images/gallery/websites/cpl/barbadosroyals.jpg",
          },
          {
            name: "Trinbago Knight Riders",
            url: "https://www.tkriders.com/",
            image:
              "/portfolio/images/gallery/websites/cpl/trinbagoknightriders.jpg",
          },
        ],
      },
      {
        name: "ILT20",
        subItems: [
          {
            name: "Abu Dhabi Knight Riders",
            url: "https://www.adkriders.com/",
            image:
              "/portfolio/images/gallery/websites/ilt20/abudhabiknightriders.jpg",
          },
          {
            name: "The Desert Vipers",
            url: "https://www.thedesertvipers.com/",
            image:
              "/portfolio/images/gallery/websites/ilt20/thedesertvipers.jpg",
          },
          {
            name: "Dubai Capitals",
            url: "https://www.gmrsports.in/dubai-capitals",
            image: "/portfolio/images/gallery/websites/ilt20/dubaicapitals.jpg",
          },
          {
            name: "Gulf Giants",
            url: "https://www.gulfgiants.com/",
            image: "/portfolio/images/gallery/websites/ilt20/gulfgiants.jpg",
          },
        ],
      },
      {
        name: "MLC",
        subItems: [
          {
            name: "Los Angeles Knight Riders",
            url: "https://www.lakriders.us/",
            image: "/portfolio/images/gallery/websites/mlc/lakriders.jpg",
          },
          {
            name: "Seattle Orcas",
            url: "https://www.seattleorcas.com/",
            image: "/portfolio/images/gallery/websites/mlc/seattleorcas.jpg",
          },
          {
            name: "Washington Freedom",
            url: "https://www.washingtonfreedom.com/",
            image:
              "/portfolio/images/gallery/websites/mlc/washingtonfreedom.jpg",
          },
        ],
      },
      {
        name: "Other",
        subItems: [
          {
            name: "ISL",
            url: "https://www.indiansuperleague.com/",
            image:
              "/portfolio/images/gallery/websites/other/indiansuperleague.jpg",
          },
          {
            name: "WPL",
            url: "https://www.womenspremierleague.in/",
            image:
              "/portfolio/images/gallery/websites/other/womenspremierleague.jpg",
          },
          {
            name: "ICC - Cricket",
            url: "https://www.icc-cricket.com//",
            image: "/portfolio/images/gallery/websites/other/icc-cricket.jpg",
          },
          {
            name: "Pro Kabaddi",
            url: "https://www.prokabaddi.com/",
            image: "/portfolio/images/gallery/websites/other/prokabaddi.jpg",
          },
        ],
      },
    ],
  },
  {
    title: "Fantasy Game",
    description:
      "Build your virtual team and score based on real match performances.",
    items: [
      {
        name: "UEFA Fantasy",
        url: "#",
        image: "/portfolio/images/gallery/gaming/fantasy/gaminguefa.jpg",
      },
      {
        name: "AFC Fantasy",
        url: "#",
        image: "/portfolio/images/gallery/gaming/fantasy/afc-fantasy.jpg",
      },
      {
        name: "Fantasy Engine",
        url: "#",
        image: "/portfolio/images/gallery/gaming/fantasy/fe-fantasy.jpg",
      },
      {
        name: "F1 Fantasy",
        url: "#",
        image: "/portfolio/images/gallery/gaming/fantasy/f1-fantasy.jpg",
      },
      {
        name: "ICC T20 World Cup",
        url: "#",
        image: "/portfolio/images/gallery/gaming/fantasy/icc-t20-world-cup.jpg",
      },
    ],
  },
  {
    title: "Predictor Game",
    description: "Predict outcomes of matches or events to earn points.",
    items: [
      {
        name: "AFC Predictor",
        url: "#",
        image: "/portfolio/images/gallery/gaming/predictor/afc-predictor.jpg",
      },
      {
        name: "kings Predictor",
        url: "#",
        image: "/portfolio/images/gallery/gaming/predictor/kings-predictor.jpg",
      },
      {
        name: "KXIP Predictor",
        url: "#",
        image: "/portfolio/images/gallery/gaming/predictor/kxip-predictor.jpg",
      },
    ],
  },
  {
    title: "More or Less",
    description:
      "Guess if a player's stats will be higher or lower than the given number.",
    items: [
      {
        name: "More or Less - Sportsadda",
        url: "#",
        image:
          "/portfolio/images/gallery/gaming/more-or-less/more-or-less-sportsadda.jpg",
      },
      {
        name: "More or Less",
        url: "#",
        image: "/portfolio/images/gallery/gaming/more-or-less/more-or-less.jpg",
      },
    ],
  },
  {
    title: "Trump Card",
    description:
      "Use player cards with strengths to compete and beat opponents strategically.",
    items: [
      {
        name: "Trump Card",
        url: "#",
        image: "/portfolio/images/gallery/gaming/trump-card/trump-card.jpg",
      },
    ],
  },
  {
    title: "Cricket Matchcentre",
    description:
      "Get live stats, lineups, and match data in one interactive dashboard.",
    items: [
      {
        name: "Cricket Matchcentre",
        url: "#",
        image:
          "https://placehold.co/600x400/2563eb/ffffff?text=Cricket+Matchcentre",
      },
    ],
  },
  {
    title: "Polling Game",
    description:
      "Vote on predictions and see how your choices compare with others.",
    items: [
      {
        name: "Polling Game",
        url: "#",
        image:
          "/portfolio/images/gallery/gaming/polling-game/polling-admin.jpg",
      },
    ],
  },
  {
    title: "Quiz Game",
    description:
      "Test your knowledge with multiple-choice questions across topics.",
    items: [
      {
        name: "Video Quiz",
        url: "#",
        image: "/portfolio/images/gallery/gaming/quiz/video-quiz.jpg",
      },
      {
        name: "Yahoo Quiz",
        url: "#",
        image: "/portfolio/images/gallery/gaming/quiz/yahoo-quiz.jpg",
      },
    ],
  },
  {
    title: "Six Day Series Game",
    description:
      "Play a themed challenge every day for six days and collect rewards.",
    items: [
      {
        name: "Six Day Series Game",
        url: "#",
        image:
          "/portfolio/images/gallery/gaming/six-day-series/six-day-series.jpg",
      },
    ],
  },
  {
    title: "TOTY Game",
    description: "Create your ultimate team from the year's best performers.",
    items: [
      {
        name: "TOTY Game",
        url: "#",
        image: "/portfolio/images/gallery/gaming/toty/toty.jpg",
      },
    ],
  },
  {
    title: "Your Perfect Final Game",
    description: "Pick your dream final match setup and share with others.",
    items: [
      {
        name: "Your Perfect Final Game",
        url: "#",
        image:
          "/portfolio/images/gallery/gaming/your-perfect-final/your-perfect-final.jpg",
      },
    ],
  },
  {
    title: "Election Se Selection",
    description:
      "Vote for players as if it's an election to build a dream squad.",
    items: [
      {
        name: "Election Se Selection",
        url: "#",
        image:
          "/portfolio/images/gallery/gaming/election-se-selection/election-se-selection.jpg",
      },
    ],
  },
  {
    title: "Live Manager Game",
    description: "Make real-time decisions as a manager during a live match.",
    items: [
      {
        name: "Live Manager Game",
        url: "#",
        image: "/portfolio/images/gallery/gaming/live-manager/live-manager.jpg",
      },
    ],
  },
  {
    title: "Hand Cricket",
    description:
      "Play the classic hand cricket game in a digital interactive format.",
    items: [
      {
        name: "Hand Cricket",
        url: "#",
        image: "/portfolio/images/gallery/gaming/hand-cricket/hand-cricket.jpg",
      },
    ],
  },
  {
    title: "In House Office Projects",
    description: "Internal tools and platforms developed for office use.",
    items: [
      {
        name: "Sportz Playground",
        url: "#",
        image: "/portfolio/images/gallery/websites/office/sportzplayground.jpg",
      },
      {
        name: "Fantasy Engine",
        url: "#",
        image: "/portfolio/images/gallery/websites/office/fantasyengine.jpg",
      },
    ],
  },
];

export default function Home() {
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);
  const [section, setSection] = useState(0);
  const [subSection, setSubSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const currentSection = gallerySections[section];
  const currentSubSection =
    currentSection.title === "Websites"
      ? (currentSection.items[subSection] as SubSection).subItems
      : (currentSection.items as GalleryItem[]);

  return (
    <>
      <Head>
        <title>Shailesh Mankar - Portfolio</title>
        <meta
          name="description"
          content="Portfolio website of Shailesh Mankar, UI Developer"
        />
      </Head>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl w-full"
          >
            <img
              src={lightboxImage}
              alt="Lightbox"
              className="w-full max-h-[80vh] object-contain rounded-lg bg-black"
            />
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-800 text-white z-50">
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <span className="font-bold text-lg">Shailesh Mankar</span>
          <div className="flex gap-6">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="hover:text-blue-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(galleryRef)}
              className="hover:text-blue-300"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="hover:text-blue-300"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col items-center justify-center bg-gray-50 pt-16 relative overflow-hidden"
      >
        {/* Animated background icons for UI developer skills */}
        <HeroBgIcons
          icons={[
            "figma",
            "photoshop",
            "css",
            "scss",
            "html",
            "js",
            "react",
            "git",
            "tailwind",
            "vscode",
            "npm",
            "code",
          ]}
        />
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-400 animate-spin-slow blur-sm"></div>
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
              <img
                src="/portfolio/images/profile/profile.jpg"
                alt="Shailesh Mankar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Shailesh Mankar
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              UI Developer with 15+ Years of Experience
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(aboutRef)}
              className="hidden"
            />
          </motion.div>
        </div>
        {/* Bottom Center Arrow Button */}
        <motion.button
          onClick={() => scrollToSection(aboutRef)}
          className="absolute left-1/2 bottom-8 -translate-x-1/2 bg-transparent p-0 m-0 border-none shadow-none z-20 group"
          aria-label="Scroll Down"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-10 h-10 text-blue-600 animate-bounce transition-all duration-200 group-hover:text-blue-800 group-hover:translate-y-1 active:text-blue-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.button>
      </motion.section>

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen bg-white py-20 px-4"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow p-6 mb-6"
          >
            <h2 className="text-xl text-blue-600 mb-2">Professional Summary</h2>
            {/* <p className="mb-2">
              <b>UI Developer with over 15 years of experience</b> in web and
              front-end development. Proficient in building responsive,
              cross-browser-compatible interfaces and CMS-driven websites.
              Skilled in JavaScript, React.js, and various design tools. Proven
              track record in leading UI/CSS teams and delivering high-impact
              projects for major sports platforms and fantasy gaming systems.
              Currently working as a contractual UI Developer at Sportz
              Interactive, focusing on scalable in-house platforms.
            </p> */}
            <p className="mb-2">
              <b>UI Developer with over 15 years of experience</b> in front-end
              and web development,{" "}
              <b>
                specializing in turning Figma/XD designs into responsive,
                pixel-perfect, and cross-browser-compatible interfaces using
                HTML5 and CSS3.
              </b>{" "}
              Proficient in building reusable UI components in JavaScript,
              React.js, and Next.js, often preparing component structures and UI
              layouts for handover to the JavaScript team for further
              functionality and integration.
            </p>
            <p className="mb-2">
              <b>Not a UI/UX Designer</b> — My primary role is front-end
              implementation, not visual design creation.
            </p>
            <p className="mb-2">
              Proven leadership in guiding UI/CSS teams and delivering scalable,
              CMS-driven websites and platforms — including major fantasy gaming
              systems and high-traffic sports media projects. Currently working
              as a contractual UI Developer at Sportz Interactive, focusing on
              modular and scalable in-house platform development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg shadow p-6 mb-6"
          >
            <h2 className="text-xl text-blue-600 mb-2">Work Experience</h2>
            <ul className="list-disc ml-6">
              <li className="mb-2">
                <b>Sportz Interactive, Mumbai</b> (Contractual, June 27, 2024 –
                Present)
                <br />
                Key Projects: Sportz Playground, Fantasy Engine
                <br />
              </li>
              <li className="mb-2">
                <b>Sportz Interactive, Mumbai</b> (Full Time, Feb 2011 – June
                27, 2024)
                <br />
                <b>Websites:</b> Developed and maintained official websites for
                IPL teams (CSK, MI, RCB, KKR, DC, GT, LSG, PBKS, RR, SRH), IPL
                Official Website, ISL, WPL, Pro Kabaddi, CPL teams (Barbados
                Royals, Trinbago Knight Riders), ILT20 teams (Abu Dhabi Knight
                Riders, Desert Vipers, Dubai Capitals, Gulf Giants), and MLC
                teams (LA Knight Riders, Seattle Orcas, Washington Freedom).
                Implemented responsive designs, interactive features.
                <br />
                <b>Fantasy Games:</b> Built UEFA Fantasy Game with real-time
                player statistics, team management, and live scoring features.
                Developed Fancode Fantasy platform with custom leaderboards,
                player transfers, and match predictions.
                <br />
                <b>Interactive Games:</b> Created Predictor game with live match
                predictions and user engagement features. Developed Wordle-style
                cricket word game with daily challenges and social sharing.
                Built Quiz games with dynamic content management and real-time
                scoring. Led the CSS team as Reporting Manager, implementing
                best practices and maintaining design consistency across all
                platforms.
              </li>
              <li>
                <b>Pigtails Pundits, Mumbai</b> (Full Time, Jan 2008 – Feb 2011)
                <br />
                Developed websites using CMS platforms including Joomla, Drupal,
                and WordPress. Customized CSS designs and layouts. Handled
                end-to-end development from planning to deployment.
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow p-6 mb-6"
          >
            <h2 className="text-xl text-blue-600 mb-2">Education</h2>
            <p>University of Mumbai, Bachelor of Arts (TYBA), 2023 – 2024</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-lg shadow p-6 mb-6"
          >
            <h2 className="text-xl text-blue-600 mb-2">Skills</h2>
            <ul className="list-disc ml-6">
              <li>HTML5, CSS3, SCSS</li>
              <li>JavaScript (Vanilla JS)</li>
              <li>React.js</li>
              <li>Responsive Web Design</li>
              <li>CMS Platforms: WordPress, Joomla, Drupal</li>
              <li>Cross-browser Compatibility</li>
              <li>Git / Version Control</li>
              <li>Gulp</li>
              <li>UI/UX Collaboration</li>
              <li>Basic SEO for Web</li>
              <li>Adobe Photoshop / Figma</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <h2 className="text-xl text-blue-600 mb-2">
              Languages & Interests
            </h2>
            <p>
              <b>Languages:</b> English, Hindi, Marathi
            </p>
            <p>
              <b>Hobbies:</b> Painting, Trekking
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        ref={galleryRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-[100vh] bg-gray-50 py-20 px-4"
      >
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-8">Gallery</h2>
          <div className="overflow-x-auto pb-2 -mx-4 px-4 relative">
            <div className="flex gap-2 min-w-max">
              {gallerySections.map((s, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSection(i);
                    setSubSection(0);
                  }}
                  className={`px-3 py-1 rounded whitespace-nowrap ${
                    section === i ? "bg-blue-600 text-white" : "bg-gray-200"
                  }`}
                >
                  {s.title}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {currentSection.title === "Websites" && (
          <div className="overflow-x-auto pb-2 -mx-4 px-4 relative">
            <div className="flex gap-2 min-w-max">
              {currentSection.items.map((item, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSubSection(i);
                  }}
                  className={`px-3 py-1 rounded whitespace-nowrap ${
                    subSection === i ? "bg-blue-600 text-white" : "bg-gray-200"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {/* Category Description */}
        {currentSection.description && (
          <p className="text-sm text-gray-600 my-4 text-center">
            {currentSection.description}
          </p>
        )}

        {/* Masonry/Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {currentSubSection.map((item, idx) => (
            <div
              key={idx}
              className="border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform flex flex-col"
              onClick={() => setLightboxImage(item.image)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-contain bg-gray-100"
              />
              <div className="text-center m-2">
                {item.url === "#" ? (
                  <span className="text-gray-500 font-semibold cursor-not-allowed">
                    {item.name}
                  </span>
                ) : (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-semibold"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        ref={contactRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen bg-white py-20 px-4 relative overflow-hidden"
      >
        {/* Animated background icons */}
        <svg
          className="contact-bg-icon icon1"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="60" height="60" rx="12" fill="#6001D2" />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dy=".35em"
            fontSize="32"
            fill="white"
            fontFamily="Arial, sans-serif"
          >
            Y!
          </text>
        </svg>
        <svg
          className="contact-bg-icon icon2"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="60" height="60" rx="12" fill="#10B981" />
          <g>
            <path
              d="M44 36.5c-2.5 0-4.9-.4-7.2-1.2-.7-.2-1.5 0-2 .5l-3.2 3.2c-5.6-2.9-10.1-7.4-13-13l3.2-3.2c.5-.5.7-1.3.5-2-0.8-2.3-1.2-4.7-1.2-7.2C21 15.1 20 14 18.7 14H14c-1.1 0-2 .9-2 2C12 36.1 23.9 48 38 48c1.1 0 2-.9 2-2v-4.7c0-1.3-1.1-2.3-2.3-2.3z"
              fill="white"
            />
          </g>
        </svg>
        <svg
          className="contact-bg-icon icon3"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="60" height="60" rx="12" fill="#0A66C2" />
          <g>
            <circle cx="18" cy="24" r="4" fill="white" />
            <rect x="14" y="30" width="8" height="12" rx="2" fill="white" />
            <rect x="26" y="22" width="20" height="20" rx="4" fill="white" />
            <rect x="32" y="28" width="8" height="8" rx="2" fill="#0A66C2" />
          </g>
        </svg>
        <div className="max-w-md mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+91 90283 33382</p>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>mankarshailesh@yahoo.com</p>
              </div>
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <a
                  href="https://linkedin.com/in/shailesh-mankar-86a9577a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Shailesh Mankar. All rights
            reserved.
          </p>
        </div>
      </footer>

      {/* Add this style block at the top of the file (or in your global CSS if preferred) */}
      <style jsx global>{`
        .contact-bg-icon {
          position: absolute;
          opacity: 0.12;
          z-index: 0;
          animation: floatContact 6s ease-in-out infinite;
          pointer-events: none;
        }
        .contact-bg-icon.icon1 {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }
        .contact-bg-icon.icon2 {
          top: 60%;
          left: 75%;
          animation-delay: 2s;
        }
        .contact-bg-icon.icon3 {
          top: 75%;
          left: 20%;
          animation-delay: 4s;
        }
        @keyframes floatContact {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.1);
          }
        }
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .hero-bg-icon {
          position: absolute;
          opacity: 0.22;
          z-index: 0;
          filter: blur(0.5px);
          animation: floatHero 8s ease-in-out infinite;
          pointer-events: none;
          transition: opacity 0.3s;
        }
        .hero-bg-icon.figma {
          top: 12%;
          left: 8%;
          width: 64px;
          height: 64px;
          animation-delay: 0s;
        }
        .hero-bg-icon.photoshop {
          top: 70%;
          left: 18%;
          width: 56px;
          height: 56px;
          animation-delay: 2s;
        }
        .hero-bg-icon.css {
          top: 20%;
          right: 10%;
          width: 60px;
          height: 60px;
          animation-delay: 4s;
        }
        .hero-bg-icon.scss {
          bottom: 18%;
          right: 18%;
          width: 56px;
          height: 56px;
          animation-delay: 6s;
        }
        .hero-bg-icon.html {
          bottom: 10%;
          left: 40%;
          width: 60px;
          height: 60px;
          animation-delay: 3s;
        }
        .hero-bg-icon.js {
          top: 35%;
          left: 20%;
          width: 56px;
          height: 56px;
          animation-delay: 1s;
        }
        .hero-bg-icon.react {
          top: 60%;
          right: 12%;
          width: 72px;
          height: 72px;
          animation-delay: 2.5s;
        }
        .hero-bg-icon.git {
          top: 10%;
          right: 30%;
          width: 48px;
          height: 48px;
          animation-delay: 5s;
        }
        .hero-bg-icon.tailwind {
          bottom: 25%;
          left: 15%;
          width: 64px;
          height: 64px;
          animation-delay: 3.5s;
        }
        .hero-bg-icon.vscode {
          top: 55%;
          left: 60%;
          width: 56px;
          height: 56px;
          animation-delay: 5.5s;
        }
        .hero-bg-icon.npm {
          bottom: 8%;
          right: 8%;
          width: 48px;
          height: 48px;
          animation-delay: 6.5s;
        }
        .hero-bg-icon.code {
          top: 25%;
          left: 70%;
          width: 60px;
          height: 60px;
          animation-delay: 7s;
        }
        @keyframes floatHero {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-24px) scale(1.08);
          }
        }
      `}</style>
    </>
  );
}
