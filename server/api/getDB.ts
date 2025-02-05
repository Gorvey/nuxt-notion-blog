import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_TOKEN || '123'
})

export default defineEventHandler(async (event) => {
  const data = await notion.databases.query({
    database_id: event.context.params?.id || '123'
  })
  return data
})
