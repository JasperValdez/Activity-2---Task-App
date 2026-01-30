function Delete({ id, onDelete }) {
  return (
    <button
      onClick={() => onDelete(id)}
      className="px-5 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700 transition shadow-md"
    >
      Delete
    </button>
  );
}

export default Delete;
