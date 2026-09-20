import { ButtonLink, ImageFrame, SectionLabel } from "../site-shell";
import "./about.css";

export default function About() {
  return (
    <section className="section about-preview">
      <div className="about-visual">
        <ImageFrame
          src="/about/ab1.png"
          alt="Meteoroid stone installation"
        />

        {/* 86 INCHES BADGE */}
        <div className="about-badge">
          <strong>86</strong>
          <span>INCHES</span>
          <span>MAXIMUM</span>
          <span>WIDTH</span>
        </div>

        <span className="vertical-note">
          FROM RAW STONE TO TIMELESS SPACE
        </span>
      </div>

      <div className="about-copy">
        <SectionLabel>About Meteoroid</SectionLabel>

        <h2>
          Crafting timeless
          <br />
          <em>luxury in stone.</em>
        </h2>

        <p>
          At Meteoroid Luxurious Stones, we redefine spaces with premium CNC
          stone wall cladding and bespoke natural stone designs. Crafted for
          modern homes and commercial projects, our creations blend luxury,
          durability and precision.
        </p>

        <p>
          Backed by K G Stonex, our manufacturing hub in Kishangarh and
          operations in Ranchi turn raw stone into architectural masterpieces.
        </p>

        <div className="metric-row">
          <div>
            <strong>
              86<span>″</span>
            </strong>
            <small>Maximum width</small>
          </div>

          <div>
            <strong>
              2×3<span>m</span>
            </strong>
            <small>Large-format slabs</small>
          </div>
        </div>

        <ButtonLink href="/about" tone="outline">
          Read our story
        </ButtonLink>
      </div>
    </section>
  );
}