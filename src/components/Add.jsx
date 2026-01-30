import { useState } from "react";

function Add({ onAdd }) {
  const [noteText, setNoteText] = useState("");

  const handleSubmit = () => {
    if (!noteText.trim()) return;
    onAdd(noteText);
    setNoteText("");
  };

  return (
    <div className="flex gap-3">
      <input
        type="text"
        placeholder="Enter your note..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        className="flex-1 px-4 py-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm transition placeholder:text-indigo-300"
      />
      <button
        onClick={handleSubmit}
        className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 shadow-md transition"
      >
        Add
      </button>
    </div>
  );
}

export default Add;
