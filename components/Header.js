import headerStyle from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyle.title}>
                <span>Dev</span>Header
            </h1>
            <p className={headerStyle.description}>
                keep up to date
            </p>
        </div>
    )
}

export default Header
