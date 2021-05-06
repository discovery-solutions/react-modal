class FilePlatform {
    static get() {
    	try {
    		if (typeof navigator.product === "string" && navigator.product.toLowerCase().search("react") > -1)
                return "native";

    		return "web";
    	} catch (e1) {
    		return "desktop";
    	}
    }

    static select(config) {
        let platform = FilePlatform.get();
        let data = config[platform] || config.default;

        const options = {
            // eslint-ignore-next-line
            "string": () => require(data),
            "object": () => data,
            "function": () => data(),
        }

        try {
            return options[typeof data]()
        } catch (e) {
            return undefined;
        }
    }
}

export default FilePlatform.select({
    native: "./native.js",
    web: () => require("./web.js"),
    default: () => require("./web.js"),
});
