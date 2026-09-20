const productImages = {
  /* =========================================================
  ARCHITECTURAL STONE COLLECTION
  ========================================================= */

  "STONE VENEER": "/products/stone-veneer.png",
  "CAT-EYE": "/products/cat-eye.png",
  "GOLDEN THAR": "/products/golden-thar.png",
  "LIGHT LIMESTONE": "/products/light-limestone.png",
  "SAND PENCIL": "/products/sand-pencil.png",
  "LIMEBEIGE PANEL": "/products/limebeige-panel.png",
  "TEAK-WHITE PATTERN": "/products/teak-white-pattern.png",
  "LIME STAR": "/products/lime-star.png",
  "SAND BAMBOO": "/products/sand-bamboo.png",
  "MINT BAMBOO": "/products/mint-bamboo.png",

  /* =========================================================
  EARTH & TEXTURE COLLECTION
  ========================================================= */

  "GALAXY WORLD": "/products/galaxy-world.png",
  "WHITE ROCK": "/products/white-rock.png",
  "MULTI Z": "/products/multi-z.png",
  "GREEN SLATE": "/products/green-slate.jpg",
  "STICK FIRE": "/products/stick-fire.jpg",
  "RAINBOW": "/products/rainbow.png",
  "GREY ROCK": "/products/grey-rock.png",
  "BIDASAR": "/products/bidasar.png",
  "MULTI STONE": "/products/multi-stone.png",
  "RAINBOW PENCIL": "/products/rainbow-pencil.png",

  /* =========================================================
  CHARCOAL & SLATE COLLECTION
  ========================================================= */

  "RANDOM STONE": "/products/random-stone.png",
  "MIX CHIPOUT": "/products/mix-chipout.png",
  "GREY BLAST": "/products/grey-blast.png",
  "WATERFALL": "/products/waterfall.png",
  "GALAXY BLACK": "/products/galaxy-black.png",
  "ROCK FACE KADAPPA": "/products/rock-face-kadappa.png",
  "Z BLACK": "/products/z-black.png",
  "BLACK CHIPOUT": "/products/black-chipout.png",
  "MIX STONE": "/products/mix-stone.png",
  "BLACK BASALT": "/products/black-basalt.png",
};


/* =========================================================
COLLECTIONS
========================================================= */

const stoneNames = [
  /* Architectural Stone */
  "STONE VENEER",
  "CAT-EYE",
  "GOLDEN THAR",
  "LIGHT LIMESTONE",
  "SAND PENCIL",
  "LIMEBEIGE PANEL",
  "TEAK-WHITE PATTERN",
  "LIME STAR",
  "SAND BAMBOO",
  "MINT BAMBOO",

  /* Earth & Texture */
  "GALAXY WORLD",
  "WHITE ROCK",
  "MULTI Z",
  "GREEN SLATE",
  "STICK FIRE",
  "RAINBOW",
  "GREY ROCK",
  "BIDASAR",
  "MULTI STONE",
  "RAINBOW PENCIL",

  /* Charcoal & Slate */
  "RANDOM STONE",
  "MIX CHIPOUT",
  "GREY BLAST",
  "WATERFALL",
  "GALAXY BLACK",
  "ROCK FACE KADAPPA",
  "Z BLACK",
  "BLACK CHIPOUT",
  "MIX STONE",
  "BLACK BASALT",
];


const collectionCategory = (index) => {
  if (index < 10) return "Architectural Stone";

  if (index < 20) return "Earth & Texture";

  return "Charcoal & Slate";
};


export const collections = stoneNames.map((title, index) => ({
  id: index + 1,

  slug: title
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll("/", "-"),

  title,

  category: collectionCategory(index),

  finish: [
    "Natural split",
    "Hand honed",
    "Tumbled",
    "Brushed",
  ][index % 4],

  stoneType: [
    "Limestone",
    "Quartzite",
    "Sandstone",
    "Slate",
  ][index % 4],

  image: productImages[title],

  description:
    `A tactile ${title.toLowerCase()} surface shaped for considered interiors, hospitality spaces and architectural feature walls.`,

  applications: [
    "Feature walls",
    "Luxury residences",
    "Hospitality interiors",
  ],

  formats: "Custom modular panels up to 2m × 3m",
}));


/* =========================================================
2D CNC DESIGNS
========================================================= */

const cnc2DImages = [
  "/products/2d/2d1.png",
  "/products/2d/2d2.png",
  "/products/2d/2d3.png",
  "/products/2d/2d4.png",
  "/products/2d/2d5.png",
];

export const cnc2dDesigns = cnc2DImages.map((image, index) => ({
  id: index + 1,

  slug: `2d-stone-${index + 1}`,

  title: `2D STONE ${index + 1}`,

  category: "2D CNC",

  image,

  description:
    "A precision-cut decorative stone surface designed for walls, screens and bespoke architectural details.",

  applications: [
    "Screen walls",
    "Lobby panels",
    "Residential features",
  ],
}));


/* =========================================================
3D CNC DESIGNS
========================================================= */

const cnc3DImages = [
  "/products/3d/3d1.png",
  "/products/3d/3d2.png",
  "/products/3d/3d3.png",
  "/products/3d/3d4.png",
  "/products/3d/3d5.png",
];

