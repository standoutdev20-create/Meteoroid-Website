import CollectionDetailPage from "@/components/pages/CollectionDetailPage";

async function App({ params }) {
  const { slug } = await params;
  return <CollectionDetailPage slug={slug} />;
}

export default App;
