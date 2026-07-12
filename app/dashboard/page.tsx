// export default function DashboardPage() {
//   return (
//     <main className="min-h-screen p-10">
//       <h1 className="text-3xl font-bold">
//         Dashboard
//       </h1>

//       <p className="mt-4">
//         Welcome to Local Collaborative Document Editor
//       </p>
//     </main>
//   );
// }

import Sidebar from "../components/Sidebar";

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-6 mt-10">
          <div className="border rounded-xl p-6 shadow">
            <h2 className="font-semibold">Documents</h2>
            <p className="text-3xl mt-2">0</p>
          </div>

          <div className="border rounded-xl p-6 shadow">
            <h2 className="font-semibold">Collaborators</h2>
            <p className="text-3xl mt-2">0</p>
          </div>

          <div className="border rounded-xl p-6 shadow">
            <h2 className="font-semibold">Versions</h2>
            <p className="text-3xl mt-2">0</p>
          </div>
        </div>
      </main>
    </div>
  );
}