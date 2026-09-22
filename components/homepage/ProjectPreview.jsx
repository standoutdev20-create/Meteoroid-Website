"use client";

import { ArrowDownRight } from "lucide-react";
import { ButtonLink, ImageFrame, SectionLabel } from "../site-shell";

const projectPreviewItems = [
  {
    id: 1,
    slug: "the-luxury-residence",
    title: "The Luxury Residence",
    category: "Residential",
    service: "CNC Wall Cladding",
    image: "/products/stone1.jpg",
  },
  {
    id: 2,
    slug: "hotel-interior",
    title: "Hotel Interior",
    category: "Hospitality",
    service: "Premium Design",
    image: "/products/limebeige.png",
  },
  {
    id: 3,
    slug: "desert-courtyard",
    title: "Desert Courtyard",
    category: "Landscape",
    service: "Landscape Stone",
    image: "/products/sand-bambu.png",
  },
];

export default function ProjectPreview() {
  return (
    <section className="section project-preview">

      {/* SECTION HEADING */}
      <div className="section-heading-row">
        <div>
          <SectionLabel>Portfolio</SectionLabel>

          <h2>
            Our
            <br />
            <em>projects.</em>
          </h2>
        </div>

        <ButtonLink href="/projects" tone="outline">
          All projects
        </ButtonLink>
      </div>

      {/* PROJECT GRID */}
      <div className="project-feature-grid">
        {projectPreviewItems.map((item, index) => (
          <a
            href={`/projects/${item.slug}`}
            className={`project-card project-card-${index + 1}`}
            key={item.id}
          >
            <div className="project-image">
              <ImageFrame
                src={item.image}
                alt={item.title}
              />
            </div>

            <div className="project-info">
              <SectionLabel>{item.category}</SectionLabel>

              <h3>{item.title}</h3>

              <span>
                {item.service}
                <ArrowDownRight size={17} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}