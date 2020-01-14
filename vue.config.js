const path = require('path');

module.exports = {
    lintOnSave: false,
    pages: {
        index: {
            // entry for the page
            entry: 'src/main.js',
            // the source template
            template: 'public/index.html',
            // output as dist/index.html
            filename: 'index.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'SUTD From The Sky',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
        //   aesthetic: { //TODO: AerView gets its own SPA, while the rest share an SPA with home page.
        //     entry: 'src/quest/home/main_questhome.js',
        //     template: 'public/quest/home.html',
        //     filename: 'home.html',
        //     title: 'Quest Marketplace | SUTDQuest',
        //     chunks: ['chunk-vendors', 'chunk-common', 'questhome']  //TODO: make sure we know what chunks we're supposed to import
        //   }
        //   // when using the entry-only string format,
        //   // template is inferred to be `public/subpage.html`
        //   // and falls back to `public/index.html` if not found.
        //   // Output filename is inferred to be `subpage.html`.
        //   //subpage: 'src/subpage/main.js'
    },
    chainWebpack: config => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    // Provide path to the file with resources
                    resources: './path/to/resources.scss',
                    // Or array of paths
                    resources: ['./path/to/vars.scss', './path/to/mixins.scss']
                })
                .end()
        })
    }
}
