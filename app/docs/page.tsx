import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Book, Terminal, Code, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation - ClawCord",
  description: "Learn how to use ClawCord to automate your Discord signal calls.",
};

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-4">Documentation</h1>
        <p className="text-gray-400 text-lg mb-12">
          Everything you need to get started with ClawCord.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/docs/commands" className="group p-6 bg-white/5 rounded-xl border border-white/10 hover:border-red-500/50 transition-colors">
            <Terminal className="w-8 h-8 text-red-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2 group-hover:text-red-400 transition-colors">Commands</h2>
            <p className="text-gray-400 text-sm">Learn all available slash commands and how to use them.</p>
          </Link>

          <Link href="/docs/api" className="group p-6 bg-white/5 rounded-xl border border-white/10 hover:border-red-500/50 transition-colors">
            <Code className="w-8 h-8 text-red-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2 group-hover:text-red-400 transition-colors">API Reference</h2>
            <p className="text-gray-400 text-sm">Integrate ClawCord into your own applications.</p>
          </Link>

          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <Book className="w-8 h-8 text-amber-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Getting Started</h2>
            <p className="text-gray-400 text-sm mb-4">Quick setup guide to get ClawCord running in your server.</p>
            <ol className="text-sm text-gray-300 space-y-2 list-decimal list-inside">
              <li>Add ClawCord to your Discord server</li>
              <li>Run <code className="bg-white/10 px-1 rounded">/clawcord install</code> in any channel</li>
              <li>Configure your policy with <code className="bg-white/10 px-1 rounded">/clawcord policy</code></li>
              <li>Enable autopost to start receiving calls</li>
            </ol>
          </div>

          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <Zap className="w-8 h-8 text-emerald-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Policy Presets</h2>
            <p className="text-gray-400 text-sm mb-4">Choose from optimized filter presets.</p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><strong className="text-white">Default</strong> — Balanced settings for most groups</li>
              <li><strong className="text-white">Aggressive</strong> — Early entry, higher risk</li>
              <li><strong className="text-white">Conservative</strong> — Safer plays, proven tokens</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
