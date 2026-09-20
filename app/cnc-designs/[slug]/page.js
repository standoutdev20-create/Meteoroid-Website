import CNCDetailPage from "@/components/pages/CNCDetailPage";

async function App({ params }) {
  const { slug } = await params;
  return <CNCDetailPage slug={slug} />;
}

export default App;
