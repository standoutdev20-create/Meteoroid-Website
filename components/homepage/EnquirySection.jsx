import { ButtonLink, SectionLabel } from "../site-shell";

export default function EnquirySection() {
  return <section className="enquiry-section"><div><SectionLabel dark>Begin a conversation</SectionLabel><h2>Let's create<br /><em>something timeless.</em></h2></div><ButtonLink href="/contact" tone="light">Make an enquiry</ButtonLink></section>;
}
