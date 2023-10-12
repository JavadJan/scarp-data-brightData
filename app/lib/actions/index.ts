"use server"
import Scraper from '../scraper'

export const ScrapeProductAndStore = async (url: string) => {
    try {
        if (!url) return
        const product = await Scraper(url)
    } catch (error: any) {
        throw Error(`failed to create/update product: ${error.message}`)
    }
}
