import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Security - ClawCord",
  description: "ClawCord security practices and vulnerability reporting.",
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-4">Security</h1>
        <p className="text-gray-400 text-lg mb-12">
          How we keep ClawCord and your data secure.
        </p>

        <div className="space-y-8">
          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-emerald-400" />
              <h2 className="text-xl font-semibold">Infrastructure Security</h2>
            </div>
            <ul className="text-gray-300 space-y-2">
              <li>• Hosted on Vercel with enterprise-grade security</li>
              <li>• All connections encrypted with TLS 1.3</li>
              <li>• Regular security updates and patches</li>
              <li>• DDoS protection enabled</li>
            </ul>
          </div>

          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold">Data Protection</h2>
            </div>
            <ul className="text-gray-300 space-y-2">
              <li>• Minimal data collection policy</li>
              <li>• No storage of private keys or wallet data</li>
              <li>• Discord tokens stored securely with encryption</li>
              <li>• API keys never exposed to client-side code</li>
            </ul>
          </div>

          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-purple-400" />
              <h2 className="text-xl font-semibold">Bot Permissions</h2>
            </div>
            <p className="text-gray-300 mb-4">
              ClawCord requests only the minimum permissions required:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• <strong>Send Messages</strong> — Post call cards</li>
              <li>• <strong>Embed Links</strong> — Rich message formatting</li>
              <li>• <strong>Read Message History</strong> — Command context</li>
              <li>• <strong>Use Slash Commands</strong> — Bot interactions</li>
            </ul>
          </div>

          <div className="p-6 bg-amber-500/10 rounded-xl border border-amber-500/30">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-amber-400" />
              <h2 className="text-xl font-semibold text-amber-400">Report a Vulnerability</h2>
            </div>
            <p className="text-gray-300 mb-4">
              If you discover a security vulnerability, please report it responsibly:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• DM us on Twitter: <a href="https://x.com/ClawCordSOL" className="text-red-400 hover:underline">@ClawCordSOL</a></li>
              <li>• Contact us on Discord: <a href="https://discord.gg/NZEKBbqj2q" className="text-red-400 hover:underline">discord.gg/NZEKBbqj2q</a></li>
            </ul>
            <p className="text-gray-400 text-sm mt-4">
              Please do not publicly disclose vulnerabilities before they are patched.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
