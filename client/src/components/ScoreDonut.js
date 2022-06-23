import React from "react";
import { Box, Button } from "@mui/material";

export default function ScoreDonut() {
  {
    /*
     * Updates the donut chart's percent number and the CSS positioning of the progress bar.
     * Also allows you to set if it is a donut or pie chart
     * @param  {string}  el      The selector for the donut to update. '#thing'
     * @param  {boolean} donut   True shows donut, false shows pie
     */
  }
  function updateDonutChart(el, percent, donut) {
    percent = Math.round(percent);
    if (percent > 100) {
      percent = 100;
    } else if (percent < 0) {
      percent = 0;
    }
    let deg = Math.round(360 * (percent / 100));

    let $;

    if (percent > 50) {
      $(el + " .pie").css("clip", "rect(auto, auto, auto, auto)");
      $(el + " .right-side").css("transform", "rotate(180deg)");
    } else {
      $(el + " .pie").css("clip", "rect(0, 1em, 1em, 0.5em)");
      $(el + " .right-side").css("transform", "rotate(0deg)");
    }
    if (donut) {
      $(el + " .right-side").css("border-width", "0.1em");
      $(el + " .left-side").css("border-width", "0.1em");
      $(el + " .shadow").css("border-width", "0.1em");
    } else {
      $(el + " .right-side").css("border-width", "0.5em");
      $(el + " .left-side").css("border-width", "0.5em");
      $(el + " .shadow").css("border-width", "0.5em");
    }
    $(el + " .num").text(percent);
    $(el + " .left-side").css("transform", "rotate(" + deg + "deg)");
  }

  {
    /* Pass in a number for the percent
updateDonutChart('#specificChart', 66.67, true); */
  }

  return (
    <div>
      <div id="specificChart" class="donut-size">
        <div class="pie-wrapper">
          <span class="label">
            <span class="num">0</span>
            <span class="smaller">%</span>
          </span>
          <div class="pie">
            <div class="left-side half-circle"></div>
            <div class="right-side half-circle"></div>
          </div>
          <div class="shadow"></div>
        </div>
      </div>
    </div>
  );
}
