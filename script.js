function convertToCelsius() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
  
    if (celsiusInput.value === '') {
      alert('Please enter a temperature in Celsius.');
      return;
    }
  
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
  
    fahrenheitInput.value = fahrenheit.toFixed(2);
  }
  
  function convertToFahrenheit() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
  
    if (fahrenheitInput.value === '') {
      alert('Please enter a temperature in Fahrenheit.');
      return;
    }
  
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32) * 5/9;
  
    celsiusInput.value = celsius.toFixed(2);
  }
  