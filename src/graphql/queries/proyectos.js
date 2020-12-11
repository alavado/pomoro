import gql from 'graphql-tag'

const query = gql`
  {
    allProyectos {
      data {
        _id
        nombre
      }
    }
  }
`

export default query