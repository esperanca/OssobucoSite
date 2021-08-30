require('dotenv').config()
const {
    META_TITLE,
    META_URL,
    META_DESC,
    META_LANG,
    META_COLOR,
    META_EMAIL,
} = process.env

module.exports = {
    title: META_TITLE || 'Ossobuco - Histórias que reverberam',
    url: META_URL || 'https://ossobu.co',
    description: META_DESC || 'Ossobuco é uma comunidade de contadores de histórias',
    lang: META_LANG || 'pt-br',
    primaryColor: META_COLOR || '#DB0000',
    email: META_EMAIL || 'contato@ossobu.co',
    dateFormat: 'dd mm yyyy'
}
