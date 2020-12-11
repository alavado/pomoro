const Notas = () => {
  return (
    <div className="p-4 mb-4 mr-4 shadow flex-1 flex flex-col bg-gray-800 rounded">
      <h2 className="font-bold mb-2">Notas</h2>
      <textarea
        placeholder="Notas sobre este proyecto"
        className="p-2 bg-gray-900 focus:outline-none text-gray-200 flex-1 resize-none rounded"
      />
    </div>
  )
}

export default Notas
