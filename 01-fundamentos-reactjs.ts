	Inicio 2 de janeiro de 2024
	
	ESSE ARQUIVO SEMPRE ESTARÁ DENTRO DO PROJETO E COM O NOME DO PROJETOS 
	
	Github
				
	git config  user.name "Abmaellf"
        git config  user.email "abmael.ninha@gmail.com"
        git branch -M main
        
		githubToken
       

==========================================================================================================================================	
==========================================================================================================================================
	Nível 01-UP-Fundamentos-UP |  1-Iniciando com React | 2-Fundamentos do ReactJS
	REACT 	Biblioteca Javascript para criar interfaces de usuários
	
	RENDERING PATTERNS
	
		SSR - Server Side Rendering :
		
				 - Uma aplicação
				 -  paginas staticas geradas no servidor
		
		SPA - Single Page Application:
		
				 -  Duas aplicações Front  e back
				 -  paginas geradas pelo client
				 -  JSON (Javascript Object Notation)
				 
		
==========================================================================================================================================
==========================================================================================================================================	
	Nível 01-UP-Fundamentos-UP |  1-Iniciando com React | 3-Bundlers & Compilers
	
		Os browser não suporte esse javascript mais moderno
		
		Compilers : Compiladores de codigos, ferramentas que convertem de um codigo para outro
		
			Babel
		
		Bundlers : Queremos distribuir nossa aplicação em vários arquivos javascript, mas não é suportado pelos browser
		
			Webpack
			
		Criando o projeto pelo vite NÃO PRECISAMOS USAR O WEBPACK E O BABEL
		
		
	
==========================================================================================================================================
==========================================================================================================================================	
/||||||||||||||||||||||||||||||||||| |||||||||||||||COMEÇO ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||/
==========================================================================================================================================

	Nível 01-UP-Fundamentos-UP |  1-Iniciando com React | 4-Criando um projeto React
		
		Meu node -v    v18.17.1
		Meu npm -v 9.6.7
		
		Node Diego  v16.15.0 LTS
		NPM do Diego npm -v 8.5.5
		Sugestão de um node version manager do Diego  é o " n"
		
		Eu uso o nvm
		
		##Criar o projeto
			
		Projeto criado com o	 npm create vite@latest                OU 	yarn create vite
						
		Nome do projeto 01-fundamentos-reactjs
		
		## Executar npm i
		
		### code .
		
		### Conteudo extra trocando a porta de execução do projeto vite
		
		### Acessaro vite.config.js
		
		### FastRefresh  existe por padrão no vite
		
		## Agora npm run dev
		
				
		
		### Remover todos os arquivos da pasta source
		
		Apenas app.jsx   e main.jsx
			
			app.jsx
			
					function App() {

						  return (
						   <h1>Hello Wold</h1>
						  )
						}

						export default App

			main.jsx
			
				
					import React from 'react'
					import ReactDOM from 'react-dom/client'
					import App from './App.jsx'

					ReactDOM.createRoot(document.getElementById('root')).render(
					  <React.StrictMode>
					    <App />
					  </React.StrictMode>,
					)

		Como o react esta renderizando  o 
	
	
==========================================================================================================================================
==========================================================================================================================================	
	Nível 01-UP-Fundamentos-UP |  1-Iniciando com React | 5-Componentes
	
		1 - Componentes
		
			É uma forma de desacoplar um pedacinho de nossa interface, tornando repetitivel, para melhor dar manutenção
			
			O  App no react é um component que é uma função e devem ter extesão jsx que é javascript + xml 
			- É uma função
			- Retorna um html
			-  Deve ser exportado
			
			++ Vamos criar um componente chamdo Post
					
					function Post () {
					    return (
						<h1>Hello Post </h1>
					    )
					} 
					export default Post;
					
			++ Ajustando  o app para receber o component Post
			
					import Post from './Post';

					function App() {

					  return (
					     	      <Post/>
					      )
					}

					export default App

			+++  Poderiamos ter várias chamadas do component Post ou ter outros component , mas não podemos se não tiver alguma tag envolvendo os components
			+++  Então precisamos colocar uma tag div, p, h1 ... etc ou um fragment  <> </>
			
					import Post from './Post';

						function App() {

						  return (
						    <>
						      <Post/>
						      <Post/>
						      <Post/>
						    </>
						  )
						}

					export default App

	#### Podemos exportar o component Post de outra forma
			1 - Named Export
			*** O nome da função deve ser exatamente o que será importado, evitando esquecer de alterar o nome
			
				export function ...
				
			2 - Export default
			
					export default App
	
	
