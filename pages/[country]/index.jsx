import axios from 'axios';
import Thumbnail from '../../components/Thumbnail/index';

const Home = ({shows, country}) => {

    const renderShows = () => {
        return shows.map((show) => {
            if(show.image !== null){
                return (
                    <li key={show.id}><Thumbnail imageUrl={show.image.medium} caption={show.name} href="/[country]/[showid]" as={`/${country}/${show.id}`}/></li>
                )
            }
        })
    }

    return (
        <ul className="tvshows">
            {renderShows()}
        </ul>
    )
}

Home.getInitialProps = async (context) => {

    const country = context.query.country || 'us';

    const res = await axios.get(`http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`);
    const response = await res.data;
    return {
        shows : response,
        country : country
    }
}

export default Home;