export const cnc3dDesigns = cnc3DImages.map((image, index) => ({
  id: index + 1,

  slug: `3d-stone-${index + 1}`,

  title: `3D STONE ${index + 1}`,

  category: "3D CNC",

  image,

  description:
    "A dimensional stone artwork with sculpted depth and architectural texture, designed to create light, shadow and movement.",

  applications: [
    "Feature walls",
    "Luxury residences",
    "Hotels and lounges",
  ],

  dimensions: "Up to 2m × 3m",
}));


/* =========================================================
PROJECTS
========================================================= */

export const projects = [
  {
    id: 1,
    slug: "the-luxury-residence",
    title: "The Luxury Residence",
    category: "Residential",
    service: "CNC Wall Cladding",
    location: "Ranchi, India",
    image: "/products/stone1.jpg",
    description:
      "A warm, sculptural living room built around a quiet stone statement wall.",
  },

  {
    id: 2,
    slug: "hotel-interior",
    title: "Hotel Interior",
    category: "Hospitality",
    service: "Premium Design",
    location: "Kishangarh, Rajasthan",
    image: "/products/stone2.jpg",
    description:
      "A hospitality interior where hand-finished stone brings depth to the arrival experience.",
  },

  {
    id: 3,
    slug: "the-architectural-wall",
    title: "The Architectural Wall",
    category: "Wall Cladding",
    service: "3D Relief Carving",
    location: "India",
    image: "/products/stone3.jpg",
    description:
      "A graphic relief installation calibrated to catch changing daylight.",
  },

  {
    id: 4,
    slug: "desert-courtyard",
    title: "Desert Courtyard",
    category: "Landscape",
    service: "Landscape Stone",
    location: "Rajasthan, India",
    image: "/products/stone4.jpg",
    description:
      "Layered natural textures extend the material language from architecture into landscape.",
  },

  {
    id: 5,
    slug: "private-gallery",
    title: "Private Gallery",
    category: "Commercial",
    service: "Custom Inlays",
    location: "New Delhi, India",
    image: "/products/stone5.jpg",
    description:
      "A bespoke gallery threshold made from graphic stone fragments and quiet proportion.",
  },

  {
    id: 6,
    slug: "the-bronze-suite",
    title: "The Bronze Suite",
    category: "Hospitality",
    service: "Bespoke Sculpture",
    location: "Mumbai, India",
    image: "/products/stone6.jpg",
    description:
      "Tactile paneling and restrained tonal shifts create a calm private retreat.",
  },

  {
    id: 7,
    slug: "garden-pavilion",
    title: "Garden Pavilion",
    category: "Residential",
    service: "Landscape Stone",
    location: "Jaipur, India",
    image: "/products/stone7.jpg",
    description:
      "A pavilion framed in split stone, balancing crafted edges with raw material character.",
  },

  {
    id: 8,
    slug: "the-material-library",
    title: "The Material Library",
    category: "Commercial",
    service: "Stone Cladding",
    location: "Kishangarh, India",
    image: "/products/stone8.jpg",
    description:
      "A working material library where a full spectrum of stone finishes is on display.",
  },
];


/* =========================================================
GALLERY
========================================================= */

export const gallery = [
  ...collections
    .slice(0, 10)
    .map((item) => ({
      ...item,
      type: "Materials",
    })),

  ...cnc2dDesigns
    .slice(0, 5)
    .map((item) => ({
      ...item,
      type: "CNC",
    })),

  ...projects
    .slice(0, 5)
    .map((item) => ({
      ...item,
      type: "Installations",
    })),
];


/* =========================================================
PROJECT VIDEO
========================================================= */

export const projectVideo = {
  title: "Watch the project tour.",
  eyebrow: "Project film",

  description:
    "A complete walkthrough of our finest installations.",

  poster: "/products/waterfall.png",

  video: "/videos/project-tour.mp4",
};


/* =========================================================
CATEGORIES
========================================================= */

export const categories = [
  "All",
  "Architectural Stone",
  "Earth & Texture",
  "Charcoal & Slate",
  "2D CNC",
  "3D CNC",
];


/* =========================================================
PROJECT CATEGORIES
========================================================= */

export const projectCategories = [
  "All",
  "Residential",
  "Hospitality",
  "Commercial",
  "Wall Cladding",
  "Landscape",
];


/* =========================================================
GALLERY CATEGORIES
========================================================= */

export const galleryCategories = [
  "All",
  "Materials",
  "CNC",
  "Interiors",
  "Installations",
  "Workshop",
];


/* =========================================================
CONTACT
========================================================= */

export const contact = {
  email: "info@meteoroid.in",

  instagram:
    "https://www.instagram.com/meteoroidluxuriousstone?igsh=MjJwYjNrd2k3Ymh3",

  youtube:
    "https://www.youtube.com/@naturalmtdstone",

  whatsapp:
    "https://api.whatsapp.com/send/?phone=919934390668&text&type=phone_number&app_absent=0",

  whatsappMessage:
    "Hello Meteoroid, I'm interested in your stone cladding solutions.",

  address: "Ranchi, India",

  manufacturing: "Kishangarh, Rajasthan",
};