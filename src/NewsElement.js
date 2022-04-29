import App from "./App.js";

function NewsElement(props)
{


    return(
        <div className="elementBody">
            <table>
                <tr>
                    <td className="elementText">
                            <h3>
                                {props.title}
                            </h3>
                            <p>{props.text}</p>
                        </td>
                    <td className="elementImage">
                        <img src={props.source} width= "20%" className="elementImageBody"></img>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default NewsElement;