export default hosts => {
    const rule = `Host(${
        hosts.map(h => `\`${h}\``).join(', ')
    })`

    return {
        http: {
            routers: {
                theme: {
                    rule,
                    service: 'theme-neworigindeploy@docker',
                    entryPoints: ['websecure'],
                    tls: {
                        certResolver: 'letsencrypt'
                    }
                }
            }
        }
    }
} 

