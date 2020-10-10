export default hosts => {
    const themeTestDomain = process.env.THEME_TEST_DOMAIN

    const rule = `Host(${
        themeTestDomain ? `\`${themeTestDomain}\`, ` : ''
    }${hosts.map(h => `\`${h}\``).join(', ')})`

    return {
        http: {
            routers: {
                theme: {
                    rule
                }
            }
        }
    }
} 

