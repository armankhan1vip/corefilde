export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black">
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">FM Dashboard</h1>
            <nav className="flex items-center gap-4">
              <a href="/" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100">
                Home
              </a>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-2">Assets</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Manage facility assets</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-2">Work Orders</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Track maintenance requests</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-2">Preventive Maintenance</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Schedule recurring tasks</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-2">Vendors</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Manage vendor contracts</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-2">Reports</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Generate facility reports</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-2">Settings</h3>
            <p className="text-zinc-600 dark:text-zinc-400">Configure application</p>
          </div>
        </div>
      </main>
    </div>
  );
}