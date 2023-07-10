import { FC } from 'react'
import type { Metadata } from 'next'
import LargeHeading from '../../components/ui/LargeHeading'
import Paragraph from '../../components/ui/Paragraph'
import DocumentationTabs from '../../components/ui/DocumentationTabs'
import 'simplebar-react/dist/simplebar.min.css'

export const metadata: Metadata = {
    title: 'Similarity API | Documentation',
    description: 'Similarity API is a free and open source text similarity API',
}

const page = () => {
    return (
        <div className="container max-w-7xl mx-auto mt-12">
            <div className="flex flex-col justify-center items-center">
                <LargeHeading>
                    Making a request
                </LargeHeading>
                <Paragraph>api/v1/similarity</Paragraph>

                <DocumentationTabs/>
            </div>
        </div>
    )
}

export default page