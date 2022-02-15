import React from "react";
import { configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { postActivity } from "../actions/index";
import configureStore from "redux-mock-store";
import ActivityCreated from "./ActivityCreated";


configure({ adapter: new Adapter() });

describe("<ActivityCreated />", () => {
  describe("Estructura", () => {
    let wrapper;
    postActivity = jest.fn();
    beforeEach(() => {
        configureStore();  
      wrapper = shallow(<ActivityCreated />);
    });
    it("Renderiza un <form>", () => {
      expect(wrapper.find("form")).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Name:"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(0).text()).toEqual("name");
    });

    it('Renderiza un input con la propiedad "name" igual a "name"', () => {
      expect(wrapper.find('input[name="name"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Duration:"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(1).text()).toEqual("duration");
    });

    it('Renderiza un input con la propiedad "name" igual a "healthScore"', () => {
        expect(wrapper.find('input[name="duration"]')).toHaveLength(1);
      });



    it('Renderiza un label con el texto igual a "Dificulty:"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(2).text()).toEqual("dificulty");
    });

    it('Renderiza un input con la propiedad "name" igual a "healthScore"', () => {
      expect(wrapper.find('input[name="dificulty"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Season:"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(3).text()).toEqual("season");
    });

    it('Renderiza un input con la propiedad "name" igual a "Season"', () => {
      expect(wrapper.find('input[name="season"]')).toHaveLength(1);
    });
  
});
});