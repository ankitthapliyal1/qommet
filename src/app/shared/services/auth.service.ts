import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { environment } from "../../../environments/environment";

const BACKEND_URL = environment.apiUrl + "/auth";


@Injectable({ providedIn: "root" })
export class AuthService {
  cart: any;
  currentCurrency;
  currency = [];
  //, { factor: 0.012, symbol: '$', iso: 'USD' }, { factor: 0.045, symbol: 'AED', iso: 'AED' }
  currencyhotel = [{ factor: 1, symbol: '₹', iso: 'INR' }, { factor: 0.012, symbol: '$', iso: 'USD' }, { factor: 0.045, symbol: 'AED', iso: 'AED' }];
//, { factor: 0.27, symbol: '$', iso: 'USD' }, { factor: 1, symbol: 'AED', iso: 'AED' }
  currencyactivty = [{ factor: 22.17, symbol: '₹', iso: 'INR' }, { factor: 0.27, symbol: '$', iso: 'USD' }, { factor: 1, symbol: 'AED', iso: 'AED' }];
  phoneCode=   [
    {
        "Id": "25773",
        "CountryName": "AFGHANISTAN",
        "ISDCode": "+93"
    },
    {
        "Id": "13065",
        "CountryName": "Albania",
        "ISDCode": "+355"
    },
    {
        "Id": "13105",
        "CountryName": "Algeria",
        "ISDCode": "+213"
    },
    {
        "Id": "25781",
        "CountryName": "AMERICAN SAMOA",
        "ISDCode": "+1684"
    },
    {
        "Id": "43055",
        "CountryName": "Andorra",
        "ISDCode": "+376"
    },
    {
        "Id": "25945",
        "CountryName": "ANGOLA",
        "ISDCode": "+244"
    },
    {
        "Id": "25897",
        "CountryName": "ANGUILLA",
        "ISDCode": "+1264"
    },
    {
        "Id": "25853",
        "CountryName": "ANTIGUA",
        "ISDCode": "+1268"
    },
    {
        "Id": "13064",
        "CountryName": "Antigua and Barbuda",
        "ISDCode": "+1268"
    },
    {
        "Id": "13068",
        "CountryName": "Argentina",
        "ISDCode": "+54"
    },
    {
        "Id": "13066",
        "CountryName": "Armenia",
        "ISDCode": "+374"
    },
    {
        "Id": "13071",
        "CountryName": "Aruba",
        "ISDCode": "+297"
    },
    {
        "Id": "13070",
        "CountryName": "Australia",
        "ISDCode": "+61"
    },
    {
        "Id": "13069",
        "CountryName": "Austria",
        "ISDCode": "+43"
    },
    {
        "Id": "13072",
        "CountryName": "Azerbaijan",
        "ISDCode": "+994"
    },
    {
        "Id": "13084",
        "CountryName": "Bahamas",
        "ISDCode": "+1242"
    },
    {
        "Id": "13078",
        "CountryName": "Bahrain",
        "ISDCode": "+973"
    },
    {
        "Id": "13075",
        "CountryName": "Bangladesh",
        "ISDCode": "+880"
    },
    {
        "Id": "13074",
        "CountryName": "Barbados",
        "ISDCode": "+1-246"
    },
    {
        "Id": "13086",
        "CountryName": "Belarus",
        "ISDCode": "+375"
    },
    {
        "Id": "13076",
        "CountryName": "Belgium",
        "ISDCode": "+32"
    },
    {
        "Id": "13087",
        "CountryName": "Belize",
        "ISDCode": "+501"
    },
    {
        "Id": "13079",
        "CountryName": "Benin",
        "ISDCode": "+229"
    },
    {
        "Id": "13080",
        "CountryName": "Bermuda",
        "ISDCode": "+1441"
    },
    {
        "Id": "25774",
        "CountryName": "BHUTAN",
        "ISDCode": "+975"
    },
    {
        "Id": "13082",
        "CountryName": "Bolivia",
        "ISDCode": "+591"
    },
    {
        "Id": "25806",
        "CountryName": "BOSNIA",
        "ISDCode": "+387"
    },
    {
        "Id": "13073",
        "CountryName": "Bosnia Herzegovina",
        "ISDCode": "+387"
    },
    {
        "Id": "13085",
        "CountryName": "Botswana",
        "ISDCode": "+267"
    },
    {
        "Id": "13083",
        "CountryName": "Brazil",
        "ISDCode": "+55"
    },
    {
        "Id": "25926",
        "CountryName": "BRITISH INDIANOCEAN TERRITORY",
        "ISDCode": "+246"
    },
    {
        "Id": "15502",
        "CountryName": "British VirginIslands",
        "ISDCode": "+1284"
    },
    {
        "Id": "25911",
        "CountryName": "BRUNEI",
        "ISDCode": "+673"
    },
    {
        "Id": "13081",
        "CountryName": "Brunei",
        "ISDCode": "+673"
    },
    {
        "Id": "13077",
        "CountryName": "Bulgaria",
        "ISDCode": "+359"
    },
    {
        "Id": "25948",
        "CountryName": "BURKINA FASO",
        "ISDCode": "+226"
    },
    {
        "Id": "25949",
        "CountryName": "BURUNDI",
        "ISDCode": "+257"
    },
    {
        "Id": "15409",
        "CountryName": "Cambodia",
        "ISDCode": "+855"
    },
    {
        "Id": "13095",
        "CountryName": "Cameroon",
        "ISDCode": "+237"
    },
    {
        "Id": "13088",
        "CountryName": "Canada",
        "ISDCode": "+1"
    },
    {
        "Id": "25950",
        "CountryName": "CAPE VERDE",
        "ISDCode": "+238"
    },
    {
        "Id": "15414",
        "CountryName": "Cayman Islands",
        "ISDCode": "+1345"
    },
    {
        "Id": "25952",
        "CountryName": "CENTRAL AFRICANREPUBLIC",
        "ISDCode": "+236"
    },
    {
        "Id": "25953",
        "CountryName": "CHAD",
        "ISDCode": "+235"
    },
    {
        "Id": "13094",
        "CountryName": "Chile",
        "ISDCode": "+56"
    },
    {
        "Id": "13096",
        "CountryName": "China",
        "ISDCode": "+86"
    },
    {
        "Id": "25799",
        "CountryName": "CHRISTMAS ISLAND",
        "ISDCode": "+61"
    },
    {
        "Id": "25800",
        "CountryName": "COCOS (KEELING)ISLANDS",
        "ISDCode": "+891"
    },
    {
        "Id": "13097",
        "CountryName": "Colombia",
        "ISDCode": "+57"
    },
    {
        "Id": "25956",
        "CountryName": "COMOROS",
        "ISDCode": "+269"
    },
    {
        "Id": "13089",
        "CountryName": "Congo (Democratic Republic)",
        "ISDCode": "+243"
    },
    {
        "Id": "13090",
        "CountryName": "Congo (Republic of)",
        "ISDCode": "+242"
    },
    {
        "Id": "25955",
        "CountryName": "CONGO.REPUBLIC OF",
        "ISDCode": "+242"
    },
    {
        "Id": "13093",
        "CountryName": "Cook Islands",
        "ISDCode": "+682"
    },
    {
        "Id": "13098",
        "CountryName": "Costa Rica",
        "ISDCode": "+506"
    },
    {
        "Id": "25957",
        "CountryName": "COTED`IVOIRE(IVORY COAST)",
        "ISDCode": "+225"
    },
    {
        "Id": "15393",
        "CountryName": "Croatia",
        "ISDCode": "+385"
    },
    {
        "Id": "13099",
        "CountryName": "Cuba",
        "ISDCode": "+53"
    },
    {
        "Id": "13100",
        "CountryName": "Cyprus",
        "ISDCode": "+357"
    },
    {
        "Id": "25809",
        "CountryName": "CYPRUS",
        "ISDCode": "+357"
    },
    {
        "Id": "13101",
        "CountryName": "Czech Republic",
        "ISDCode": "+420"
    },
    {
        "Id": "25954",
        "CountryName": "DEMOCRATIC REPUBLICOF CONGO",
        "ISDCode": "+243"
    },
    {
        "Id": "13103",
        "CountryName": "Denmark",
        "ISDCode": "+45"
    },
    {
        "Id": "25958",
        "CountryName": "DJIBOUTI",
        "ISDCode": "+253"
    },
    {
        "Id": "25888",
        "CountryName": "DOMINICA",
        "ISDCode": "+1767"
    },
    {
        "Id": "13104",
        "CountryName": "Dominican Republic",
        "ISDCode": "+1809"
    },
    {
        "Id": "13106",
        "CountryName": "Ecuador",
        "ISDCode": "+593"
    },
    {
        "Id": "13108",
        "CountryName": "Egypt",
        "ISDCode": "+20"
    },
    {
        "Id": "15481",
        "CountryName": "El Salvador",
        "ISDCode": "+503"
    },
    {
        "Id": "25960",
        "CountryName": "EQUATORIAL GUINEA",
        "ISDCode": "+240"
    },
    {
        "Id": "25959",
        "CountryName": "ERITREA",
        "ISDCode": "+291"
    },
    {
        "Id": "13107",
        "CountryName": "Estonia",
        "ISDCode": "+372"
    },
    {
        "Id": "15373",
        "CountryName": "Ethiopia",
        "ISDCode": "+251"
    },
    {
        "Id": "25896",
        "CountryName": "FALKLANDISLANDS(MALVINAS)",
        "ISDCode": "+500"
    },
    {
        "Id": "25843",
        "CountryName": "FAROE ISLANDS",
        "ISDCode": "+298"
    },
    {
        "Id": "15375",
        "CountryName": "Fiji",
        "ISDCode": "+679"
    },
    {
        "Id": "15374",
        "CountryName": "Finland",
        "ISDCode": "+358"
    },
    {
        "Id": "15377",
        "CountryName": "France",
        "ISDCode": "+33"
    },
    {
        "Id": "25880",
        "CountryName": "FRENCH GUIANA",
        "ISDCode": "+594"
    },
    {
        "Id": "15456",
        "CountryName": "French Polynesia",
        "ISDCode": "+689"
    },
    {
        "Id": "25927",
        "CountryName": "FRENCH SOUTHERN TERRITORIES",
        "ISDCode": "+262"
    },
    {
        "Id": "15378",
        "CountryName": "Gabon",
        "ISDCode": "+241"
    },
    {
        "Id": "15385",
        "CountryName": "Gambia",
        "ISDCode": "+220"
    },
    {
        "Id": "15381",
        "CountryName": "Georgia",
        "ISDCode": "+995"
    },
    {
        "Id": "13102",
        "CountryName": "Germany",
        "ISDCode": "+49"
    },
    {
        "Id": "15382",
        "CountryName": "Ghana",
        "ISDCode": "+233"
    },
    {
        "Id": "15383",
        "CountryName": "Gibraltar",
        "ISDCode": "+350"
    },
    {
        "Id": "15388",
        "CountryName": "Greece",
        "ISDCode": "+30"
    },
    {
        "Id": "15384",
        "CountryName": "Greenland",
        "ISDCode": "+299"
    },
    {
        "Id": "15380",
        "CountryName": "Grenada",
        "ISDCode": "+1473"
    },
    {
        "Id": "25887",
        "CountryName": "GRENADACARRICOU",
        "ISDCode": "+1473"
    },
    {
        "Id": "15387",
        "CountryName": "Guadeloupe",
        "ISDCode": "+590"
    },
    {
        "Id": "15390",
        "CountryName": "Guam",
        "ISDCode": "+1671"
    },
    {
        "Id": "15389",
        "CountryName": "Guatemala",
        "ISDCode": "+502"
    },
    {
        "Id": "15386",
        "CountryName": "Guinea",
        "ISDCode": "+224"
    },
    {
        "Id": "25965",
        "CountryName": "GUINEA-BISSAU",
        "ISDCode": "+245"
    },
    {
        "Id": "25891",
        "CountryName": "GUYANA",
        "ISDCode": "+592"
    },
    {
        "Id": "15394",
        "CountryName": "Haiti",
        "ISDCode": "+509"
    },
    {
        "Id": "25780",
        "CountryName": "HAWAII",
        "ISDCode": "+1808"
    },
    {
        "Id": "15392",
        "CountryName": "Honduras",
        "ISDCode": "+504"
    },
    {
        "Id": "15391",
        "CountryName": "Hong Kong",
        "ISDCode": "+852"
    },
    {
        "Id": "15395",
        "CountryName": "Hungary",
        "ISDCode": "+36"
    },
    {
        "Id": "15402",
        "CountryName": "Iceland",
        "ISDCode": "+354"
    },
    {
        "Id": "15399",
        "CountryName": "India",
        "ISDCode": "+91"
    },
    {
        "Id": "15396",
        "CountryName": "Indonesia",
        "ISDCode": "+62"
    },
    {
        "Id": "15401",
        "CountryName": "Iran",
        "ISDCode": "+98"
    },
    {
        "Id": "15400",
        "CountryName": "Iraq",
        "ISDCode": "+964"
    },
    {
        "Id": "15397",
        "CountryName": "Ireland",
        "ISDCode": "+353"
    },
    {
        "Id": "15398",
        "CountryName": "Israel",
        "ISDCode": "+972"
    },
    {
        "Id": "15403",
        "CountryName": "Italy",
        "ISDCode": "+39"
    },
    {
        "Id": "13092",
        "CountryName": "Ivory Coast",
        "ISDCode": "+225"
    },
    {
        "Id": "15404",
        "CountryName": "Jamaica",
        "ISDCode": "+1876"
    },
    {
        "Id": "15406",
        "CountryName": "Japan",
        "ISDCode": "+81"
    },
    {
        "Id": "15405",
        "CountryName": "Jordan",
        "ISDCode": "+962"
    },
    {
        "Id": "15415",
        "CountryName": "Kazakhstan",
        "ISDCode": "+7"
    },
    {
        "Id": "15407",
        "CountryName": "Kenya",
        "ISDCode": "+254"
    },
    {
        "Id": "25783",
        "CountryName": "KIRIBATI",
        "ISDCode": "+686"
    },
    {
        "Id": "43134",
        "CountryName": "kosovo",
        "ISDCode": "+383"
    },
    {
        "Id": "15413",
        "CountryName": "Kuwait",
        "ISDCode": "+965"
    },
    {
        "Id": "15408",
        "CountryName": "Kyrgyzstan",
        "ISDCode": "+996"
    },
    {
        "Id": "15416",
        "CountryName": "Laos",
        "ISDCode": "+856"
    },
    {
        "Id": "15423",
        "CountryName": "Latvia",
        "ISDCode": "+371"
    },
    {
        "Id": "15417",
        "CountryName": "Lebanon",
        "ISDCode": "+961"
    },
    {
        "Id": "25934",
        "CountryName": "LESOTHO",
        "ISDCode": "+266"
    },
    {
        "Id": "25966",
        "CountryName": "LIBERIA",
        "ISDCode": "+231"
    },
    {
        "Id": "15424",
        "CountryName": "Libya",
        "ISDCode": "+218"
    },
    {
        "Id": "15419",
        "CountryName": "Liechtenstein",
        "ISDCode": "+423"
    },
    {
        "Id": "15421",
        "CountryName": "Lithuania",
        "ISDCode": "+370"
    },
    {
        "Id": "15422",
        "CountryName": "Luxembourg",
        "ISDCode": "+352"
    },
    {
        "Id": "15434",
        "CountryName": "Macau",
        "ISDCode": "+853"
    },
    {
        "Id": "15430",
        "CountryName": "Macedonia",
        "ISDCode": "+389"
    },
    {
        "Id": "25944",
        "CountryName": "MADAGASCAR",
        "ISDCode": "+261"
    },
    {
        "Id": "15440",
        "CountryName": "Malawi",
        "ISDCode": "+265"
    },
    {
        "Id": "15442",
        "CountryName": "Malaysia",
        "ISDCode": "+60"
    },
    {
        "Id": "15439",
        "CountryName": "Maldives",
        "ISDCode": "+960"
    },
    {
        "Id": "15431",
        "CountryName": "Mali",
        "ISDCode": "+223"
    },
    {
        "Id": "15437",
        "CountryName": "Malta",
        "ISDCode": "+356"
    },
    {
        "Id": "25784",
        "CountryName": "MARSHALL ISLANDS",
        "ISDCode": "+692"
    },
    {
        "Id": "15436",
        "CountryName": "Martinique",
        "ISDCode": "+596"
    },
    {
        "Id": "25969",
        "CountryName": "MAURITANIA",
        "ISDCode": "+222"
    },
    {
        "Id": "15438",
        "CountryName": "Mauritius",
        "ISDCode": "+230"
    },
    {
        "Id": "25970",
        "CountryName": "MAYOTTE",
        "ISDCode": "+262"
    },
    {
        "Id": "15441",
        "CountryName": "Mexico",
        "ISDCode": "+52"
    },
    {
        "Id": "15376",
        "CountryName": "Micronesia",
        "ISDCode": "+691"
    },
    {
        "Id": "15427",
        "CountryName": "Moldova",
        "ISDCode": "+373"
    },
    {
        "Id": "15426",
        "CountryName": "Monaco",
        "ISDCode": "+377"
    },
    {
        "Id": "15433",
        "CountryName": "Mongolia",
        "ISDCode": "+976"
    },
    {
        "Id": "15428",
        "CountryName": "Montenegro",
        "ISDCode": "+382"
    },
    {
        "Id": "25898",
        "CountryName": "MONTSERRAT",
        "ISDCode": "+1664"
    },
    {
        "Id": "15425",
        "CountryName": "Morocco",
        "ISDCode": "+212"
    },
    {
        "Id": "15443",
        "CountryName": "Mozambique",
        "ISDCode": "+258"
    },
    {
        "Id": "15432",
        "CountryName": "Myanmar",
        "ISDCode": "+95"
    },
    {
        "Id": "25769",
        "CountryName": "MYANMAR-BURMA",
        "ISDCode": "+95"
    },
    {
        "Id": "15444",
        "CountryName": "Namibia",
        "ISDCode": "+264"
    },
    {
        "Id": "25786",
        "CountryName": "NAURU",
        "ISDCode": "+674"
    },
    {
        "Id": "15451",
        "CountryName": "Nepal",
        "ISDCode": "+977"
    },
    {
        "Id": "15449",
        "CountryName": "Netherlands",
        "ISDCode": "+31"
    },
    {
        "Id": "13067",
        "CountryName": "Netherlands Antilles",
        "ISDCode": "+599"
    },
    {
        "Id": "15445",
        "CountryName": "New Caledonia",
        "ISDCode": "+687"
    },
    {
        "Id": "15452",
        "CountryName": "New Zealand",
        "ISDCode": "+64"
    },
    {
        "Id": "15448",
        "CountryName": "Nicaragua",
        "ISDCode": "+505"
    },
    {
        "Id": "25973",
        "CountryName": "NIGER",
        "ISDCode": "+227"
    },
    {
        "Id": "15447",
        "CountryName": "Nigeria",
        "ISDCode": "+234"
    },
    {
        "Id": "25788",
        "CountryName": "NIUE",
        "ISDCode": "+683"
    },
    {
        "Id": "15446",
        "CountryName": "Norfolk Island",
        "ISDCode": "+6723"
    },
    {
        "Id": "15411",
        "CountryName": "North Korea",
        "ISDCode": "+850"
    },
    {
        "Id": "15435",
        "CountryName": "Northern Mariana Islands",
        "ISDCode": "+1670"
    },
    {
        "Id": "15450",
        "CountryName": "Norway",
        "ISDCode": "+47"
    },
    {
        "Id": "15453",
        "CountryName": "Oman",
        "ISDCode": "+968"
    },
    {
        "Id": "15459",
        "CountryName": "Pakistan",
        "ISDCode": "+92"
    },
    {
        "Id": "15463",
        "CountryName": "Palau",
        "ISDCode": "+680"
    },
    {
        "Id": "25765",
        "CountryName": "PALESTINIAN TERRITORY",
        "ISDCode": "+970"
    },
    {
        "Id": "15454",
        "CountryName": "Panama",
        "ISDCode": "+507"
    },
    {
        "Id": "15457",
        "CountryName": "Papua NewGuinea",
        "ISDCode": "+675"
    },
    {
        "Id": "15464",
        "CountryName": "Paraguay",
        "ISDCode": "+595"
    },
    {
        "Id": "15455",
        "CountryName": "Peru",
        "ISDCode": "+51"
    },
    {
        "Id": "15458",
        "CountryName": "Philippines",
        "ISDCode": "+63"
    },
    {
        "Id": "25792",
        "CountryName": "PITCAIRN ISLAND",
        "ISDCode": "+64"
    },
    {
        "Id": "15460",
        "CountryName": "Poland",
        "ISDCode": "+48"
    },
    {
        "Id": "15462",
        "CountryName": "Portugal",
        "ISDCode": "+351"
    },
    {
        "Id": "15461",
        "CountryName": "Puerto Rico",
        "ISDCode": "+1787"
    },
    {
        "Id": "15465",
        "CountryName": "Qatar",
        "ISDCode": "+974"
    },
    {
        "Id": "25818",
        "CountryName": "REPUBLIC OF IRELAND",
        "ISDCode": "+353"
    },
    {
        "Id": "25925",
        "CountryName": "REPUBLIC OF PALAU",
        "ISDCode": "+680"
    },
    {
        "Id": "15466",
        "CountryName": "Reunion",
        "ISDCode": "+262"
    },
    {
        "Id": "15467",
        "CountryName": "Romania",
        "ISDCode": "+40"
    },
    {
        "Id": "15469",
        "CountryName": "Russia",
        "ISDCode": "+7"
    },
    {
        "Id": "15470",
        "CountryName": "Rwanda",
        "ISDCode": "+250"
    },
    {
        "Id": "25984",
        "CountryName": "SAINT HELENA",
        "ISDCode": "+290"
    },
    {
        "Id": "15475",
        "CountryName": "Saint Helena, Ascension and Tristan da Cunha",
        "ISDCode": "+290"
    },
    {
        "Id": "15410",
        "CountryName": "Saint Kitts and Nevis",
        "ISDCode": "+1869"
    },
    {
        "Id": "15418",
        "CountryName": "Saint Lucia",
        "ISDCode": "+1758"
    },
    {
        "Id": "15429",
        "CountryName": "SaintMartin (French part)",
        "ISDCode": "+590"
    },
    {
        "Id": "25851",
        "CountryName": "SAINT PIERREAND MIQUELON",
        "ISDCode": "+508"
    },
    {
        "Id": "15500",
        "CountryName": "Saint Vincent and theGrenadines",
        "ISDCode": "+1784"
    },
    {
        "Id": "15506",
        "CountryName": "Samoa",
        "ISDCode": "+685"
    },
    {
        "Id": "25842",
        "CountryName": "SAN MARINO",
        "ISDCode": "+378"
    },
    {
        "Id": "15478",
        "CountryName": "San Marino (Republic of)",
        "ISDCode": "+378"
    },
    {
        "Id": "25975",
        "CountryName": "SAO TOME AND PRINCIPE",
        "ISDCode": "+239"
    },
    {
        "Id": "15471",
        "CountryName": "Saudi Arabia",
        "ISDCode": "+966"
    },
    {
        "Id": "15479",
        "CountryName": "Senegal",
        "ISDCode": "+221"
    },
    {
        "Id": "15468",
        "CountryName": "Serbia",
        "ISDCode": "+381"
    },
    {
        "Id": "15472",
        "CountryName": "Seychelles",
        "ISDCode": "+248"
    },
    {
        "Id": "25977",
        "CountryName": "SIERRA LEONE",
        "ISDCode": "+232"
    },
    {
        "Id": "15474",
        "CountryName": "Singapore",
        "ISDCode": "+65"
    },
    {
        "Id": "15477",
        "CountryName": "Slovakia",
        "ISDCode": "+421"
    },
    {
        "Id": "15476",
        "CountryName": "Slovenia",
        "ISDCode": "+386"
    },
    {
        "Id": "25779",
        "CountryName": "SOLOMON ISLANDS",
        "ISDCode": "+677"
    },
    {
        "Id": "25978",
        "CountryName": "SOMALIA",
        "ISDCode": "+252"
    },
    {
        "Id": "15508",
        "CountryName": "South Africa",
        "ISDCode": "+27"
    },
    {
        "Id": "15412",
        "CountryName": "South Korea",
        "ISDCode": "+82"
    },
    {
        "Id": "13109",
        "CountryName": "Spain",
        "ISDCode": "+34"
    },
    {
        "Id": "15420",
        "CountryName": "SriLanka",
        "ISDCode": "+94"
    },
    {
        "Id": "25866",
        "CountryName": "ST LUCIA",
        "ISDCode": "+1758"
    },
    {
        "Id": "25759",
        "CountryName": "SUDAN",
        "ISDCode": "+249"
    },
    {
        "Id": "15480",
        "CountryName": "Suriname",
        "ISDCode": "+597"
    },
    {
        "Id": "25840",
        "CountryName": "SVALBARD AND JAN MAYEN",
        "ISDCode": "+47"
    },
    {
        "Id": "15483",
        "CountryName": "Swaziland",
        "ISDCode": "+268"
    },
    {
        "Id": "15473",
        "CountryName": "Sweden",
        "ISDCode": "+46"
    },
    {
        "Id": "13091",
        "CountryName": "Switzerland",
        "ISDCode": "+41"
    },
    {
        "Id": "15482",
        "CountryName": "Syria",
        "ISDCode": "+963"
    },
    {
        "Id": "15493",
        "CountryName": "Taiwan",
        "ISDCode": "+886"
    },
    {
        "Id": "15487",
        "CountryName": "Tajikistan",
        "ISDCode": "+992"
    },
    {
        "Id": "15494",
        "CountryName": "Tanzania",
        "ISDCode": "+255"
    },
    {
        "Id": "25986",
        "CountryName": "TASMANIA",
        "ISDCode": "+613"
    },
    {
        "Id": "15486",
        "CountryName": "Thailand",
        "ISDCode": "+66"
    },
    {
        "Id": "15485",
        "CountryName": "Togo",
        "ISDCode": "+228"
    },
    {
        "Id": "25794",
        "CountryName": "TOKELAU ISLANDS",
        "ISDCode": "+690"
    },
    {
        "Id": "15490",
        "CountryName": "Tonga",
        "ISDCode": "+676"
    },
    {
        "Id": "15492",
        "CountryName": "Trinidad and Tobago",
        "ISDCode": "+1868"
    },
    {
        "Id": "25886",
        "CountryName": "TRINIDAD AND TOBAGO",
        "ISDCode": "+1868"
    },
    {
        "Id": "15489",
        "CountryName": "Tunisia",
        "ISDCode": "+216"
    },
    {
        "Id": "15491",
        "CountryName": "Turkey",
        "ISDCode": "+90"
    },
    {
        "Id": "15488",
        "CountryName": "Turkmenistan",
        "ISDCode": "+993"
    },
    {
        "Id": "25867",
        "CountryName": "TURKS / CAICOS",
        "ISDCode": "+1649"
    },
    {
        "Id": "15484",
        "CountryName": "Turks and Caicos Islands",
        "ISDCode": "+1649"
    },
    {
        "Id": "25796",
        "CountryName": "TUVALU",
        "ISDCode": "+688"
    },
    {
        "Id": "25849",
        "CountryName": "U S A",
        "ISDCode": "+1"
    },
    {
        "Id": "25878",
        "CountryName": "U.S. VIRGIN ISLANDS",
        "ISDCode": "+1340"
    },
    {
        "Id": "15496",
        "CountryName": "Uganda",
        "ISDCode": "+256"
    },
    {
        "Id": "15495",
        "CountryName": "Ukraine",
        "ISDCode": "+380"
    },
    {
        "Id": "13063",
        "CountryName": "United Arab Emirates",
        "ISDCode": "+971"
    },
    {
        "Id": "15379",
        "CountryName": "United Kingdom",
        "ISDCode": "+44"
    },
    {
        "Id": "15497",
        "CountryName": "United States",
        "ISDCode": "+1"
    },
    {
        "Id": "15498",
        "CountryName": "Uruguay",
        "ISDCode": "+598"
    },
    {
        "Id": "15499",
        "CountryName": "Uzbekistan",
        "ISDCode": "+998"
    },
    {
        "Id": "15505",
        "CountryName": "Vanuatu",
        "ISDCode": "+678"
    },
    {
        "Id": "25841",
        "CountryName": "VATICAN CITY STATE (HOLY SEE)",
        "ISDCode": "+379"
    },
    {
        "Id": "15501",
        "CountryName": "Venezuela",
        "ISDCode": "+58"
    },
    {
        "Id": "15504",
        "CountryName": "Vietnam",
        "ISDCode": "+84"
    },
    {
        "Id": "25894",
        "CountryName": "VIRGIN ISLANDS (BRITISH)",
        "ISDCode": "+1340"
    },
    {
        "Id": "15503",
        "CountryName": "VirginIslands (USA)",
        "ISDCode": "+1340"
    },
    {
        "Id": "25798",
        "CountryName": "WALLIS AND FUTUNAISLANDS",
        "ISDCode": "+681"
    },
    {
        "Id": "25988",
        "CountryName": "WEST BANK",
        "ISDCode": "+970"
    },
    {
        "Id": "25982",
        "CountryName": "WESTERN SAHARA",
        "ISDCode": "+212"
    },
    {
        "Id": "25762",
        "CountryName": "YEMEN",
        "ISDCode": "+967"
    },
    {
        "Id": "15507",
        "CountryName": "Yemen Republic",
        "ISDCode": "+967"
    },
    {
        "Id": "15509",
        "CountryName": "Zambia",
        "ISDCode": "+260"
    },
    {
        "Id": "15510",
        "CountryName": "Zimbabwe",
        "ISDCode": "+263"
    }
];
  lastSearchUrl = "/tours-sightseeing/dubai-city";
  cartCount = 0;
  private isAuthenticated = false;
  isLoading = false;
  private token: any;
  private tokenTimer: any;
  private userId: any;
  private authStatusListener = new Subject<boolean>();
  private role: any;
  name: any;
  imageId: any;
  serviceId: any;
  siteData: any;
  siteUrl = environment.apiUrl + '/settings/filter/SITE';


