import MainLayout from "@/src/components/layout/MainLayout";
import { Card } from "@/src/components/ui/card";

export default function Home() {
  return (
    <MainLayout>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <Card className="p-6">
          <h3 className="text-sm text-slate-500">Receita Mensal</h3>
          <p className="mt-3 text-3xl font-bold">R$ 0,00</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm text-slate-500">Economia Tributária</h3>
          <p className="mt-3 text-3xl font-bold text-green-600">
            R$ 0,00
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm text-slate-500">Melhor Regime</h3>
          <p className="mt-3 text-xl font-bold">--</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm text-slate-500">Fator R</h3>
          <p className="mt-3 text-3xl font-bold text-blue-600">0%</p>
        </Card>
      </div>

      <div className="mt-8">
        <Card className="p-8 h-[400px]">
          <h2 className="text-2xl font-bold">
            Bem-vindo ao RTI
          </h2>

          <p className="mt-4 text-slate-500">
            Plataforma Inteligente de Planejamento Tributário.
          </p>
        </Card>
      </div>
    </MainLayout>
  );
}