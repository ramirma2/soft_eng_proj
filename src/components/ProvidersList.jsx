
import ProviderSingle from './ProviderSingle';


function ProvidersList({providers, onSelectProvider}){
    return(
        <section className='search-results'>
            {providers.map((prov, i)=> <ProviderSingle details={prov} key={i} onSelectProvider={onSelectProvider}/>)}
        </section>
    )
}

export default ProvidersList;