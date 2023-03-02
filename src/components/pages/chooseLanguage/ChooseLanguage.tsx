import React from "react";
import { Element } from "react-scroll";
import all_countries from "../../../assets/data/countryDb.json";
import { COMMON_COUNTRIES } from "@const";
import { separateIt } from "../../helpers/functions";
import { CountriesType } from "@/components/helpers/functions.types";
import WrapperPage from "@wrappers/wrapperPage/WrapperPage";
import CountryHeader from "./countryHeader/countryHeader";
import { CountryPanel } from "./countryPanel/CountryPanel";
import SeparatorString from "./separatorString/SeparatorString";
import CountryString from "./countryString/CountryString";

export class ChooseLanguage extends React.Component {
  constructor(props: any) {
    super(props);
  }

  countiesList = separateIt(all_countries as CountriesType[]);

  render() {
    return (
      <WrapperPage>
        <CountryHeader />
        <CountryPanel />
        <SeparatorString key={300} type="string" label={"Common countries"} />
        <>
          {COMMON_COUNTRIES.map((item) => {
            return (
              <CountryString
                key={item.id + 600}
                phoneCode={item.phoneCode}
                countryName={item.name}
                countryCode={item.countryCode}
              />
            );
          })}
        </>
        <>
          {this.countiesList.map((item, index) => {
            return (
              <React.Fragment key={index}>
                {item.separated && (
                  <Element key={item.id + 900} name={item.name[0]}>
                    <SeparatorString
                      key={item.id + 1200}
                      type="letter"
                      label={item.name[0]}
                    />
                  </Element>
                )}

                <CountryString
                  key={item.id + 1600}
                  phoneCode={item.phoneCode}
                  countryName={item.name}
                  countryCode={item.countryCode}
                />
              </React.Fragment>
            );
          })}
        </>
      </WrapperPage>
    );
  }
}
