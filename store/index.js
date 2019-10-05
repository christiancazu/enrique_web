import activitiesContent from '~/contents/activities'
import headerSectionsContent from '~/contents/headerSections'
import booksContent from '~/contents/books'

export const state = () => ({
  activities: resolveActivitiesSlugs(),
  currentActivity: null,
  headerSections: headerSectionsContent,
  books: booksContent
})

export const getters = {
  currentActivity: state => slug => 
    state.activities.find(ca => ca.slug === slug)
  ,
  headerSection: state => section =>
    state.headerSections.find(hs => hs.section === section)
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