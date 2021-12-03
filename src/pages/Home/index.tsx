import React from 'react'
import Card from '../../components/Card'
import SearchBar from '../../components/SearchBar'
import { Wrapper, Title, ListContainer } from './styles'

const Home: React.FC = () => {
  return (
    <>
      <Wrapper>
        <SearchBar></SearchBar>
        <Card name="Todos" total={91}></Card>
        <Title>Minhas Listas</Title>
        <ListContainer></ListContainer>
      </Wrapper>
    </>
  )
}
export default Home
