const backgroundImage = {
    width: "1200px",
    height: "200px",
    backgroundImage: "URL('https://www.mega.com/sites/giga/files/thumbnails/image/enterprise-architecture-header.jpg')",
    color: "white",
    padding: "5px 10px",
};
const bodyCSS = {
    height: "400px",
    margin: "20px 20px",    
    width: "70%",
};
const panel = {
    width: "30%"
};
const footerImage = {
    width: "1200px",
    height: "200px",
    backgroundImage: "URL('http://www.elsa-belgium.org/wp-content/uploads/2014/12/footer-background-011-1.jpg')"
};
const BlogBody = <div>
So you want to make sure you really LIVE IT. “No regrets” is the name of the game.
So often times we keep ourselves back from truly experiencing life. For example, we confine ourselves to an overly-burdensome work schedule (that seldom yields the desired payoff we expect) yet we trade years of our lives for many late nights sitting at an empty desk in front of a computer screen.
We put off our happiness for some “future date” e.g. “I will take that vacation at the end of the year.” “I will leave this horrible job after I have been here at least 2 years.” “When I have enough money saved, I will start to think about what I really want to do with my life.” Sound familiar?
Why wait to experience all that life has to offer? What are you waiting for? Things do not miraculously get better as you get older. You do not “gain” more time, flexibility or opportunities as the years unfold. You do not gain less obligation as time goes on either. The more set in your ways you become, the harder it usually is to uproot and explore yourself and the world around you.
We mistakenly think our responsibility in life is to everyone else. It is not. Your only responsibility in life is TO YOURSELF. If you do not do the things you want to do because your significant other or parent or friend tells you not to do it, then you have no one to blame but yourself. You are the one in control of your life. No one has control over you unless you give it to them. Why give your power over to anyone to limit your experience of life. As soon as you give control of your life over to someone else, you have lost yourself.
Life is too short to not live it the way you want to. It is too short to not see the world. It is too short to not spend time with those you love. It is too short to sit home night after night in front of the television watching mindless sitcoms. Get yourself off your sofa and get yourself into your life. Explore what that means to you. A unfulfilling life is simply not worth living.
</div>

let Header = () => {
    return (
    <div style={backgroundImage}>
        <h1>Life's Too Short</h1>
    </div>
    )
}
const Article = () => {
    return (
    <div className="body">
        <div style={bodyCSS}>{BlogBody}</div>
        <div className="panel"><strong>Archive</strong><br></br>
            January 2019<br></br>
            December 2018<br></br>
            November 2018<br></br>
            October 2018<br></br>
            September 2018<br></br>
            August 2018<br></br>
            July 2018<br></br>
            June 2018<br></br>
            May 2018<br></br>
            April 2018<br></br>
            March 2018<br></br>
            February 2018<br></br>
            January 2018<br></br>
        </div>
    </div>)
}
const Footer = () => {
    return (
        <div style={footerImage}>
        </div>
        )
}
const Blog = () => {
    return (
    <div>
        <Header/>
        <Article/>
        <Footer/>
</div>)
}

ReactDOM.render(<Blog />, document.getElementById('root'))