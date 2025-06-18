const { Madara } = require('@paperback/extensions-common');

const PhenixScansInfo = {
  version: 1,
  name: 'PhenixScans',
  icon: 'extension-icon.png',
  author: 'DestyNovalee',
  authorWebsite: '',
  description: 'PhenixScans – chapitres VF via Paperback',
  websiteBaseURL: 'https://phenix-scans.com',
  language: 'fr',
  hentaiSource: false
};

class PhenixScans extends Madara {
  constructor(cheerio) {
    super(cheerio, PhenixScansInfo);
  }
}

module.exports = PhenixScans;
