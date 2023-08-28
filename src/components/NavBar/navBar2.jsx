import './navBar.css'
import SearchButton from '../searchButton'

export default function NavBar2(){
    return (
    <div className='navBarBackground2'>
        <input className="searchBar" type="text" placeholder="Search.." name="search"></input>
        <SearchButton/>
    </div>
    )
}