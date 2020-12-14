import React from 'react'
import { LOCALES } from '../../i18nProvider';
import { useDispatch } from 'react-redux'
import { onChangeLanguage } from '../../services/store/reducers/languageReducer'


export default function Flags() {

  const dispatch = useDispatch()

  const fntOnChangeLanguage = (language) => {

    return dispatch(onChangeLanguage({ field: 'language', value: language }))

  }


  return (
    <div>
      <button onClick={() => fntOnChangeLanguage(LOCALES.ENGLISH)}>English</button>
      <button onClick={() => fntOnChangeLanguage(LOCALES.FRENCH)}>French</button>
      <button onClick={() => fntOnChangeLanguage(LOCALES.GERMAN)}>German</button>
    </div>
  )
}
