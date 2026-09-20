"use client";

import { Play, X } from "lucide-react";
import { useState } from "react";
import { ImageFrame, SectionLabel } from "../site-shell";
import { projectVideo } from "@/data/content";

export default function VideoBlock() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="video-block">
        <ImageFrame
          src={projectVideo.poster}
          alt="Meteoroid project tour"
        />

        <div className="video-overlay">
          <SectionLabel dark>
            {projectVideo.eyebrow}
          </SectionLabel>

          <h2>
            Watch the
            <br />
            <em>project tour.</em>
          </h2>

          <button
            className="play-button"
            onClick={() => setOpen(true)}
            aria-label="Play project tour"
          >
            <Play
              size={28}
              fill="currentColor"
            />
          </button>
        </div>
      </section>

      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}

      {open && (
        <div
          className="modal-backdrop"
          onClick={() => setOpen(false)}
        >
          <div
            className="video-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="video-close"
              onClick={() => setOpen(false)}
              aria-label="Close video"
            >
              <X size={22} />
            </button>

            <video
              className="project-video"
              src={projectVideo.video}
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </>
  );
}