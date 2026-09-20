import { Download } from "lucide-react";
import { SectionLabel } from "../site-shell";

export default function CatalogueSection() {
  return <section className="section catalogue-section"><div><SectionLabel>Resources</SectionLabel><h2>Download<br /><em>our catalogue.</em></h2><p>Explore our premium stone collection with detailed designs and specifications. Everything you need to plan your perfect stone installation.</p><a className="button-link button-dark" href="/catalog.pdf" target="_blank" rel="noreferrer"><Download size={15} /> Download catalogue PDF</a></div><div className="catalogue-mockup"><div className="catalogue-cover"><small>METEOROID</small><strong>LUXURIOUS<br /><em>STONES</em></strong><span>Stone / Craft / Architecture</span></div><div className="catalogue-side">KG<br />STONEX</div></div></section>;
}
