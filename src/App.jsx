import { useEffect, useState } from "react";

import Add from "./components/Add";
import View from "./components/View";
import Edit from "./components/Edit";

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [editNote, setEditNote] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add
  const handleAddNote = (text) => {
    const newNote = {
      id: Date.now(),
      text,
    };
    setNotes([...notes, newNote]);
  };

  // Delete
  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    if (editNote?.id === id) setEditNote(null);
  };

  // Edit
  const handleStartEdit = (note) => setEditNote(note);
  const handleSaveEdit = (id, newText) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, text: newText } : note)));
    setEditNote(null);
  };
  const handleCancelEdit = () => setEditNote(null);

  return (
    <div className="min-h-screen flex justify-center items-start bg-gradient-to-b from-indigo-100 via-white to-indigo-200 py-10 px-4">
      <div className="w-full max-w-3xl bg-white backdrop-blur-md rounded-3xl shadow-2xl border border-indigo-100 p-8 space-y-6">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-indigo-900">Notes CRUD (localStorage)</h1>
          <p className="text-indigo-600 mt-1">Wireframe-friendly layout to demo CRUD + localStorage.</p>
        </div>

        {/* Add Note */}
        <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-5 shadow-sm">
          <h3 className="text-xs font-bold tracking-widest text-indigo-500 mb-3 uppercase">
            Create Note
          </h3>
          <Add onAdd={handleAddNote} />
        </div>

        {/* View Notes */}
        <div className="rounded-xl border border-indigo-200 bg-indigo-50/30 p-5 shadow-sm">
          <h3 className="text-xs font-bold tracking-widest text-indigo-500 mb-3 uppercase">
            Notes
          </h3>
          <View
            notes={notes}
            onDelete={handleDeleteNote}
            onEdit={handleStartEdit}
            activeEditId={editNote?.id}
          />
        </div>

        {/* Edit Note */}
        {editNote && (
          <div className="rounded-xl border border-indigo-200 bg-white p-5 shadow-md animate-fadeIn">
            <h3 className="text-xs font-bold tracking-widest text-indigo-500 mb-3 uppercase">
              Edit Note
            </h3>
            <Edit
              key={editNote.id}
              note={editNote}
              onSave={handleSaveEdit}
              onCancel={handleCancelEdit}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
