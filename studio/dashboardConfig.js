export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e45cfcc2f5bb6c2892d3417',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-a1o3eti1',
                  apiId: 'b71507ab-a153-4aa2-b3ab-24102f80d7f9'
                },
                {
                  buildHookId: '5e45cfccb84e802a00e4d62e',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-p9ubod2g',
                  apiId: '7dde02d1-3674-43cc-939a-cd06add9320f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/travisfrazier/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-p9ubod2g.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
