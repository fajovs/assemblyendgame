export default function Word(props){

    const currentWord = props.currentWord.split("").map((letter, index) => 
        {
            return <span key={index} className="letter-box">
                {letter.toUpperCase()}
            </span>
        }
    )

    return(
        <>
            <section className="word-container">
                {currentWord}
            </section>
        </>
    )
}