==========================================================================================================================================
==========================================================================================================================================	
	Nível 01-UP-Fundamentos-UP |  1-Iniciando com React | 6-Propriedades	
	
		No component Post vamos definir as propriedade que devem ser passado quando o componente for chamado
		
											
							export function Post (props) {
							    return (
								<>
								   <strong> <p> {props.author} </p> </strong>
								    <p> {props.content} </p>
								</>
							    )
							    
							} 
	
		

	+++++  Definindo a propriendade em cada component Post utilizado no app
	
				import { Post } from './Post';

				export function App() {

				  return (
				    <>
				      <Post 
					author="Abmael"
					content="Conteudo Conteudo ConteudoConteudo Conteudo Conteudo"
				      />Propriedades
				      <Post
					author="Rafael"
					content="Conteudo Conteudo Conteudo Conteudo Conteudo"
				      />
				    </>
				  )
				}


==========================================================================================================================================
==========================================================================================================================================	
	Nível 01-UP-Fundamentos-UP |  2-Estrutura da aplicação	| 	1-CSS Modules
	
	 Derntro da pasta src vammos criar uma arquivo chamdo styles.css
	 
	 		body {
				    background: #121214;
			}
	### Se for feito a importação desse arquivo no html o mesmo já vai renderizar a pagina com esse fundo
	### Mas algo muito importante é que no react não fazemos importanção do css no html, é  sempre pelo javascript
	### Dessa forma vamos acessar o nosso component Post e adicionar a importação
	
		import './style.css'
			export function Post (props) {
			    return (
				<>content
				   <strong> <p> {props.author} </p> </strong>
				    <p> {props.content} </p>
				</>
			    )
			} 
		
 	### Scoped Css  css escopado
 	
 		Vamos utilizar o css module'
	
	### Vamos criar uma pasta chamada components
	### Dentro dessa pasta components vamos criar um component chamado Header.jsx     sempre com a primeira letra maiuscula
	
		
		
		### Criamos um arquivo chamado Header.module.css
	
				.header {
						    background: #333;
						    height: 80px;
						}	
						
		### Dentro do arquivo Header.jsx vamos importar o css
		
		// Importação sempre nomeada com o from
		// no react a class agora será className e o valor da classe será entre chaves sem aspas				
						
		     import style from './Header.module.css';

				    export function Header () {
					return(
					    <header className={style.header}>
						<strong>Ignite Feed</strong>
					    </header>
					)
				    }
					
	
	commit						
	
==========================================================================================================================================
==========================================================================================================================================	
	Nível 01-UP-Fundamentos-UP |  2-Estrutura da aplicação	|   2-CSS global
	
		## Vamos criar alguns stilos globais
		## Vamos renomear o nosso style.css para global.css
			Precisa atualizar a pagina F5
		## E trocar as importações no app
		
		## Vamos editar o global.css				
				:root {
				    --white: #ffffff;
				    --gray-100:#e1e1e6;
				    --gray-300:#c4c4cc;
				    --gray-400:#8d8d99;
				    --gray-600:#323238;
				    --gray-700:#29292e;
				    --gray-800:#202024;
				    --gray-900:#121214;

				    --gren-500: #00875f
				}

				* {
				    margin: 0;
				    padding: 0;
				    box-sizing: border-box;
				}

				body {
				    background: var(--gray-900);
				    color: var(var(--gray-300));
				    -webkit-font-smoothing: antialiased;
				}
				
				body, input, textarea, button {
				font-family: 'Roboto', sans-serif;
			        font-weight: 400;
			        font-size: 1rem;
			 }
				
		
		
		Vamos procurar pela font robot no google fonts
		
			https://fonts.google.com/specimen/Roboto
		
				<link rel="preconnect" href="https://fonts.googleapis.com">
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">	
				
		## Vamos adicionar essa font no head do  index.html
		
		## observação: esses fontes precisam ser as primeiras a pos o meta charset
		
		
