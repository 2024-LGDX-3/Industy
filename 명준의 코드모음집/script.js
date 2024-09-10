function openPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
  }

  function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
  }

  function updateLightColor() {
    const red = document.getElementById('redSlider').value;
    const green = document.getElementById('greenSlider').value;
    const blue = document.getElementById('blueSlider').value;

    document.getElementById('redValue').textContent = red;
    document.getElementById('greenValue').textContent = green; 
    document.getElementById('blueValue').textContent = blue;
    
    document.getElementById('colorPreview').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }

  function flushToilet() {
      alert('변기 물을 내립니다.');
}

// 욕조 온도 슬라이더 핸들러
const bathTempSlider = document.getElementById('bath_temp_slider');
const bathTempDisplay = document.getElementById('bathTemperatureValue');
bathTempSlider.addEventListener('input', function() {
bathTempDisplay.textContent = this.value;
});

// 욕조 수압 슬라이더 핸들러
const bathPressureSlider = document.getElementById('bath_pressure_slider'); 
const bathPressureDisplay = document.getElementById('bathPressureValue');
bathPressureSlider.addEventListener('input', function() {
bathPressureDisplay.textContent = this.value;
});

// 샤워 온도 슬라이더 핸들러
const showerTempSlider = document.getElementById('shower_temp_slider');
const showerTempDisplay = document.getElementById('showerTemperatureValue');
showerTempSlider.addEventListener('input', function() {
showerTempDisplay.textContent = this.value;
});

// 샤워 수압 슬라이더 핸들러
const showerPressureSlider = document.getElementById('shower_pressure_slider');
const showerPressureDisplay = document.getElementById('showerPressureValue');  
showerPressureSlider.addEventListener('input', function() {
showerPressureDisplay.textContent = this.value;
});

// 환풍구 스위치 핸들러
const ventilationSwitch = document.getElementById('ventilation_switch');
const ventilationDisplay = document.getElementById('ventilationStatus');
ventilationSwitch.addEventListener('change', function() {
ventilationDisplay.textContent = this.checked ? '열림' : '차단';
});

// 목표 온도 슬라이더 핸들러 
const targetTempSlider = document.getElementById('target_temp_slider');
const targetTempDisplay = document.getElementById('targetTemperatureValue');
targetTempSlider.addEventListener('input', function() {
targetTempDisplay.textContent = this.value;
});

// 목표 습도 슬라이더 핸들러
const targetHumiditySlider = document.getElementById('target_humidity_slider');
const targetHumidityDisplay = document.getElementById('targetHumidityValue');
targetHumiditySlider.addEventListener('input', function() { 
targetHumidityDisplay.textContent = this.value;
});

// 물 절약 모드 스위치 핸들러
const waterSavingSwitch = document.getElementById('water_saving_switch');
const waterSavingDisplay = document.getElementById('waterSavingStatus');
waterSavingSwitch.addEventListener('change', function() {
waterSavingDisplay.textContent = this.checked ? '켜짐' : '꺼짐';
});

// 비데 온도 슬라이더 핸들러
const bidetTempSlider = document.getElementById('bidet_temp_slider');
const bidetTempDisplay = document.getElementById('bidetTempValue');
bidetTempSlider.addEventListener('input', function() {
bidetTempDisplay.textContent = this.value;
});

// 비데 수압 슬라이더 핸들러
const bidetPressureSlider = document.getElementById('bidet_pressure_slider');
const bidetPressureDisplay = document.getElementById('bidetPressureValue');
bidetPressureSlider.addEventListener('input', function() {
bidetPressureDisplay.textContent = this.value;  
});

// 자동 소독 스위치 핸들러
const disinfectSwitch = document.getElementById('disinfect_switch'); 
const disinfectDisplay = document.getElementById('autoDisinfectStatus');
disinfectSwitch.addEventListener('change', function() {
disinfectDisplay.textContent = this.checked ? '켜짐' : '꺼짐';  
});

// 조명 제어 슬라이더 핸들러
const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');

redSlider.addEventListener('input', updateLightColor);
greenSlider.addEventListener('input', updateLightColor);
blueSlider.addEventListener('input', updateLightColor);

function openIframe(url) {
document.getElementById('iframeContainer').style.display = 'block';
document.querySelector('#iframeContainer iframe').src = url;
}

function closeIframe() {
document.getElementById('iframeContainer').style.display = 'none';
document.querySelector('#iframeContainer iframe').src = '';
}