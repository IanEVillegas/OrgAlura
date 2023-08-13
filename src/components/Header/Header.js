import './Header.css'; //importación del css

function Header() {
    //*para estos casos, es necesario que haya un elemento padre que contenga a todas las etiquetas que se deseen usar. En este caso será la tag <header>
    //*Css posee la palabra class reservada, es por ello que para utilizar class de HTML en JS se utilizará className='' 
    return <header className='header'>
        <img src='/img/header.svg' alt='Org' />
    </header>
}

export default Header;