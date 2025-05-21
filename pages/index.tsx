import Head from "next/head";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface GalleryItem {
  name: string;
  url: string;
  image: string;
}

interface SubSection {
  name: string;
  subItems: GalleryItem[];
}

interface GallerySection {
  title: string;
  items: (GalleryItem | SubSection)[];
}

const gallerySections: GallerySection[] = [
  {
    title: "Websites",
    items: [
      {
        name: "IPL",
        subItems: [
          {
            name: "Delhi Capitals",
            url: "https://www.delhicapitals.in",
            image: "/images/gallery/ipl/delhicapitals.jpg",
          },
          {
            name: "Gujarat Titans",
            url: "https://www.gujarattitansipl.com",
            image: "/images/gallery/ipl/gujarattitansipl.jpg",
          },
          {
            name: "Kolkata Knight Riders",
            url: "https://www.kkr.in",
            image: "/images/gallery/ipl/kolkataknightriders.jpg",
          },
          {
            name: "Lucknow Super Giants",
            url: "https://www.lucknowsupergiants.in",
            image: "/images/gallery/ipl/lucknowsupergiants.jpg",
          },
          {
            name: "Mumbai Indians",
            url: "https://www.mumbaiindians.com",
            image: "/images/gallery/ipl/mumbaiindians.jpg",
          },
          {
            name: "Punjab Kings",
            url: "https://www.punjabkingsipl.in",
            image: "/images/gallery/ipl/punjabkingsipl.jpg",
          },
          {
            name: "Rajasthan Royals",
            url: "https://www.rajasthanroyals.com",
            image: "/images/gallery/ipl/rajasthanroyals.jpg",
          },
          {
            name: "Royal Challengers Bengaluru",
            url: "https://www.royalchallengers.com",
            image: "/images/gallery/ipl/royalchallengers.jpg",
          },
        ],
      },
      {
        name: "CPL",
        subItems: [
          {
            name: "Barbados Royals",
            url: "https://www.barbadosroyals.com/",
            image: "/images/gallery/cpl/barbadosroyals.jpg",
          },
          {
            name: "Trinbago Knight Riders",
            url: "https://www.tkriders.com/",
            image: "/images/gallery/cpl/trinbagoknightriders.jpg",
          },
        ],
      },
      {
        name: "ILT20",
        subItems: [
          {
            name: "Abu Dhabi Knight Riders",
            url: "https://www.adkriders.com/",
            image: "/images/gallery/ilt20/abudhabiknightriders.jpg",
          },
          {
            name: "The Desert Vipers",
            url: "https://www.thedesertvipers.com/",
            image: "/images/gallery/ilt20/thedesertvipers.jpg",
          },
          {
            name: "Dubai Capitals",
            url: "https://www.gmrsports.in/dubai-capitals",
            image: "/images/gallery/ilt20/dubaicapitals.jpg",
          },
          {
            name: "Gulf Giants",
            url: "https://www.gulfgiants.com/",
            image: "/images/gallery/ilt20/gulfgiants.jpg",
          },
        ],
      },
      {
        name: "MLC",
        subItems: [
          {
            name: "Los Angeles Knight Riders",
            url: "https://www.lakriders.us/",
            image: "/images/gallery/mlc/lakriders.jpg",
          },
          {
            name: "Seattle Orcas",
            url: "https://www.seattleorcas.com/",
            image: "/images/gallery/mlc/seattleorcas.jpg",
          },
          {
            name: "Washington Freedom",
            url: "https://www.washingtonfreedom.com/",
            image: "/images/gallery/mlc/washingtonfreedom.jpg",
          },
        ],
      },
      {
        name: "Other",
        subItems: [
          {
            name: "ISL",
            url: "https://www.indiansuperleague.com/",
            image: "/images/gallery/other/indiansuperleague.jpg",
          },
          {
            name: "WPL",
            url: "https://www.womenspremierleague.in/",
            image: "/images/gallery/other/womenspremierleague.jpg",
          },
          {
            name: "ICC - Cricket",
            url: "https://www.icc-cricket.com//",
            image: "/images/gallery/other/icc-cricket.jpg",
          },
          {
            name: "Pro Kabaddi",
            url: "https://www.prokabaddi.com/",
            image: "/images/gallery/other/prokabaddi.jpg",
          },
        ],
      },
    ],
  },
  {
    title: "Fantasy Games",
    items: [
      {
        name: "UEFA Fantasy Game",
        url: "https://gaming.uefa.com/en/uclfantasy/create-team",
        image: "/images/gallery/fantasy/gaminguefa.jpg",
      },
      {
        name: "Fancode Fantasy",
        url: "#",
        image: "/images/gallery/fantasy/fancode.jpg",
      },
    ],
  },
  {
    title: "Interactive Games",
    items: [
      {
        name: "Predictor",
        url: "#",
        image: "/images/gallery/interactive/predictor.jpg",
      },
      {
        name: "Wordle-style",
        url: "#",
        image: "/images/gallery/interactive/wordle.jpg",
      },
      {
        name: "Quiz games",
        url: "#",
        image: "/images/gallery/interactive/quiz.jpg",
      },
    ],
  },
  {
    title: "In House Office Projects",
    items: [
      {
        name: "Sportz Playground",
        url: "#",
        image: "/images/gallery/office/sportzplayground.jpg",
      },
      {
        name: "Fantasy Engine",
        url: "#",
        image: "/images/gallery/office/fantasyengine.jpg",
      },
    ],
  },
];

