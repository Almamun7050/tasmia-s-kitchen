const loadCountries = () =>{
    fetch ('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>displayCountries(data))
}

const displayCountries = countries =>{
    // for(const country of countries){
    //     console.log(country);
    // }

    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country =>{
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        console.log(country);
        countryDiv.innerHTML= `
           <h3>Name: ${country.name.common}</h3>
           <p>capital: ${country.capital ? country.capital[0]: 'no capital'}</p>
            <Button onclick="loadCountryDetails(${country.cca2})">Details</Button>
        `;
        countriesContainer.appendChild(countryDiv)   
  
    })
}

const loadCountryDetails = (code)=>{
    console.log('loading countries dertails',code)
}

loadCountries();