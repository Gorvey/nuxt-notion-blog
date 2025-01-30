export default defineAppConfig({
  title: 'Hello Nuxt',
  nav: [
    {
      title: '',
      url: '',
      items: [
        {
          label: '博客',
          href: '/'
        },
        {
          label: '周刊',
          href: '/weeks'
        },
        {
          label: '技术栈',
          href: '/stack'
        },
        {
          label: '关于',
          href: '/about'
        }
      ]
    },
    {
      title: '资源',
      url: '#',
      items: [
        { label: '安装', href: '#' },
        { label: '项目结构', href: '#' }
      ]
    }
  ]
})
