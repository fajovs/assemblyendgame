
export default function ListBox(props){

    const languageElements = props.languages.map(lang => {
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        return (
            <span 
                className="chip" 
                style={styles}
                key={lang.name}
            >
                {lang.name}
            </span>
        )
    })
  


    return(
        <section className="lang-container">
            {languageElements}
        </section>
    )
}