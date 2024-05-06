
import ProviderSingle from './ProviderSingle';


function ProvidersList({providers}){
    return(
        <section className='search-results'>
            {providers.map((prov, i)=> <ProviderSingle details={prov} key={i} />)}
        </section>
    )
}

export default ProvidersList;