import './css/Countries.css'
import { Countries_content } from './Countries_content'
import { SearchBar } from './SearchBar'

export const Countries = () => {
    return (
        <div className='Countries'>
            <div className='Elements'>
                <SearchBar/>
                <br/>
                <Countries_content />
            </div>
        </div>
    )
}
