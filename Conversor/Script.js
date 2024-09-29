document.getElementById('currency-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = document.getElementById('amount').value;
  
    if (amount === '' || amount <= 0) {
      alert('Por favor, ingresa una cantidad válida.');
      return;
    }

    const exchangeRates = {
      USD: { EUR: 0.85, JPY: 110.53, MXN: 20.10, COP: 4000, BRL: 5.30, CLP: 800 },
      EUR: { USD: 1.18, JPY: 130.21, MXN: 23.60, COP: 4700, BRL: 6.20, CLP: 920 },
      JPY: { USD: 0.0090, EUR: 0.0077, MXN: 0.18, COP: 36, BRL: 0.048, CLP: 7.08 },
      MXN: { USD: 0.05, EUR: 0.042, JPY: 5.65, COP: 200, BRL: 0.26, CLP: 40 },
      COP: { USD: 0.00025, EUR: 0.00021, JPY: 0.028, MXN: 0.005, BRL: 0.0013, CLP: 0.2 },
      BRL: { USD: 0.19, EUR: 0.16, JPY: 21.13, MXN: 3.84, COP: 760, CLP: 146 },
      CLP: { USD: 0.0013, EUR: 0.0011, JPY: 0.14, MXN: 0.025, COP: 5, BRL: 0.0068 }
    };
  
    let result;
    
    if (fromCurrency === toCurrency) {
      result = amount;
    } else {
      const rate = exchangeRates[fromCurrency][toCurrency];
      result = amount * rate;
    }
  

    document.getElementById('result').innerText = 
      `${amount} ${fromCurrency} equivale a ${result.toFixed(2)} ${toCurrency}`;
  });
  