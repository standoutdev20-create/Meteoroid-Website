import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { SectionLabel } from "../site-shell";
import "./ProductCategories.css";

const items = [
  {
    title: "CNC Wall Cladding",
    text: "Architectural carved panels.",
    image: "/products/stone11.png",
    category: "CNC / Precision",

    // Dedicated page exists
    href: "/cnc-designs/2d",
  },

  {
    title: "3D Stone Panels",
    text: "Sculptural wall surfaces.",
    image: "/products/limebeige.png",
    category: "Stone / Architecture",

    // Dedicated page exists
    href: "/cnc-designs/3d",
  },

  {
    title: "Landscaping Stones",
    text: "Outdoor architectural stone.",
    image: "/products/sand-bambu.png",
    category: "Landscape / Stone",

    // No dedicated page → collections
    href: "/collections",
  },

  {
    title: "Custom Inlays",
    text: "Bespoke stone details.",
    image: "/products/mosaic-star.png",
    category: "Bespoke / Detail",

    // No dedicated page → collections
    href: "/collections",
  },

  {
    title: "Bespoke Sculptures",
    text: "Custom stone artworks.",
    image: "/products/waterfall.png",
    category: "Bespoke / Stone",

    // No dedicated page → collections
    href: "/collections",
  },

  {
    title: "2D CNC Designs",
    text: "Precision carved geometry.",
    image: "/products/grey-blast.png",
    category: "CNC / Precision",

    // Dedicated page exists
    href: "/cnc-designs/2d",
  },
];

export default function ProductCategories() {
  return (
    <section className="section products-section">
      {/* =====================================================
          INTRO
      ====================================================== */}

      <div className="products-intro">
        <SectionLabel>What we offer</SectionLabel>

        <div className="products-title-row">
          <h2>
            Made for spaces
            <br />
            <em>with intention.</em>
          </h2>

          <p>
            From a single feature wall to a complete architectural language,
            we shape stone around the way you want to live.
          </p>
        </div>
      </div>

      {/* =====================================================
          PRODUCT GRID
      ====================================================== */}

      <div className="products-grid">
        {items.map((item, index) => (
          <Link
            href={item.href}
            className={`product-card product-card-${index + 1}`}
            key={item.title}
          >
            <div className="product-image-wrap">
              <img
                src={item.image}
                alt={item.title}
                className="product-image"
              />

              <div className="product-overlay" />

              {/* TOP INFORMATION */}

              <div className="product-top">
                <span className="product-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="product-category">
                  {item.category}
                </span>
              </div>

              {/* BOTTOM INFORMATION */}

              <div className="product-bottom">
                <div className="product-copy">
                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>

                <span className="product-arrow">
                  <ArrowDownRight
                    size={20}
                    strokeWidth={1.5}
                  />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}