==========================================================================================================================================
==========================================================================================================================================	
	Nível 01-UP-Fundamentos-UP |  2-Estrutura da aplicação	|  	3-Componente. Header					
		
		## Vamos acessar o Header.module.css	e fazer algumas alterações
	
			 .header {
			    background: var(--gray-800);
			    display: flex;
			    justify-content: center;
			    padding: 1.25rem 0;
			}
					
	Acessamos o figma :
	https://www.figma.com/file/vHECPKU1eaRfRDfVkyJSgj/Ignite-Feed-(Community)-Abmael?type=design&mode=design&t=mBXEltbDMFTmAZxI-0
	
	E exportamos a imagem do header
	## Salvamos a imagem dentro do projeto na pasta src / assets
	
	## Em Header.jsx
	
	Vamos importar  de forma nomeada, por dentro do javascript
		import igniteLogo from '../assets/Ignite-logo.svg'
		
	## Vamos dar um console.log para identificar o endereço
	
					    import style from './Header.module.css';
					    import igniteLogo from '../assets/Ignite-logo.svg'
					    
					    console.log(igniteLogo);

					    export function Header () {
						return(
						    <header className={style.header}>
							<strong>Ignite Feed</strong>
						    </header>
						)
					    }
		
	### Mostra um caminho e é esse que vamos colocar em nosso img
	
			    import style from './Header.module.css';
			    import igniteLogo from '../assets/Ignite-logo.svg'

			    console.log(igniteLogo);

			    export function Header () {
				return(
				    <header className={style.header}>
				       <img src={igniteLogo} alt='Ignate logo' />
				    </header>
				)
			    }	
	
	## A imagem ficou grande, para isso vamos acessar o Header.module.css é estilizar o .header img
	
		.header {
		    background: var(--gray-800);
		    display: flex;
		    justify-content: center;
		    padding: 1.25rem 0;
		}
		.header img {
		    height: 2rem;
		}
			
			
