import { ButtonLink, SectionLabel } from "../site-shell";
import { collections } from "@/data/content";
import CollectionCard from "./CollectionCard";

export default function Collections() {
return ( <section className="section collection-preview">

  <div className="section-heading-row">

    <div>
      <SectionLabel>Materials</SectionLabel>

      <h2>
        Our premium
        <br />
        <em>stone collection.</em>
      </h2>
    </div>

    <p className="section-intro">
      A considered palette of natural textures, mineral tones and carved
      surfaces for architecture that lasts.
    </p>

  </div>


  <div className="collection-feature-grid">

    {collections.slice(0, 6).map((item, index) => (
      <CollectionCard
        key={item.id}
        item={item}
        index={index}
      />
    ))}

  </div>


  <div className="section-footer-link">

    <ButtonLink
      href="/collections"
      tone="outline"
    >
      View all collections
    </ButtonLink>

    <span>
      25 materials / curated for architecture
    </span>

  </div>

</section>


);
}
