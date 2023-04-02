const cmsData = require("./_data/cmsData.json");
module.exports =  function (eleventyConfig) {

    eleventyConfig.addGlobalData('layout', 'default');
    // placeholder for now
    eleventyConfig.addFilter("relative_url", x => x);

    eleventyConfig.setLiquidOptions({
        dynamicPartials: false,
        strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
        globals: {
            site: {
                data: {
                    cmsData
                }
            }
        }
    });
    return {
        dir: {
            // ⚠️ These values are both relative to your input directory.
            includes: "_includes",
            layouts: "_layouts"
        }
    };
}