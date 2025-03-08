export default function RecordTable({ records }) {
    return (
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left p-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="text-left p-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="text-left p-4 text-sm font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {records.map((record) => (
            <tr key={record.id} className="hover:bg-gray-50 transition-colors">
              <td className="p-4 whitespace-nowrap font-medium text-gray-900">{record.date}</td>
              <td className="p-4 text-gray-600">{record.description}</td>
              <td className="p-4 whitespace-nowrap">
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }