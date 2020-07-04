import axios from 'axios';

const Home = ({shows}) => {

    const renderShows = () => {
        return shows.map((show) => {
            return (
                <li key={show.id}>{show.name}</li>
            )
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
        shows : response
    }
}

export default Home;