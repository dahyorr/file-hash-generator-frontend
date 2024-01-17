export {detectTheme} from './detectTheme'
export {convertByteSize} from './convertByteSize'
export {generateUuid} from './generateUuid'
export {navTree} from './navTree'

export const copyToClipboard = (text: string) => navigator.clipboard.writeText(text)
