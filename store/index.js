// holds your root state
export const state = () => ({
    searchState: true,
    footerContactState: true,
    
})

// contains your mutations
export const mutations = {
  SearchCheck(state, searchState) {
      state.searchState = searchState;
  },
  FooterContactCheck(state, footerContactState) {
    state.footerContactState = footerContactState;
  }
}

  
// contains your actions
export const actions = {
   
}



// your root getters
export const getters = {
   
}
