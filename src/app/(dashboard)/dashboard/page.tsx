import { FC } from 'react'

import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { notFound } from 'next/navigation'
import { db } from '@/lib/db'

export const metadata: Metadata = {
    title: 'Similarity API | Dashboard',
    description: 'Free and open source text similarity API',
}

const page = async () => {
    const user = await getServerSession(authOptions)

    if (!user) return (
        notFound()
    )

    const apiKeys = await db.apiKey.findFirst({
        where: {userId: user.user.id, enabled: true},
    })

    return (
        <>
        </>
    )
}

export default page