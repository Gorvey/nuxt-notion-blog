import { Client } from '@notionhq/client'
import { getQuery } from 'h3'
import { Resource } from '~/types/resource'
const notion = new Client({
  auth: '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'
})
export default defineEventHandler(async (event): Promise<Resource[]> => {
  const query = getQuery(event)
  const database_id = query.id
  console.log('=== 调试信息 ===')
  console.log('环境变量 NOTION_API_KEY:', process.env.NUXT_NOTION_TOKEN)
  console.log('数据库 ID:', database_id)
  console.log('完整查询参数:', query)
  console.log('===============')
  const data = await notion.databases.query({
    database_id: '12bd7e8859e48054b475d07b44426684'
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const resources = data.results.map((page: any) => {
    const properties = page.properties

    return {
      id: page.id,
      title: properties.名称?.title[0]?.plain_text || '',
      description: properties.Descriptioin?.rich_text[0]?.plain_text || '',
      url: properties.URL?.url || '',
      icon: page.icon?.emoji || page.icon?.external?.url || '',
      cover: page.cover?.external?.url || '',
      createdAt: page.created_time,
      updatedAt: page.last_edited_time
    }
  })

  return resources
})
