import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Commands - ClawCord",
  description: "Complete list of ClawCord Discord slash commands.",
};

const commands = [
  {
    name: "/clawcord scan",
    description: "Scan for newly graduated PumpFun tokens that match your policy filters.",
    options: [],
    example: "/clawcord scan",
  },
  {
    name: "/clawcord call",
    description: "Generate a full analysis call card for a specific token.",
    options: [
      { name: "token", type: "string", required: true, description: "Token address or ticker symbol" },
    ],
    example: "/clawcord call $CRAB",
  },
  {
    name: "/clawcord policy",
    description: "View or change your server's active policy preset.",
    options: [
      { name: "preset", type: "string", required: false, description: "Policy preset name (default, aggressive, conservative)" },
    ],
    example: "/clawcord policy aggressive",
  },
  {
    name: "/clawcord autopost",
    description: "Enable or disable automatic posting of high-scoring tokens.",
    options: [
      { name: "enabled", type: "boolean", required: true, description: "Enable or disable autopost" },
      { name: "channel", type: "channel", required: false, description: "Channel to post calls to" },
      { name: "min_score", type: "number", required: false, description: "Minimum score threshold (0-10)" },
    ],
    example: "/clawcord autopost enabled:true channel:#alpha-calls min_score:7",
  },
  {
    name: "/clawcord watch",
    description: "Add a token to your server's watchlist for tracking.",
    options: [
      { name: "token", type: "string", required: true, description: "Token address to watch" },
    ],
    example: "/clawcord watch 8x2f...4k9a",
  },
  {
    name: "/clawcord logs",
    description: "View recent calls made in your server.",
    options: [
      { name: "limit", type: "number", required: false, description: "Number of logs to show (default: 10)" },
    ],
    example: "/clawcord logs limit:20",
  },
  {
    name: "/clawcord install",
    description: "Initialize ClawCord in your server with default settings.",
    options: [],
    example: "/clawcord install",
  },
];

export default function CommandsPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/docs" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Docs
        </Link>

        <h1 className="text-4xl font-bold mb-4">Commands</h1>
        <p className="text-gray-400 text-lg mb-12">
          Complete reference for all ClawCord slash commands.
        </p>

        <div className="space-y-8">
          {commands.map((cmd) => (
            <div key={cmd.name} className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h2 className="text-xl font-mono font-semibold text-red-400 mb-2">{cmd.name}</h2>
              <p className="text-gray-300 mb-4">{cmd.description}</p>
              
              {cmd.options.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">Options</h3>
                  <div className="space-y-2">
                    {cmd.options.map((opt) => (
                      <div key={opt.name} className="flex items-start gap-3 text-sm">
                        <code className="bg-white/10 px-2 py-0.5 rounded text-amber-400">{opt.name}</code>
                        <span className="text-gray-500">{opt.type}</span>
                        {opt.required && <span className="text-red-400 text-xs">required</span>}
                        <span className="text-gray-400">{opt.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">Example</h3>
                <code className="block bg-black/30 px-4 py-2 rounded text-sm text-gray-300">{cmd.example}</code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
