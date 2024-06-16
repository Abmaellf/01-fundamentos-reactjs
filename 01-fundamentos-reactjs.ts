	Inicio 2 de janeiro de 2024
		
	ESSE ARQUIVO SEMPRE ESTARÁ DENTRO DO PROJETO E COM O NOME DO PROJETOS 
	
	Github
				
	git config  user.name "Abmaellf"
        	git config  user.email "abmael.ninha@gmail.com"
        	git branch -M main
        
		githubToken
		FIGMA https://www.figma.com/file/vHECPKU1eaRfRDfVkyJSgj/Ignite-Feed-(Community)-Abmael?type=design&mode=design&t=mBXEltbDMFTmAZxI-0
       
	
==========================================================================================================================================	
==========================================================================================================================================
	Nível 01-UP-Fundamentos-UP |  1-Iniciando com React | 2-Fundamentos do ReactJS
	REACT 	Biblioteca Javascript para criar interfaces de usuários
	
	RENDERING PATTERNS
	
		SSR - Server Side Rendering:
		
				 -  Uma aplicação
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
			
		Projeto criado com o    / /  npm create vite@latest     / /         OU 	yarn create vite
						
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
	
	 Derntro da pasta src vamos criar uma arquivo chamdo styles.css            OU MAIS TARDE global.css
	 
	 		
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
				    --green-500: #00875f;
				     --green-300: #00B37E;
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
	## Salvamos a imagem dentro do projeto na pasta src / assets            /////// AQUI //////////////
	
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
	Nível 01-UP-Fundamentos-UP |  2-Estrutura da aplicação	|     4-Componente. Sidebar
	
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
	    ### Vamos copiar o endereço da imagem
	    
	    	## Vamos acessar o site :
	    	
	    		https://unsplash.com/pt-br
	    	
	    	## Abrir a imagem em um tamanho grande
	    		https://unsplash.com/pt-br/fotografias/um-carro-esportivo-vermelho-estacionado-em-um-quarto-branco-yC__dEIrAJk
	    	
	    	## Copiar o endereço da imagem 
	    		https://images.unsplash.com/photo-1711211095357-076c9784660d
	    		?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

		## Podemos diminuir o tamanho da exibição
		
			Em:                80&w=1974&
			Trocar por:   40&w=500&
			
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
					  grid-template-columns: 256px 1fr;          #### Pesquisar sobre as unidades de medidas
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
						_________________________________________
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
							    margin-top: -2rem;      // AVISÃO QUE TEMOS  É DE UMA IMAGEM EM CIMA DE OUTRA
							}
							
				+++ Logo apos o .profile
				
					 		     .avatar {
								    width: 3rem;
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
			## Mas com isso o nosso texto não cabe dentro do box, para isso precisamos reduzir o gap na estilização
				
										
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

				+++++	    gap: 0.5rem
					}


		### Adicionando o hover na footer sidebar
		
					.sidebar footer a:hover {
					    background: var(--green-500);
					    color: var(--white);
					}					
	
		###  Adicionando uma transisão no houver
		
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
					/*### obs:  as transition podem ser feitas na cor e no plano de fundo, sempre separando por virgula*/
					}
							
