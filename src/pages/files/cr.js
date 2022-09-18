import React from 'react'
import Crb from './crb.js'
import './filescss.css'
import ReactDOM from 'react-dom'
export default function FH() {
    const [cur1, setCur] = React.useState({ to: "", from: "", amt: 0 })
    function hC(event) {
        setCur(item => {
            return {
                ...item,
                [event.target.name]: event.target.value
            }
        })
    }
    function show() {
        ReactDOM.render(<Crb cur={cur1} />, document.getElementById('datArea'))
    }
    

    return (
        <div className="temp2">
            <div className="optioms">
                <label htmlFor="tocur" className="labell">To</label>
                <select id="tocur" className="ip" name="to" value={cur1.to} onChange={hC}>
                    <option>Select</option>
                    <option value="AFN">AFN - Afghan Afghani</option>
                    <option value="ALL">ALL - Albanian Lek</option>
                    <option value="DZD">DZD - Algerian Dinar</option>
                    <option value="AOA">AOA - Angolan Kwanza</option>
                    <option value="ARS">ARS - Argentine Peso</option>
                    <option value="AMD">AMD - Armenian Dram</option>
                    <option value="AWG">AWG - Aruban Florin</option>
                    <option value="AUD">AUD - Australian Dollar</option>
                    <option value="AZN">AZN - Azerbaijani Manat</option>
                    <option value="BSD">BSD - Bahamian Dollar</option>
                    <option value="BHD">BHD - Bahraini Dinar</option>
                    <option value="BDT">BDT - Bangladeshi Taka</option>
                    <option value="BBD">BBD - Barbadian Dollar</option>
                    <option value="BYR">BYR - Belarusian Ruble</option>
                    <option value="BEF">BEF - Belgian Franc</option>
                    <option value="BZD">BZD - Belize Dollar</option>
                    <option value="BMD">BMD - Bermudan Dollar</option>
                    <option value="BTN">BTN - Bhutanese Ngultrum</option>
                    <option value="BTC">BTC - Bitcoin</option>
                    <option value="BOB">BOB - Bolivian Boliviano</option>
                    <option value="BAM">BAM - Bosnia-Herzegovina Convertible Mark</option>
                    <option value="BWP">BWP - Botswanan Pula</option>
                    <option value="BRL">BRL - Brazilian Real</option>
                    <option value="GBP">GBP - British Pound Sterling</option>
                    <option value="BND">BND - Brunei Dollar</option>
                    <option value="BGN">BGN - Bulgarian Lev</option>
                    <option value="BIF">BIF - Burundian Franc</option>
                    <option value="KHR">KHR - Cambodian Riel</option>
                    <option value="CAD">CAD - Canadian Dollar</option>
                    <option value="CVE">CVE - Cape Verdean Escudo</option>
                    <option value="KYD">KYD - Cayman Islands Dollar</option>
                    <option value="XOF">XOF - CFA Franc BCEAO</option>
                    <option value="XAF">XAF - CFA Franc BEAC</option>
                    <option value="XPF">XPF - CFP Franc</option>
                    <option value="CLP">CLP - Chilean Peso</option>
                    <option value="CNY">CNY - Chinese Yuan</option>
                    <option value="COP">COP - Colombian Peso</option>
                    <option value="KMF">KMF - Comorian Franc</option>
                    <option value="CDF">CDF - Congolese Franc</option>
                    <option value="CRC">CRC - Costa Rican Colón</option>
                    <option value="HRK">HRK - Croatian Kuna</option>
                    <option value="CUC">CUC - Cuban Convertible Peso</option>
                    <option value="CZK">CZK - Czech Republic Koruna</option>
                    <option value="DKK">DKK - Danish Krone</option>
                    <option value="DJF">DJF - Djiboutian Franc</option>
                    <option value="DOP">DOP - Dominican Peso</option>
                    <option value="XCD">XCD - East Caribbean Dollar</option>
                    <option value="EGP">EGP - Egyptian Pound</option>
                    <option value="ERN">ERN - Eritrean Nakfa</option>
                    <option value="EEK">EEK - Estonian Kroon</option>
                    <option value="ETB">ETB - Ethiopian Birr</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="FKP">FKP - Falkland Islands Pound</option>
                    <option value="FJD">FJD - Fijian Dollar</option>
                    <option value="GMD">GMD - Gambian Dalasi</option>
                    <option value="GEL">GEL - Georgian Lari</option>
                    <option value="DEM">DEM - German Mark</option>
                    <option value="GHS">GHS - Ghanaian Cedi</option>
                    <option value="GIP">GIP - Gibraltar Pound</option>
                    <option value="GRD">GRD - Greek Drachma</option>
                    <option value="GTQ">GTQ - Guatemalan Quetzal</option>
                    <option value="GNF">GNF - Guinean Franc</option>
                    <option value="GYD">GYD - Guyanaese Dollar</option>
                    <option value="HTG">HTG - Haitian Gourde</option>
                    <option value="HNL">HNL - Honduran Lempira</option>
                    <option value="HKD">HKD - Hong Kong Dollar</option>
                    <option value="HUF">HUF - Hungarian Forint</option>
                    <option value="ISK">ISK - Icelandic Króna</option>
                    <option value="INR">INR - Indian Rupee</option>
                    <option value="IDR">IDR - Indonesian Rupiah</option>
                    <option value="IRR">IRR - Iranian Rial</option>
                    <option value="IQD">IQD - Iraqi Dinar</option>
                    <option value="ILS">ILS - Israeli New Sheqel</option>
                    <option value="ITL">ITL - Italian Lira</option>
                    <option value="JMD">JMD - Jamaican Dollar</option>
                    <option value="JPY">JPY - Japanese Yen</option>
                    <option value="JOD">JOD - Jordanian Dinar</option>
                    <option value="KZT">KZT - Kazakhstani Tenge</option>
                    <option value="KES">KES - Kenyan Shilling</option>
                    <option value="KWD">KWD - Kuwaiti Dinar</option>
                    <option value="KGS">KGS - Kyrgystani Som</option>
                    <option value="LAK">LAK - Laotian Kip</option>
                    <option value="LVL">LVL - Latvian Lats</option>
                    <option value="LBP">LBP - Lebanese Pound</option>
                    <option value="LSL">LSL - Lesotho Loti</option>
                    <option value="LRD">LRD - Liberian Dollar</option>
                    <option value="LYD">LYD - Libyan Dinar</option>
                    <option value="LTL">LTL - Lithuanian Litas</option>
                    <option value="MOP">MOP - Macanese Pataca</option>
                    <option value="MKD">MKD - Macedonian Denar</option>
                    <option value="MGA">MGA - Malagasy Ariary</option>
                    <option value="MWK">MWK - Malawian Kwacha</option>
                    <option value="MYR">MYR - Malaysian Ringgit</option>
                    <option value="MVR">MVR - Maldivian Rufiyaa</option>
                    <option value="MRO">MRO - Mauritanian Ouguiya</option>
                    <option value="MUR">MUR - Mauritian Rupee</option>
                    <option value="MXN">MXN - Mexican Peso</option>
                    <option value="MDL">MDL - Moldovan Leu</option>
                    <option value="MNT">MNT - Mongolian Tugrik</option>
                    <option value="MAD">MAD - Moroccan Dirham</option>
                    <option value="MZM">MZM - Mozambican Metical</option>
                    <option value="MMK">MMK - Myanmar Kyat</option>
                    <option value="NAD">NAD - Namibian Dollar</option>
                    <option value="NPR">NPR - Nepalese Rupee</option>
                    <option value="ANG">ANG - Netherlands Antillean Guilder</option>
                    <option value="TWD">TWD - New Taiwan Dollar</option>
                    <option value="NZD">NZD - New Zealand Dollar</option>
                    <option value="NIO">NIO - Nicaraguan Córdoba</option>
                    <option value="NGN">NGN - Nigerian Naira</option>
                    <option value="KPW">KPW - North Korean Won</option>
                    <option value="NOK">NOK - Norwegian Krone</option>
                    <option value="OMR">OMR - Omani Rial</option>
                    <option value="PKR">PKR - Pakistani Rupee</option>
                    <option value="PAB">PAB - Panamanian Balboa</option>
                    <option value="PGK">PGK - Papua New Guinean Kina</option>
                    <option value="PYG">PYG - Paraguayan Guarani</option>
                    <option value="PEN">PEN - Peruvian Nuevo Sol</option>
                    <option value="PHP">PHP - Philippine Peso</option>
                    <option value="PLN">PLN - Polish Zloty</option>
                    <option value="QAR">QAR - Qatari Rial</option>
                    <option value="RON">RON - Romanian Leu</option>
                    <option value="RUB">RUB - Russian Ruble</option>
                    <option value="RWF">RWF - Rwandan Franc</option>
                    <option value="SVC">SVC - Salvadoran Colón</option>
                    <option value="WST">WST - Samoan Tala</option>
                    <option value="SAR">SAR - Saudi Riyal</option>
                    <option value="RSD">RSD - Serbian Dinar</option>
                    <option value="SCR">SCR - Seychellois Rupee</option>
                    <option value="SLL">SLL - Sierra Leonean Leone</option>
                    <option value="SGD">SGD - Singapore Dollar</option>
                    <option value="SKK">SKK - Slovak Koruna</option>
                    <option value="SBD">SBD - Solomon Islands Dollar</option>
                    <option value="SOS">SOS - Somali Shilling</option>
                    <option value="ZAR">ZAR - South African Rand</option>
                    <option value="KRW">KRW - South Korean Won</option>
                    <option value="XDR">XDR - Special Drawing Rights</option>
                    <option value="LKR">LKR - Sri Lankan Rupee</option>
                    <option value="SHP">SHP - St. Helena Pound</option>
                    <option value="SDG">SDG - Sudanese Pound</option>
                    <option value="SRD">SRD - Surinamese Dollar</option>
                    <option value="SZL">SZL - Swazi Lilangeni</option>
                    <option value="SEK">SEK - Swedish Krona</option>
                    <option value="CHF">CHF - Swiss Franc</option>
                    <option value="SYP">SYP - Syrian Pound</option>
                    <option value="STD">STD - S�o Tom� and Pr�ncipe Dobra</option>
                    <option value="TJS">TJS - Tajikistani Somoni</option>
                    <option value="TZS">TZS - Tanzanian Shilling</option>
                    <option value="THB">THB - Thai Baht</option>
                    <option value="TOP">TOP - Tongan pa'anga</option>
                    <option value="TTD">TTD - Trinidad & Tobago Dollar</option>
                    <option value="TND">TND - Tunisian Dinar</option>
                    <option value="TRY">TRY - Turkish Lira</option>
                    <option value="TMT">TMT - Turkmenistani Manat</option>
                    <option value="UGX">UGX - Ugandan Shilling</option>
                    <option value="UAH">UAH - Ukrainian Hryvnia</option>
                    <option value="AED">AED - United Arab Emirates Dirham</option>
                    <option value="UYU">UYU - Uruguayan Peso</option>
                    <option value="USD">USD - US Dollar</option>
                    <option value="UZS">UZS - Uzbekistan Som</option>
                    <option value="VUV">VUV - Vanuatu Vatu</option>
                    <option value="VEF">VEF - Venezuelan Bolívar</option>
                    <option value="VND">VND - Vietnamese Dong</option>
                    <option value="YER">YER - Yemeni Rial</option>
                    <option value="ZMK">ZMK - Zambian Kwacha</option>
                </select>
                
                <label htmlFor="fromcur" className="labell">From</label>
                <select id="fromcur" value={cur1.from} className="ip" name="from" onChange={hC}>
                    <option >Select</option>
                    <option value="AFN">AFN - Afghan Afghani</option>
                    <option value="ALL">ALL - Albanian Lek</option>
                    <option value="DZD">DZD - Algerian Dinar</option>
                    <option value="AOA">AOA - Angolan Kwanza</option>
                    <option value="ARS">ARS - Argentine Peso</option>
                    <option value="AMD">AMD - Armenian Dram</option>
                    <option value="AWG">AWG - Aruban Florin</option>
                    <option value="AUD">AUD - Australian Dollar</option>
                    <option value="AZN">AZN - Azerbaijani Manat</option>
                    <option value="BSD">BSD - Bahamian Dollar</option>
                    <option value="BHD">BHD - Bahraini Dinar</option>
                    <option value="BDT">BDT - Bangladeshi Taka</option>
                    <option value="BBD">BBD - Barbadian Dollar</option>
                    <option value="BYR">BYR - Belarusian Ruble</option>
                    <option value="BEF">BEF - Belgian Franc</option>
                    <option value="BZD">BZD - Belize Dollar</option>
                    <option value="BMD">BMD - Bermudan Dollar</option>
                    <option value="BTN">BTN - Bhutanese Ngultrum</option>
                    <option value="BTC">BTC - Bitcoin</option>
                    <option value="BOB">BOB - Bolivian Boliviano</option>
                    <option value="BAM">BAM - Bosnia-Herzegovina Convertible Mark</option>
                    <option value="BWP">BWP - Botswanan Pula</option>
                    <option value="BRL">BRL - Brazilian Real</option>
                    <option value="GBP">GBP - British Pound Sterling</option>
                    <option value="BND">BND - Brunei Dollar</option>
                    <option value="BGN">BGN - Bulgarian Lev</option>
                    <option value="BIF">BIF - Burundian Franc</option>
                    <option value="KHR">KHR - Cambodian Riel</option>
                    <option value="CAD">CAD - Canadian Dollar</option>
                    <option value="CVE">CVE - Cape Verdean Escudo</option>
                    <option value="KYD">KYD - Cayman Islands Dollar</option>
                    <option value="XOF">XOF - CFA Franc BCEAO</option>
                    <option value="XAF">XAF - CFA Franc BEAC</option>
                    <option value="XPF">XPF - CFP Franc</option>
                    <option value="CLP">CLP - Chilean Peso</option>
                    <option value="CNY">CNY - Chinese Yuan</option>
                    <option value="COP">COP - Colombian Peso</option>
                    <option value="KMF">KMF - Comorian Franc</option>
                    <option value="CDF">CDF - Congolese Franc</option>
                    <option value="CRC">CRC - Costa Rican Colón</option>
                    <option value="HRK">HRK - Croatian Kuna</option>
                    <option value="CUC">CUC - Cuban Convertible Peso</option>
                    <option value="CZK">CZK - Czech Republic Koruna</option>
                    <option value="DKK">DKK - Danish Krone</option>
                    <option value="DJF">DJF - Djiboutian Franc</option>
                    <option value="DOP">DOP - Dominican Peso</option>
                    <option value="XCD">XCD - East Caribbean Dollar</option>
                    <option value="EGP">EGP - Egyptian Pound</option>
                    <option value="ERN">ERN - Eritrean Nakfa</option>
                    <option value="EEK">EEK - Estonian Kroon</option>
                    <option value="ETB">ETB - Ethiopian Birr</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="FKP">FKP - Falkland Islands Pound</option>
                    <option value="FJD">FJD - Fijian Dollar</option>
                    <option value="GMD">GMD - Gambian Dalasi</option>
                    <option value="GEL">GEL - Georgian Lari</option>
                    <option value="DEM">DEM - German Mark</option>
                    <option value="GHS">GHS - Ghanaian Cedi</option>
                    <option value="GIP">GIP - Gibraltar Pound</option>
                    <option value="GRD">GRD - Greek Drachma</option>
                    <option value="GTQ">GTQ - Guatemalan Quetzal</option>
                    <option value="GNF">GNF - Guinean Franc</option>
                    <option value="GYD">GYD - Guyanaese Dollar</option>
                    <option value="HTG">HTG - Haitian Gourde</option>
                    <option value="HNL">HNL - Honduran Lempira</option>
                    <option value="HKD">HKD - Hong Kong Dollar</option>
                    <option value="HUF">HUF - Hungarian Forint</option>
                    <option value="ISK">ISK - Icelandic Króna</option>
                    <option value="INR">INR - Indian Rupee</option>
                    <option value="IDR">IDR - Indonesian Rupiah</option>
                    <option value="IRR">IRR - Iranian Rial</option>
                    <option value="IQD">IQD - Iraqi Dinar</option>
                    <option value="ILS">ILS - Israeli New Sheqel</option>
                    <option value="ITL">ITL - Italian Lira</option>
                    <option value="JMD">JMD - Jamaican Dollar</option>
                    <option value="JPY">JPY - Japanese Yen</option>
                    <option value="JOD">JOD - Jordanian Dinar</option>
                    <option value="KZT">KZT - Kazakhstani Tenge</option>
                    <option value="KES">KES - Kenyan Shilling</option>
                    <option value="KWD">KWD - Kuwaiti Dinar</option>
                    <option value="KGS">KGS - Kyrgystani Som</option>
                    <option value="LAK">LAK - Laotian Kip</option>
                    <option value="LVL">LVL - Latvian Lats</option>
                    <option value="LBP">LBP - Lebanese Pound</option>
                    <option value="LSL">LSL - Lesotho Loti</option>
                    <option value="LRD">LRD - Liberian Dollar</option>
                    <option value="LYD">LYD - Libyan Dinar</option>
                    <option value="LTL">LTL - Lithuanian Litas</option>
                    <option value="MOP">MOP - Macanese Pataca</option>
                    <option value="MKD">MKD - Macedonian Denar</option>
                    <option value="MGA">MGA - Malagasy Ariary</option>
                    <option value="MWK">MWK - Malawian Kwacha</option>
                    <option value="MYR">MYR - Malaysian Ringgit</option>
                    <option value="MVR">MVR - Maldivian Rufiyaa</option>
                    <option value="MRO">MRO - Mauritanian Ouguiya</option>
                    <option value="MUR">MUR - Mauritian Rupee</option>
                    <option value="MXN">MXN - Mexican Peso</option>
                    <option value="MDL">MDL - Moldovan Leu</option>
                    <option value="MNT">MNT - Mongolian Tugrik</option>
                    <option value="MAD">MAD - Moroccan Dirham</option>
                    <option value="MZM">MZM - Mozambican Metical</option>
                    <option value="MMK">MMK - Myanmar Kyat</option>
                    <option value="NAD">NAD - Namibian Dollar</option>
                    <option value="NPR">NPR - Nepalese Rupee</option>
                    <option value="ANG">ANG - Netherlands Antillean Guilder</option>
                    <option value="TWD">TWD - New Taiwan Dollar</option>
                    <option value="NZD">NZD - New Zealand Dollar</option>
                    <option value="NIO">NIO - Nicaraguan Córdoba</option>
                    <option value="NGN">NGN - Nigerian Naira</option>
                    <option value="KPW">KPW - North Korean Won</option>
                    <option value="NOK">NOK - Norwegian Krone</option>
                    <option value="OMR">OMR - Omani Rial</option>
                    <option value="PKR">PKR - Pakistani Rupee</option>
                    <option value="PAB">PAB - Panamanian Balboa</option>
                    <option value="PGK">PGK - Papua New Guinean Kina</option>
                    <option value="PYG">PYG - Paraguayan Guarani</option>
                    <option value="PEN">PEN - Peruvian Nuevo Sol</option>
                    <option value="PHP">PHP - Philippine Peso</option>
                    <option value="PLN">PLN - Polish Zloty</option>
                    <option value="QAR">QAR - Qatari Rial</option>
                    <option value="RON">RON - Romanian Leu</option>
                    <option value="RUB">RUB - Russian Ruble</option>
                    <option value="RWF">RWF - Rwandan Franc</option>
                    <option value="SVC">SVC - Salvadoran Colón</option>
                    <option value="WST">WST - Samoan Tala</option>
                    <option value="SAR">SAR - Saudi Riyal</option>
                    <option value="RSD">RSD - Serbian Dinar</option>
                    <option value="SCR">SCR - Seychellois Rupee</option>
                    <option value="SLL">SLL - Sierra Leonean Leone</option>
                    <option value="SGD">SGD - Singapore Dollar</option>
                    <option value="SKK">SKK - Slovak Koruna</option>
                    <option value="SBD">SBD - Solomon Islands Dollar</option>
                    <option value="SOS">SOS - Somali Shilling</option>
                    <option value="ZAR">ZAR - South African Rand</option>
                    <option value="KRW">KRW - South Korean Won</option>
                    <option value="XDR">XDR - Special Drawing Rights</option>
                    <option value="LKR">LKR - Sri Lankan Rupee</option>
                    <option value="SHP">SHP - St. Helena Pound</option>
                    <option value="SDG">SDG - Sudanese Pound</option>
                    <option value="SRD">SRD - Surinamese Dollar</option>
                    <option value="SZL">SZL - Swazi Lilangeni</option>
                    <option value="SEK">SEK - Swedish Krona</option>
                    <option value="CHF">CHF - Swiss Franc</option>
                    <option value="SYP">SYP - Syrian Pound</option>
                    <option value="STD">STD - S�o Tom� and Pr�ncipe Dobra</option>
                    <option value="TJS">TJS - Tajikistani Somoni</option>
                    <option value="TZS">TZS - Tanzanian Shilling</option>
                    <option value="THB">THB - Thai Baht</option>
                    <option value="TOP">TOP - Tongan pa'anga</option>
                    <option value="TTD">TTD - Trinidad & Tobago Dollar</option>
                    <option value="TND">TND - Tunisian Dinar</option>
                    <option value="TRY">TRY - Turkish Lira</option>
                    <option value="TMT">TMT - Turkmenistani Manat</option>
                    <option value="UGX">UGX - Ugandan Shilling</option>
                    <option value="UAH">UAH - Ukrainian Hryvnia</option>
                    <option value="AED">AED - United Arab Emirates Dirham</option>
                    <option value="UYU">UYU - Uruguayan Peso</option>
                    <option value="USD">USD - US Dollar</option>
                    <option value="UZS">UZS - Uzbekistan Som</option>
                    <option value="VUV">VUV - Vanuatu Vatu</option>
                    <option value="VEF">VEF - Venezuelan Bolívar</option>
                    <option value="VND">VND - Vietnamese Dong</option>
                    <option value="YER">YER - Yemeni Rial</option>
                    <option value="ZMK">ZMK - Zambian Kwacha</option>
                </select>
                
                <input id="amti" className="ipamt" type="numeric" placeholder="Amount" name="amt" onChange={hC} onKeyPress={
                    event => {
                        if (event.key === 'Enter') {
                            { show() }
                        }
                    }
                } />
                
                <button onClick={show} className="buttoncur" >></button>
            </div>
            <div className="resultarea">
                <div id="datArea" className='datArea'>
                </div>
            </div>

            
        </div>
    )
}