export default function Home() {
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);
  const [section, setSection] = useState(0);
  const [slide, setSlide] = useState(0);
  const [subSection, setSubSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
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
  const totalSlides = currentSubSection.length;

  const handlePrevSlide = () => {
    setSlide((slide - (isMobile ? 1 : 2) + totalSlides) % totalSlides);
  };

  const handleNextSlide = () => {
    setSlide((slide + (isMobile ? 1 : 2)) % totalSlides);
  };

  return (
    <>
      <Head>
        <title>Shailesh Mankar - Portfolio</title>
        <meta
          name="description"
          content="Portfolio website of Shailesh Mankar, UI Developer"
        />
      </Head>

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
        className="min-h-screen flex flex-col items-center justify-center bg-gray-50 pt-16"
      >
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg"
          >
            <img
              src="/images/profile/profile.jpg"
              alt="Shailesh Mankar"
              className="w-full h-full object-cover"
            />
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
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
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
            <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
            <p className="mb-2">
              UI Developer with over 15 years of experience in web and front-end
              development. Proficient in building responsive,
              cross-browser-compatible interfaces and CMS-driven websites.
              Skilled in JavaScript, React.js, and various design tools. Proven
              track record in leading UI/CSS teams and delivering high-impact
              projects for major sports platforms and fantasy gaming systems.
              Currently working as a contractual UI Developer at Sportz
              Interactive, focusing on scalable in-house platforms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg shadow p-6 mb-6"
          >
            <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
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
            <h2 className="text-xl font-semibold mb-2">Education</h2>
            <p>University of Mumbai, Bachelor of Arts (TYBA), 2023 – 2024</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-lg shadow p-6 mb-6"
          >
            <h2 className="text-xl font-semibold mb-2">Skills</h2>
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
            <h2 className="text-xl font-semibold mb-2">
              Languages & Interests
            </h2>
            <p>Languages: English, Hindi, Marathi</p>
            <p>Hobbies: Painting, Trekking</p>
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
        className="min-h-screen bg-gray-50 py-20 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Gallery</h2>
          <div className="flex gap-2 mb-4 flex-wrap">
            {gallerySections.map((s, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSection(i);
                  setSlide(0);
                  setSubSection(0);
                }}
                className={`px-3 py-1 rounded ${
                  section === i ? "bg-blue-600 text-white" : "bg-gray-200"
                }`}
              >
                {s.title}
              </motion.button>
            ))}
          </div>

          {currentSection.title === "Websites" && (
            <div className="flex gap-2 mb-4 flex-wrap">
              {currentSection.items.map((item, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSubSection(i);
                    setSlide(0);
                  }}
                  className={`px-3 py-1 rounded ${
                    subSection === i ? "bg-blue-600 text-white" : "bg-gray-200"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[0, 1].map((index) => {
                const currentIndex = (slide + index) % totalSlides;
                return (
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex flex-col items-center ${
                      index === 1 ? "hidden md:flex" : ""
                    }`}
                  >
                    <div className="border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden">
                      <img
                        src={currentSubSection[currentIndex].image}
                        alt={currentSubSection[currentIndex].name}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="text-center mt-3">
                      <a
                        href={currentSubSection[currentIndex].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-semibold"
                      >
                        {currentSubSection[currentIndex].name}
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="flex gap-2 items-center justify-center mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevSlide}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Prev
              </motion.button>
              <span>
                {Math.floor(slide / (isMobile ? 1 : 2)) + 1} /{" "}
                {Math.ceil(totalSlides / (isMobile ? 1 : 2))}
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNextSlide}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Next
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        ref={contactRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen bg-white py-20 px-4"
      >
        <div className="max-w-md mx-auto">
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
    </>
  );
}
