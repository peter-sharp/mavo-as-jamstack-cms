class MvApp extends HTMLElement {
    constructor() {
        super();
        //implementation
        window.addEventListener("hashchange", this.loadMV.bind(this));

        this.loadMV();
    }

    loadMV() {
        if(this.isAdmin()) {
            document.head.append(addStylesheet("https://get.mavo.io/mavo.css"));
            document.head.append(addScript("https://get.mavo.io/mavo.js"));
        }
    }

    isAdmin() {
        return window.location.hash == "#admin"
    }

    connectedCallback() {
        this.setAttribute("mv-app", "jamstackCms")
        this.setAttribute("mv-storage", "https://github.com/peter-sharp/mavo-as-jekyll-cms/_data/cmsData.json")
        this.setAttribute("mv-plugins", "importhtml tinymce")
    }

}

function addScript(src) {
    const script = document.createElement('script')
    script.defer = true
    script.src = src
    return script;
}

function addStylesheet(href) {
    const link = document.createElement('link')
    link.rel = "stylesheet"
    link.href = href
    return link;
}

window.customElements.define('mv-app', MvApp);