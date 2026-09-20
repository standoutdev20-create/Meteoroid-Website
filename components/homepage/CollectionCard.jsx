import { ArrowDownRight } from "lucide-react";
import { ImageFrame } from "../site-shell";

export default function CollectionCard({ item, index }) {
const detailPath = item.category === "2D CNC" || item.category === "3D CNC"
  ? `/cnc-designs/${item.slug}`
  : `/collections/${item.slug}`;

return (
<a
className="collection-card"
href={detailPath}
>

  <div className="collection-card-image">

    <ImageFrame
      src={item.image}
      alt={item.title}
    />

  </div>


  <div className="card-overlay" />


  <div className="collection-card-info">

    <span className="collection-number">
      {String(index + 1).padStart(2, "0")}
    </span>


    <div className="collection-card-text">

      <h3>
        {item.title}
      </h3>

      <p>
        {item.category}
      </p>

    </div>


    <ArrowDownRight
      size={24}
      strokeWidth={1.5}
    />

  </div>

</a>

);
}
