import activitiesContent from '~/contents/activities'

export const state = () => ({
  activities: resolveActivitiesSlugs(),
  currentActivity: null
})

export const getters = {
  currentActivity: state => slug => {
    return state.activities.find(ca => ca.slug === slug)
  }
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