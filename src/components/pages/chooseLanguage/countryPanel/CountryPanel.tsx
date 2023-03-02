import React from "react";
import { Link, scroller } from "react-scroll";

import classes from "./CountryPanel.module.scss";
import countriesAll from "../../../../assets/data/countryDb.json";
import { getFirstCountryLetter } from "../../../helpers/functions";
import { CountriesType } from "../../../helpers/functions.types";

export class CountryPanel extends React.Component {
  constructor(props: any) {
    super(props);
  }
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }
  render() {
    return (
      <ul className={classes.countryPanel}>
        {getFirstCountryLetter(countriesAll as CountriesType[]).map(
          (item, index) => {
            return (
              <li key={index + 1900}>
                <Link
                  key={index + 2200}
                  activeClass={classes.countryPanel__link_active}
                  className={classes.countryPanel__link}
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {item}
                </Link>
              </li>
            );
          }
        )}
      </ul>
    );
  }
}
