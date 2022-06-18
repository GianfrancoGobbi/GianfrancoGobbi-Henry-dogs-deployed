import React from "react";
import { NavLink } from "react-router-dom";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";


import { Nav } from '../Components/Nav/Nav.jsx';

configure({ adapter: new Adapter() });

describe("<Nav />", () => {
  let nav;
  beforeEach(() => {
    nav = shallow(<Nav />);
   });

  it('Debería tener un NavLink con el texto "Cucha" que cambie la ruta hacia "/home"', () => {
    // El orden en el que se declaran los Links es importante!
    expect(nav.find(NavLink).at(0).prop("to")).toEqual("/home");
    expect(nav.find(NavLink).at(0).text()).toEqual("CUCHA");
  });

  it('Debería tener un NavLink con el texto "Crear Perro" que cambie la ruta hacia "/create"', () => {
    // El orden en el que se declaran los Links es importante!
    expect(nav.find(NavLink).at(1).prop("to")).toEqual("/create");
    expect(nav.find(NavLink).at(1).text()).toEqual("CREAR PERRO");
  });
});
