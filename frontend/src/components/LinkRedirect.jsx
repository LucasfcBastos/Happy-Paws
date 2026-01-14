import '../styles/Forms/Link.css'

function LinkRedirect({ text1, text2, link }) {
    return (
        <div className='LinkRedi'>
            <p>{text1}<a href={`${link}`}>{text2}</a></p>
        </div>
    );
}

export default LinkRedirect