  constructor(private http: HttpClient, private router: Router) {
    this.autoAuthUser();
    this.currentCurrency = this.getCurrentCurrency();
 
  }

  getCurrentCurrency() {
    let ds = localStorage.getItem("currency");

    if (!ds) {
      return this.currency[0];
    }
    let d = JSON.parse(ds);

    const index = this.currency.findIndex(object => {
      return object.iso === d.iso;
    });
    return this.currency[index];
  }
  setCurrency() {
    localStorage.setItem('currency', JSON.stringify(this.currentCurrency));
  }
  redirectTo(url = '/') {
    window.location.href = url;
  }
  getSiteData() {
    return this.http.get(this.siteUrl);
  }
  getPageData(page) {
    return this.http.get<any>(environment.apiUrl + '/settings/filter/page/' + page);
  }
  setSiteData(data: any) {
    data.exchange['INR']['AED'] ;


    this.currencyhotel = this.currencyhotel.map(r=>{
      if(r.iso !='INR'){
        r.factor=data.exchange['INR'][r.iso];
      }
      return r;
    });

    this.currencyactivty = this.currencyactivty.map(r=>{
      if(r.iso !='AED'){
        r.factor=data.exchange['AED'][r.iso];
      }
      return r;
    });


    return this.siteData = data;
  }
  getProfile() {
    return this.http.get<any>(environment.apiUrl + `/users/profile`);
  }
  getBookingList() {
    return this.http.get<any>(environment.apiUrl + `/users/bookings`);
  }
  chagePassword(data) {
    return this.http.post<any>(environment.apiUrl + `/users/change-password`, data);
  }
  forgotPassword(data) {
    return this.http.post<any>(environment.apiUrl + `/auth/forgot-password`, data);
  }
  resetPassword(data) {
    return this.http.post<any>(environment.apiUrl + '/auth/resetPassword/'+data['token'], data);
  }
  activateUser(data) {
    return this.http.post<any>(environment.apiUrl + '/auth/verify-email', data);
  }
  gitCallback(data) {
    return this.http.post<any>(environment.apiUrl + '/auth/guthub-callback', data);
  }
  gitLogin(data) {
    this.redirectTo(environment.apiUrl  +'/auth/github-login');
  }

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }
  getUserId() {

    return this.userId;
  }
  getRole() {
    return this.role;
  }
  getName() {
    return this.name;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  registerUser(data: any) {

    return this.http.post(BACKEND_URL + "/register/user", data);
  }
  sendcontact(data: any) {
    return this.http
      .post<any>(
        BACKEND_URL + "/sendcontact",
        data
      );
  }

  login(data: any) {

    return this.http
      .post<{ token: string; expiresIn: number; userId: string }>(
        BACKEND_URL + "/login",
        data
      );
  }
  loginProcess(response: any) {
    const token = response.token;
    this.token = token;

    if (token) {
      const expiresInDuration = 30 * 3600;//response.expiresIn;
      //this.setAuthTimer(expiresInDuration);
      this.isAuthenticated = true;
      let tokenData: any = JSON.parse(atob(this.token.split('.')[1]));
      // console.log('tokenData', tokenData)
      if (tokenData) {
        this.role = tokenData.role;
        this.userId = tokenData.id;
        this.name = response.firstName;
        // this.selectedGroup = tokenData.selectedGroup;
        this.imageId = response.imageId;
      }

      this.authStatusListener.next(true);
      const now = new Date();
      const expirationDate = new Date(
        now.getTime() + expiresInDuration * 1000
      );
      this.saveAuthData(response, expirationDate);
    }
  }
  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      let tokenData: any = JSON.parse(atob(this.token.split('.')[1]));

      if (tokenData) {
        this.role = tokenData.role;
        this.userId = tokenData.id;
        this.name = authInformation.name;
        this.imageId = authInformation.imageId;

      }
      this.isAuthenticated = true;

      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.userId = null;
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.redirectTo('/')
  }

  private setAuthTimer(duration: number) {

    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }


  private saveAuthData(d: any, expirationDate: any) {
    d["expirationDate"] = expirationDate.toISOString()
    localStorage.setItem('response', JSON.stringify(d));


  }

  private clearAuthData() {
    localStorage.removeItem("response");
  }

  private getAuthData() {
    let ds = localStorage.getItem("response");

    if (!ds) {
      return false;
    }
    let d = JSON.parse(ds);
    if (!d.token || !d.expirationDate) {
      return false;
    }
    return {
      token: d.token,
      name: d.firstName,
      expirationDate: new Date(d.expirationDate),
      userId: d.userId,
      groupId: d.groupId,
      selectedGroup: d.selectedGroup,
      role: d.role,
      imageId: d.imageId

    };
  }

  getPrice(a) {
    if (!a) return 0;
    let p = parseFloat(a);
    p *= this.currentCurrency.factor;
    return p;
  }
  getSymbole() {
    return this.currentCurrency.symbol;
  }
  textStrip(text) {
    if (!text) return '';
    return text.replace(/rayna/gi, "Bhramanti");
  }
  blogList() {
    return this.http.get<any>(environment.apiUrl + '/blogs/getBlogList');
  }
  blogDetails(id) {
    return this.http.get<any>(environment.apiUrl + '/blogs/getBlog/'+id);
   }
   pageDetails(id) {
    return this.http.get<any>(environment.apiUrl + '/settings/filter/PAGE/'+id);
   }
   blogUrl(a) {
    let url= '/blog/'+ a.slug ;
    return  url;
   }
   blogImage(a) {
     let url= environment.imageUrl + a ;
    if(!a){
       url = '/assets/img/blog/article.png'
    } 
    
    return  url;
   }    
}
