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