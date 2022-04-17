import './App.css';
import NewsElement from './NewsElement';
import basketball from './images/basketball.jpg'
import soccer   from './images/soccer-ball-goal.jpg'

function NewsFeed()
{
    return(
        <div className="newsFeed">
            <NewsElement text = "sample" title = "sample" source = {basketball}></NewsElement>
            <NewsElement text = "sample2" title = "sample2" source = {soccer}></NewsElement>
        </div>
    )
}

export default NewsFeed;