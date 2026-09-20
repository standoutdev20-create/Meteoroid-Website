import { ArrowDownRight } from "lucide-react";
import { cnc3dDesigns } from "@/data/content";
import { ButtonLink, ImageFrame, SectionLabel } from "../site-shell";

export default function CNCSection() {
  return (
    <section className="cnc-section" id="cnc">
      <div className="cnc-backdrop"><ImageFrame src="https://meteoroid.in/stone17.png" alt="CNC carved stone texture" /></div>
      <div className="cnc-content">
        <SectionLabel dark>Precision CNC Carving</SectionLabel>
        <h2>Where technology<br /><em>meets artistry.</em></h2>
        <p>Advanced 3D CNC technology brings intricate patterns, textures and custom designs into natural stone with micron-level accuracy.</p>
        <div className="capability-list">{["3D relief carving", "Precision cutting", "Custom logos & lettering", "Large-format slabs up to 2m × 3m"].map((item, index) => <div key={item}><span>0{index + 1}</span><b>{item}</b><ArrowDownRight size={18} /></div>)}</div>
        <ButtonLink href="/cnc-designs" tone="light">Explore CNC collection</ButtonLink>
      </div>
      <div className="cnc-stamp">PRECISION<br />PASSION<br />PERFECTION</div>
    </section>
  );
}
