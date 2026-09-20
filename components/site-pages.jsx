"use client";

import Link from "next/link";
import {
  ArrowDownRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Play,
  Search,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  categories,
  cnc2dDesigns,
  cnc3dDesigns,
  collections,
  contact,
  gallery,
  galleryCategories,
  projectCategories,
  projects,
} from "@/data/content";
import {
  ButtonLink,
  ImageFrame,
  SectionLabel,
  Shell,
} from "./site-shell";
import CollectionCard from "./homepage/CollectionCard";

function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <SectionLabel>{eyebrow}</SectionLabel>
      <h1>{title}</h1>
      {text && <p>{text}</p>}
    </section>
  );
}
function FilterBar({ active, setActive, values, search, setSearch }) {
  return (
    <div className="filter-bar">
      <div className="filter-tabs">
        {values.map((value) => (
          <button
            className={active === value ? "active" : ""}
            onClick={() => setActive(value)}
            key={value}
          >
            {value}
          </button>
        ))}
      </div>
      {setSearch && (
        <label className="search-field">
          <Search size={16} />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search materials"
            aria-label="Search materials"
          />
        </label>
      )}
    </div>
  );
}
function Pagination({ page, totalPages, setPage, total, start, end }) {
  if (totalPages < 2) return null;
  return (
    <div className="pagination">
      <span>
        Showing {start}–{end} of {total}
      </span>
      <div className="pagination-controls">
        <button
          onClick={() => setPage(Math.max(1, page - 1))}
          disabled={page === 1}
          aria-label="Previous page"
        >
          <ChevronLeft size={17} /> Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (number) => (
            <button
              key={number}
              className={page === number ? "active" : ""}
              onClick={() => setPage(number)}
            >
              {String(number).padStart(2, "0")}
            </button>
          ),
        )}
        <button
          onClick={() => setPage(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          aria-label="Next page"
        >
          Next <ChevronRight size={17} />
        </button>
      </div>
    </div>
  );
}
function usePagination(items, perPage) {
  const [page, setPage] = useState(1);
  useEffect(() => setPage(1), [items.length]);
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const safePage = Math.min(page, totalPages);
  const visible = items.slice((safePage - 1) * perPage, safePage * perPage);
  return {
    page: safePage,
    setPage,
    totalPages,
    visible,
    start: items.length ? (safePage - 1) * perPage + 1 : 0,
    end: Math.min(safePage * perPage, items.length),
  };
}

import "./CollectionHero.css";

function CollectionListing() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const catalogueItems = [...collections, ...cnc2dDesigns, ...cnc3dDesigns];

  const filtered = useMemo(
    () =>
      catalogueItems.filter(
        (item) =>
          (active === "All" || item.category === active) &&
          item.title.toLowerCase().includes(search.toLowerCase()),
      ),
    [active, search, catalogueItems],
  );

  const pagination = usePagination(filtered, 12);

  useEffect(() => {
    window.scrollTo({ top: 360, behavior: "smooth" });
  }, [pagination.page]);

  return (
    <Shell>
      <main>

        <section className="collection-page-hero">
          <div className="collection-page-hero-content">

            <span className="collection-page-hero-eyebrow">
              Our materials / 01
            </span>

            <h1 className="collection-page-hero-title">
              Natural stone.
              <br />
              <em>Endless possibilities.</em>
            </h1>

            <p className="collection-page-hero-text">
              A curated collection of natural stone surfaces, split textures
              and modular patterns for architectural spaces.
            </p>

          </div>
        </section>

        <section className="listing-section">
          <FilterBar
            active={active}
            setActive={setActive}
            values={categories}
            search={search}
            setSearch={setSearch}
          />

          <div className="listing-meta">
            {filtered.length
              ? `${filtered.length} designs, selected for architecture`
              : "No designs match your search"}
          </div>

          <div className="material-grid">
            {pagination.visible.map((item, index) => (
              <CollectionCard
                item={item}
                index={(pagination.page - 1) * 12 + index}
                key={item.id}
              />
            ))}
          </div>

          {!filtered.length && (
            <div className="empty-state">
              <h3>Try a different design.</h3>

              <button
                onClick={() => {
                  setActive("All");
                  setSearch("");
                }}
              >
                Clear filters
              </button>
            </div>
          )}

          <Pagination {...pagination} total={filtered.length} />
        </section>

      </main>
    </Shell>
  );
}



