import { gql, useQuery } from '@apollo/client'

import { useSelector } from 'react-redux'

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
  const content = useSelector((state) => state.content)
  console.log(content)

  const { loading, error, data } = useQuery(NOTES)

  if (loading) return 'loading'

  if (error) return `Error: ${error.message}`

  console.log(data)

  return (
    <div className='App'>
      <h1> Blog</h1>
    </div>
  )
}

export default App
