export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-50 border-r h-full p-6">
      <nav>
        <ul className="space-y-3">
          <li className="font-semibold text-red-500 flex items-center gap-2">
            <span>📥</span> Inbox
          </li>
          <li className="text-gray-700 flex items-center gap-2">
            <span>☀️</span> Hoy
          </li>
          <li className="text-gray-700 flex items-center gap-2">
            <span>📅</span> Próximos 7 días
          </li>
        </ul>
        <div className="mt-8">
          <h2 className="text-xs text-gray-500 uppercase mb-2">Proyectos</h2>
          <ul className="space-y-2">
            <li className="text-gray-600">Proyecto ejemplo</li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}