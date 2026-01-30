import { useState } from "react";

function Edit({ note, onSave, onCancel }) {
  const [updatedText, setUpdatedText] = useState(note.text);

  const handleSave = () => {
    if (!updatedText.trim()) return;
    onSave(note.id, updatedText);
  };

  return (
    <div className="flex gap-3">
      <input
        value={updatedText}
        onChange={(e) => setUpdatedText(e.target.value)}
        className="flex-1 px-4 py-3 rounded-xl border border-indigo-200 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm transition"
      />
      <button
        onClick={handleSave}
        className="px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-md"
      >
        Save
      </button>
      <button
        onClick={onCancel}
        className="px-6 py-3 rounded-xl bg-indigo-300 text-white hover:bg-indigo-400 transition shadow-md"
      >
        Cancel
      </button>
    </div>
  );
}

export default Edit;
