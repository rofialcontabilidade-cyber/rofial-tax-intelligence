"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Building2,
  Calculator,
  FileSpreadsheet,
  Settings,
  BarChart3,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Clientes",
    href: "/clientes",
    icon: Users,
  },
  {
    title: "Empresas",
    href: "/empresas",
    icon: Building2,
  },
  {
    title: "Planejamento",
    href: "/planejamento",
    icon: Calculator,
  },
  {
    title: "Simulações",
    href: "/simulacoes",
    icon: BarChart3,
  },
  {
    title: "Relatórios",
    href: "/relatorios",
    icon: FileSpreadsheet,
  },
  {
    title: "Configurações",
    href: "/configuracoes",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-950 text-white">

      <div className="border-b border-slate-800 px-8 py-7">

        <h1 className="text-3xl font-bold tracking-tight text-blue-500">
          RTI
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Rofial Tax Intelligence
        </p>

      </div>

      <nav className="flex-1 px-4 py-6">

        {menu.map((item) => {

          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-800"
            >

              <Icon size={20} />

              <span>{item.title}</span>

            </Link>
          );

        })}

      </nav>

      <div className="border-t border-slate-800 p-6">

        <p className="text-xs text-slate-500">
          RTI v1.0
        </p>

      </div>

    </aside>
  );
}