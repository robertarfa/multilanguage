/* eslint no-shadow: ["error", { "allow": ["client"] }]*/
import { createActions, handleActions } from 'redux-actions'

const defaultState = {
  error: null,
  data: {
    language: 'en-us',
  },
  isLoading: true,
  isLoadingMore: false,
}

export const {
  fetchLanguageStart,
  fetchLanguageSuccess,
  fetchLanguageFail,
  fetchLanguageReset,
  onChangeLanguage

} = createActions({
  FETCH_LANGUAGE_START: (mms) => ({ mms }),
  FETCH_LANGUAGE_SUCCESS: languageData => ({ languageData }),
  FETCH_LANGUAGE_FAIL: error => ({ error }),
  FETCH_LANGUAGE_RESET: () => ({}),
  ON_CHANGE_LANGUAGE: obj => ({ obj })
})

export const languageAction = handleActions(
  {

    [fetchLanguageReset]: (state) => {
      return { ...defaultState }
    },

    [fetchLanguageStart]: state => ({
      ...state,
      error: null,
      isLoading: true
    }),
    [fetchLanguageSuccess]: (state, { payload: { languageData } }) => ({
      error: null,
      isLoading: false,
      data: languageData
    }),

    [fetchLanguageFail]: (state, { payload: { error } }) => ({
      error,
      isLoading: false,
      data: []
    }),
    [onChangeLanguage]: (state, { payload: { obj } }) => {
      console.log("state", state)
      console.log("obj", obj)
      return ({ ...state, data: { ...state.data, [obj.field]: obj.value } })
    },
  },

  defaultState
)
