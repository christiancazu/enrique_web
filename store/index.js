import news from '~/contents/news'
import headerSectionsContent from '~/contents/headerSections'
import booksContent from '~/contents/books'
import aboutContent from '~/contents/about'

export const state = () => ({
  news: resolveNewsSlugs(),
  currentActivity: null,
  headerSections: headerSectionsContent,
  books: booksContent,
  abouts: aboutContent
})

export const getters = {
  currentActivity: state => slug =>
    state.news.find(ca => ca.slug === slug)
  ,
  headerSection: state => section =>
    state.headerSections.find(hs => hs.section === section)
  ,
  // eslint-disable-next-line no-unused-vars
  threeLastnews: (state, getters) =>
    getters.newsReverseOrder.slice(0, 3)
  ,
  newsReverseOrder: state =>
    state.news.slice().reverse()
}

/**
 * Adding slug property from title replacing whitespace with '-'
 * and transform text to lowerCase
 *
 */
const resolveNewsSlugs = () => {
  return news.map(ac => ({
    ...ac, slug: ac.title.replace(/\s/g, '-').toLowerCase()
  }))
}
