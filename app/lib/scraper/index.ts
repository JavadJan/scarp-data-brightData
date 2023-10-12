import React from 'react'

const Scraper = (url: string) => {
    if (!url) return
    //BrightData proxy configuration
    //curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_6e96df39-zone-price_wiser:qca4ph50l4pt -k https://lumtest.com/myip.json
    const username = process.env.BRIGHT_DATA_USERNAME
    const password = process.env.BRIGHT_DATA_PASSWORD
    const port = 22225
    const session_id = (10000 * Math.random()) || 0
    const options = {
        auth: {
            username: `${username}-session-${session_id}`,
            password,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false
    }
    try {
        
    } catch (error) {

    }
}

export default Scraper