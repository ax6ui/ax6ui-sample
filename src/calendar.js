import { AX6Util as U, AX6UICalendar as Calendar } from "ax6ui";
import "ax6ui/AX6UICalendar/style.scss";


let html = `
<div id="calendar-target-0" style="width:270px;padding: 10px;border-radius: 5px;float:left;margin-right: 20px;" class="card"></div>
<div id="calendar-target-1" style="width:270px;padding: 10px;border-radius: 5px;float:left;margin-right: 20px;" class="card"></div>
<div style="clear: both;"></div>
<div id="calendar-target-2" style="width:270px;padding: 10px;border-radius: 5px;float:left;margin-right: 20px;" class="card"></div>
<div id="calendar-target-3" style="width:270px;padding: 10px;border-radius: 5px;float:left;margin-right: 20px;" class="card"></div>
<div id="calendar-target-4" style="width:270px;padding: 10px;border-radius: 5px;float:left;margin-right: 20px;" class="card"></div>
<div id="calendar-target-5" style="width:270px;padding: 10px;border-radius: 5px;float:left;margin-right: 20px;" class="card"></div>
`;
let fn = {
  moduleRun: function ($body) {
    let today = new Date();

    let myCalendar_0 = new Calendar({
      control: {
        left: '<i class="material-icons">keyboard_arrow_left</i>',
        yearTmpl: '%s',
        monthTmpl: '%s',
        right: '<i class="material-icons">keyboard_arrow_right</i>',
        yearFirst: true
      },
      dimensions: {
        itemPadding: 1,
        height: 250
      },
      target: document.getElementById("calendar-target-0"),
      displayDate: (new Date()),
      startOfWeek: 1,
      mode: "day",
      selectMode: "day",
      onClick: function () {
        console.log(myCalendar_0.getSelection());
      },
      onStateChanged: function () {
        console.log(this);
      },
      multipleSelect: 2
    });

    // setSelection
    let myCalendar_1 = new Calendar({
      control: {
        left: '<i class="material-icons">keyboard_arrow_left</i>',
        yearTmpl: '%s',
        monthTmpl: '%s',
        right: '<i class="material-icons">keyboard_arrow_right</i>',
        yearFirst: true
      },
      dimensions: {
        itemPadding: 1,
        height: 250
      },
      target: document.getElementById("calendar-target-1"),
      displayDate: today,
      startOfWeek: 0,
      mode: "day",
      selectMode: "day",
      multipleSelect: 2
    });

    myCalendar_1.setSelection([
      U.date(today, {'add': {d: -2}}),
      U.date(today, {'add': {d: -3}})
    ]);

    console.log(myCalendar_1.getSelection());


    let myCalendar_2 = new Calendar({
      target: document.getElementById("calendar-target-2"),
      marker: (function () {
        let marker = {};
        marker[U.date(today, {'return': 'yyyy-MM-dd', 'add': {d: -1}})] = true;
        marker[U.date(today, {'return': 'yyyy-MM-dd', 'add': {d: 0}})] = true;
        marker[U.date(today, {'return': 'yyyy-MM-dd', 'add': {d: 1}})] = true;
        return marker;
      })()
    });

    // Selectable
    let myCalendar_3 = new Calendar({
      target: document.getElementById("calendar-target-3"),
      selectable: [
        U.date(today, {'return': 'yyyy-MM-dd', 'add': {d: -1}}),
        U.date(today, {'return': 'yyyy-MM-dd', 'add': {d: 0}}),
        U.date(today, {'return': 'yyyy-MM-dd', 'add': {d: 1}})
      ],
      onClick: function () {
        console.log(this)
      }
    });

    // Period
    let myCalendar_4 = new Calendar({
      control: {
        left: '<i class="material-icons">keyboard_arrow_left</i>',
        yearTmpl: '%s',
        monthTmpl: '%s',
        right: '<i class="material-icons">keyboard_arrow_right</i>',
        yearFirst: true
      },
      target: document.getElementById("calendar-target-4"),
      multipleSelect: 2,
      onClick: function () {
        let dates = this.self.getSelection();
        if (dates.length > 1) {
          let minDate = new Date(Math.min(U.date(dates[0]).getTime(), U.date(dates[1]).getTime()));
          let maxDate = new Date(Math.max(U.date(dates[0]).getTime(), U.date(dates[1]).getTime()));

          this.self.setPeriod({
            range: [
              {from: minDate, to: maxDate, fromLabel: 'S', toLabel: 'E'}
            ]
          });
        }
      },
    });

    // changeMode
    let myCalendar_5 = new Calendar({
      control: {
        left: '<i class="material-icons">keyboard_arrow_left</i>',
        yearTmpl: '%s',
        monthTmpl: '%s',
        right: '<i class="material-icons">keyboard_arrow_right</i>',
        yearFirst: true
      },
      dimensions: {
        itemPadding: 1,
        height: 250
      },
      target: document.getElementById("calendar-target-5"),
      displayDate: (new Date()),
      startOfWeek: 1,
      mode: "day",
      selectMode: "day",
      onClick: function () {
        console.log(myCalendar_0.getSelection());
      },
      onStateChanged: function () {
        console.log(this);
      },
      multipleSelect: 2
    });
    myCalendar_5.changeMode("y");
  },
  moduleDestroy: function ($body) {
    $body.off("click");
  }
};

export default {
  html: html,
  fn: fn
}