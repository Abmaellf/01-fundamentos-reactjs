import { Post } from './components/Post';
import { Header } from './components/Header';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

import './global.css'

export function App() {

  return (
    <>
      <Header/>

      <div className={styles.wrapper}>

        <Sidebar/>

        <main>
              <Post 
                author="Abmael"
                content="Conteudo Conteudo ConteudoConteudo Conteudo Conteudo"
              />
              <Post 
                author="Abmael"
                content="Conteudo Conteudo ConteudoConteudo Conteudo Conteudo"
              />
              

        </main>
      </div>

     
   </>
  )
}

