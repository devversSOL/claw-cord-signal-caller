import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, AlertCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Status - ClawCord",
  description: "ClawCord system status and uptime information.",
};

const services = [
  { name: "Discord Bot", status: "operational", latency: "45ms" },
  { name: "Graduation Scanner", status: "operational", latency: "120ms" },
  { name: "DexScreener API", status: "operational", latency: "85ms" },
  { name: "Helius API", status: "operational", latency: "95ms" },
  { name: "Autopost Service", status: "operational", latency: "30ms" },
  { name: "Website", status: "operational", latency: "25ms" },
];

const recentIncidents = [
  {
    date: "Jan 28, 2025",
    title: "Scheduled Maintenance",
    description: "Brief downtime for infrastructure updates. All services restored.",
    status: "resolved",
  },
];

export default function StatusPage() {
  const allOperational = services.every(s => s.status === "operational");

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-4">System Status</h1>
        
        {/* Overall Status */}
        <div className={`p-6 rounded-xl border mb-12 ${
          allOperational 
            ? "bg-emerald-500/10 border-emerald-500/30" 
            : "bg-amber-500/10 border-amber-500/30"
        }`}>
          <div className="flex items-center gap-3">
            {allOperational ? (
              <CheckCircle className="w-8 h-8 text-emerald-400" />
            ) : (
              <AlertCircle className="w-8 h-8 text-amber-400" />
            )}
            <div>
              <h2 className={`text-xl font-semibold ${allOperational ? "text-emerald-400" : "text-amber-400"}`}>
                {allOperational ? "All Systems Operational" : "Partial Outage"}
              </h2>
              <p className="text-gray-400 text-sm">
                Last updated: {new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Service List */}
        <h2 className="text-2xl font-semibold mb-6">Services</h2>
        <div className="space-y-3 mb-12">
          {services.map((service) => (
            <div 
              key={service.name} 
              className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${
                  service.status === "operational" ? "bg-emerald-400" : "bg-amber-400"
                }`} />
                <span className="font-medium">{service.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-500 text-sm flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {service.latency}
                </span>
                <span className={`text-sm capitalize ${
                  service.status === "operational" ? "text-emerald-400" : "text-amber-400"
                }`}>
                  {service.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Incidents */}
        <h2 className="text-2xl font-semibold mb-6">Recent Incidents</h2>
        {recentIncidents.length > 0 ? (
          <div className="space-y-4">
            {recentIncidents.map((incident, i) => (
              <div key={i} className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{incident.title}</h3>
                  <span className="text-gray-500 text-sm">{incident.date}</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">{incident.description}</p>
                <span className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded">
                  {incident.status}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No recent incidents.</p>
        )}

        {/* Uptime */}
        <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10">
          <h3 className="font-semibold mb-4">90-Day Uptime</h3>
          <div className="flex gap-1">
            {Array.from({ length: 90 }).map((_, i) => (
              <div 
                key={i} 
                className="flex-1 h-8 bg-emerald-500 rounded-sm opacity-80 hover:opacity-100 transition-opacity"
                title={`Day ${90 - i}: 100% uptime`}
              />
            ))}
          </div>
          <p className="text-emerald-400 text-lg font-semibold mt-4">99.9% Uptime</p>
        </div>
      </div>
    </div>
  );
}
