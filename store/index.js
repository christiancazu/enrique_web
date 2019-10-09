import activitiesContent from '~/contents/activities'
import headerSectionsContent from '~/contents/headerSections'
import booksContent from '~/contents/books'
import aboutContent from '~/contents/about'

export const state = () => ({
  activities: resolveActivitiesSlugs(),
  currentActivity: null,
  headerSections: headerSectionsContent,
  books: booksContent,
  abouts: aboutContent
})

export const getters = {
  currentActivity: state => slug => 
    state.activities.find(ca => ca.slug === slug)
  ,
  headerSection: state => section =>
    state.headerSections.find(hs => hs.section === section)
  , 
  threeLastActivities: (state, getters) => 
    getters.activitiesReverseOrder.slice(0, 3)
  ,
  activitiesReverseOrder: state =>
    state.activities.slice().reverse()
}

/**
 * Adding slug property from title replacing whitespace with '-'
 * and transform text to lowerCase
 * 
 */
const resolveActivitiesSlugs = () => {
  return activitiesContent.map(ac => ({
    ...ac, slug: ac.title.replace(/\s/g, '-').toLowerCase()
  }))
}
