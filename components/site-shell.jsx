"use client";

import Link from "next/link";
import {
  ArrowDownRight,
  ChevronLeft,
  ChevronRight,
  Download,
  Instagram,
  Menu,
  MoveUpRight,
  X,
  Youtube,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { contact } from "@/data/content";

export function ImageFrame({ src, alt, className = "" }) {
  return (
    <div className={`image-frame relative overflow-hidden bg-[#aaa79d] ${className}`}>
      <img
        src={src}
        alt={alt || "Meteoroid stone design"}
        loading="lazy"
      />
    </div>
  );
}

export function SectionLabel({ children, dark = false }) {
  return (
    <p className={`section-label font-sans text-[10px] font-bold uppercase tracking-[0.2em] ${dark ? "section-label-dark" : ""}`}>
      {children}
    </p>
  );
}

export function ButtonLink({ href, children, tone = "dark", onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`button-link inline-flex min-h-12 items-center gap-6 px-[18px] pl-[22px] text-[10px] font-bold uppercase tracking-[0.13em] transition duration-300 button-${tone}`}
    >
      {children}
      <MoveUpRight size={15} strokeWidth={1.5} />
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const links = [
    ["Home", "/"],
    ["Collections", "/collections"],
    ["CNC Designs", "/cnc-designs"],
    ["Projects", "/projects"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <Link href="/" className="brand-mark">
          <img
            src="/logo.png"
            alt="Meteoroid Luxurious Stones"
            className="brand-logo"
          />
        </Link>

        <nav className="desktop-nav">
          {links.map(([label, href]) => (
            <Link href={href} key={label}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            href="/catalog.pdf"
            target="_blank"
            rel="noreferrer"
            className="nav-catalogue"
          >
            <Download size={14} />
            <span>Catalogue</span>
          </a>

          <button
            className="menu-button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span>Menu</span>
            <Menu size={18} />
          </button>
        </div>
      </header>

      {open && (
        <div className="menu-overlay">
          <button
            className="menu-close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>

          <div className="menu-inner">
            <div>
              <SectionLabel dark>
                Navigate
              </SectionLabel>

              <div className="menu-list">
                {links.map(([label, href], index) => (
                  <Link
                    href={href}
                    key={label}
                    onClick={() => setOpen(false)}
                  >
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {label}

                    <ArrowDownRight size={26} />
                  </Link>
                ))}
              </div>
            </div>

            <div className="menu-aside">
              <SectionLabel dark>
                Studio
              </SectionLabel>

              <p>
                Ranchi, India
                <br />
                Kishangarh, Rajasthan
              </p>

              <a href={`mailto:${contact.email}`}>
                {contact.email}
              </a>

              <div className="menu-socials">
                <a
                  href={contact.instagram}
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram size={17} />
                </a>

                <a
                  href={contact.youtube}
                  aria-label="YouTube"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Youtube size={17} />
                </a>

                <a
                  href={contact.whatsapp}
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noreferrer"
                >
                  WA
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-brand">
          <SectionLabel dark>
            Backed by K G Stonex
          </SectionLabel>

          <h2>
            Transforming walls
            <br />
            <em>into luxury experiences.</em>
          </h2>

          <ButtonLink
            href="/contact"
            tone="light"
          >
            Start a conversation
          </ButtonLink>
        </div>


        <div className="footer-column">
          <SectionLabel dark>
            Explore
          </SectionLabel>

          {[
            ["Collections", "/collections"],
            ["CNC Designs", "/cnc-designs"],
            ["Projects", "/projects"],
            ["About", "/about"],
            ["Gallery", "/gallery"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
            >
              {label}
            </Link>
          ))}
        </div>


        <div className="footer-column">
          <SectionLabel dark>
            Find us
          </SectionLabel>

          <p>
            Manufacturing
            <br />
            {contact.manufacturing}
          </p>

          <p>
            Operations
            <br />
            {contact.address}
          </p>

          <a href={`mailto:${contact.email}`}>
            {contact.email}
          </a>

          <div className="footer-social">
            <a href={contact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={17} />
            </a>

            <a href={contact.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
              <Youtube size={17} />
            </a>

            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </div>


      {/* =====================================================
          FOOTER BOTTOM
      ===================================================== */}

      <div className="footer-bottom">
        <span>
          © 2026 METEOROID LUXURIOUS STONES
        </span>

        <span>
          PRECISION · PASSION · PERFECTION
        </span>

        <span>
          Backed by K G Stonex
        </span>
      </div>


      {/* =====================================================
          DEVELOPED BY
      ===================================================== */}

      <div className="footer-developer">
        <span>
          Developed by
        </span>

        <a
          href="https://www.standoutdev.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          StandoutDev
        </a>
      </div>
    </footer>
  );
}

export function Shell({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <a
        className="whatsapp-button"
        href={contact.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Enquire on WhatsApp"
      >
        <span>
          <FaWhatsapp size={16} aria-hidden="true" />
        </span>
        <b>Enquire on WhatsApp</b>
      </a>
      <Footer />
    </>
  );
}

export function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <SectionLabel>{eyebrow}</SectionLabel>
      <h1>{title}</h1>
      {text && <p>{text}</p>}
    </section>
  );
}

export function FilterBar({ active, setActive, values, search, setSearch }) {
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

export function Pagination({ page, totalPages, setPage, total, start, end }) {
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

export function usePagination(items, perPage) {
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
