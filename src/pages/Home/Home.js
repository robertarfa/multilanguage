import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { FormattedMessage } from "react-intl";
import { I18nPropvider } from '../../i18nProvider';
import translate from "../../i18nProvider/translate";

import { Link } from 'react-router-dom';

import Flags from '../../components/Flags/Flags';


export default function Home() {

  const [locale, setLocale] = useState()

  const languageAction = useSelector(state => state.languageAction)

  useEffect(() => {

    setLocale(languageAction.data.language)
  }, [languageAction]);

  const render = () => {

    return (
      <I18nPropvider locale={locale} >
        <Flags />

        <div className="App">
          <header className="App-header">

            <h1>

              <FormattedMessage id="Home_01" />
            </h1>

            <h2>
              Home. {translate('Home_01')}
            </h2>

            <Link className="link" to="/About">
              About
          </Link>


          </header>
        </div>
      </I18nPropvider >

    )
  }

  return (render())
}

