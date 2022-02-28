let countriesList={
    "FR":"France",
    "IT":"Italy",
    "ES":"Spain",
    "TR":"Turkey",
    "DE":"Germany",
    "PL":"Poland",
    "GB":"United Kingdom",
    "RU":"Russia",
    "CZ":"Czech Republic",
    "PT":"Portugal",
    "NL":"Netherlands",
    "BE":"Belgium",
    "MA":"Morocco",
    "PH":"Philippines",
    "US":"United States",
    "RO":"Romania",
    "DZ":"Algeria",
    "NG":"Nigeria",
    "CH":"Switzerland",
    "HU":"Hungary",
    "TH":"Thailand",
    "SE":"Sweden",
    "ID":"Indonesia",
    "IN":"India",
    "UA":"Ukraine",
    "MY":"Malaysia",
    "TN":"Tunisia",
    "SA":"Saudi Arabia",
    "GR":"Greece",
    "CI":"Ivory Coast",
    "AT":"Austria",
    "ZA":"South Africa",
    "KR":"South Korea",
    "CN":"China",
    "RS":"Serbia",
    "JP":"Japan",
    "EG":"Egypt",
    "SK":"Slovakia",
    "SN":"Senegal",
    "DK":"Denmark",
    "FI":"Finland",
    "CM":"Cameroon",
    "IR":"Iran",
    "AR":"Argentina",
    "CA":"Canada",
    "SG":"Singapore",
    "PK":"Pakistan",
    "GH":"Ghana",
    "LB":"Lebanon",
    "IE":"Ireland",
    "AO":"Angola",
    "NO":"Norway",
    "BY":"Belarus",
    "BR":"Brazil",
    "MX":"Mexico",
    "CO":"Colombia",
    "KE":"Kenya",
    "CL":"Chile",
    "KW":"Kuwait",
    "AL":"Albania",
    "VE":"Venezuela",
    "RE":"Reunion",
    "BA":"Bosnia and Herzegovina",
    "IL":"Israel",
    "TW":"Taiwan",
    "SI":"Slovenia",
    "KZ":"Kazakhstan",
    "PE":"Peru",
    "AZ":"Azerbaijan",
    "AE":"United Arab Emirates",
    "CY":"Cyprus",
    "LT":"Lithuania",
    "DO":"Dominican Republic",
    "JO":"Jordan",
    "MD":"Moldova",
    "BJ":"Benin",
    "BG":"Bulgaria",
    "CD":"Democratic Republic of the Congo",
    "HR":"Croatia",
    "LV":"Latvia",
    "HK":"Hong Kong",
    "MZ":"Mozambique",
    "AU":"Australia",
    "LU":"Luxembourg",
    "UG":"Uganda",
    "ML":"Mali",
    "BF":"Burkina Faso",
    "MU":"Mauritius",
    "OM":"Oman",
    "TG":"Togo",
    "QA":"Qatar",
    "MK":"Macedonia",
    "MG":"Madagascar",
    "VN":"Vietnam",
    "GA":"Gabon",
    "EE":"Estonia",
    "IQ":"Iraq",
    "MT":"Malta",
    "BH":"Bahrain",
    "TZ":"Tanzania",
    "EC":"Ecuador",
    "GE":"Georgia",
    "AM":"Armenia",
    "SD":"Sudan",
    "ET":"Ethiopia",
    "MM":"Myanmar",
    "ME":"Montenegro",
    "SY":"Syria",
    "UZ":"Uzbekistan",
    "ZW":"Zimbabwe",
    "DJ":"Djibouti",
    "LK":"Sri Lanka",
    "BD":"Bangladesh",
    "SH":"Saint Helena",
    "BW":"Botswana",
    "CV":"Cape Verde",
    "BO":"Bolivia",
    "YE":"Yemen",
    "RW":"Rwanda",
    "IS":"Iceland",
    "LY":"Libya",
    "NE":"Niger",
    "AD":"Andorra",
    "GM":"Gambia",
    "CG":"Republic of the Congo",
    "ZM":"Zambia",
    "AF":"Afghanistan",
    "NA":"Namibia",
    "MR":"Mauritania",
    "UY":"Uruguay",
    "CR":"Costa Rica",
    "KG":"Kyrgyzstan",
    "PA":"Panama",
    "NP":"Nepal",
    "GN":"Guinea",
    "GP":"Guadeloupe",
    "GQ":"Equatorial Guinea",
    "MQ":"Martinique",
    "SC":"Seychelles",
    "CU":"Cuba",
    "NZ":"New Zealand",
    "GT":"Guatemala",
    "MC":"Monaco",
    "MV":"Maldives",
    "MW":"Malawi",
    "SV":"El Salvador",
    "GF":"French Guiana",
    "SL":"Sierra Leone",
    "LR":"Liberia",
    "NI":"Nicaragua",
    "KH":"Cambodia",
    "TJ":"Tajikistan",
    "PR":"Puerto Rico",
    "BI":"Burundi",
    "PY":"Paraguay",
    "KM":"Comoros",
    "LS":"Lesotho",
    "SO":"Somalia",
    "HN":"Honduras",
    "TD":"Chad",
    "GI":"Gibraltar",
    "BN":"Brunei",
    "SM":"San Marino",
    "JE":"Jersey",
    "SZ":"Swaziland",
    "TM":"Turkmenistan",
    "NC":"New Caledonia",
    "MN":"Mongolia",
    "LI":"Liechtenstein",
    "GL":"Greenland",
    "BT":"Bhutan",
    "PF":"French Polynesia",
    "ST":"Sao Tome and Principe",
    "YT":"Mayotte",
    "FO":"Faroe Islands",
    "JM":"Jamaica",
    "HT":"Haiti",
    "BS":"Bahamas",
    "GW":"Guinea-Bissau",
    "FJ":"Fiji",
    "GG":"Guernsey",
    "LA":"Laos",
    "TL":"East Timor",
    "TT":"Trinidad and Tobago",
    "AG":"Antigua and Barbuda",
    "EH":"Western Sahara",
    "CF":"Central African Republic",
    "PW":"Palau",
    "IM":"Isle of Man",
    "AW":"Aruba",
    "BZ":"Belize",
    "AS":"American Samoa",
    "AI":"Anguilla",
    "MP":"Northern Mariana Islands",
    "BM":"Bermuda",
    "ER":"Eritrea",
    "SR":"Suriname",
    "VG":"British Virgin Islands",
    "VI":"U.S. Virgin Islands",
    "GY":"Guyana",
    "BB":"Barbados",
    "MH":"Marshall Islands",
    "MO":"Macao",
    "PG":"Papua New Guinea",
    "KY":"Cayman Islands",
    "KI":"Kiribati",
    "AN":"Netherlands Antilles",
    "CK":"Cook Islands",
    "GU":"Guam",
    "WF":"Wallis and Futuna",
    "PS":"Palestine",
    "TC":"Turks and Caicos Islands",
    "VU":"Vanuatu",
    "LC":"Saint Lucia",
    "TO":"Tonga",
    "CC":"Cocos Islands",
    "WS":"Samoa",
    "GD":"Grenada",
    "VA":"Vatican",
    "IO":"British Indian Ocean Territory",
    "FM":"Micronesia",
    "NU":"Niue",
    "BL":"Saint Barthelemy",
    "KN":"Saint Kitts and Nevis",
    "PM":"Saint Pierre and Miquelon",
    "FK":"Falkland Islands",
    "AQ":"Antarctica",
    "PN":"Pitcairn",
    "MF":"Saint Martin",
    "TV":"Tuvalu",
    "VC":"Saint Vincent and the Grenadines",
    "DM":"Dominica",
    "SB":"Solomon Islands",
    "TK":"Tokelau",
    "NF":"Norfolk Island",
    "CX":"Christmas Island",
    "NR":"Nauru",
    "SJ":"Svalbard and Jan Mayen",
    "MS":"Montserrat",
    "KP":"North Korea",
    "GS":"South Georgia And Sandwich Isl.",
    "BV":"Bouvet Island"
}
console.log("hello world")
// selecting elements 
let body=document.querySelector("body")

