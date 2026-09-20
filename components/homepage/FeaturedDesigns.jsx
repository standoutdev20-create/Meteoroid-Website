import { cnc3dDesigns } from "@/data/content";
import { ButtonLink, ImageFrame, SectionLabel } from "../site-shell";

export default function FeaturedDesigns() {
  return <section className="section designs-preview"><div className="designs-copy"><SectionLabel>Collectible architectural artworks</SectionLabel><h2>3D luxury<br /><em>designs.</em></h2><p>Thirty-six exclusive patterns, carved to make light move across a wall.</p><ButtonLink href="/cnc-designs/3d" tone="outline">Explore all designs</ButtonLink></div><div className="designs-stack">{cnc3dDesigns.slice(0, 3).map((item, index) => <a href={`/cnc-designs/${item.slug}`} className={`design-stack-card stack-${index + 1}`} key={item.id}><ImageFrame src={item.image} alt={item.title} /><span>0{index + 1} — 03</span></a>)}</div></section>;
}
