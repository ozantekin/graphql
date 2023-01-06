import { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'

const NOTES = gql`
  query getNotes {
    notes {
      id
      description
      title
      author {
        age
        id
        name
        photo
      }
    }
  }
`
function App() {
  const [notes, setNotes] = useState([])

  const { loading, error, data } = useQuery(NOTES)

  useEffect(() => {
    if (data) {
      setNotes(data.notes)
    }
  }, [data])

  if (loading) return 'loading'

  if (error) return `Error: ${error.message}`

  return (
    <div className=' grid gap-4 grid-cols-2  p-4'>
      {notes.map((note) => (
        <div key={note.id} className='border rounded p-4'>
          <h1> {note.title} </h1>
          <p> {note.description} </p>
          <div className='flex justify-start items-center gap-2 mt-1'>
            <img
              className='w-8 rounded-full'
              src={note.author.photo}
              alt={note.author.name}
            />
            <small>
              {' '}
              {note.author.name} • {note.author.age}{' '}
            </small>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
