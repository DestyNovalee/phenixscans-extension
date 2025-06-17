import { Madara } from '@paperback/extensions-common'

export const PhenixScansInfo = {
    version: 1,
    name: 'PhenixScans',
    icon: 'icon.png',
    author: 'ChatGPT',
    authorWebsite: '',
    description: 'Manga from https://phenix-scans.com (French)',
    websiteBaseURL: 'https://phenix-scans.com',
    language: 'fr',
    hentaiSource: false
} as const

export default class PhenixScans extends Madara {
    constructor(cheerio: CheerioAPI) {
        super(cheerio, PhenixScansInfo)
    }
}