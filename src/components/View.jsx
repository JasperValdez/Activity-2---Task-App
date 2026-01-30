import Delete from "./Delete";

function View({ notes, onDelete, onEdit, activeEditId }) {
  return (
    <div className="space-y-3">
      {notes.length === 0 ? (
        <p className="text-center text-indigo-300 text-sm py-4">No notes yet.</p>
      ) : (
        notes.map((note) => (
          <div
            key={note.id}
            className={`flex justify-between items-center px-5 py-3 rounded-2xl border text-sm transition
              ${activeEditId === note.id ? "border-indigo-700 bg-indigo-100" : "border-indigo-200 bg-white hover:shadow-md"}
            `}
          >
            <p className="text-indigo-900">{note.text}</p>
            <div className="flex gap-2">
              <button
                onClick={() => onEdit(note)}
                className="px-4 py-2 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600 transition"
              >
                Edit
              </button>
              <Delete id={note.id} onDelete={onDelete} />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default View;
