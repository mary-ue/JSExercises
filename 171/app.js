navigator.getBattery().then(function(battery) {
  function updateAllBateryInfo() {
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischargingInfo();
  }

  updateAllBateryInfo();

  battery.addEventListener('chargingchange', function() {
    updateChargeInfo();
  })

  function updateChargeInfo() {
    // console.log(battery.charging);
    if (battery.charging) {
      document.querySelector('#status').innerHTML = 'Батарея заряжается';
      document.querySelector('#battery-level').classList.add('battery-animation');
    } else {
      document.querySelector('#status').innerHTML = 'Батарея разряжается';
      document.querySelector('#battery-level').classList.remove('battery-animation');
    }
  }

  battery.addEventListener('levelchange', updateLevelInfo);

  function updateLevelInfo() {
    // console.log(battery.level * 100);
    document.querySelector('#battery-level-digit').innerHTML = battery.level*100+'%';
    document.querySelector('#battery-level').style.width = battery.level*100+'%';
  }

  battery.addEventListener('chargingtimechange', updateChargingInfo);

  function updateChargingInfo() {
    // console.log(battery.chargingTime);
    if (battery.chargingTime !== Infinity) {
      document.querySelector('#charging-time').innerHTML = battery.chargingTime + ' секунд до полной зарядки';
    }
  }

  battery.addEventListener('dischargingtimechange', updateDischargingInfo);

  function updateDischargingInfo() {
    // console.log(battery.dischargingTime);
    if (battery.dischargingTime !== Infinity) {
      document.querySelector('#charging-time').innerHTML = battery.dischargingTime + ' секунд до разрядки';
    }
  }
})