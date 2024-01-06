import { Post } from './Post';
import { Header } from './components/Header';

export function App() {

  return (
    <>
      <Header/>

      <Post 
        author="Abmael"
        content="Conteudo Conteudo ConteudoConteudo Conteudo Conteudo"
      />
      
      <Post
        author="Rafael"
        content="Conteudo Conteudo Conteudo Conteudo Conteudo"
      />
     
      
    </>
  )
}

