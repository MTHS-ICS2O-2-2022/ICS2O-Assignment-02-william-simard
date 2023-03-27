// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * This function gets users first name and age and shows it back to user.
 */
function enterClicked() {
  // input
  const base = parseInt(document.getElementById("base").value)
  const hight = parseInt(document.getElementById("hight").value)

  // calculate
  const area = (base * hight) / 2
  // output
  document.getElementById("result").innerHTML =
    "The area of the triangle is " + area + "cm²"
}
