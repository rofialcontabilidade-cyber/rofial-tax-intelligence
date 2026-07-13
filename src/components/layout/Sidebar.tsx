"use client";

import {
  LayoutDashboard,
  Building2,
  Users,
  Calculator,
  FileText,
  Settings,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Clientes",
    icon: Users,
  },
  {
    title: "Empresas",
    icon: Building2,
  },
  {
    title: "Planejamento",
    icon: Calculator,
  },
  {
    title: "Relatórios",
    icon: FileText,
  },
  {
    title: "Configurações",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 text-white flex flex-col">
      <div className="border-b border-slate-800 p-8">
        <h1 className="text-3xl font-bold tracking-tight">RTI</h1>

        <p className="mt-1 text-sm text-slate-400">
          Rofial Tax Intelligence
        </p>
      </div>

      <nav className="flex-1 px-4 py-6">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition hover:bg-slate-800"
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}