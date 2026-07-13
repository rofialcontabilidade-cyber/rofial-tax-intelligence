export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h2>

        <p className="text-slate-500">
          Bem-vindo ao RTI
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="h-11 w-11 rounded-full bg-blue-600" />
      </div>
    </header>
  );
}