==========================================================================================================================================
==========================================================================================================================================	
	Nível 01-UP-Fundamentos-UP |  2-Estrutura da aplicação	| 4-Componente. Sidebar
	
		##  Em App.jsx
		
			Vamos recorta todas as chamadas do nosso componente Post
			
		##	Vamos  criar uma div  após o companent Header
				
				<Header />
				  <div className='wrapper'></div>
				  
		## Para isso vamos criar um estilo App.module.css
		
		## Nós podemos importar um arquivo css global e um não global
		
					import { Post } from './Post';
					import { Header } from './components/Header';
					import styles from './App.module.css'

					import './global.css'

					export function App() {
					
						. . .
						
		## Agora no App.module.css	vamos criar a estilização
		
				.wrapper {
				    
				}
						
		## Em nosso App.jsx na nossa div, vamos adicionar a className={style.wrapper}, veja que não utilizamos aspas e sim chaves
		
						import { Post } from './Post';
						import { Header } from './components/Header';
						import styles from './App.module.css';

						import './global.css'

						export function App() {

						  return (
						    <>
						      <Header/>

						      <div className={styles.wrapper}>

						      </div>	
	
	
	      ###  Incluindo o asaide e organizando a main
	      
	      				'		import { Post } from './Post';
							import { Header } from './components/Header';
							import styles from './App.module.css';

							import './global.css'

							export function App() {

							  return (
							    <>
							      <Header/>

							      <div className={styles.wrapper}>

									<aside>
										sidebar
									</aside>
								
									<main>
									      <Post 
										author="Abmael"
										content="Conteudo Conteudo ConteudoConteudo"
									      />
									    
									      <Post
										author="Rafael"
										content="Conteudo Conteudo Conteudo Conteudo "
									      />  

									</main>
							      </div> <!-- Fim da div wrapper -->
						   </>
						  )
						}


			### Vamos estilizar o App.module.css
			
				.wrapper {
					  max-width: 70rem;
					  margin: 2rem auto;
					  padding: 0 1rem;

					  display: grid;
					  grid-template-columns: 256px 1fr;
					  gap: 2rem;
					  align-items: flex-start;
				} 
				
				
	### Na pasta components vamos criar o component para a sidebar  Sidebar.jsx
	
			import styles from './Sidebar.module.css'

			export function Sidebar() {
			    return (
				<aside className={styles.sidebar}> </aside>
			    )
			}
	
	### Agora na pasta conponents vamos criar a estilização para a sidebar  criando o arquivo Sidebar.module.css
	
			.sidebar {
			    background: red;   //exemplo para ver se esta estilizando
			    height: 80px;         //exemplo para ver se esta estilizando
			}	
				
	
	### No component App vamos trocar  o:
	
								<aside>
									sidebar
								</aside>
		Pelo component Sidebar
		
							<Sidebar />
							
		O React é formado pela soma de vários pequenos components, e quando são unidos forma a interface					
							
							
	### Agora no nosso component Sidebar, vamos adicionar:
	
					import styles from './Sidebar.module.css'

					export function Sidebar() {
					    return (
					           <aside className={styles.sidebar}> 
						            <img 
							   className={styles.cover} 
							   src="https://plus.unsplash.com/premium_photo-1661593486413-d279b1a02e28?
							   q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
						            />
					        

						            <div className={styles.profile}>

							   <strong> Abmael Ferreira</strong>   
							   <span>Web Developer</span>
						            </div>

						            <footer>
							   <a href="#">
							             Editar seu perfil  
							   </a>
						            </footer>
					        </aside>
					    )   
					}						
									
	### Agora vamos estilizar o nosso Sidebar.module.css
	
						.sidebar {
						    background: var(--gray-800);
						    border-radius: 8px;
						    overflow: hidden;
						}

						.cover {
						    width: 100%;
						    height: 72px;
						    object-fit: cover;
						}

						.profile {
						    display: flex;
						    flex-direction: column;
						    align-items: center;
						}

						.sidebar footer {
						    border-top: 1px solid var(--gray-600);
						    margin-top: 1.5rem;
						    padding: 1.5rem 2rem 2rem;
						}

						.sidebar footer a {
						    background: transparent;
						    color: var(--green-500);
						    border: 1px solid var(--green-500);
						    height: 50px;
						    padding: 0 1.5rem;
						    font-weight: bold;
						    display: block;
						    text-decoration: none;

						    display: flex;
						    align-items: center;
						    justify-content: center;
						}						
							
==========================================================================================================================================
==========================================================================================================================================	
	Nível 01-UP-Fundamentos-UP |  2-Estrutura da aplicação	|  5-Finalizando Sidebar						
			
		## Em   src/components/Sidebar.jsx				
							
		## Continuando a construir o nosso sidebar, vamos adicionar a imagem do perfil do usuario
		## Então antes da tag strong que é o nome do perfil vamos adicionar a nossa tag img
		
			++ DICA  podemos pegar a url de perfil do github e adicionar  o ponto png que automaticamente será carregado a imagem de perfil
			
			URL DO PERFIL =  https://github.com/Abmaellf
			Mais
			PONTO. PNG
			
			FICARÁ DESSA FORMA=  https://github.com/Abmaellf.png
			
			https://avatars.githubusercontent.com/u/39870227?v=4		
			
			++ Vamos adicionar esse novo endereço dentro de src	
			++ Vamos adicionar um className={styles.avatar}
			
				... 
					
					    <div className={styles.profile}>
						<img className={styles.avatar} src="https://github.com/Abmaellf.png" />
						<strong> Abmael Ferreira</strong>   
						<span>Web Developer</span>
					    </div>
				... 
				
		 ## Agora em src/components/Sidebar.module.css
		 
		 	Vamos estilizar o .avatar 
		 		Mas antes adicionamos uma margin no .profile
		 		
		 				.profile {
							    display: flex;
							    flex-direction: column;
							    align-items: center;
							    margin-top: -2rem;
							}
							
				+++ Logo apos o .profile
				
					 		     .avatar {
								    width: 3ren;
								    height: 3rem;
								    border-radius: 8px; 
								     border:  4px solid var(--gray-800);
    								     outline: 2px solid var(--green-500);
								}	
								
								
								.profile strong {
								    margin-top: 1rem;
								    color: var(--gray-100);
								    line-height: 1.6;
								}

								.profile span {
								    font-size: 0.875rem;
								    color: var(--gray-400);
								    line-height: 1.6;
								}				
											
				+++ vamos utilizar a biblioteca phosphoricons.com		
				
				### vamos acessar o Explore icons e escolher o icone pencil-line
				
				### Vamos instalar a biblioteca primeiro
				
				+++ Vamo acessar abaixo do get start o github
				
				https://github.com/phosphor-icons/homepage
				
				## Navegar até na sessão react e vamos instalar a biblioteca phosphor-icons/react
				npm i @phosphor-icons/react
				
				### Vamoa acessar a Siderbar.jsx
				
				E vamos fazer a importação do phosphor-icons/react
					
							## ATENÃO SÓ FOI POSSÍVEL INSTALANDO A VERSÃO ANTIGA
							
							
							 npm i phosphor-react 		
							import { PencilLine } from 'phosphor-react'
			
			### Vamos acessar  src/components/Sidebar.jsx						
			
				E dentro do footer apos o href vamos adicionar o nosso PencilLine
						...
							<footer>
								<a href="#">
								    <PencilLine />

								    Editar seu perfil  
								</a>
							    </footer>
							    
					...		    
							    
			### Agora vamos acessar a estilizaão do Sidebar   src/components/Sidebar.module.css
			
					E no .sidebar footer a  {
					
						... 
							  gap: 0.75rem


			### Aumentando o 	tamanho do icone
			
				No src/components/Sidebar.jsx
				
					podemos passar dentro do componente PencilLine o size={20}
			## Mas com isso o nosso texto não cabe dentro do box, para isso precisamos redizir o gap na estilização
				
										
					.sidebar footer a {
					    background: transparent;
					    color: var(--green-500);
					    border: 1px solid var(--green-500);
					    height: 50px;
					    padding: 0 1.5rem;
					    font-weight: bold;
					    display: block;
					    text-decoration: none;

					    display: flex;
					    align-items: center;
					    justify-content: center;

					    gap: 0.5rem
					}


		### Adicionando o hover na footer sidebar
		
					.sidebar footer a:hover {
					    background: var(--green-500);
					    color: var(--white);
					}					
	
		###  Adicionando uma transiçção no houver
			 Em src/components/Sidebar.module.css
								
					.sidebar footer a {
						    background: transparent;
						    color: var(--green-500);
						    border: 1px solid var(--green-500);
						    border-radius: 8px;
						    height: 50px;
						    padding: 0 1.5rem;
						    font-weight: bold;
						    display: block;
						    text-decoration: none;

						    display: flex;
						    align-items: center;
						    justify-content: center;

						    gap: 0.5rem;

					+++     transition: color 0.1s, background-color 0.1s;
					}
							
==========================================================================================================================================
==========================================================================================================================================	
	Nível 01-UP-Fundamentos-UP |  2-Estrutura da aplicação	|   6-Componente. Post	
	
	##### Vamos deletar o component Post que criamos nas aulas anteriores que serviu de exemplo
	
	#####  Dentro da pasta components vamos criar 2 arquivos o Post.jsx    e o  Post.module.css
	
	##### ATENÇÃO PARA A DICA
		
		EXISTE A VONTADE DE SEPARA EM MAIS PASTAS, MAS O DIEGO FALA QUE TENTAR EVITAR A OTIMIZAÇÃO PREMATURA, OU SEJA NA MAIORIA DOS PROJETOS TENTAMOS
			CRIAR UMA ESTRUTURA DE PASTAS MAIS ROBUSTAS DO QUE O PROJETO PRECISA
	
			IMPORTANTE É CONTEUDO NOMENCLATURA
			
	##### Em src/components/Post.jsx
	
		Vamos criar uma estrutura basica
		
			export function Post () {
			    return (

			        <h1>Hello Post</h1>
			    )
			}	
		
	##### Em src/components/Post.module.css
		Vamos adicionar apenas um classe .post
		
			.post {
			    
			}		
	
	##### Em src/App.jsx
	
		Vamos ajustar a importação do component Post
		
			De    :  import { Post } from './Post';
			Para :  import { Post } from './components/Post';
			
	##### Em src/components/Post.jsx
	
		Vamos começar a criar a estrutura geralmente começando com o HTML depois para o css e depois funcionamento
		
		Vamos envolvertudo em um article e vamos construir a header
		
						import styles from './Post.module.css';

						export function Post () {
						    return (
						        <article className={styles.post}>
						            <header>
							   <div className={styles.author}>
							       <img className={styles.avatar} src="https://github.com/Abmaellf.png" />
							       <div className={styles.authorInfo}>
							           <strong> Abmael Ferreira</strong>
							           <span> Web Develop</span>
							       </div>
							   </div>
						            </header>
						        </article>
						    )      
						}

	##### Vamos adicionar uma tag html chamada time
		  
						import styles from './Post.module.css';

						export function Post () {
						    return (
						        <article className={styles.post}>
						            <header>
							   <div className={styles.author}>
							       <img className={styles.avatar} src="https://github.com/Abmaellf.png" />
							       <div className={styles.authorInfo}>
							           <strong> Abmael Ferreira</strong>
							           <span> Web Develop</span>
							       </div>
							   </div>

						+++	   <time title='27 de Janeiro ás 15:05' dateTime='2024-01-27 15:05:00'>Publicado há 1h</time>
						            </header>
						        </article>
						    )      
						}

<<<<<<< HEAD
  	##### Agora vamos construir abaixo de nossa reader o conteudo do post
  	
  	### Foi necessárioi renomear o ocommit
  	git commit --amend -m" feat(1-2 6-Componente. Post)"
==========================================================================================================================================
==========================================================================================================================================	
	Nível 01-UP-Fundamentos-UP |  2-Estrutura da aplicação	|     7-Estilizações do Post   	
	
	### Estilizamos o Post.module.css
	
			.post {
			    background: var(--gray-800);
			    border-radius: 8px;
			    padding:2.5rem
			}
			
			#### Pegar somente o primeiro post
			.post + .post {
			    margin-top: 2rem;
			}


			.post > header {
			    display: flex;
			    align-items: center;
			    justify-content: space-between;
			}

			.post > time {
			    font-size: 0.875rem;
			    color: var(--gray-400);

			}


			.author {
			    display: flex;
			    align-items: center;
			    gap: 1rem;
			}

			.author img {
			     /* width: calc(3rem + 12px) !important; */
			     box-sizing: initial;
			     width: 3rem;
			     height: 3rem;
			     border-radius: 8px; 
			     border:  4px solid var(--gray-800);
			     outline: 2px solid var(--green-500);
			}

			.authorInfo {
			    display: flex;
			    flex-direction: column;
			}￼
Abmael FerreiraWeb Develop
Publicado há 1h

			.authorInfo strong{
			    display: block;
			    color: var(--gray-100);
			    line-height: 1.6;
			}

			.authorInfo span {
			    display: block;
			    font-size: 0.875rem;
			    color: var(--gray-400);
			    line-height: 1.6;
			}
	
	### Algumas modificações nas ancoras do content
	
		import styles from './Post.module.css';

		export function Post () {
		    return (
		        <article className={styles.post}>
		            <header>
		                <div className={styles.author}>
			<img className={styles.avatar} src="https://github.com/Abmaellf.png" />
			<div className={styles.authorInfo}>
			    <strong> Abmael Ferreira</strong>
			    <span> Web Develop</span>
			</div>
		                </div>

		                <time title='27 de Janeiro ás 15:05' dateTime='2024-01-27 15:05:00'>Publicado há 1h</time>
		            </header>

		            <div className={styles.content}>

		                <p>Fala galeraa 👋</p>
		                <p>Acabei de subir mais um projeto no meu portifa. 
		                		É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
		                </p>
		                <p><a href='#'> jane.design/doctorcare</a></p>
		                <p>
			<a href='#'>#novoprojeto</a> {'  '}
			<a href='#'>#nlw</a> {'  '}
			<a href='#'>#rocketseat</a> {'  '}
		                </p>

		            </div>
		        </article>
		    )      
		}

	###  Estilizando o content
	
		### Apos o  .post + post { ...
			
			.content {
			    line-height: 1.6;                  ### Altura da linha
			    color: var(--gray-300);
			    margin-top: 1.5rem;
			}

			.content p {
			    margin-top: 1rem;
			}

			.content a {
			    font-weight: bold;
			    color: var(--green-500);
			    text-decoration: none;
			}

			.content a:hover {
			    color: var(--green-300);
			}


	###  Adicionamos em src/global.css   a variavel de cor verde
	
		 --green-300: #00B37E;
	
			
=======
  	##### Agora vamos 
				
==========================================================================================================================================
==========================================================================================================================================	
	Nível 01-UP-Fundamentos-UP |  2-Estrutura da aplicação	|    8-Formulário de comentários	
	
		No html do Post
		
		## Post 
			Vamos dar um enter depois da div do conteudo
			+ Vamos criar um formulario com uma className styles.commentForm
			
			+ Um strong com um text "Deixe um comentário"
			
			+ Um textarea com um placeholder Deixe um comentário
			
			+ Um  button type submit escrito  Publicar
			
				 </div>   <!-- Div fim do content

				            <form className={style.commentForm}>
				            
				                <strong> Deixe seu feedback</strong>

				                <textearea
				                 		placeholder="Deixe um comentário"
				                >
				                   
				                </textearea>

				                <button type="submit"> 
				                
				                </button>
				            </form>

				        </article>
			
			++ Agora vamos estilizar o Post.module.css na classe .commentForm
			
					.commentForm {

					    width: 100%;
					    margin-top: 1.5rem;
					    padding-top: 1.5rem;
					    border-top: 1px solid var(--gray-600);
					}
			+++ Agora o .commentForm > strong
				
				.commentForm > strong {
					    line-height: 1.6;
					    color: var(--gray-100);

					}
					
			+++ Agora o commentForm textarea 
			
				.commentForm textarea {
				    width: 100%;
				    background: var(--gray-900);
				    border: 0;
				    resize: none;  /*Não permitir que o usuario redimencione*/
				    height: 6rem;
				    padding: 1rem;
				    border-radius: 8px;
				    color: var(--gray-100);
				    line-height: 1.4;
				    margin-top: 1rem; 
				}

			+++ Agora o commentForm [type=submit]
				
				.commentForm button[type=submit] {
				    padding: 1rem 1.5rem;
				    margin-top:1rem;
				    border-radius: 8px;
				    border:0;
				    background: var(--green-500);
				    color: var(--white);
				    font-weight:bold;
				    cursor:pointer;

				}
	
			+++ Agora com o hover  o commentForm [type=submit]:hover
			
								
				.commentForm button[type=submit]:hover {
				    background: var(--green-300);
				}
	
			+++ Vamos adicionar uma transição no  .commentForm button[type=submit] 
			
				.commentForm button[type=submit] {	
					...
					...
					 cursor:pointer;

	   				  transition: background-color 0.2s;
   				}
	
			### Agora vamos ajustar quando na textarea estamos digitando fica com a borda branca, vamos ajustar para o verde
				Isso ocorre em todos os elementos pois é a definição do focus
				
			+++ Para isso vamos acessar o nosso global.css e definir abaixo das variáveis :root  a variável : focus
				src/global.css
				
				:root {
				. . .
				}
				
				 :focus {
				        outline: transparent;
				        box-shadow: 0 0 0 2px var(--green-500);
				    }
				
			+++ Alterar o descrição do botão de Comentar para Publicar
			
			+++ Ajustar o botão publicar para ser exibido somente quando o usuário estiver focado na textarea
				
				Vamos acessar src/components/Post.module.css
				
					Na classe 	.commentForm button[type=submit] 
					
					Vamos adicionar um visibility	
					
										
					.commentForm button[type=submit] {
					    padding: 1rem 1.5rem;
					    margin-top:1rem;
					    border-radius: 8px;
					    border:0;
					    background: var(--green-500);
					    color: var(--white);
					    font-weight:bold;
					    cursor:pointer;
					    transition: background-color 0.2s;

					  ++   visibility: hidden;
					  ++  max-height: 0;
					}
				 !! com esses parametros foi possível não exibir o botão, mas o seu espaço ainda continua sendo ocupado
				 
				 !! Outra opçção é adicionar um display: none;  Mas essa opção não é uma boa pratica para a acessibilidade
				 
				 +++ Para isso no  src/components/Post.jsx vamos envolver o botão dentro de um footer
				 
				 	. . . 
				 	
				 	               <textarea
					                 placeholder="Deixe um comentário"
					                />
					               
					          ++    <footer>
					                    <button type="submit"> 
						    Publicar
						</button>
					          ++    </footer>
					            </form>
					            
				 +++  Agora no src/components/Post.module.css vamos mover o:
				 	    visibility: hidden;
					    max-height: 0;
				         Para dentro de uma nova estilizaão .commentForm footer
				         
					        .commentForm footer {
						    visibility: hidden;
						    max-height: 0;
					         } 
								
				+++ Agora vamos estilizar o .commentForm:focus-within que é diferente do focus tradicional
					
					LEITURA: Se houver algum outro focu em qual quer elemento dentro do .commentForm então eu quero aplicar
					                alguma estilização definindo o elemento que no nosso caso é o footer
					                
					                	.commentForm:focus-within  footer{
						    visibility: visible;
						    max-height: none; 
						}
					
==========================================================================================================================================
==========================================================================================================================================	
	Nível 01-UP-Fundamentos-UP |  2-Estrutura da aplicação	|    9-Componente. Comment
	
	CTRL + B :  ALTERNAR ENTRE O EXPLORE DO PROJETO NO VSCODE
	
	Em noss pasta de components vamos criar um component chamado Comment.jsx  e o css  Comment.module.css
	
		++ Estrutura basica do Comment.jsx  com uma div que engloba tudo chamado 
		  style.comment
		
			
			
				
			
			import styles from './Comment.module.css'                           
			export function Comment () {
			    return (
			        <div className={styles.comment}>

			        </div>
			    )
			}
			
/		
		++ Estrutura basica do Comment.module.css
		
			.comment {
    
			}
		
	### No Comment.jsx  vamos adicionar a imagem de profile |div styles.commentBox | div styles.commentContent |  a header | a div styles.authorAndTime
			| e o footer |
				
		import styles from './Comment.module.css'
		export function Comment () {
		    return (
		        <div className={styles.comment}>

		            <img src="https://github.com/Abmaellf.png" alt=''/>

		            <div className={styles.commentBox}>
		                <div className={styles.commentContent}>
			<header>
			    <div className={styles.authorAndTime}>
			        <strong></strong>
			        <time title='27 de Janeiro ás 15:05' dateTime='2024-01-27 15:05:00'>Publicado há 1h </time>
			    </div>
			</header>

			<p>Muito bom devam parabens </p>

		                </div>

		                <footer>
			Aplaudir
		                </footer>
		            </div>
		        </div>
		    )
		}   
	
	
	### Logo apos a nossa div styles.authorAndTime que esta dentro do header, vamos adicionar o nosso botão que será apenas um icone, por isso vamos
	         colocar um title
	         	. . .
	         	 <header>
		    <div className={styles.authorAndTime}>
		        <strong></strong>
		        <time title='27 de Janeiro ás 15:05' dateTime='2024-01-27 15:05:00'>Publicado há 1h </time>
		    </div>

		    <button title='Deletar comentario'>
		        <Trash size={20}/>                        
		    </button>
		</header>
		. . .
		
	### No footer que tinha apenas aplaudir vamos adicionar também um botão
	
		. . . 
	                <footer>
		<button>
		   <ThumbsUp/> 

		   Aplaudir <span>20</span>
		</button>
	                </footer>
		. . .
	
	##### Agora vamos acessar o nosso component de Post.jsx  e abaixo do form vamos adiccionar uma div chamada stycommetList
	
	
		Fiz uma alteração na importação do style para styles
		
		. . .
		
			 </form>

			            <div className={styles.commentList}>
			                <Comment/>
			                <Comment/>
			                <Comment/>
			            </div>

			        </article>
/		 . . .
		 
	####  Agora vamos estilizar no nosso Post.module.css  no final do arquivo depois do commentForm
	
		}

		.commentList {
		    margin-top:2rem;
		}
	
==========================================================================================================================================
==========================================================================================================================================	
	Nível 01-UP-Fundamentos-UP |  2-Estrutura da aplicação	|   10-Estilizações do Comentários
		
	### Vamos acerssar o Comment.module.css
		.comment {
		    margin-top: 1.5rem;
		    display:flex;
		    gap: 1rem;
		}
		
	### Estilizar a imagem img, mas vamos copiar o css do Post.module.css que tem uma estilização  .author img
	
	 	  .comment > img {
		    width: 3rem;
		    height: 3rem;
		    border-radius: 8px; 
		}  

			
	#### CommentBox
	
		.commentBox {
		    flex:1;
		}
	
	###  CommentContent 
	
		.commentContent {
		    background: var(--gray-700);
		    border-radius: 8px;
		    padding: 1rem;  
		}

	### .commentContent header 
	
		.commentContent header {
		    display: flex;
		    align-items: center;
		    justify-content: space-between;

		}
	
	###  authorAndTime
	
			.authorAndTime strong {
			    display:block;
			    font-size:0.875rem;
			    line-height:1.6;
			}

			.authorAndTime time {
			    display:block;
			    font-size: 0.75rem;
			    line-height:1.6;
			    color: var(--gray-400);

			}
	
	####  Estilizar o botão 
	
		.commentContent header button {
		    background: transparent;
		    border: 0;
		    color: var(--gray-400);
		    
		}
	
	### Ajustando a borda do botão de excluir o commentario
		.commentContent header button {
		    background: transparent;
		    border: 0;
		    color: var(--gray-400);
		    
	+++++ 	    line-height:0;
		    
		}
		
	####  Vamos aredondar a borda do botão 
			.commentContent header button {
		    background: transparent;
		    border: 0;
		    color: var(--gray-400);
		    
		    line-height:0;
	+++++ 	    border-radius:4px;
	
	
	####  Ajustar o hover do botão de excluir commentário
		
		1 - vamos adicionar a cor vermelha em nosso arquivo global.css
			
			:root {
				...
				
				--red-500: #F75A68;
		2 - Agora vamos criar uma estilização para quando houver um hover no botão de excluir comentario
		
			.commentContent header button:hover {
			    color: var(--red-500);
			}
			
			
			
	####   Vamos aumentar o tamanho do botão de excluir commentário
	
		Em  src/components/Comment.jsx
		
				 <div className={styles.commentBox}>
				                <div className={styles.commentContent}>
					<header>
					    <div className={styles.authorAndTime}>
					        <strong></strong>
					        <time title='27 de Janeiro ás 15:05' dateTime='2024-01-27 15:05:00'>Publicado há 1h </time>
					    </div>

					    <button title='Deletar comentario'>
				++++++++++        <Trash size={24}/>
					    </button>
					</header>
/		
	#### Alinhar o botão de excluir com o header do comment
	
		Alterar o .commentContent header para o alinhamento a esquerda
		
			.commentContent header {
			    display: flex;
		          +++++    align-items: flex-start;
			    justify-content: space-between;
			}
	
	
	
	####  Estilizando o p do conteudo
	
		.commentContent p {
		    margin-top: 1rem;
		    color: var(--gray-300);
		}
	
	###  Estilizando o footer
	
		.commentBoxfooter {
		    margin-top: 1rem;
		}
	
	### Estilizando o botão do footer 
	
		
		.commentBox footer button {
		    background: transparent;
		    border:0;
		    color: var(--gray-400);
		    cursor: pointer;

		    display: flex;
		    align-items: center
		}
	### Adicionando hover no botão de aplaudir
	
		.commentBox footer button:hover {
		    color: var(--green-300);
		}
	
	###  distanciar o icone de joinha o legal do  botão aplaudir 
		.commentBox footer button svg {
		    margin-right:0.5rem;
		}
	###  antes do numero 20 do aplaudir vamos colocar um ponto e espaço com o elemento before
	
		  .commentBox footer button span::before {
		    content: "\2022";
		    padding: 0 0.25rem;
		}
	### Aredondar a borda do botões de aplaudir
	
		.commentBox footer button {
			    background: transparent;
			    border:0;
			    color: var(--gray-400);
			    cursor: pointer;

			    display: flex;
			    align-items: center;

		++++++++	    border-radius:2px;
			}	
	
	
				
	
