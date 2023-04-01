module.exports =  function (eleventyConfig) {

    eleventyConfig.addGlobalData('layout', 'default');
    // placeholder for now
    eleventyConfig.addFilter("relative_url", x => x);
    return {
        dir: {
            // ⚠️ These values are both relative to your input directory.
            includes: "_includes",
            layouts: "_layouts"
        }
    };
}