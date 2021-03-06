import * as types from '../types' // * as引入所有抛出的方法名

const state = {
  showSidebar: false,
  searchHistory: ['123', 'abc']
}

const mutations = {
  [types.COM_SHOW_SIDE_BAR] (state, status) {
    state.showSidebar = status
  },
  [types.COM_SAVE_SEARCH_HISTORY] (state, status) {
    state.searchHistory = status
  },
  [types.COM_DELETE_SEARCH_HISTORY] (state, index) {
    state.searchHistory.splice(index, 1)
  },
  [types.COM_CLEAR_SEARCH_HISTORY] (state) {
    state.searchHistory = []
  }
}

const getters = {
  showSidebar: state => state.showSidebar,
  searchHistory: state => state.searchHistory
}

const actions = {
  setShowSidebar ({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  },
  saveSearchHistory ({commit, state}, query) {
    let searchHistory = [query, ...state.searchHistory.slice()]
    searchHistory = [...new Set(searchHistory)] // 去重
    commit(types.COM_SAVE_SEARCH_HISTORY, searchHistory)
  },
  // 删除历史搜索记录
  deleteSearchHistory ({commit}, index) {
    commit(types.COM_DELETE_SEARCH_HISTORY, index)
  },
  clearSearchHistory ({commit}) {
    commit(types.COM_CLEAR_SEARCH_HISTORY)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}