body.innerHTML=`<nav class="navbar navbar-dark bg-dark">
<div class="container-fluid">
  <a class="navbar-brand">Name Nationality Finder</a>
  <form class="d-flex">
    <input class="form-control me-2" id="searchField" type="search" placeholder="Enter your name" aria-label="Search">
    <button class="btn btn-outline-success" id="searchbtn">Search</button>
  </form>
</div>
</nav>
<div class="container-sm container">
<table class="table" id="resultTable">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Country</th>
        <th scope="col">Probability</th>
      </tr>
    </thead>
    <tbody>
      <!-- <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        
      </tr> -->
    
    </tbody>
  </table>
</div>`

let searchBtn=document.querySelector("#searchbtn")
let searchField=document.querySelector("#searchField")
let table=document.querySelector("#resultTable")
// console.log(table.body.rows.count())
console.log(table.tBodies[0].rows.length)
reg=/^[a-zA-Z]+$/;

searchBtn.addEventListener('click',(o)=>{
    o.preventDefault()
    getNameData(searchField.value)})


async function getNameData(value){
    let tbody=(document.querySelector('tbody'))
if(value.length>0 && reg.test(value)){
console.log(reg.test(value))
await fetch(`https://api.nationalize.io/?name=${value}`)
.then((response)=>response.json())
.then((data)=>{
    
    tbody.innerHTML=""
 
    // let row=table.insertRow(-1)
    // let cell1=row.insertCell(0)
    // let cell2=row.insertCell(1)
    // let cell3=row.insertCell(2)
    if(data.country.length>=1){
        for(let i=0;i<data.country.length;i++){
            tbody.innerHTML+=`<td>${i+1}</td><td>${countriesList[data.country[i].country_id]}</td><td>${data.country[i].probability}</td>`
        }
    }else{
        tbody.innerHTML="<td colspan=3 style=color:'red'> Couldn't Find the Nationality of the given Name</td>"
    }
    // cell1.innerText=1
    // cell2.innerText=data.country[1].country_id
    // cell3.innerText=data.country[2].probability
    
}

)
.catch((error)=>{
    tbody.innerHTML="<td colspan=3 >Couldn't Find the Nationality of the given Name</td>"


})
}
else{
searchField.value=""
searchField.placeholder="Please enter a valid name"
}
}



console.log(countriesList)






