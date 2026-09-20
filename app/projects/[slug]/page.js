import ProjectDetailPage from "@/components/pages/ProjectDetailPage";

async function App({ params }) {
  const { slug } = await params;
  return <ProjectDetailPage slug={slug} />;
}

export default App;
