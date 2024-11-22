import { Suspense } from 'react';
import UuidGenerator from '@/components/uuidGenerator';


const UuidGeneratorPage = () => {
  return (
    <Suspense>
      <UuidGenerator />  
    </Suspense>
  )
}

export default UuidGeneratorPage