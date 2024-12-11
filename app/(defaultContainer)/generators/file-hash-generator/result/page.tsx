import HashPreview from 'components/fileHashGenerator/HashPreview'
import { Suspense } from 'react'

const FileHashGeneratorResultPage = async ({}) => {

  return (
    <Suspense>
      <HashPreview />
    </Suspense>
  )
}

export default FileHashGeneratorResultPage