==========================================================================================================================================
==========================================================================================================================================	
	Nível 01-UP-Fundamentos-UP |  2-Estrutura da aplicação	|   6-Componente. Post	
	
	##### Vamos deletar o component Post que criamos nas aulas anteriores que serviu de exemplo
	
	#####  Dentro da pasta components vamos criar 2 arquivos o Post.jsx    e o  Post.module.css
	
	##### ATENÇÃO PARA A DICA
		
		EXISTE A VONTADE DE SEPARA EM MAIS PASTAS, MAS O DIEGO FALA QUE TENTAR EVITAR A OTIMIZAÇÃO PREMATURA, OU SEJA NA MAIORIA
		 DOS  PROJETOS TENTAMOS CRIAR UMA ESTRUTURA DE PASTAS MAIS ROBUSTAS DO QUE O PROJETO PRECISA
	
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
						           | <header>
						           |	   |<div className={styles.author}>
						           |  	   | 
						           |	   |    <img className={styles.avatar} src="https://github.com/Abmaellf.png" />
						           |	   |   
						           |	   |    |<div className={styles.authorInfo}>
						           |	   |    |    <strong> Abmael Ferreira</strong>
						           |	   |    |    <span> Web Develop</span>
						           |	   |    |</div>
						           |	   |    
						           |	   |</div>
						           | 	   
						           | </header>
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
	Nível 01-UP-Fundamentos-UP |  2-Estrutura da aplicação |    7-Estilizações do Post   	
	
	### Estilizamos o Post.module.css
	
			.post {
			    background: var(--gray-800);
			    border-radius: 8px;
			    padding:2.5rem;
			}
		## melhor fazer os ajustes referente a imagem, pra que as proximas estilizações, facam sentido
			.author img {...}
			
			#### Pegar somente o primeiro post
			.post + .post {
			    margin-top: 2rem;
			}

			.post > header {
			    display: flex;
			    align-items: center;
			    justify-content: space-between;
			}

			.post > header > time {
			    font-size: 0.875rem;
			    color: var(--gray-400);

			}


			.author {
			    display: flex;
			    align-items: center;  //Alinha horizontalmente
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
			    display: block;       /* O QUE AFETA O BLOCK*/
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

++++++++++++++	           <div className={styles.content}>

	++++++		                <p>Fala galera </p>
                    ++++++
	++++++		                <p>
	++++++			    Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat.
	++++++			    O nome do projeto é DoctorCare.
	++++++		                </p>

	++++++		                <p><a href='#'>jane.design/docktorcare</a></p>
			                
	++++++		                <p>
	++++++			   <a href='#'>#novoprojeto</a>{' '}
	++++++			   <a href='#'>#nlw</a>{' '}
	++++++			   <a href='#'>#rocketseat</a>{' '}
	++++++		                </p>
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
/
			
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

  	   				       ++++++  transition: background-color 0.2s;
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
				 !! com esses parametros foi possível NÃO exibir o botão, mas o seu ESPAÇO ainda continua sendo ocupado
				 
				 !! Outra opção é adicionar um display: none;  Mas essa opção não é uma boa pratica para a acessibilidade
				 
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
		
	### No Comment.jsx  vamos adicionar a imagem de profile |div styles.commentBox | dentro div styles.commentContent | dentro a header |dentro  a div styles.authorAndTime 		| No mesmo nível do commentContent o footer |
				
		import styles from './Comment.module.css'
		export function Comment () {
		    return (
		        <div className={styles.comment}>

		            <img src="https://github.com/Abmaellf.png" alt=''/>

		            <div className={styles.commentBox}>
		                <div className={styles.commentContent}>
			<header>
			    <div className={styles.authorAndTime}>
			        <strong>Abmael Ferreira</strong>
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

	++	    <button title='Deletar comentario'>
	++	        <Trash size={20}/>                        
	++	    </button>
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
	
	##### Agora vamos acessar o nosso component de Post.jsx  e abaixo do form vamos adiccionar uma div chamada styles.commetList
	
	
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
		
	### Vamos acerssar o Comment.module.css  ajustar o comment
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
		    font-size: 0.875rem;
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
	
		.commentBox footer {
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
	
==========================================================================================================================================
==========================================================================================================================================	
	Nível 01-UP-Fundamentos-UP |  2-Estrutura da aplicação	|   11-Componente. Avatar
			
	Os componentes de avatar são muitos parecidos, no react existe 2 grandes momentos que criamos componentes
		1 - O mais fácil quando alguma coisa repete em tela
		2 - O segundo é quando você consegue tirar algo de um componente maior, sem que o componente pare de funcionar
	
	Exemplo:
		Temos uma tela que lista todos os usuários, nessa tela temos um button para fazer upload de usuários em massa de usuários ou qualquer outra coisa
		O botão tem um funcionamento complexo que não existe a necessidade de estar nesse grande component então vamos mover essa complexidade do 
		botão para um outro component, desacoplando de um component  criando outro
	
	### Vamos criar dentro da pasta component um novo component chamado Avatar junto com o seu css
	
		Avatar.jsx
		
			import styles from './Avatar.module';
			export function Avatar() {
			    return (

			    )
			}		

		Avatar.module.css
			.avatar {
    
			}
	### Vamos recortar o avatar que existe na Sidebar.jsx
	
		<img className={styles.avatar} src="https://github.com/Abmaellf.png" />
	
	### E colar no nosso novo component
	
			import styles from './Avatar.module';
			export function Avatar() {
			    return (
			        <img className={styles.avatar} src="https://github.com/Abmaellf.png" />
			    )
			}
		
	### Vamos defidir o src dinamico pois podemos passar um avatar diferente, para isso vamos utilizar as propriedades
	
			import styles from './Avatar.module';
			export function Avatar(props) {
			    return (
			        <img className={styles.avatar} src={props.src} />
			    )
			}
	



	### 	Agora na Sidebar vamos utilizar o avatar no lugar do codigo de avatar recortado
	
	
			import { PencilLine } from 'phosphor-react'
			import styles from './Sidebar.module.css'
			import { Avatar } from './Avatar'

			export function Sidebar() {
			    return (
			        <aside className={styles.sidebar}> 
			            <img 
			                className={styles.cover} 
			                src="https://plus.unsplash.com/premium_photo-1661593486413-d279b1a02e28?
			                q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
			            />
			        

			            <div className={styles.profile}>

			                <Avatar src="https://github.com/Abmaellf.png" />
			                
		### Identificamos que já esta mostrando o avatar mais ainda não foi aplicado os stilus
		
		### Vamos recortar a estilização que existe na sidebar referente ao avatar
		
			.avatar {
			    /* width: calc(3rem + 12px) !important; */
			    box-sizing: initial;
			    width: 3rem;
			    height: 3rem;
			    border-radius: 8px; 
			    border:  4px solid var(--gray-800);
			    outline: 2px solid var(--green-500);
			}
			
				 /* width: calc(3rem + 12px) !important; */
				    box-sizing: initial;
				    width: 3rem;
				    height: 3rem;
				    border-radius: 8px; 
				    border:  4px solid var(--gray-800);
				    outline: 2px solid var(--green-500);
			
		Recortamos apenas o conteudo
		
		#### Vamos colar em 	 src/components/Avatar.module.css
		
			.avatar {
			      /* width: calc(3rem + 12px) !important; */
			      box-sizing: initial;
			      width: 3rem;
			      height: 3rem;
			      border-radius: 8px; 
			      border:  4px solid var(--gray-800);
			      outline: 2px solid var(--green-500); 
			}
		
		### Vamos fazer o mesmo procedimento no Post
		
			Em src/components/Post.jsx
			
			Vamos alterar:
			
				 <img className={styles.avatar} src="https://github.com/Abmaellf.png"/>
			
			Para  :
				<Avatar src="https://github.com/Abmaellf.png"/>
			
		### Vamos retirar do Post a estilização do avatar que fica em src/components/Post.module.css	
		
			CODIGO EXCLUIDO
			
				
				.author img {
				     /* width: calc(3rem + 12px) !important; */
				     /* box-sizing: initial; */
				     width: calc(3rem + 12px);
				     height: calc(3rem + 12px);
				     border-radius: 8px; 
				     border:  4px solid var(--gray-800);
				     outline: 2px solid var(--green-500);
				}
		
		### Também vamos atualizar o nosso componente de avatar em Comment
			Que fica em src/components/Comment.jsx
			
			CODIGO ALTERADO:
			DE:  <img src="https://github.com/Abmaellf.png" alt=''/> 
			PARA: <Avatar src="https://github.com/Abmaellf.png" alt=''/>
		
		
		### O nosso avatar de Comment não tem a borda então teremos que passar alguma propriedade que não seja estilizado a borda
		
		1-PRIMEIRA FORMA 
			
			1.1 EM NOSSO COMPONENT DE COMMENT - src/components/Comment.jsx
			
				1.1 .1- Vamos passar uma propriedade chamada hasBorder={false} src=. . ./>
				
					<Avatar hasBorder={false} src="https://github.com/Abmaellf.png" alt=''/>
					
			1.2 EM NOSSO COMPONENT DE AVATAR, AGORA TEMOS ACESSO A ESSA PROPS
			
				1.2.1 - Vamos criar um estilo em src/components/Avatar.module.css
				
					.avatar  e o .avatarWithBorder
			
					.avatar {
					      /* width: calc(3rem + 12px) !important; */
					      box-sizing: initial;
					      width: 3rem;
					      height: 3rem;
					      border-radius: 8px; 
					       
					}

					.avatarWithBorder {
					    /* width: calc(3rem + 12px) !important; */
					    box-sizing: initial;
					    width: 3rem;
					    height: 3rem;
					    border-radius: 8px; 
					    border:  4px solid var(--gray-800);
					    outline: 2px solid var(--green-500); 
					}	
			
		
				1.2.2 - No component Avatar, no className vamos fazer uma condição
				
					        <img 
					            className={props.hasBorder ? styles.avatarWithBorder : styles.avatar } 
					            src={props.src} 
					        />
				
					OBS: Problema é que ficou tudo sem bordas, pois no Post por exemplo não foi enviado a propriedade 
					        hasBorder e como essa props não tem um valor Default, não ira mostrar a borda
					        
					        ### Vamos passar a propriedade hasBorder com o valor true no Post
					        
					        		import { Avatar } from './Avatar'
							import { Comment } from './Comment'
							import styles from './Post.module.css'
							export function Post() {
							    return(
							     
							        <article className={styles.post}>
							            <header>
							                <div className={styles.author}>

								<Avatar hasBorder={true} src="https://github.com/Abmaellf.png"/>
								...
						Com isso podemos identificar que agora os avatar dos Post contem as bordas
			           ------------------------------------------------------------------------------------------------------------------------------------------------------------
	2-PRIMEIRA FORMA 
			              1.2.3 -   Podemos OMITIR o valor da propriedade hasBorder pois por padrão o seu valor será true
			              
			              	<Avatar   hasBorder  src="https://github.com/Abmaellf.png"/>
			            
			            
			            --------------------------------------------------------------------------------------------------------------------------------------------------------------------  
			              1.2.4 -  Podemos também que por PADRÃO todos os avatar, que não receber a propriedade hasBorder TENHA ESSA PROPRIEDADE
			              COMO {true} 
			              
			              		# Para isso em nosso Post podemos remover a propriedade hasBorder
			              		
			              			<Avatar src="https://github.com/Abmaellf.png"/>
			              		
			              		# Em nosso component Avatar, temos duas forma de adicionar a props como default
			              			
			              			-------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
			              			1.2.4.1 - Um constante definindo false até mesmo se não for enviada
			              			
			              				import styles from './Avatar.module.css';
							export function Avatar(props) {

							    const hasBorder = props.hasBorder !== false;
							    return (
							        <img 
							            className={hasBorder ? styles.avatarWithBorder : styles.avatar } 
							            src={props.src} 
							        />
							    )
							}
						-------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
						1.2.4.2 - Podemos usar o conceito de DESESTRUTURAÇÃO  COM OBJETOS,  PARA APLICAR VALORES 
						               DEFAULT
						
							Podemos excluir a linha a baixo:
								const hasBorder = props.hasBorder !== false;
								
							Dentro do parametro do componente Avatar ({ }), vamos buscar apenas os propriedades 
							hasBorder e src, nesse momento é que podemos definir um valor padrão 	
								
								import styles from './Avatar.module.css';
								export function Avatar({hasBorder = true, src}) {

								    return (
								        <img 
								            className={hasBorder ? styles.avatarWithBorder : styles.avatar } 
								            src={src} 
								        />
								    )
								}
						-------------------------------------------------------------------------------------------------------------------------------------------------------------------- 		
						1.2.4.3 - Então em Comment o Avatar tem que receber o hasBorder = false
						
						
						export function Comment() {
						    return (
						        <div className={styles.comment}>

						        <Avatar hasBorder={false} src="https://github.com/Abmaellf.png" alt=''/>

###############################################################
		❯ git status
		No ramo main
		Your branch is up to date with 'origin/main'.

		Changes not staged for commit:
		  (utilize "git add <arquivo>..." para atualizar o que será submetido)
		  (use "git restore <file>..." to discard changes in working directory)
			modified:   01-fundamentos-reactjs.ts
			modified:   src/components/Comment.jsx
			modified:   src/components/Post.jsx
			modified:   src/components/Post.module.css
			modified:   src/components/Sidebar.jsx
			modified:   src/components/Sidebar.module.css

		Arquivos não monitorados:
		  (utilize "git add <arquivo>..." para incluir o que será submetido)
			src/components/Avatar.jsx
			src/components/Avatar.module.css

		nenhuma modificação adicionada à submissão (utilize "git add" e/ou "git commit -a")

	Commit
	feat(1-2-11 -Componente. Avatar )

==========================================================================================================================================
==========================================================================================================================================	
	Nível 01-UP-Fundamentos-UP |  2-Estrutura da aplicação	|   12-Aplicando responsividade

	###	Vamos visualizar no navegador de forma responsiva
	
	Em App.module.css
	
		Logo apos as estilização do .wrapper, vamos adicionar a estilização abaixo:
		
		.wrapper {
		  max-width: 70rem;
		  margin: 2rem auto;
		  padding: 0 1rem;

		  display: grid;
		  grid-template-columns: 256px 1fr;
		  gap: 2rem;
		  align-items: flex-start;
		} 

		@media (max-width:768px) {
		
		 html {
		    font-size: 87.5%;
		  }
		  .wrapper {
		    grid-template-columns: 1fr;
		  }
		}
		
	###  Ajuste da fonte quando for responsivo
	
	Não podemos utilizar em pixes, poi isso é valor bruto e o usuário não poderar alterar
	
	16 ->  100%
	14 - x
	14*100/16  = 87,5 %
	
==========================================================================================================================================
==========================================================================================================================================	
	Nível 01-UP-Fundamentos-UP | 1-Iniciando com React  | 3-Os motores do react  |   1-Iterando no JSX

	Iniciado
	# Analisando as informações do Post
	
	//  author> { avatar_url: " " , name: " " , role: " " }
	// publishedAt: Date
	// content: String

	##  Vamos copiar esse conteudo acima, vamos acessar o App.jsx  e colar pra lembrar
	
	. . .
		import './global.css'


		 	 //  author> { avatar_url: " " , name: " " , role: " " }
			//  publishedAt: Date
			//  content: String
		  
		export function App()  {
	. . .

	## Criando a constante de post
	
			const post = [
			    {
			      id:1,
			      author: {
			        avatarUrl: 'https://github.com/Abmaellf.png',
			        name: 'Abmael Ferreira',
			        role: 'Desenvolvedor'
			      },
			      content: [
			        {type: 'paragraph', content: 'Fala galera',},
			        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da 
			        Rocketseat. O nome do projeto é DoctorCare 🚀'},
			        {type: 'link', content: 'jane.design/doctorcare'},
			      ],
			      publishedAt: new Date('2022-05-03 20:00:00'),
			    },

			    {
			      id:2,
			      author: {
			        avatarUrl: 'https://github.com/maykbrito.png',
			        name: 'Abmael Ferreira',
			        role: 'Desenvolvedor'
			      },
			      content: [
			        {type: 'paragraph', content: 'Fala galera',},
			        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da 
			        Rocketseat. O nome do projeto é DoctorCare 🚀'},
			        {type: 'link', content: 'jane.design/doctorcare'},
			      ],
			      publishedAt: new Date('2022-05-03 20:00:00'),
			    },
			  ]


	### Vamos iterar em nossos posts com o forEach   onde podemos usar, mas não é o intuito pois o mesmo não tem retorno
	
		<main>
		              {
		                postMessage.forEach(post => {

		                  <Post />
		                  
		                })
		              }             

		</main>

	### Arquivo com pleto do App
	
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
			        {type: 'paragraph', content: 'Fala galera',},
			        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, 
			        evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
			        {type: 'link', content: 'jane.design/doctorcare'},
			      ],
			      publishedAt: new Date('2022-05-03 20:00:00'),
			    },

			    {
			      id:2,
			      author: {
			        avatarUrl: 'https://github.com/maykbrito.png',
			        name: 'Abmael Ferreira',
			        role: 'Desenvolvedor'
			      },
			      content: [
			        {type: 'paragraph', content: 'Fala galera',},
			        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, 
			         evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
			        {type: 'link', content: 'jane.design/doctorcare'},
			      ],
			      publishedAt: new Date('2022-05-03 20:00:00'),
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


	#### Agora vamos acessa o Post.jsx e passar propiedades na função,  para apenas executar um console.log para verificar se esta passando os dados 
	
				
		export function Post(props) {

		    console.log(props);
		    return(
		     
git commit -m"feat(1 -  1  -  3  -  1-Iterando no JSX )"


==========================================================================================================================================
==========================================================================================================================================	
	Nível 01-UP-Fundamentos-UP | 1-Iniciando com React  | 3-Os motores do react  |   2-Propriedades do Post
	
	
	### Em Post.jsx   vamos alimentar dinamicamente alguns elementos com os valores da propriedades, começando pelo author
	
		import { Avatar } from './Avatar'
		import { Comment } from './Comment'
		import styles from './Post.module.css'

		export function Post({author}) {

		    
		    return(
		     
		        <article className={styles.post}>
		            <header>
		            
		            <div className={styles.author}>

		      +++    <Avatar src={author.avatarUrl}/>

			<div className={styles.authorInfo}>

		       +++    	    <strong>{author.name}</strong>
		       +++    	    <span>{author.role}</span>
			    
			</div>

		                </div>
		                
		                 . . . 
	
	#### Agora alem do author vamos passar a propriedade publishedAt na desestruturação
	
		export function Post({author, publishedAt}) {   . . . 	
	
	### Vamos criar uma constante para receber os dados do Intl
	
	export function Post({author, publishedAt}) {
		 const publishedAtDateFormatted = new Intl.DateTimeFormat('pt-BR',{
		        day: '2-digit',
		        month: 'long',
		        hour: '2-digit',
		        minute: '2-digit',
		    }).format(publishedAt)
		    
	### No retorno vamos passa em time a constante acima
	
							
				export function Post({author, publishedAt}) {
				    
 == PASSAR ESSA CO NSTANTE EM BAIXO ==>	    const publishedAtDateFormatted = new Intl.DateTimeFormat('pt-BR',{
				        day: '2-digit',
				        month: 'long',
				        hour: '2-digit',
				        minute: '2-digit',
				    }).format(publishedAt)
				    
				    return(
				     
				        <article className={styles.post}>
				            <header>
				                <div className={styles.author}>

					<Avatar src={author.avatarUrl}/>

					<div className={styles.authorInfo}>

					    <strong>{author.name}</strong>
					    <span>{author.role}</span>
					</div>

				                </div>

				                <time title='27 de Janeiro ás 15:05' dateTime='2024-01-27 15:05:00'>
				++++	{publishedAtDateFormatted}
				                </time>
				            </header>
	
	###   ESSE É O FORMATO QUE FOI IMPRESSO NO NAVEGADOR
	
		25 de maio às 20:00
		
	######   Vamos utilizar o date-fns que é mais legível que o Intl
	
	#### Vamos instalar a date-fns
	
		npm i date-fns
		
	### Excluir tudo referente ao intl  deixando apenas a constante:
	
		RETIRADO
		
			= new Intl.DateTimeFormat('pt-BR',{
			        day: '2-digit',
			        month: 'long',
			        hour: '2-digit',
			        minute: '2-digit',
			    }).format(publishedAt)
		RETIRADO


	### Importar algumas funções de dentro deo fns
	
		import { format } from 'date-fns';
		
	### Ainda no Post Podemos a tribuir a chamada do metodo para o publishedDateFormatted
	
	//Referencia     https://date-fns.org/                                        https://date-fns.org/v3.6.0/docs/format
	
		import { Avatar } from './Avatar'
		import { Comment } from './Comment'
		import styles from './Post.module.css'
		import { format} from 'date-fns'

		export function Post({author, publishedAt}) {
		    
	+++++	    const publishedAtDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' H:mm'h'" )    ## escapar as string
		    
		    return(
		     
		        <article className={styles.post}>
	
	#### Ajustando para nossa localidade do nosso idioma, vamos importar o ptBR de dentro do date-fns/locale/pt-BR
	
		import ptBR from 'date-fns/locale/pt-BR'
		
	### Agora na função format no terceiro parametro vamos envia um objeto com o parametro locale: ptBR
	
		const publishedAtDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' H:mm'h'", {
		        locale: ptBR,
		    } )
		    
	### Invertendo a utilização da variavel publishedAt para o title
	
		               **** Antes *****
		               <time title='' dateTime='2024-01-27 15:05:00'>
			{publishedAtDateFormatted}
		                </time>
		                
		                **** Depois
		                   <time title={publishedAtDateFormatted} dateTime='2024-01-27 15:05:00'>
			
		                </time>
	### Vamos criar uma nova constante chamada publishedDateRelativeToNow
		
		const publishedDateRelativeToNow = 
		
	### Vamos utilizar outra função do fns chamada formatDistanceToNow  e vamos atribuir essa função para a nossa constante publishedDateRelativeToNow
		
		import { format, formatDistanceToNow } from 'date-fns'
		
		...
		
			 const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
			        locale: ptBR,
			        addSuffix: true

			    })
		...
		
		<time title={publishedAtDateFormatted} dateTime='2024-01-27 15:05:00'>
                   
		{publishedDateRelativeToNow}
		
	                </time>
	
	### Agora precisamos formatar o dateTime de dentro da tag time, para isso temos um recurso do próprio javascript
	
		   <time title={publishedAtDateFormatted} dateTime={publishedAt.toISOString()}>
	                   
			{publishedDateRelativeToNow}
		   </time>
	
		
	### Agora vamos mostrar o conteudo content que é um array
	
	## Vamos adicionar no parametro da função a props content
	
		export function Post({author, publishedAt, content}) {
			... 
	##3 dentro do conteudo vamos pegar o content.map
	
	### Vou retirar todo esse conteudo abaixo:
	
				 <p>Fala galera</p>

				                <p>
					Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da 
					Rocketseat. O nome do projeto é DoctorCare.
				                </p>

				                <p> <a href='#'>jane.design/docktorcare</a></p>

				                <p>
					<a href='#'>#novoprojeto</a>
				                </p>

				                <p>
				                  <a href='#'>#novoprojeto</a>
				                  <a href='#'>#nlw</a>
				                  <a href='#'>#rocketseat</a>
				                </p>
				                
	### Dentro da div styles.content vamos adicionar o conteudo abaixo			                
		  <div className={styles.content}>

		                {content.map(line => {

			if(line.type === 'paragraph') {
			    return <p>{ line.content }</p> ;
			} else if (line.type === 'link') {
			    return <p><a href='#'>{ line.content }</a></p> ;
			}
		                })}
		                 
		            </div>  {/* Div Fim do content */}
		
	
	
==========================================================================================================================================
==========================================================================================================================================	
	Nível 01-UP-Fundamentos-UP | 1-Iniciando com React  | 3-Os motores do react  |   3 - Estado (useState)
	
	Conceito super importante que é o estado	
	
	### Vamos acessar o nosso component Post e apos a importações vamos criar uma constante de array chamada comments
		ATENÇÃO CORREÇÃO IMPORTANTE ESSA CONSTANTE DEVE SER CRIADA DENTRO DA FUNÇÃO DE CRIAÇÃO DO COMPONENT
	
		import styles from './Post.module.css'
		
		
	+++ *CORREÇÃO *  . . . export function Post () {
			const comments = [
			    1,
			    2,
			    3,
			];
	. . .
			
	### Agora depois do form dentro da div commentList vamos percorrer essa nossa lista comments e para cada comments vamos chamar um component Comment
			 </footer>
	            </form>
		           <div className={styles.commentList}>
		 +++               {comments.map(comment => {
		 +++	       return <Comment />
		 +++          })}
		            </div>
	Podemos visualizar que  será exibido 3 comentário por Post
	Podemos alterar na constante a quantidade e também será alterado na visualização dos comentários
	
			const comments = [
			    1,
			];
			
	### Como que eu adiciono um novo comment ?
		
		1 - Não vamos usar o texto digitado no textarea
		
		2-Quando o usuário clicar no botão, tab ou o enter no textarea
		
			E não podemos utilizar somente o onclick no botão justamente por que pode vir de vários eventos
			
		3 - Para ouvir eventos vamos utilizar o onClick com o "C" maiusculo do proprio html, mas no formulario usaremos /*  onSubmit  */ passando o nome da função
	
		
      		            <form onSubmit="" className={styles.commentForm}>

		                <strong> Deixe seu feedback</strong>   /
	
	### Vamos criar uma função que ira ser chamada no evento do formulario, logo apos a constante publichedDateRelativeToNow
	
		### padrão do Diego, quando a função for um evento diparado do usuário então ele adiciona um handle na nomenclatura da função
		
		handleCreateNewComment()
		
	### Agora vamos chamar essa função no nosso formulario
	
		
	            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>

	                <strong> Deixe seu feedback</strong>            /

	                <textarea
	                 placeholder="Deixe um comentário"
	                />
	               
	                <footer>
		<button type="submit"> 
		    Publicar
		</button>
	                </footer>
	            </form>
	            
          #### Indentificamos que a ação foi muito rápida pois é um comportamento padrão do html , redirecionar o usuário par outro lugar, para isso vamos  passar dentro da
          #### da função uma outra função chamada event.preventDefault()
          
          	function handleCreateNewComment() {
	        event.preventDefault()
	        console.log("oi");
	    }

	#### identificamos no console.log que esta digitanto oi
	
        #### Agora queremos adicionar uma nova posição no array de comments, para isso na função handleCreateNewComment vamos chamar o 
        
        	comments.push(3)  e o console.log(comments)
        
        
        		  function handleCreateNewComment() {
        
		        event.preventDefault()

		        comments.push(3);

		        console.log(comments)
		    }
		    
        #### Mas em nossa lista de comments no navegador so aparecem 2 comments porque?
        #### No react temos o conceito de estado são variaveis que o componente ira monitorar quando ela mudar
        #### Para isso vamos criar um estado que é dentro do nosso component vamos criar uma constante que  ira receber uma useState([1,2])
        #### Dentro dos parentes vamos passar a primeiro parametro que será o valor inicial 
        #### E para pegar o valor de estados vamos utilizar o conceito de desestruturação pois useState sempre retorna um array com duas posições
        
        	const [ comments, ] = useState([ 1, 2, ])
        	
        ## Na segunda posição vamos receber uma função par alterar o valor de comentários
        
        ## Essa função alem de alterar, avisa que essa variavel foi alterada
        
        	const [ comments, setComments ] = useState([ 1, 2, ])
        
        
        ### Agora na função handleCreateNewComment vamos retirar a chamado do PUSH E chamar somente o setComment que é a variável que altera e avisa que 
                a  variavel   comments foi alterada. Essa utilização descreve o conceito de /* imutabiidade */
        
                             function handleCreateNewComment() {
		        
			        event.preventDefault()

			        setComments([1,2,3])

			       
		       }
		       
     ### Mas gora só esta adicionando até  3        
        
     ### 	Na função 	handleCreateNewComment, setComments vamos utilizar o spred operations . . . comments para pegar todos os tamanhos que existe no 
     	array  
     ### 	No segundo parametro vamos pegar o tamanho do array comments.length mais 1 para sempre quando chamar a função adicionar mais um comentarios
     
     	 setComments([...comments, comments.length +1 ]);
     	 
     	 
     	 
     	 
     	 
     	 

