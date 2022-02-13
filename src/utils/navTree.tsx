import { NavMainItemProps } from '@/types';
import People from '@mui/icons-material/People';
import Public from '@mui/icons-material/Public';
import Home from '@mui/icons-material/Home';


export const navTree: NavMainItemProps[] = [
{
    label: 'Home',
    dropdown: false,
    icon: <Home />,
    path: '/'
},
{
    label: 'Generators',
    dropdown: true,
    icon: <People />,
    path: '/generators',
    links: [
    {
        label: 'File Hash Generator',
        path: '/generators/file-hash-generator',
        disabled: false
    },
    {
        label: 'UUID Generator',
        path: '/generators/uuid-generator',
        disabled: true
    },
    {
        label: 'Lorem Ipsum',
        path: '/generators/lorem-ipsum',
        disabled: true
    },
    ]
},
{
    label: 'Converters',
    dropdown: true,
    icon: <Public />,
    path: '/converters',
    disabled: false,
    links: [
    {
        label: 'JSON - YAML',
        path: '/converters/json-yaml',
        disabled: false
    },
    {
        label: 'Number Base',
        path: '/converters/number-base',
        disabled: true
    },
    ]
},
]

