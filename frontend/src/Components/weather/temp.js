//https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=57dfc0f457b007c70c0b30e226e0a228
import React, {useState, useEffect} from 'react'
import "./style.css"

const Temp = () => {
    const [searchValue,setSearchValue] = useState("Dhaka");

    const getWeatherInfo = async () => {
        try{
            let url =
            `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&
            appid=57dfc0f457b007c70c0b30e226e0a228`;

            const res = fetch(url);
            const data
        } catch(error){
            console.log(error);
        }
    };
    useEffect(() => {
        getWeatherInfo();
    }, [])
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" 
                    placeholder="search..." 
                    autoFocus 
                    id="search" 
                    className="searchTerm"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <button className="searchButton" type="button" onClick={getWeatherInfo}>
                        Search
                    </button>
                </div>
            </div>

            <article className="widget">
                <div className="weatherIcon">
                <i className={"wi wi-day-sunny"}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>25.5&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">sunny</div>
                        <div className="place">Dhaka, Bangladesh</div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>

                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                            19:19 pm <br/>
                            sunset
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-leftside">
                            19:19 pm <br/>
                            sunset
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-leftside">
                            19:19 pm <br/>
                            sunset
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Temp
