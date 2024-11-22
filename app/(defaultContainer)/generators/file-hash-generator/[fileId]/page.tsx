import HashPreview from 'components/fileHashGenerator/HashPreview'
import { Suspense } from 'react'

const FileHashGeneratorResultPage = async ({params}: {params: Promise<{fileId: string}>}) => {
const {fileId} = await params

  return (
    <Suspense>
      <HashPreview fileId={fileId}/>
    </Suspense>
  )
}

export default FileHashGeneratorResultPage