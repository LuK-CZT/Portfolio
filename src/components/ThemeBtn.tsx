import { useTheme } from "next-themes"
import moon from '../../public/moon.svg'
import sun from '../../public/whiteSun.svg'


const ThemeBtn = () => {

    const {theme, setTheme} = useTheme();

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }


    return (
        <div className='w-fit fixed top-5 right-5' onClick={changeTheme}>
            <img className="w-8" src={ theme === 'light' ? moon : sun} alt="" />
        </div>
    )
} 

export default ThemeBtn