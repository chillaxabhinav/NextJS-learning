import axios from 'axios';
import parse from 'html-react-parser';

const ShowDetails = ({show}) => {

    const {name, image, summary} = show;

    return (
        <div className="show-details">
            <div className="show-details__poster" style={{backgroundImage : `url(${image.original})`}}>

            </div>
            <h1>Title</h1>
            {parse(summary)}

            <style jsx>{
                `
                    .show-details__poster{
                        height : 400px;
                        background-size : cover;
                    }
                `
            }</style>
        </div>
    )
}

ShowDetails.getInitialProps = async () =>{
    const response = await axios.get('http://api.tvmaze.com/shows/1?embed=cast');
    return {
        show : response.data
    }
}

export default ShowDetails;