function DetailHero({ type, item }) {
  return (
    <section className="detail-hero">
      <div className="detail-image">
        <ImageFrame src={item.image} alt={item.title} />
      </div>
      <div className="detail-copy">
        <SectionLabel>{type}</SectionLabel>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <div className="detail-facts">
          <div>
            <span>Category</span>
            <b>{item.category}</b>
          </div>
          <div>
            <span>Finish</span>
            <b>{item.finish || "Hand finished"}</b>
          </div>
          <div>
            <span>Application</span>
            <b>{item.applications?.[0]}</b>
          </div>
          <div>
            <span>Format</span>
            <b>{item.formats || item.dimensions || "Bespoke"}</b>
          </div>
        </div>
        <ButtonLink href="/contact" tone="dark">
          Enquire about this design
        </ButtonLink>
        <a
          className="text-link"
          href={contact.whatsapp}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp us <ArrowDownRight size={15} />
        </a>
      </div>
    </section>
  );
}
function DetailPage({ item, type, related }) {
  if (!item) {
    return (
      <Shell>
        <PageHero
          eyebrow="404 / Not found"
          title={
            <>
              The stone has
              <br />
              <em>moved on.</em>
            </>
          }
          text="Return to the collection to discover another surface."
        />

        <div className="center-cta">
          <ButtonLink href="/collections" tone="dark">
            Back to collections
          </ButtonLink>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <main>
        {/* =====================================================
            DETAIL HERO
        ===================================================== */}

        <DetailHero item={item} type={type} />


        {/* =====================================================
            MATERIAL STORY
        ===================================================== */}

        <section className="detail-story">
          <div className="detail-story-heading">
            <SectionLabel>The material story</SectionLabel>

            <h2>
              Quiet texture.
              <br />
              <em>Considered detail.</em>
            </h2>
          </div>

          <div className="detail-story-copy">
            <p>
              {item.description} Every piece is selected, cut and finished to
              bring an honest material language into the spaces it inhabits.
            </p>

            <p>
              Tell us about your project and our studio will help shape the
              right scale, finish and installation approach.
            </p>
          </div>
        </section>


        {/* =====================================================
            RELATED WORKS
        ===================================================== */}

        <section className="related-section">
          <div className="section-heading-row">
            <div>
              <SectionLabel>Continue exploring</SectionLabel>

              <h2>
                Related
                <br />
                <em>works.</em>
              </h2>
            </div>

            <ButtonLink
              href={
                type.includes("Stone")
                  ? "/collections"
                  : "/cnc-designs"
              }
              tone="outline"
            >
              View collection
            </ButtonLink>
          </div>

          <div className="related-grid">
            {related.slice(0, 3).map((entry, index) => (
              <CollectionCard
                item={entry}
                index={index}
                key={entry.id}
              />
            ))}
          </div>
        </section>
      </main>
    </Shell>
  );
}



function CNCPage({ mode = "hub" }) {
  const is3d = mode === "3d";
  const items = is3d ? cnc3dDesigns : cnc2dDesigns;

  const [page, setPage] = useState(1);

  const perPage = is3d ? 12 : 11;
  const totalPages = Math.ceil(items.length / perPage);

  const visible = items.slice(
    (page - 1) * perPage,
    page * perPage
  );

  /* =========================================================
     CNC HUB
  ========================================================= */

  if (mode === "hub") {
    return (
      <Shell>
        <main>

          <section className="cnc-page-hero">
            <div className="cnc-page-hero-content">

              <span className="cnc-page-hero-eyebrow">
                Precision stone / 02
              </span>

              <h1 className="cnc-page-hero-title">
                Designed by technology.
                <br />
                <em>Finished by craft.</em>
              </h1>

              <p className="cnc-page-hero-text">
                Explore a growing library of carved stone patterns, from
                graphic 2D geometry to deeply dimensional luxury reliefs.
              </p>

            </div>
          </section>


          <section className="cnc-hub">

            <Link
              href="/cnc-designs/2d"
              className="cnc-category-card"
            >
              <ImageFrame
                src={cnc2dDesigns[0].image}
                alt="2D CNC designs"
              />

              <div>
                <SectionLabel dark>
                  01 / Precision
                </SectionLabel>

                <h2>
                  2D CNC
                  <br />
                  <em>designs.</em>
                </h2>

                <ArrowDownRight size={26} />
              </div>
            </Link>


            <Link
              href="/cnc-designs/3d"
              className="cnc-category-card cnc-category-tall"
            >
              <ImageFrame
                src={cnc3dDesigns[0].image}
                alt="3D luxury designs"
              />

              <div>
                <SectionLabel dark>
                  02 / Dimensional
                </SectionLabel>

                <h2>
                  3D luxury
                  <br />
                  <em>designs.</em>
                </h2>

                <ArrowDownRight size={26} />
              </div>
            </Link>

          </section>
        </main>
      </Shell>
    );
  }


  /* =========================================================
     2D / 3D LISTING
  ========================================================= */

  return (
    <Shell>
      <main>

        <section className="cnc-page-hero">
          <div className="cnc-page-hero-content">

            <span className="cnc-page-hero-eyebrow">
              CNC library / {is3d ? "03" : "02"}
            </span>

            <h1 className="cnc-page-hero-title">
              {is3d ? (
                <>
                  3D luxury
                  <br />
                  <em>designs.</em>
                </>
              ) : (
                <>
                  2D CNC
                  <br />
                  <em>designs.</em>
                </>
              )}
            </h1>

            <p className="cnc-page-hero-text">
              {is3d
                ? `${cnc3dDesigns.length} exclusive designs carved to make light move across a wall.`
                : "Precision-cut geometric patterns for feature walls, screens and architectural details."}
            </p>

          </div>
        </section>


        <section className="listing-section cnc-listing">

          <div className="listing-meta">
            {is3d
              ? `${cnc3dDesigns.length} exclusive designs`
              : `${cnc2dDesigns.length} precision patterns`}
          </div>


          <div className="design-grid">

            {visible.map((item, index) => (
              <Link
                href={`/cnc-designs/${item.slug}`}
                className="design-card"
                key={item.id}
              >
                <ImageFrame
                  src={item.image}
                  alt={item.title}
                />

                <div>

                  <span>
                    Design{" "}
                    {String(
                      (page - 1) * perPage + index + 1
                    ).padStart(2, "0")}
                  </span>

                  <h3>{item.title}</h3>

                  <b>
                    View design
                    <ArrowDownRight size={16} />
                  </b>

                </div>
              </Link>
            ))}

          </div>


          <Pagination
            page={page}
            totalPages={totalPages}
            setPage={setPage}
            total={items.length}
            start={(page - 1) * perPage + 1}
            end={Math.min(
              page * perPage,
              items.length
            )}
          />

        </section>
      </main>
    </Shell>
  );
}

export default CNCPage;




function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered = projects.filter(
    (item) =>
      active === "All" ||
      item.category === active
  );

  const pagination = usePagination(filtered, 8);

  return (
    <Shell>
      <main>
        {/* =====================================================
            HERO
        ===================================================== */}

        <PageHero
          eyebrow="Portfolio / 03"
          title={
            <>
              Spaces transformed
              <br />
              <em>through stone.</em>
            </>
          }
          text="From private residences to hospitality environments, discover how our materials become part of the architecture."
        />

        {/* =====================================================
            PROJECT LISTING
        ===================================================== */}

        <section className="listing-section">

          <FilterBar
            active={active}
            setActive={setActive}
            values={projectCategories}
          />

          <div className="project-listing-grid">

            {pagination.visible.map((item) => (
              <Link
                href={`/projects/${item.slug}`}
                className="project-listing-card"
                key={item.id}
              >
                {/* REAL IMAGE FROM projects DATA */}
                <ImageFrame
                  src={item.image}
                  alt={item.title}
                />

                <div className="project-listing-info">

                  <SectionLabel>
                    {item.category}
                  </SectionLabel>

                  <h3>
                    {item.title}
                  </h3>

                  <span>
                    {item.service}
                    <ArrowDownRight size={16} />
                  </span>

                </div>
              </Link>
            ))}

          </div>

          <Pagination
            {...pagination}
            total={filtered.length}
          />

        </section>
      </main>
    </Shell>
  );
}



