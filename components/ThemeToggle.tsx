import { useAppDispatch, useAppSelector } from '@/hooks';
import { toggleThemeMode } from '@/slices/themeSlice'
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import sunIcon from '../assets/sun.png'
import moonIcon from '../assets/moon.png'
import FormControlLabel from '@mui/material/FormControlLabel';

const ThemeSwitch = styled(Switch)(({ theme }) => ({
    width: 70,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(0px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(35px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url(${moonIcon.src})`

            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        // backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        backgroundColor: 'transparent',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${sunIcon.src})`
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));


const ThemeToggle: React.FC = () => {

    const dispatch = useAppDispatch()
    const themeMode = useAppSelector((state) => state.theme.mode)

    return (
        <div>
            <FormControlLabel
                control={
                    <ThemeSwitch
                        onChange={() => { dispatch(toggleThemeMode()) }}
                        checked={themeMode === 'dark'}
                        inputProps={{ 'aria-label': 'theme-switcher' }}
                    />
                }
                label=""
            />
        </div>
    )
};

export default ThemeToggle;
