import { tools } from "@/lib/tools-data";
import ToolCard from "@/components/tools/ToolCard";

export default function ToolGrid() {
  const displayTools = tools.slice(0, 6);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            The Best Voice Editor, Not Just Another Voice API
          </h2>
          <p className="mt-3 text-slate-500">
            In-line editing, Emotion Tags, and draft previews — built for your workflow.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
