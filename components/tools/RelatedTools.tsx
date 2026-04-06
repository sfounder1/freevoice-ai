import Link from "next/link";
import { tools } from "@/lib/tools-data";

interface RelatedToolsProps {
  currentSlug: string;
}

export default function RelatedTools({ currentSlug }: RelatedToolsProps) {
  const activeTools = tools.filter(
    (t) => t.status === "active" && t.slug !== currentSlug
  );

  if (activeTools.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        More Free Voice Tools
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {activeTools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="flex items-start gap-3 border border-slate-200 rounded-lg p-4 hover:border-orange-300 hover:bg-orange-50/50 transition-colors"
            >
              <Icon className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900">{tool.name}</h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  {tool.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
