import Link from "next/link";
import type { Tool } from "@/lib/tools-data";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const Icon = tool.icon;
  const isActive = tool.status === "active";

  const content = (
    <Card className={`p-6 flex flex-col h-full ${!isActive ? "opacity-60" : "hover:shadow-md transition-shadow"}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 bg-orange-50 rounded-lg">
          <Icon className="h-5 w-5 text-orange-600" />
        </div>
        {!isActive && (
          <span className="text-xs font-medium bg-slate-100 text-slate-500 px-2 py-1 rounded-full">
            Coming Soon
          </span>
        )}
      </div>
      <h3 className="font-semibold text-slate-900">{tool.name}</h3>
      <p className="mt-1 text-sm text-slate-500 flex-1">{tool.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-slate-400">
          {tool.tokenCost.toLocaleString()} tokens
        </span>
        {isActive ? (
          <Button href={`/tools/${tool.slug}`} size="sm">
            Try Free
          </Button>
        ) : (
          <span className="text-xs text-slate-400 font-medium">Coming Soon</span>
        )}
      </div>
    </Card>
  );

  if (isActive) {
    return <Link href={`/tools/${tool.slug}`} className="block">{content}</Link>;
  }

  return content;
}
