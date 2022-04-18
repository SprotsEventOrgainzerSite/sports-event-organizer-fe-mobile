import './App.css';
import NewsElement from './NewsElement';
import basketball from './images/basketball.jpg'
import soccer   from './images/soccer-ball-goal.jpg'
import Slider from './Slider';

function NewsFeed()
{
    return(
        <div className="newsFeed">
                <Slider></Slider>
           <div className='news-elements'>
            <h2 className='news-title'>Recent News</h2>
            <NewsElement text = "sample" title = "sample" source = {basketball}></NewsElement>
            <NewsElement text = "sample2" title = "sample2" source = {soccer}></NewsElement>
           </div>
        </div>
    )
}

export default NewsFeed;