import React from 'react'

export default function Admin({ content, setContent }){
  const [json, setJson] = React.useState(JSON.stringify(content || {}, null, 2))

  const save = ()=>{
    try{
      const data = JSON.parse(json)
      localStorage.setItem('siteContent', JSON.stringify(data))
      setContent?.(data)
      alert('Gespeichert! Seite neu laden, um die Änderungen zu sehen.')
    }catch(e){ alert('JSON Fehler: '+e.message) }
  }
  const reset = ()=>{
    localStorage.removeItem('siteContent')
    alert('Zurückgesetzt. Seite neu laden, um die Originaldaten zu laden.')
  }
  return (
    <div className="min-h-screen pt-24 container mx-auto px-6">
      <h1 className="font-playfair text-3xl font-bold mb-4">Mini‑Editor</h1>
      <p className="font-poppins text-gray-600 mb-6">Bearbeite Texte/Bilder/Farben in der JSON. Klicke dann auf Speichern.</p>
      <textarea value={json} onChange={e=>setJson(e.target.value)} className="w-full h-[70vh] font-mono text-sm border rounded p-4" />
      <div className="mt-4 flex gap-3">
        <button onClick={save} className="bg-turquoise text-white px-4 py-2 rounded">Speichern</button>
        <button onClick={reset} className="bg-gray-200 px-4 py-2 rounded">Zurücksetzen</button>
      </div>
    </div>
  )
}
