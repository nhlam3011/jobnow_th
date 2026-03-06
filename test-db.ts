require('dotenv').config({ path: '.env.local' })
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Test DB connection...')
    try {
        const userCount = await prisma.user.count()
        console.log('✅ Connection successful. Admin user count:', userCount)
    } catch (err) {
        console.error('❌ Connection failed:', err)
    } finally {
        await prisma.$disconnect()
    }
}

main()
