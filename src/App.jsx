import { Post } from './Post';
import { Header } from './components/Header';
import styles from './App.module.css';

import './global.css'
import { Sidebar } from './components/Sidebar';

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
                author="Rafael"
                content="Conteudo Conteudo Conteudo Conteudo Conteudo"
              />  

        </main>
      </div>

     
   </>
  )
}