function GalleryPage() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);
  const filtered = gallery.filter(
    (item) => active === "All" || item.type === active,
  );
  return (
    <Shell>
      <main>
        <PageHero
          eyebrow="Visual archive / 04"
          title={
            <>
              The material
              <br />
              <em>in context.</em>
            </>
          }
          text="A visual study of stone, process and the spaces shaped by Meteoroid."
        />
        <section className="listing-section gallery-listing">
          <FilterBar
            active={active}
            setActive={setActive}
            values={galleryCategories}
          />
          <div className="masonry-grid">
            {filtered.map((item, index) => (
              <button
                className={`gallery-item gallery-item-${index % 5}`}
                key={`${item.title}-${index}`}
                onClick={() => setSelected(index)}
              >
                <ImageFrame src={item.image} alt={item.title} />
                <span>
                  {item.title}
                  <ArrowDownRight size={16} />
                </span>
              </button>
            ))}
          </div>
        </section>
      </main>
      {selected !== null && (
        <Lightbox
          items={filtered}
          index={selected}
          setIndex={setSelected}
          close={() => setSelected(null)}
        />
      )}
    </Shell>
  );
}
function Lightbox({ items, index, setIndex, close }) {
  const item = items[index];
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") setIndex((index + 1) % items.length);
      if (event.key === "ArrowLeft")
        setIndex((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close, index, items.length, setIndex]);
  return (
    <div className="lightbox" onClick={close}>
      <button
        className="lightbox-close"
        onClick={close}
        aria-label="Close image"
      >
        <X />
      </button>
      <button
        className="lightbox-arrow lightbox-left"
        onClick={(event) => {
          event.stopPropagation();
          setIndex((index - 1 + items.length) % items.length);
        }}
        aria-label="Previous image"
      >
        <ChevronLeft />
      </button>
      <div
        className="lightbox-content"
        onClick={(event) => event.stopPropagation()}
      >
        <ImageFrame src={item.image} alt={item.title} />
        <div>
          <span>
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(items.length).padStart(2, "0")}
          </span>
          <h3>{item.title}</h3>
        </div>
      </div>
      <button
        className="lightbox-arrow lightbox-right"
        onClick={(event) => {
          event.stopPropagation();
          setIndex((index + 1) % items.length);
        }}
        aria-label="Next image"
      >
        <ChevronRight />
      </button>
    </div>
  );
}

