import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { FormattedMessage } from "react-intl";
import { I18nPropvider } from '../../i18nProvider';
import translate from "../../i18nProvider/translate";

import { Link } from 'react-router-dom';
import Flags from '../../components/Flags/Flags';


export default function About() {

  const [locale, setLocale] = useState()

  const languageAction = useSelector(state => state.languageAction)

  useEffect(() => {

    setLocale(languageAction.data.language)
  }, [languageAction]);

  return (



    <I18nPropvider locale={locale}>

      <Flags />
      <div className="App">
        <header className="App-header">

          <h1>
            <FormattedMessage id="About_01" />
          </h1>
          <h2>
            About. {translate('About_01')}
          </h2>

          <Link className="link" to="/">
            Home
          </Link>
        </header>

      </div>
    </I18nPropvider>
  );
}

