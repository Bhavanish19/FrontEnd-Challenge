
import Sidebar from "./components/layout/sidebar";
import Navbar from "./components/layout/navbar";
import TitleSection from "./components/layout/title-section";

export default function App() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-auto p-6">
          <TitleSection />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3">
            </div>
            <div className="lg:col-span-2">
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}