function AboutPage() {
  const steps = [
    "Stone selection",
    "Design",
    "CNC programming",
    "Precision carving",
    "Hand finishing",
    "Quality control",
    "Installation",
  ];
  return (
    <Shell>
      <main>
        <PageHero
          eyebrow="The studio / 05"
          title={
            <>
              Stone. Technology.
              <br />
              <em>Craftsmanship.</em>
            </>
          }
          text="We believe the most memorable spaces begin with material honesty and end with exceptional detail."
        />
        <section className="about-story">
          <div>
            <SectionLabel>Our story</SectionLabel>
            <h2>
              A material
              <br />
              <em>point of view.</em>
            </h2>
          </div>
          <div>
            <p>
              At Meteoroid, stone is not a surface to be added at the end. It is
              the beginning of the design conversation. We partner with
              architects, designers and homeowners to create spaces that feel
              grounded, tactile and singular.
            </p>
            <p>
              Backed by K G Stonex, our manufacturing hub in Kishangarh,
              Rajasthan brings advanced CNC capability together with the
              instinct of expert hands. Operations in Ranchi keep the studio
              close to the projects and people we serve.
            </p>
          </div>
        </section>
        <section className="manufacturing-section">
          <ImageFrame
            src="https://meteoroid.in/stone17.png"
            alt="Meteoroid CNC manufacturing"
          />
          <div>
            <SectionLabel dark>Kishangarh / Rajasthan</SectionLabel>
            <h2>
              From raw stone
              <br />
              <em>to installation.</em>
            </h2>
            <p>
              Every project moves through a considered sequence of selection,
              carving, finishing and installation. The result is precise without
              losing the character that makes natural stone feel alive.
            </p>
          </div>
        </section>
        <section className="timeline-section">
          <SectionLabel>The process</SectionLabel>
          <h2>
            Seven steps to
            <br />
            <em>something lasting.</em>
          </h2>
          <div className="timeline">
            {steps.map((step, index) => (
              <div key={step}>
                <span>0{index + 1}</span>
                <b>{step}</b>
                <ArrowDownRight size={18} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </Shell>
  );
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
    location: "",
    interest: "",
    message: "",
  });
  const update = (key) => (event) =>
    setForm({ ...form, [key]: event.target.value });
  const submit = (event) => {
    event.preventDefault();
    if (form.name && form.email && form.message) setSubmitted(true);
  };
  return (
    <Shell>
      <main>
        <PageHero
          eyebrow="The first conversation / 06"
          title={
            <>
              Let's create
              <br />
              <em>something timeless.</em>
            </>
          }
          text="Tell us what you are imagining. Our studio will come back to you with the right material direction."
        />
        <section className="contact-layout">
          <div className="contact-details">
            <SectionLabel>Visit the studio</SectionLabel>
            <h2>
              Bring the
              <br />
              <em>vision.</em>
            </h2>
            <p>
              Manufacturing hub
              <br />
              <strong>{contact.manufacturing}</strong>
            </p>
            <p>
              Operations
              <br />
              <strong>{contact.address}</strong>
            </p>
            <a href={`mailto:${contact.email}`} className="contact-email">
              {contact.email} <ArrowDownRight size={16} />
            </a>
            <div className="contact-lines">
              <a href={contact.instagram} target="_blank" rel="noreferrer">
                Instagram <ArrowDownRight size={16} />
              </a>
              <a href={contact.youtube} target="_blank" rel="noreferrer">
                YouTube <ArrowDownRight size={16} />
              </a>
              <a href={contact.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp <ArrowDownRight size={16} />
              </a>
              <span>
                Available for residential, hospitality
                <br />
                and commercial projects.
              </span>
              <span>Precision · Passion · Perfection</span>
            </div>
          </div>
          <div className="form-card">
            {submitted ? (
              <div className="success-state">
                <div>
                  <Check size={26} />
                </div>
                <SectionLabel>Thank you</SectionLabel>
                <h2>
                  Your enquiry
                  <br />
                  <em>is on its way.</em>
                </h2>
                <p>
                  We will be in touch soon to understand your project and help
                  you find the right stone.
                </p>
                <ButtonLink href="/collections" tone="dark">
                  Continue exploring
                </ButtonLink>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div className="form-row">
                  <label>
                    Your name
                    <input
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Name"
                      required
                    />
                  </label>
                  <label>
                    Phone number
                    <input
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="+91"
                    />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    Email address
                    <input
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@example.com"
                      required
                    />
                  </label>
                  <label>
                    Project type
                    <select value={form.project} onChange={update("project")}>
                      <option value="">Select type</option>
                      <option>Residential</option>
                      <option>Hospitality</option>
                      <option>Commercial</option>
                    </select>
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    Location
                    <input
                      value={form.location}
                      onChange={update("location")}
                      placeholder="City / country"
                    />
                  </label>
                  <label>
                    Interested in
                    <select value={form.interest} onChange={update("interest")}>
                      <option value="">Select a service</option>
                      <option>Stone collection</option>
                      <option>CNC designs</option>
                      <option>Wall cladding</option>
                      <option>Bespoke sculpture</option>
                    </select>
                  </label>
                </div>
                <label>
                  Tell us about the project
                  <textarea
                    value={form.message}
                    onChange={update("message")}
                    placeholder="A few words about your space, timeline or material direction..."
                    required
                  />
                </label>
                <button className="button-link button-dark" type="submit">
                  Send enquiry <ArrowDownRight size={15} />
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
    </Shell>
  );
}

function ProjectDetailPage({ slug }) {
  const item = projects.find((entry) => entry.slug === slug);
  if (!item)
    return (
      <Shell>
        <PageHero
          eyebrow="404 / Not found"
          title={
            <>
              The project has
              <br />
              <em>moved on.</em>
            </>
          }
          text="Return to the portfolio to discover another space."
        />
        <div className="center-cta">
          <ButtonLink href="/projects" tone="dark">
            Back to projects
          </ButtonLink>
        </div>
      </Shell>
    );
  return (
    <Shell>
      <main>
        <section className="project-detail-hero">
          <ImageFrame src={item.image} alt={item.title} />
          <div>
            <SectionLabel dark>{item.category}</SectionLabel>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        </section>
        <section className="project-facts">
          <div>
            <span>Project</span>
            <b>{item.title}</b>
          </div>
          <div>
            <span>Location</span>
            <b>{item.location}</b>
          </div>
          <div>
            <span>Category</span>
            <b>{item.category}</b>
          </div>
          <div>
            <span>Service</span>
            <b>{item.service}</b>
          </div>
        </section>
        <section className="detail-story project-story">
          <SectionLabel>The story</SectionLabel>
          <h2>
            Material with
            <br />
            <em>a sense of place.</em>
          </h2>
          <div>
            <p>
              This project began with a simple brief: create a surface that
              could hold the room together without taking over. Together with
              the design team, we explored texture, scale and light until the
              stone felt inevitable.
            </p>
            <p>
              From first selection at the manufacturing hub to final
              installation, every detail was made to belong to the architecture.
            </p>
          </div>
        </section>
        <section className="project-gallery-strip">
          <ImageFrame src={item.image} alt={`${item.title} detail`} />
          <ImageFrame
            src={collections[item.id % collections.length].image}
            alt="Stone detail"
          />
          <ImageFrame
            src={cnc3dDesigns[item.id % cnc3dDesigns.length].image}
            alt="CNC detail"
          />
        </section>
        <div className="center-cta">
          <ButtonLink href="/contact" tone="dark">
            Start a similar project
          </ButtonLink>
        </div>
      </main>
    </Shell>
  );
}
function CollectionDetailPage({ slug }) {
  const item = collections.find((entry) => entry.slug === slug);
  return (
    <DetailPage
      item={item}
      type="Stone collection"
      related={collections.filter((entry) => entry.id !== item?.id)}
    />
  );
}
function CNCDetailPage({ slug }) {
  const item = [...cnc2dDesigns, ...cnc3dDesigns].find(
    (entry) => entry.slug === slug,
  );
  return (
    <DetailPage
      item={item}
      type="CNC design"
      related={cnc3dDesigns.filter((entry) => entry.id !== item?.id)}
    />
  );
}

export {
  AboutPage,
  CNCDetailPage,
  CNCPage,
  CollectionDetailPage,
  CollectionListing,
  ContactPage,
  GalleryPage,
  ProjectDetailPage,
  ProjectsPage,
};
