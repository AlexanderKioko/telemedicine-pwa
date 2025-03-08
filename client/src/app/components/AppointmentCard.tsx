export default function AppointmentCard({ appointment }) {
    return (
      <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:border-blue-300 transition-colors shadow-sm">
        <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <p className="font-medium text-gray-800">{appointment.doctor}</p>
            </div>
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <p>{appointment.date} at {appointment.time}</p>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <p>{appointment.location || "Online"}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 justify-end items-center">
            <button className="inline-flex items-center px-3 py-1.5 text-blue-600 hover:text-blue-800 text-sm font-medium">
              View Details
            </button>
          </div>
        </div>
      </div>
    );
  }