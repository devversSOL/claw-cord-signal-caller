import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "API Reference - ClawCord",
  description: "ClawCord API documentation for developers.",
};

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/docs" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Docs
        </Link>

        <h1 className="text-4xl font-bold mb-4">API Reference</h1>
        <p className="text-gray-400 text-lg mb-12">
          Integrate ClawCord data into your own applications.
        </p>

        <div className="space-y-8">
          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-mono rounded">GET</span>
              <code className="text-lg font-mono">/api/graduations</code>
            </div>
            <p className="text-gray-300 mb-4">Fetch recently graduated PumpFun tokens with scoring data.</p>
            
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">Response</h3>
            <pre className="bg-black/30 p-4 rounded text-sm text-gray-300 overflow-x-auto">{`{
  "graduations": [
    {
      "mint": "8x2f...4k9a",
      "symbol": "$CRAB",
      "name": "CrabCoin",
      "score": 8.2,
      "liquidity": 18500,
      "volume5m": 2300,
      "holders": 156,
      "topHolderConcentration": 23.5,
      "graduatedAt": "2025-01-30T16:00:00Z"
    }
  ]
}`}</pre>
          </div>

          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-mono rounded">GET</span>
              <code className="text-lg font-mono">/api/token/:mint</code>
            </div>
            <p className="text-gray-300 mb-4">Get detailed analysis for a specific token.</p>
            
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">Parameters</h3>
            <div className="mb-4">
              <code className="bg-white/10 px-2 py-0.5 rounded text-amber-400">mint</code>
              <span className="text-gray-400 ml-2">Token mint address</span>
            </div>

            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">Response</h3>
            <pre className="bg-black/30 p-4 rounded text-sm text-gray-300 overflow-x-auto">{`{
  "token": {
    "mint": "8x2f...4k9a",
    "symbol": "$CRAB",
    "score": 8.2,
    "pros": ["Strong volume", "LP locked"],
    "risks": ["New deployer"],
    "metrics": {
      "liquidity": 18500,
      "volume5m": 2300,
      "holders": 156,
      "topHolderConcentration": 23.5
    }
  }
}`}</pre>
          </div>

          <div className="p-6 bg-amber-500/10 rounded-xl border border-amber-500/30">
            <h3 className="text-lg font-semibold text-amber-400 mb-2">Rate Limits</h3>
            <p className="text-gray-300 text-sm">
              API requests are limited to <strong>60 requests per minute</strong> per IP address. 
              Exceeding this limit will result in a 429 response.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
