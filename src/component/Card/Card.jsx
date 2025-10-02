import React from "react";

const Card = ({ tickets, handleCard, inProgress, handleComplete, resolve }) => {
  return (
    <div className="m-5 md:m-20">
      <h2 className="card-title text-2xl mb-2 text-gray-700">
        Customer Tickets
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* 1st card */}
        <div className="lg:col-span-9 gap-4 grid grid-cols-1 md:grid-cols-2">
          {tickets.length > 0 ? (
            tickets.map((ticket) => (
              <div key={ticket.id} className="col-span-1">
                <div className="card w-full bg-base-100 card-xs shadow-sm">
                  <div onClick={() => handleCard(ticket)} className="card-body">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-sm">{ticket.title}</h3>
                      <h3 className="bg-green-300 text-green-800 w-auto h-auto pl-1 pr-2 rounded-full text-sm font-bold">
                        <i className="fa-solid fa-circle"></i> {ticket.status}
                      </h3>
                    </div>
                    <p>{ticket.description}</p>
                    <div className="flex justify-between gap-5 items-center text-gray-500 mt-4">
                      <div className="flex gap-2 items-center">
                        <p>#{ticket.id}</p>
                        <h3 className="text-red-500 font-semibold">
                          {ticket.priority.toUpperCase()} PRIORITY
                        </h3>
                      </div>
                      <div className="flex gap-2 items-center">
                        <p>{ticket.customer}</p>
                        <p className="flex items-center gap-1">
                          <i className="fa-regular fa-calendar"></i>
                          {ticket.createdAt}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>
              <p className="text-gray-500">No tickets available</p>
            </div>
          )}
        </div>

        {/* 2nd card */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <div>
            <h2 className="card-title text-2xl text-gray-700">Task Status</h2>
            <div className="card bg-base-100 w-full shadow-sm p-3 gap-2">
              {inProgress.length > 0 ? (
                inProgress.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="card-body shadow-sm rounded-2xl"
                  >
                    <h2 className="card-title font-bold">{ticket.title}</h2>
                    <div className="card-actions justify-end">
                      <button
                        onClick={() => handleComplete(ticket)}
                        className="btn btn-block bg-green-600 text-white"
                      >
                        Complete
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">
                  Select a ticket to add to Task Status
                </p>
              )}
            </div>
          </div>

          <div>
            <h2 className="card-title text-2xl text-gray-700">Resolved Task</h2>
            {resolve.length > 0 ? (
              resolve.map((ticket) => (
                <div
                  key={ticket.id}
                  className="bg-blue-200 w-full h-16 p-1 rounded-xl shadow-xl mb-2"
                >
                  <p className="font-bold text-md">{ticket.title}</p>
                  <p className="text-gray-600 text-sm">has been Completed</p>
                </div>
              ))
            ) : (
              <p className="text-sm">No resolved tasks yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
