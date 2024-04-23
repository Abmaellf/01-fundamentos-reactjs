/* eslint-disable react/jsx-key */
import { Header } from './components/Header';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css'


  //  author> { avatar_url: " " , name: " " , role: " " }
	//  publishedAt: Date
	//  content: String

  // Vamos figurar como se estivesse vindo direto de uma API

  const posts = [
    {
      id:1,
      author: {
        avatarUrl: 'https://github.com/Abmaellf.png',
        name: 'Abmael Ferreira',
        role: 'Desenvolvedor'
      },
      content: [
        {type: 'paragraph', content: 'Fala galera aqui é o Ab',},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content: 'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2024-04-15 11:00:00'),
    },

    {
      id:2,
      author: {
        avatarUrl: 'https://github.com/maykbrito.png',
        name: 'Mayk Brito',
        role: 'CTO Rocketseat'
      },
      content: [
        {type: 'paragraph', content: 'Fala galera Maik aqui',},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content: 'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2024-03-22 21:30:01'),
    },
  ]

export function App() {

  return (
    <>
      <Header/>

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
              {posts.map( post => {
                return(
                  <Post
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                  />
                )
              }

              )}            

        </main>
      </div>

     
   </>
  )
}

