import { NavMainItemProps } from '@/types';
import Home from '@mui/icons-material/Home';
import {SiConvertio} from 'react-icons/si';
import {GiPowerGenerator} from 'react-icons/gi';
import {RiFolderKeyholeFill} from 'react-icons/ri';
import { SvgIcon } from '@mui/material';

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
    icon: <SvgIcon><GiPowerGenerator  /></SvgIcon>,
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
        disabled: false
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
    icon: <SvgIcon><SiConvertio/></SvgIcon>,
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
{
    label: 'Encoders/Decoders',
    dropdown: true,
    icon: <SvgIcon><RiFolderKeyholeFill/></SvgIcon>,
    path: '/encode-decode',
    disabled: false,
    links: [
    {
        label: 'Base64 Encoder/Decoder',
        path: '/encode-decode/base64',
        disabled: false
    },
    ]
},
]

